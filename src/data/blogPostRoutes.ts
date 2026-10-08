// Pure routing/metadata for every blog post -- no image imports, so this file
// can be imported from plain Node scripts (sitemap generation, prerendering)
// without pulling in Vite's asset-handling pipeline. blogPosts.ts imports this
// and merges in the presentation fields (title, excerpt, image, alt) that do
// need Vite to resolve.
export interface BlogPostRoute {
  /** Full path, e.g. "/blog/financing/hard-money-lender" */
  slug: string;
  category: "Financing" | "Investing" | "Property Management" | "Wholesaling" | "Careers" | "Business";
  categorySlug: string;
  datePublished: string;
  /**
   * True for the site's original 46 posts -- the knowledge foundation for
   * each category. Blog.tsx and BlogCategoryPage.tsx always render
   * foundation posts first within their list, with a divider before any
   * newer posts, regardless of category filter or publish date.
   */
  foundation?: boolean;
}

export const BLOG_POST_ROUTES: BlogPostRoute[] = [
  { foundation: true, slug: "/blog/investing/types-of-real-estate-property", category: "Investing", categorySlug: "investing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/investing/brrrr-method-real-estate", category: "Investing", categorySlug: "investing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/investing/first-rental-property", category: "Investing", categorySlug: "investing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/hard-money-lender", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/private-money-lender", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/property-management/find-tenant-rental-property", category: "Property Management", categorySlug: "property-management", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/cash-out-refinance", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/types-of-refinance", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/real-estate-careers/real-estate-agent-realtor-broker", category: "Careers", categorySlug: "real-estate-careers", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/real-estate-business/lead-managers-real-estate", category: "Business", categorySlug: "real-estate-business", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/real-estate-business/acquisitions-manager-real-estate", category: "Business", categorySlug: "real-estate-business", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/investing/house-flipping", category: "Investing", categorySlug: "investing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/property-management/rental-property-expenses", category: "Property Management", categorySlug: "property-management", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/mortgage-loans-first-time-homebuyers", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/wholesaling/real-estate-wholesaling-explained", category: "Wholesaling", categorySlug: "wholesaling", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/real-estate-careers/become-realtor-broker", category: "Careers", categorySlug: "real-estate-careers", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/property-management/property-management-companies", category: "Property Management", categorySlug: "property-management", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/real-estate-business/bookkeepers-real-estate", category: "Business", categorySlug: "real-estate-business", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/mip-vs-pmi-explained", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/real-estate-business/lead-management-tools", category: "Business", categorySlug: "real-estate-business", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/subject-to-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/seller-financing-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/lease-option-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/assumable-mortgage", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/blanket-mortgage", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/heloc-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/bridge-loan-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/self-directed-ira-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/property-management/tenant-not-paying-rent", category: "Property Management", categorySlug: "property-management", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/property-management/eviction-process-landlord", category: "Property Management", categorySlug: "property-management", datePublished: "2026-02-13" },
  { foundation: true, slug: "/blog/financing/1031-exchange-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/financing/construction-loan-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/financing/dscr-loan-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/financing/how-to-refinance-rental-property", category: "Financing", categorySlug: "financing", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/financing/portfolio-loan-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/financing/wraparound-mortgage", category: "Financing", categorySlug: "financing", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/investing/cap-rate-vs-cash-on-cash", category: "Investing", categorySlug: "investing", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/investing/fix-and-flip-vs-buy-and-hold", category: "Investing", categorySlug: "investing", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/investing/how-to-analyze-rental-property", category: "Investing", categorySlug: "investing", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/investing/short-term-rental-investing", category: "Investing", categorySlug: "investing", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/property-management/how-to-write-lease-agreement", category: "Property Management", categorySlug: "property-management", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/property-management/normal-wear-and-tear", category: "Property Management", categorySlug: "property-management", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/property-management/security-deposit-rules-landlord", category: "Property Management", categorySlug: "property-management", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/wholesaling/cash-buyers-list-real-estate", category: "Wholesaling", categorySlug: "wholesaling", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/wholesaling/double-closing-real-estate", category: "Wholesaling", categorySlug: "wholesaling", datePublished: "2026-03-16" },
  { foundation: true, slug: "/blog/wholesaling/how-to-find-motivated-sellers", category: "Wholesaling", categorySlug: "wholesaling", datePublished: "2026-03-16" },

  // ── October 2026 batch: fills gaps in high-search-volume topics the site's ──
  // ── scope implies but didn't yet cover (FHA loans, agent income, LLCs...) ──
  { slug: "/blog/financing/fha-loan-requirements", category: "Financing", categorySlug: "financing", datePublished: "2026-10-08" },
  { slug: "/blog/financing/cash-out-refinance-vs-heloc", category: "Financing", categorySlug: "financing", datePublished: "2026-10-08" },
  { slug: "/blog/financing/credit-score-investment-property", category: "Financing", categorySlug: "financing", datePublished: "2026-10-08" },
  { slug: "/blog/investing/how-to-invest-no-money", category: "Investing", categorySlug: "investing", datePublished: "2026-10-08" },
  { slug: "/blog/investing/one-percent-rule-real-estate", category: "Investing", categorySlug: "investing", datePublished: "2026-10-08" },
  { slug: "/blog/investing/reits-vs-direct-investing", category: "Investing", categorySlug: "investing", datePublished: "2026-10-08" },
  { slug: "/blog/property-management/rental-inspection-checklist", category: "Property Management", categorySlug: "property-management", datePublished: "2026-10-08" },
  { slug: "/blog/property-management/how-to-raise-rent-legally", category: "Property Management", categorySlug: "property-management", datePublished: "2026-10-08" },
  { slug: "/blog/property-management/landlord-insurance-explained", category: "Property Management", categorySlug: "property-management", datePublished: "2026-10-08" },
  { slug: "/blog/wholesaling/is-wholesaling-legal", category: "Wholesaling", categorySlug: "wholesaling", datePublished: "2026-10-08" },
  { slug: "/blog/wholesaling/assignment-of-contract", category: "Wholesaling", categorySlug: "wholesaling", datePublished: "2026-10-08" },
  { slug: "/blog/wholesaling/how-much-wholesalers-make", category: "Wholesaling", categorySlug: "wholesaling", datePublished: "2026-10-08" },
  { slug: "/blog/real-estate-careers/how-much-agents-make", category: "Careers", categorySlug: "real-estate-careers", datePublished: "2026-10-08" },
  { slug: "/blog/real-estate-careers/license-reciprocity", category: "Careers", categorySlug: "real-estate-careers", datePublished: "2026-10-08" },
  { slug: "/blog/real-estate-careers/become-property-manager", category: "Careers", categorySlug: "real-estate-careers", datePublished: "2026-10-08" },
  { slug: "/blog/real-estate-business/llc-for-real-estate", category: "Business", categorySlug: "real-estate-business", datePublished: "2026-10-08" },
  { slug: "/blog/real-estate-business/direct-mail-marketing", category: "Business", categorySlug: "real-estate-business", datePublished: "2026-10-08" },
  { slug: "/blog/real-estate-business/virtual-assistants-real-estate", category: "Business", categorySlug: "real-estate-business", datePublished: "2026-10-08" },

  // ── City-targeted guides: short-term rental regulations and rent control ──
  // ── genuinely differ city by city, unlike a templated "investing in [city]" page ──
  { slug: "/blog/investing/airbnb-rules-nyc", category: "Investing", categorySlug: "investing", datePublished: "2026-10-15" },
  { slug: "/blog/investing/airbnb-rules-los-angeles", category: "Investing", categorySlug: "investing", datePublished: "2026-10-15" },
  { slug: "/blog/investing/airbnb-rules-san-francisco", category: "Investing", categorySlug: "investing", datePublished: "2026-10-15" },
  { slug: "/blog/investing/airbnb-rules-austin", category: "Investing", categorySlug: "investing", datePublished: "2026-10-15" },
  { slug: "/blog/investing/airbnb-rules-nashville", category: "Investing", categorySlug: "investing", datePublished: "2026-10-15" },
  { slug: "/blog/investing/airbnb-rules-new-orleans", category: "Investing", categorySlug: "investing", datePublished: "2026-10-15" },
  { slug: "/blog/investing/airbnb-rules-miami", category: "Investing", categorySlug: "investing", datePublished: "2026-10-15" },
  { slug: "/blog/investing/airbnb-rules-denver", category: "Investing", categorySlug: "investing", datePublished: "2026-10-15" },
  { slug: "/blog/investing/airbnb-rules-chicago", category: "Investing", categorySlug: "investing", datePublished: "2026-10-15" },
  { slug: "/blog/investing/airbnb-rules-san-diego", category: "Investing", categorySlug: "investing", datePublished: "2026-10-15" },
  { slug: "/blog/property-management/rent-control-nyc", category: "Property Management", categorySlug: "property-management", datePublished: "2026-10-15" },
  { slug: "/blog/property-management/rent-control-los-angeles", category: "Property Management", categorySlug: "property-management", datePublished: "2026-10-15" },
  { slug: "/blog/property-management/rent-control-san-francisco", category: "Property Management", categorySlug: "property-management", datePublished: "2026-10-15" },
  { slug: "/blog/property-management/rent-control-oakland", category: "Property Management", categorySlug: "property-management", datePublished: "2026-10-15" },
  { slug: "/blog/property-management/rent-control-washington-dc", category: "Property Management", categorySlug: "property-management", datePublished: "2026-10-15" },
  { slug: "/blog/property-management/rent-control-portland", category: "Property Management", categorySlug: "property-management", datePublished: "2026-10-15" },
  { slug: "/blog/investing/best-cities-real-estate-investing", category: "Investing", categorySlug: "investing", datePublished: "2026-10-15" },
];
