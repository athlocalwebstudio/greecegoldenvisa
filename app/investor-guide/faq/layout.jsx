
export const metadata = {
  title: "Greek Golden Visa FAQ",

  description:
    "Find answers to common Greek Golden Visa questions about investment routes, eligibility, property, due diligence, costs, family residence and the application process.",

  keywords: [
    "Greece Golden Visa FAQ",
    "Greek Golden Visa FAQ",
    "Golden Visa Greece questions",
    "Greece Golden Visa frequently asked questions",
    "Greek Golden Visa investment questions",
    "Golden Visa Greece requirements",
    "Greece Golden Visa eligibility",
    "Golden Visa Greece property",
    "Greek Golden Visa property investment",
    "Golden Visa Greece due diligence",
    "Greece Golden Visa costs",
    "Greek Golden Visa family",
    "Greece Golden Visa application process",
    "Greece residency by investment",
    "Greek residency by investment",
  ],

  alternates: {
    canonical: "/investor-guide/faq",
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
    url: "/investor-guide/faq",
    siteName: "Greece Golden Visa",
    locale: "en_GB",

    title: "Greek Golden Visa FAQ | Greece Golden Visa",

    description:
      "Find answers to common questions about Greek Golden Visa investment routes, eligibility, property, due diligence, costs, family residence and the application process.",
  },

  twitter: {
    card: "summary_large_image",

    title: "Greek Golden Visa FAQ | Greece Golden Visa",

    description:
      "Find answers to common questions about Greek Golden Visa investment routes, eligibility, property, due diligence, costs, family residence and the application process.",
  },
};

export default function InvestorFaqLayout({ children }) {
  return children;
}
