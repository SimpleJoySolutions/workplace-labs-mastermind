import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Home from "@/pages/Home";
import JobDescriptionKit from "@/pages/JobDescriptionKit";
import AboutUs from "@/pages/AboutUs";
import FAQ from "@/pages/FAQ";
import { GoogleAnalytics } from "@/components/google-analytics";

// Import Manrope font
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";

const GA_TRACKING_ID = "G-C5D3VCT6XR";

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId={GA_TRACKING_ID} />
      )}
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-description-kit" element={<JobDescriptionKit />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
