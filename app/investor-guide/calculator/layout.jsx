
export const metadata = {
  title: "Greece Golden Visa Investment Calculator",

  description:
    "Estimate the total budget for a Greek Golden Visa property investment, including the investment amount, transfer tax, professional costs, technical due diligence, residence application and insurance.",

  keywords: [
    "Greece Golden Visa calculator",
    "Golden Visa Greece calculator",
    "Greek Golden Visa investment calculator",
    "Golden Visa investment cost",
    "Greece Golden Visa investment cost",
    "Golden Visa property investment calculator",
    "Greece property investment costs",
    "Greek Golden Visa property investment",
    "Greece residency by investment",
    "Golden Visa Greece investment requirements",
  ],

  alternates: {
    canonical: "/investor-guide/calculator",
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
    url: "/investor-guide/calculator",
    siteName: "Greece Golden Visa",
    locale: "en_GB",
    title: "Greece Golden Visa Investment Calculator",
    description:
      "Estimate the total budget for a Greek Golden Visa property investment, including the investment amount, transfer tax, professional costs, technical due diligence, residence application and insurance.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Greece Golden Visa Investment Calculator",
    description:
      "Estimate the total budget for a Greek Golden Visa property investment, including the investment amount, transfer tax, professional costs, technical due diligence, residence application and insurance.",
  },
};

export default function InvestmentCalculatorLayout({ children }) {
  return children;
}

