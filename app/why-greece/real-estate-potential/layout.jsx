
export const metadata = {
  title: "Greek Real Estate Market & Investment Potential",

  description:
    "Explore the Greek real estate market through property price growth, residential investment, international demand, housing supply and market data for investors.",

  keywords: [
    "Greek real estate market",
    "Greece real estate market",
    "Greece property market",
    "Greek property market",
    "Greece real estate investment",
    "Greek real estate investment",
    "property investment Greece",
    "Greece property prices",
    "Greek property prices",
    "Greece real estate market trends",
    "Greek housing market",
    "Greece residential investment",
    "Athens property market",
    "Greece property investment opportunities",
    "Golden Visa Greece property investment",
    "Greece residency by investment",
  ],

  alternates: {
    canonical: "/why-greece/real-estate-potential",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "/why-greece/real-estate-potential",
    siteName: "Greece Golden Visa",
    locale: "en_GB",

    title:
      "Greek Real Estate Market & Investment Potential | Greece Golden Visa",

    description:
      "Explore the Greek real estate market through property price growth, residential investment, international demand, housing supply and current market data.",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Greek Real Estate Market & Investment Potential | Greece Golden Visa",

    description:
      "Explore the Greek real estate market through property price growth, residential investment, international demand, housing supply and current market data.",
  },
};

export default function RealEstatePotentialLayout({ children }) {
  return children;
}
