import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import StartHere from "./pages/StartHere";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import RealEstateLicense from "./pages/RealEstateLicense";
import StateLicense from "./pages/StateLicense";
import { Investing, Wholesaling, Marketing } from "./pages/PillarPages";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

// Topic subpages - Investing
import RentalPropertyInvesting from "./pages/topics/RentalPropertyInvesting";
import BRRRRStrategy from "./pages/topics/BRRRRStrategy";
import FundingFinancing from "./pages/topics/FundingFinancing";
import CashFlowROI from "./pages/topics/CashFlowROI";

// Topic subpages - Wholesaling
import HowWholesalingWorks from "./pages/topics/HowWholesalingWorks";
import FindingMotivatedSellers from "./pages/topics/FindingMotivatedSellers";
import DispositionsAcquisitions from "./pages/topics/DispositionsAcquisitions";
import ContractsAssignmentFees from "./pages/topics/ContractsAssignmentFees";

// Topic subpages - Marketing
import LeadGeneration from "./pages/topics/LeadGeneration";
import FacebookGoogleAds from "./pages/topics/FacebookGoogleAds";
import ColdCallingSMS from "./pages/topics/ColdCallingSMS";
import CRMAutomation from "./pages/topics/CRMAutomation";

// Blog category hub pages
import BlogCategoryFinancing from "./pages/blog-categories/BlogCategoryFinancing";
import BlogCategoryInvesting from "./pages/blog-categories/BlogCategoryInvesting";
import BlogCategoryPropertyManagement from "./pages/blog-categories/BlogCategoryPropertyManagement";
import BlogCategoryWholesaling from "./pages/blog-categories/BlogCategoryWholesaling";
import BlogCategoryRealEstateCareers from "./pages/blog-categories/BlogCategoryRealEstateCareers";
import BlogCategoryRealEstateBusiness from "./pages/blog-categories/BlogCategoryRealEstateBusiness";

// Blog posts — Financing
import HardMoneyLender from "./pages/blog/HardMoneyLender";
import PrivateMoneyLender from "./pages/blog/PrivateMoneyLender";
import CashOutRefinance from "./pages/blog/CashOutRefinance";
import TypesOfRefinance from "./pages/blog/TypesOfRefinance";
import MortgageLoansHomebuyers from "./pages/blog/MortgageLoansHomebuyers";
import SubjectToRealEstate from "./pages/blog/SubjectToRealEstate";
import SellerFinancingRealEstate from "./pages/blog/SellerFinancingRealEstate";
import LeaseOptionRealEstate from "./pages/blog/LeaseOptionRealEstate";
import AssumableMortgage from "./pages/blog/AssumableMortgage";
import BlanketMortgage from "./pages/blog/BlanketMortgage";
import HelocRealEstate from "./pages/blog/HelocRealEstate";
import BridgeLoanRealEstate from "./pages/blog/BridgeLoanRealEstate";
import SelfDirectedIraRealEstate from "./pages/blog/SelfDirectedIraRealEstate";
import MipVsPmi from "./pages/blog/MipVsPmi";

// Blog posts — Investing
import TypesOfRealEstateProperty from "./pages/blog/TypesOfRealEstateProperty";
import BrrrMethodRealEstate from "./pages/blog/BrrrMethodRealEstate";
import FirstRentalProperty from "./pages/blog/FirstRentalProperty";
import HouseFlipping from "./pages/blog/HouseFlipping";

// Blog posts — Property Management
import FindTenantRentalProperty from "./pages/blog/FindTenantRentalProperty";
import RentalPropertyExpenses from "./pages/blog/RentalPropertyExpenses";
import PropertyManagementCompanies from "./pages/blog/PropertyManagementCompanies";
import TenantNotPayingRent from "./pages/blog/TenantNotPayingRent";
import EvictionProcessLandlord from "./pages/blog/EvictionProcessLandlord";

// Blog posts — Wholesaling
import RealEstateWholesalingExplained from "./pages/blog/RealEstateWholesalingExplained";

// Blog posts — Real Estate Careers
import RealEstateAgentBroker from "./pages/blog/RealEstateAgentBroker";
import BecomeRealtorBroker from "./pages/blog/BecomeRealtorBroker";

// Blog posts — Real Estate Business
import LeadManagersRealEstate from "./pages/blog/LeadManagersRealEstate";
import AcquisitionsManagerRealEstate from "./pages/blog/AcquisitionsManagerRealEstate";
import BookkeepersRealEstate from "./pages/blog/BookkeepersRealEstate";
import LeadManagementTools from "./pages/blog/LeadManagementTools";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/wise-neighborhood-guide">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/start-here" element={<StartHere />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Blog index */}
            <Route path="/blog" element={<Blog />} />

            {/* Blog category hubs */}
            <Route path="/blog/financing" element={<BlogCategoryFinancing />} />
            <Route path="/blog/investing" element={<BlogCategoryInvesting />} />
            <Route path="/blog/property-management" element={<BlogCategoryPropertyManagement />} />
            <Route path="/blog/wholesaling" element={<BlogCategoryWholesaling />} />
            <Route path="/blog/real-estate-careers" element={<BlogCategoryRealEstateCareers />} />
            <Route path="/blog/real-estate-business" element={<BlogCategoryRealEstateBusiness />} />

            {/* Blog posts — Financing */}
            <Route path="/blog/financing/hard-money-lender" element={<HardMoneyLender />} />
            <Route path="/blog/financing/private-money-lender" element={<PrivateMoneyLender />} />
            <Route path="/blog/financing/cash-out-refinance" element={<CashOutRefinance />} />
            <Route path="/blog/financing/types-of-refinance" element={<TypesOfRefinance />} />
            <Route path="/blog/financing/mortgage-loans-first-time-homebuyers" element={<MortgageLoansHomebuyers />} />
            <Route path="/blog/financing/subject-to-real-estate" element={<SubjectToRealEstate />} />
            <Route path="/blog/financing/seller-financing-real-estate" element={<SellerFinancingRealEstate />} />
            <Route path="/blog/financing/lease-option-real-estate" element={<LeaseOptionRealEstate />} />
            <Route path="/blog/financing/assumable-mortgage" element={<AssumableMortgage />} />
            <Route path="/blog/financing/blanket-mortgage" element={<BlanketMortgage />} />
            <Route path="/blog/financing/heloc-real-estate" element={<HelocRealEstate />} />
            <Route path="/blog/financing/bridge-loan-real-estate" element={<BridgeLoanRealEstate />} />
            <Route path="/blog/financing/self-directed-ira-real-estate" element={<SelfDirectedIraRealEstate />} />
            <Route path="/blog/financing/mip-vs-pmi-explained" element={<MipVsPmi />} />

            {/* Blog posts — Investing */}
            <Route path="/blog/investing/types-of-real-estate-property" element={<TypesOfRealEstateProperty />} />
            <Route path="/blog/investing/brrrr-method-real-estate" element={<BrrrMethodRealEstate />} />
            <Route path="/blog/investing/first-rental-property" element={<FirstRentalProperty />} />
            <Route path="/blog/investing/house-flipping" element={<HouseFlipping />} />

            {/* Blog posts — Property Management */}
            <Route path="/blog/property-management/find-tenant-rental-property" element={<FindTenantRentalProperty />} />
            <Route path="/blog/property-management/rental-property-expenses" element={<RentalPropertyExpenses />} />
            <Route path="/blog/property-management/property-management-companies" element={<PropertyManagementCompanies />} />
            <Route path="/blog/property-management/tenant-not-paying-rent" element={<TenantNotPayingRent />} />
            <Route path="/blog/property-management/eviction-process-landlord" element={<EvictionProcessLandlord />} />

            {/* Blog posts — Wholesaling */}
            <Route path="/blog/wholesaling/real-estate-wholesaling-explained" element={<RealEstateWholesalingExplained />} />

            {/* Blog posts — Real Estate Careers */}
            <Route path="/blog/real-estate-careers/real-estate-agent-realtor-broker" element={<RealEstateAgentBroker />} />
            <Route path="/blog/real-estate-careers/become-realtor-broker" element={<BecomeRealtorBroker />} />

            {/* Blog posts — Real Estate Business */}
            <Route path="/blog/real-estate-business/lead-managers-real-estate" element={<LeadManagersRealEstate />} />
            <Route path="/blog/real-estate-business/acquisitions-manager-real-estate" element={<AcquisitionsManagerRealEstate />} />
            <Route path="/blog/real-estate-business/bookkeepers-real-estate" element={<BookkeepersRealEstate />} />
            <Route path="/blog/real-estate-business/lead-management-tools" element={<LeadManagementTools />} />

            {/* Pillar pages */}
            <Route path="/real-estate-investing" element={<Investing />} />
            <Route path="/real-estate-investing/rental-property-investing" element={<RentalPropertyInvesting />} />
            <Route path="/real-estate-investing/brrrr-strategy" element={<BRRRRStrategy />} />
            <Route path="/real-estate-investing/funding-financing" element={<FundingFinancing />} />
            <Route path="/real-estate-investing/cash-flow-roi" element={<CashFlowROI />} />
            <Route path="/real-estate-wholesaling" element={<Wholesaling />} />
            <Route path="/real-estate-wholesaling/how-wholesaling-works" element={<HowWholesalingWorks />} />
            <Route path="/real-estate-wholesaling/finding-motivated-sellers" element={<FindingMotivatedSellers />} />
            <Route path="/real-estate-wholesaling/dispositions-acquisitions" element={<DispositionsAcquisitions />} />
            <Route path="/real-estate-wholesaling/contracts-assignment-fees" element={<ContractsAssignmentFees />} />
            <Route path="/real-estate-marketing" element={<Marketing />} />
            <Route path="/real-estate-marketing/lead-generation" element={<LeadGeneration />} />
            <Route path="/real-estate-marketing/facebook-google-ads" element={<FacebookGoogleAds />} />
            <Route path="/real-estate-marketing/cold-calling-sms" element={<ColdCallingSMS />} />
            <Route path="/real-estate-marketing/crm-automation" element={<CRMAutomation />} />

            {/* State licensing */}
            <Route path="/real-estate-license" element={<RealEstateLicense />} />
            <Route path="/real-estate-license/:state" element={<StateLicense />} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
