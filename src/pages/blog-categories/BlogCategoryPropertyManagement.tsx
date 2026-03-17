import BlogCategoryPage from "@/components/BlogCategoryPage";
import imgFindTenant from "@/assets/blog/find-tenant-rental.jpg";
import imgRentalExpenses from "@/assets/blog/rental-property-expenses.jpg";
import imgPropertyMgmt from "@/assets/blog/property-management.jpg";

const posts = [
  {
    title: "How to Find a Tenant for Your Rental Property: Proven Strategies",
    slug: "/blog/property-management/find-tenant-rental-property",
    excerpt: "Tenant selection is where landlords make or break their investment. Here's how to screen properly, what red flags to look for, and how to place a tenant who actually pays.",
    image: imgFindTenant,
    alt: "Landlord showing rental apartment to prospective tenants during property tour",
  },
  {
    title: "Monthly Rental Property Expenses Every Landlord Should Budget For",
    slug: "/blog/property-management/rental-property-expenses",
    excerpt: "Most landlords drastically underestimate their real expenses. Here's every cost category — maintenance, vacancy, insurance, management, taxes — with realistic numbers.",
    image: imgRentalExpenses,
    alt: "Rental property owner reviewing monthly expense spreadsheet with bills and calculator",
  },
  {
    title: "Property Management Companies: What They Do & Whether You Need One",
    slug: "/blog/property-management/property-management-companies",
    excerpt: "A property manager handles tenants, maintenance, and legal compliance for 8–10% of monthly rent. Here's what that actually includes and whether the cost makes sense for your portfolio.",
    image: imgPropertyMgmt,
    alt: "Property management team inspecting rental apartment with maintenance checklist",
  },
  {
    title: "Tenant Stopped Paying Rent? Here's What to Do Step by Step",
    slug: "/blog/property-management/tenant-not-paying-rent",
    excerpt: "A non-paying tenant is a legal problem as much as a cash flow problem. How you respond in the first week determines whether this resolves quickly or drags into an eviction.",
    image: imgFindTenant,
    alt: "Landlord reviewing late rent notice documents and tenant communication records",
  },
  {
    title: "The Eviction Process for Landlords: Step-by-Step Legal Guide",
    slug: "/blog/property-management/eviction-process-landlord",
    excerpt: "Eviction is a legal procedure and every state has its own version. Here's how it works from notice to sheriff enforcement — and the mistakes that get cases thrown out.",
    image: imgRentalExpenses,
    alt: "Landlord reviewing eviction process legal documents and court filing paperwork",
  },
  {
    title: "Security Deposit Rules for Landlords: Limits, Holding Requirements, and Legal Deductions",
    slug: "/blog/property-management/security-deposit-rules-landlord",
    excerpt: "State rules on security deposits are strict and specific. Learn deposit limits, holding requirements, legal deductions, timelines to return deposits, and penalties for violations.",
    image: imgFindTenant,
    alt: "Landlord reviewing security deposit rules and state law compliance checklist",
  },
];

const BlogCategoryPropertyManagement = () => (
  <BlogCategoryPage
    categorySlug="property-management"
    categoryLabel="Property Management"
    metaTitle="Property Management Guides for Landlords: Tenants, Expenses & Evictions"
    metaDesc="Practical property management guides covering tenant screening, rental expenses, working with property managers, handling non-payment, and the eviction process."
    intro="Practical guides for landlords — from finding and screening tenants to managing expenses, dealing with non-payment, and understanding the eviction process in your state."
    posts={posts}
  />
);

export default BlogCategoryPropertyManagement;
