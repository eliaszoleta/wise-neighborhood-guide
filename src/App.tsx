import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="/real-estate-wholesaling" element={<Wholesaling />} />
          <Route path="/real-estate-marketing" element={<Marketing />} />
          <Route path="/real-estate-license" element={<RealEstateLicense />} />
          <Route path="/real-estate-license/:state" element={<StateLicense />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
