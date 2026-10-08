// Regenerates public/sitemap.xml from the site's actual route data instead of
// a hand-maintained list. The previous hand-written sitemap had drifted badly:
// 23 blog URLs pointed at a non-existent /blog/<slug> path (missing the
// /blog/<category>/<slug> segment every real route uses), and all 43 real
// blog post URLs plus the 6 category hub pages and /author were missing
// entirely. Importing BLOG_POSTS and stateLicenseData directly means this
// can't drift from the real routes again -- run via `npm run sitemap`
// (also wired into `prebuild`).
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { BLOG_POST_ROUTES } from "../src/data/blogPostRoutes";
import { stateLicenseData } from "../src/data/stateLicenseData";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOMAIN = "https://homenexio.com";
const TODAY = new Date().toISOString().slice(0, 10);

type Entry = { path: string; changefreq: string; priority: string; lastmod?: string };

const CATEGORY_SLUGS = ["financing", "investing", "property-management", "wholesaling", "real-estate-careers", "real-estate-business"];

const STATIC_ENTRIES: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/start-here", changefreq: "monthly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/author", changefreq: "monthly", priority: "0.5" },
  { path: "/contact", changefreq: "monthly", priority: "0.6" },

  { path: "/real-estate-investing", changefreq: "monthly", priority: "0.9" },
  { path: "/real-estate-investing/rental-property-investing", changefreq: "monthly", priority: "0.8" },
  { path: "/real-estate-investing/brrrr-strategy", changefreq: "monthly", priority: "0.8" },
  { path: "/real-estate-investing/funding-financing", changefreq: "monthly", priority: "0.8" },
  { path: "/real-estate-investing/cash-flow-roi", changefreq: "monthly", priority: "0.8" },

  { path: "/real-estate-wholesaling", changefreq: "monthly", priority: "0.9" },
  { path: "/real-estate-wholesaling/how-wholesaling-works", changefreq: "monthly", priority: "0.8" },
  { path: "/real-estate-wholesaling/finding-motivated-sellers", changefreq: "monthly", priority: "0.8" },
  { path: "/real-estate-wholesaling/dispositions-acquisitions", changefreq: "monthly", priority: "0.8" },
  { path: "/real-estate-wholesaling/contracts-assignment-fees", changefreq: "monthly", priority: "0.8" },

  { path: "/real-estate-marketing", changefreq: "monthly", priority: "0.9" },
  { path: "/real-estate-marketing/lead-generation", changefreq: "monthly", priority: "0.8" },
  { path: "/real-estate-marketing/facebook-google-ads", changefreq: "monthly", priority: "0.8" },
  { path: "/real-estate-marketing/cold-calling-sms", changefreq: "monthly", priority: "0.8" },
  { path: "/real-estate-marketing/crm-automation", changefreq: "monthly", priority: "0.8" },

  { path: "/real-estate-license", changefreq: "monthly", priority: "0.9" },

  { path: "/blog", changefreq: "weekly", priority: "0.9" },

  { path: "/privacy-policy", changefreq: "yearly", priority: "0.4" },
  { path: "/terms-of-service", changefreq: "yearly", priority: "0.4" },
  { path: "/disclaimer", changefreq: "yearly", priority: "0.4" },
  { path: "/cookie-policy", changefreq: "yearly", priority: "0.4" },
];

function buildEntries(): Entry[] {
  const entries = [...STATIC_ENTRIES];

  for (const slug of CATEGORY_SLUGS) {
    entries.push({ path: `/blog/${slug}`, changefreq: "weekly", priority: "0.8" });
  }

  for (const post of BLOG_POST_ROUTES) {
    entries.push({ path: post.slug, changefreq: "monthly", priority: "0.7", lastmod: post.datePublished });
  }

  for (const slug of Object.keys(stateLicenseData)) {
    entries.push({ path: `/real-estate-license/${slug}`, changefreq: "monthly", priority: "0.8" });
  }

  return entries;
}

function toXml(entries: Entry[]): string {
  const urls = entries.map((e) => `  <url>
    <loc>${DOMAIN}${e.path}</loc>
    <lastmod>${e.lastmod ?? TODAY}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

const entries = buildEntries();
const xml = toXml(entries);
const outPath = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outPath, xml, "utf8");
console.log(`Wrote ${entries.length} URLs to ${outPath}`);
