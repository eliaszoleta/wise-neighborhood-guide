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

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/start-here" element={<StartHere />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
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
