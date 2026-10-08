// Prerenders every real route to static HTML after `vite build`.
//
// This is a pure client-rendered React app (react-helmet-async sets
// title/meta/JSON-LD at runtime, in the browser). The HTML Vite outputs is
// just an empty <div id="root"> and a script tag -- fine for a browser, but
// it means the very first fetch a search crawler or a social-media link
// unfurler makes returns no page-specific title, no meta description, no
// content, and no structured data. Google can still execute the JS on a
// second pass, but that's slower, not guaranteed for every URL, and
// explains exactly the "Google shows the bare domain as the title" symptom
// that prompted this audit -- the classic organic snippet was reading a
// stale/JS-less crawl.
//
// This script serves the built dist/ folder locally, visits every route in
// a real headless browser, waits for react-helmet-async + the route's data
// to render, and overwrites dist/<route>/index.html with the fully-rendered
// DOM (including the live <script src> tags) -- so the exact same file
// serves a complete page to a crawler AND still hydrates into a normal SPA
// for real visitors clicking around. Routes come from the same data files
// the sitemap is generated from, so this can't drift from the real app
// either.
import { chromium } from "playwright";
import { createServer } from "http";
import { createReadStream, existsSync, mkdirSync, writeFileSync, statSync } from "fs";
import { extname, join, dirname } from "path";
import { fileURLToPath } from "url";

import { BLOG_POST_ROUTES } from "../src/data/blogPostRoutes.ts";
import { stateLicenseData } from "../src/data/stateLicenseData.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "../dist");
const PORT = 8731;

const CATEGORY_SLUGS = ["financing", "investing", "property-management", "wholesaling", "real-estate-careers", "real-estate-business"];

const STATIC_ROUTES = [
  "/", "/start-here", "/about", "/author", "/contact", "/blog",
  "/real-estate-investing",
  "/real-estate-investing/rental-property-investing",
  "/real-estate-investing/brrrr-strategy",
  "/real-estate-investing/funding-financing",
  "/real-estate-investing/cash-flow-roi",
  "/real-estate-wholesaling",
  "/real-estate-wholesaling/how-wholesaling-works",
  "/real-estate-wholesaling/finding-motivated-sellers",
  "/real-estate-wholesaling/dispositions-acquisitions",
  "/real-estate-wholesaling/contracts-assignment-fees",
  "/real-estate-marketing",
  "/real-estate-marketing/lead-generation",
  "/real-estate-marketing/facebook-google-ads",
  "/real-estate-marketing/cold-calling-sms",
  "/real-estate-marketing/crm-automation",
  "/real-estate-license",
  "/privacy-policy", "/terms-of-service", "/disclaimer", "/cookie-policy",
];

function buildRouteList() {
  const routes = [...STATIC_ROUTES];
  for (const slug of CATEGORY_SLUGS) routes.push(`/blog/${slug}`);
  for (const post of BLOG_POST_ROUTES) routes.push(post.slug);
  for (const stateSlug of Object.keys(stateLicenseData)) routes.push(`/real-estate-license/${stateSlug}`);
  return routes;
}

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript",
  ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".ico": "image/x-icon", ".webp": "image/webp", ".woff": "font/woff",
  ".woff2": "font/woff2", ".xml": "application/xml", ".txt": "text/plain",
};

// Minimal static file server with SPA fallback to index.html -- mirrors how
// Vercel serves this app in production for any route we haven't prerendered
// yet during this same run, which is what lets the router resolve each path
// with real content before we read the rendered DOM back out.
function startServer() {
  const server = createServer((req, res) => {
    const urlPath = req.url.split("?")[0];
    let filePath = join(DIST, decodeURIComponent(urlPath));
    if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
      filePath = join(DIST, "index.html");
    }
    res.setHeader("Content-Type", MIME[extname(filePath)] || "application/octet-stream");
    createReadStream(filePath).pipe(res);
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

// index.html has its own static <meta description>/<link canonical>/<meta
// robots> as a fallback for clients that never run JS. react-helmet-async
// has no knowledge of those pre-existing tags, so it appends its own
// page-specific versions alongside them instead of replacing them -- on
// every page that isn't the homepage this leaves two different
// descriptions/canonicals in the document, and on /404 it leaves both
// "index, follow" (the static default) and "noindex, nofollow" (the real
// one) robots directives present at once. Since we're about to freeze
// this DOM as the literal served file, collapse each duplicated tag down
// to its last occurrence -- document order is static-template-tag first,
// Helmet-injected tag second, so the last one is always the correct,
// page-specific one.
async function dedupeHead(page) {
  await page.evaluate(() => {
    const selectors = [
      'meta[name="description"]',
      'meta[name="robots"]',
      'meta[property="og:title"]',
      'meta[property="og:description"]',
      'meta[property="og:type"]',
      'meta[property="og:url"]',
      'meta[name="twitter:title"]',
      'meta[name="twitter:description"]',
      'link[rel="canonical"]',
    ];
    for (const sel of selectors) {
      const els = Array.from(document.querySelectorAll(sel));
      for (const el of els.slice(0, -1)) el.remove();
    }
  });
}

async function prerenderRoute(page, route) {
  const url = `http://localhost:${PORT}${route}`;
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  // react-helmet-async updates <title>/<meta> after the route's effects run;
  // networkidle alone can land a beat early on routes with no network calls.
  await page.waitForFunction(
    () => document.title && document.title !== "Home Nexio | Real Estate Education & Licensing" || document.querySelector('meta[property="og:type"]'),
    { timeout: 5000 }
  ).catch(() => {});
  await page.waitForTimeout(150);
  await dedupeHead(page);
  const html = await page.content();

  const outDir = route === "/" ? DIST : join(DIST, route.replace(/^\//, ""));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), `<!doctype html>\n${html}`, "utf8");
}

async function main() {
  if (!existsSync(join(DIST, "index.html"))) {
    console.error("dist/index.html not found -- run `vite build` first.");
    process.exit(1);
  }

  const routes = buildRouteList();
  const server = await startServer();
  // PW_CHROMIUM_PATH lets a sandboxed dev environment with a pre-cached
  // browser binary (no general internet access to download one) point at
  // it explicitly. Everywhere else -- CI, local dev with `playwright
  // install` run -- omitting executablePath lets Playwright resolve its
  // normal managed browser. A previous version hardcoded this sandbox's
  // path directly, which made it into a commit and broke every Vercel
  // build (`executable doesn't exist at /opt/pw-browsers/...`) since that
  // path only ever existed in this one sandbox.
  const browser = await chromium.launch(
    process.env.PW_CHROMIUM_PATH ? { executablePath: process.env.PW_CHROMIUM_PATH } : {}
  );
  const page = await browser.newPage();

  console.log(`Prerendering ${routes.length} routes...`);
  let done = 0;
  for (const route of routes) {
    try {
      await prerenderRoute(page, route);
    } catch (err) {
      console.error(`  FAILED ${route}: ${err.message}`);
    }
    done += 1;
    if (done % 20 === 0) console.log(`  ${done}/${routes.length}`);
  }

  // A real 404.html at the output root -- Vercel (and most static hosts)
  // automatically serves this with an actual 404 status for any unmatched
  // path, instead of silently 200-ing the SPA shell for a URL that doesn't
  // exist.
  await page.goto(`http://localhost:${PORT}/__prerender-404-check__`, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(150);
  await dedupeHead(page);
  writeFileSync(join(DIST, "404.html"), `<!doctype html>\n${await page.content()}`, "utf8");

  await browser.close();
  server.close();
  console.log(`Done. Prerendered ${routes.length} routes + 404.html.`);
}

main();
