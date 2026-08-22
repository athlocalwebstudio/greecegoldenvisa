import Hero from "./components/LandingPage/Hero";
import TrustCompass from "./components/LandingPage/TrustCompass/TrustCompass";
import GreeceExperience from "./components/LandingPage/GreeceExperience/GreeceExperience";
import InvestmentRoutes from "./components/LandingPage/Investment-Routes/InvestmentRoutes";
import WhatWeDo from "./components/LandingPage/WhatWeDo/WhatWeDo";
import PropertyOpportunities from "./components/LandingPage/PropertyOpportunities/PropertyOpportunities";
import ReviewsProof from "./components/LandingPage/ReviewsProof/ReviewsProof";

export default function Home() {
  return (
  <>
  <Hero />
  <TrustCompass />
  <GreeceExperience />
  <InvestmentRoutes />
  <WhatWeDo />
  <PropertyOpportunities />
  <ReviewsProof />
  </>);
}