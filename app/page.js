import Hero from "./components/LandingPage/Hero";
import TrustCompass from "./components/LandingPage/TrustCompass/TrustCompass";
import GreeceExperience from "./components/LandingPage/GreeceExperience/GreeceExperience";
import InvestmentRoutes from "./components/LandingPage/Investment-Routes/InvestmentRoutes";
import WhatWeDo from "./components/LandingPage/WhatWeDo/WhatWeDo";
import PropertyOpportunities from "./components/LandingPage/PropertyOpportunities/PropertyOpportunities";

import FinalCTA from "./components/LandingPage/Final-CTA/FinalCTA";
import Footer from "./components/LandingPage/Footer/Footer";

export default function Home() {
  return (
  <>
  <Hero />
  <TrustCompass />
   <WhatWeDo />
  <GreeceExperience />
  <InvestmentRoutes />
  <PropertyOpportunities />
  <FinalCTA />
  <Footer />
  </>);
}