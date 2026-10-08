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
}

export const BLOG_POST_ROUTES: BlogPostRoute[] = [
  { slug: "/blog/investing/types-of-real-estate-property", category: "Investing", categorySlug: "investing", datePublished: "2026-02-13" },
  { slug: "/blog/investing/brrrr-method-real-estate", category: "Investing", categorySlug: "investing", datePublished: "2026-02-13" },
  { slug: "/blog/investing/first-rental-property", category: "Investing", categorySlug: "investing", datePublished: "2026-02-13" },
  { slug: "/blog/financing/hard-money-lender", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { slug: "/blog/financing/private-money-lender", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { slug: "/blog/property-management/find-tenant-rental-property", category: "Property Management", categorySlug: "property-management", datePublished: "2026-02-13" },
  { slug: "/blog/financing/cash-out-refinance", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { slug: "/blog/financing/types-of-refinance", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { slug: "/blog/real-estate-careers/real-estate-agent-realtor-broker", category: "Careers", categorySlug: "real-estate-careers", datePublished: "2026-02-13" },
  { slug: "/blog/real-estate-business/lead-managers-real-estate", category: "Business", categorySlug: "real-estate-business", datePublished: "2026-02-13" },
  { slug: "/blog/real-estate-business/acquisitions-manager-real-estate", category: "Business", categorySlug: "real-estate-business", datePublished: "2026-02-13" },
  { slug: "/blog/investing/house-flipping", category: "Investing", categorySlug: "investing", datePublished: "2026-02-13" },
  { slug: "/blog/property-management/rental-property-expenses", category: "Property Management", categorySlug: "property-management", datePublished: "2026-02-13" },
  { slug: "/blog/financing/mortgage-loans-first-time-homebuyers", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { slug: "/blog/wholesaling/real-estate-wholesaling-explained", category: "Wholesaling", categorySlug: "wholesaling", datePublished: "2026-02-13" },
  { slug: "/blog/real-estate-careers/become-realtor-broker", category: "Careers", categorySlug: "real-estate-careers", datePublished: "2026-02-13" },
  { slug: "/blog/property-management/property-management-companies", category: "Property Management", categorySlug: "property-management", datePublished: "2026-02-13" },
  { slug: "/blog/real-estate-business/bookkeepers-real-estate", category: "Business", categorySlug: "real-estate-business", datePublished: "2026-02-13" },
  { slug: "/blog/financing/mip-vs-pmi-explained", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { slug: "/blog/real-estate-business/lead-management-tools", category: "Business", categorySlug: "real-estate-business", datePublished: "2026-02-13" },
  { slug: "/blog/financing/subject-to-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { slug: "/blog/financing/seller-financing-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { slug: "/blog/financing/lease-option-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { slug: "/blog/financing/assumable-mortgage", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { slug: "/blog/financing/blanket-mortgage", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { slug: "/blog/financing/heloc-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { slug: "/blog/financing/bridge-loan-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { slug: "/blog/financing/self-directed-ira-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-02-13" },
  { slug: "/blog/property-management/tenant-not-paying-rent", category: "Property Management", categorySlug: "property-management", datePublished: "2026-02-13" },
  { slug: "/blog/property-management/eviction-process-landlord", category: "Property Management", categorySlug: "property-management", datePublished: "2026-02-13" },
  { slug: "/blog/financing/1031-exchange-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-03-16" },
  { slug: "/blog/financing/construction-loan-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-03-16" },
  { slug: "/blog/financing/dscr-loan-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-03-16" },
  { slug: "/blog/financing/how-to-refinance-rental-property", category: "Financing", categorySlug: "financing", datePublished: "2026-03-16" },
  { slug: "/blog/financing/portfolio-loan-real-estate", category: "Financing", categorySlug: "financing", datePublished: "2026-03-16" },
  { slug: "/blog/financing/wraparound-mortgage", category: "Financing", categorySlug: "financing", datePublished: "2026-03-16" },
  { slug: "/blog/investing/cap-rate-vs-cash-on-cash", category: "Investing", categorySlug: "investing", datePublished: "2026-03-16" },
  { slug: "/blog/investing/fix-and-flip-vs-buy-and-hold", category: "Investing", categorySlug: "investing", datePublished: "2026-03-16" },
  { slug: "/blog/investing/how-to-analyze-rental-property", category: "Investing", categorySlug: "investing", datePublished: "2026-03-16" },
  { slug: "/blog/investing/short-term-rental-investing", category: "Investing", categorySlug: "investing", datePublished: "2026-03-16" },
  { slug: "/blog/property-management/how-to-write-lease-agreement", category: "Property Management", categorySlug: "property-management", datePublished: "2026-03-16" },
  { slug: "/blog/property-management/normal-wear-and-tear", category: "Property Management", categorySlug: "property-management", datePublished: "2026-03-16" },
  { slug: "/blog/property-management/security-deposit-rules-landlord", category: "Property Management", categorySlug: "property-management", datePublished: "2026-03-16" },
  { slug: "/blog/wholesaling/cash-buyers-list-real-estate", category: "Wholesaling", categorySlug: "wholesaling", datePublished: "2026-03-16" },
  { slug: "/blog/wholesaling/double-closing-real-estate", category: "Wholesaling", categorySlug: "wholesaling", datePublished: "2026-03-16" },
  { slug: "/blog/wholesaling/how-to-find-motivated-sellers", category: "Wholesaling", categorySlug: "wholesaling", datePublished: "2026-03-16" },

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
];
