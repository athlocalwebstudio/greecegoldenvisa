
import Hero from "./components/LandingPage/Hero";
import TrustCompass from "./components/LandingPage/TrustCompass/TrustCompass";
import GreeceExperience from "./components/LandingPage/GreeceExperience/GreeceExperience";
import InvestmentRoutes from "./components/LandingPage/Investment-Routes/InvestmentRoutes";
import WhatWeDo from "./components/LandingPage/WhatWeDo/WhatWeDo";
import PropertyOpportunities from "./components/LandingPage/PropertyOpportunities/PropertyOpportunities";
import FinalCTA from "./components/LandingPage/Final-CTA/FinalCTA";
import Footer from "./components/LandingPage/Footer/Footer";

import { client } from "@/sanity/lib/client";

const HOMEPAGE_QUERY = `
  *[
    _type == "homepage"
  ][0] {
    heroTitle,
    heroHighlight,
    heroDescription,
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink,
    heroImage,
    trustItems,
    sections
  }
`;

const DEFAULT_SECTIONS = [
  {
    section: "hero",
    enabled: true,
  },
  {
    section: "trustCompass",
    enabled: true,
  },
  {
    section: "whatWeDo",
    enabled: true,
  },
  {
    section: "greeceExperience",
    enabled: true,
  },
  {
    section: "investmentRoutes",
    enabled: true,
  },
  {
    section: "propertyOpportunities",
    enabled: true,
  },
  {
    section: "finalCta",
    enabled: true,
  },
];

function renderSection(section, homepage) {
  if (!section?.enabled) {
    return null;
  }

  switch (section.section) {
    case "hero":
      return <Hero key="hero" homepage={homepage} />;

    case "trustCompass":
      return <TrustCompass key="trustCompass" />;

    case "whatWeDo":
      return <WhatWeDo key="whatWeDo" />;

    case "greeceExperience":
      return <GreeceExperience key="greeceExperience" />;

    case "investmentRoutes":
      return <InvestmentRoutes key="investmentRoutes" />;

    case "propertyOpportunities":
      return <PropertyOpportunities key="propertyOpportunities" />;

    case "finalCta":
      return <FinalCTA key="finalCta" />;

    default:
      return null;
  }
}

export default async function Home() {
  const homepage = await client.fetch(
    HOMEPAGE_QUERY,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const sections =
    homepage?.sections?.length > 0
      ? homepage.sections
      : DEFAULT_SECTIONS;

  return (
    <>
      {sections.map((section) =>
        renderSection(section, homepage)
      )}

      <Footer />
    </>
  );
}
