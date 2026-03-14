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

// Blog post pages
import TypesOfRealEstateProperty from "./pages/blog/TypesOfRealEstateProperty";
import BrrrMethodRealEstate from "./pages/blog/BrrrMethodRealEstate";
import FirstRentalProperty from "./pages/blog/FirstRentalProperty";
import HardMoneyLender from "./pages/blog/HardMoneyLender";
import PrivateMoneyLender from "./pages/blog/PrivateMoneyLender";
import FindTenantRentalProperty from "./pages/blog/FindTenantRentalProperty";
import CashOutRefinance from "./pages/blog/CashOutRefinance";
import TypesOfRefinance from "./pages/blog/TypesOfRefinance";
import RealEstateAgentBroker from "./pages/blog/RealEstateAgentBroker";
import LeadManagersRealEstate from "./pages/blog/LeadManagersRealEstate";
import AcquisitionsManagerRealEstate from "./pages/blog/AcquisitionsManagerRealEstate";
import HouseFlipping from "./pages/blog/HouseFlipping";
import RentalPropertyExpenses from "./pages/blog/RentalPropertyExpenses";
import MortgageLoansHomebuyers from "./pages/blog/MortgageLoansHomebuyers";
import RealEstateWholesalingExplained from "./pages/blog/RealEstateWholesalingExplained";
import BecomeRealtorBroker from "./pages/blog/BecomeRealtorBroker";
import PropertyManagementCompanies from "./pages/blog/PropertyManagementCompanies";
import BookkeepersRealEstate from "./pages/blog/BookkeepersRealEstate";
import MipVsPmi from "./pages/blog/MipVsPmi";
import LeadManagementTools from "./pages/blog/LeadManagementTools";
import SubjectToRealEstate from "./pages/blog/SubjectToRealEstate";
import SellerFinancingRealEstate from "./pages/blog/SellerFinancingRealEstate";
import LeaseOptionRealEstate from "./pages/blog/LeaseOptionRealEstate";
import AssumableMortgage from "./pages/blog/AssumableMortgage";
import BlanketMortgage from "./pages/blog/BlanketMortgage";
import HelocRealEstate from "./pages/blog/HelocRealEstate";
import BridgeLoanRealEstate from "./pages/blog/BridgeLoanRealEstate";
import SelfDirectedIraRealEstate from "./pages/blog/SelfDirectedIraRealEstate";
import TenantNotPayingRent from "./pages/blog/TenantNotPayingRent";
import EvictionProcessLandlord from "./pages/blog/EvictionProcessLandlord";

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/types-of-real-estate-property" element={<TypesOfRealEstateProperty />} />
            <Route path="/blog/brrrr-method-real-estate" element={<BrrrMethodRealEstate />} />
            <Route path="/blog/first-rental-property" element={<FirstRentalProperty />} />
            <Route path="/blog/hard-money-lender" element={<HardMoneyLender />} />
            <Route path="/blog/private-money-lender" element={<PrivateMoneyLender />} />
            <Route path="/blog/find-tenant-rental-property" element={<FindTenantRentalProperty />} />
            <Route path="/blog/cash-out-refinance" element={<CashOutRefinance />} />
            <Route path="/blog/types-of-refinance" element={<TypesOfRefinance />} />
            <Route path="/blog/real-estate-agent-realtor-broker" element={<RealEstateAgentBroker />} />
            <Route path="/blog/lead-managers-real-estate" element={<LeadManagersRealEstate />} />
            <Route path="/blog/acquisitions-manager-real-estate" element={<AcquisitionsManagerRealEstate />} />
            <Route path="/blog/house-flipping" element={<HouseFlipping />} />
            <Route path="/blog/rental-property-expenses" element={<RentalPropertyExpenses />} />
            <Route path="/blog/mortgage-loans-first-time-homebuyers" element={<MortgageLoansHomebuyers />} />
            <Route path="/blog/real-estate-wholesaling-explained" element={<RealEstateWholesalingExplained />} />
            <Route path="/blog/become-realtor-broker" element={<BecomeRealtorBroker />} />
            <Route path="/blog/property-management-companies" element={<PropertyManagementCompanies />} />
            <Route path="/blog/bookkeepers-real-estate" element={<BookkeepersRealEstate />} />
            <Route path="/blog/mip-vs-pmi-explained" element={<MipVsPmi />} />
            <Route path="/blog/lead-management-tools" element={<LeadManagementTools />} />
            <Route path="/blog/subject-to-real-estate" element={<SubjectToRealEstate />} />
            <Route path="/blog/seller-financing-real-estate" element={<SellerFinancingRealEstate />} />
            <Route path="/blog/lease-option-real-estate" element={<LeaseOptionRealEstate />} />
            <Route path="/blog/assumable-mortgage" element={<AssumableMortgage />} />
            <Route path="/blog/blanket-mortgage" element={<BlanketMortgage />} />
            <Route path="/blog/heloc-real-estate" element={<HelocRealEstate />} />
            <Route path="/blog/bridge-loan-real-estate" element={<BridgeLoanRealEstate />} />
            <Route path="/blog/self-directed-ira-real-estate" element={<SelfDirectedIraRealEstate />} />
            <Route path="/blog/tenant-not-paying-rent" element={<TenantNotPayingRent />} />
            <Route path="/blog/eviction-process-landlord" element={<EvictionProcessLandlord />} />
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
            <Route path="/real-estate-license" element={<RealEstateLicense />} />
            <Route path="/real-estate-license/:state" element={<StateLicense />} />
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
