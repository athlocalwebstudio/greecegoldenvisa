
export const metadata = {
  title: "Contact a Greek Golden Visa Advisor",

  description:
    "Speak with a Greek Golden Visa advisor about eligibility, investment routes, property search, technical due diligence and your investment plans in Greece.",

  keywords: [
    "Greek Golden Visa advisor",
    "Greece Golden Visa advisor",
    "Golden Visa Greece consultant",
    "Greek Golden Visa consultation",
    "Greece Golden Visa consultation",
    "Golden Visa Greece contact",
    "Greek Golden Visa property review",
    "Greece property investment advisor",
    "Greek property investment consultant",
    "Golden Visa property due diligence",
    "Greece Golden Visa eligibility",
    "Greek Golden Visa investment options",
    "Greece Golden Visa investment strategy",
    "Greece residency by investment",
    "Greek residency by investment",
  ],

  alternates: {
    canonical: "/team/contact",
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
    url: "/team/contact",
    siteName: "Greece Golden Visa",
    locale: "en_GB",

    title:
      "Contact a Greek Golden Visa Advisor | Greece Golden Visa",

    description:
      "Speak directly with a Greek Golden Visa advisor about eligibility, investment routes, property review, technical due diligence and your plans for Greece.",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact a Greek Golden Visa Advisor | Greece Golden Visa",

    description:
      "Speak directly with a Greek Golden Visa advisor about eligibility, investment routes, property review, technical due diligence and your plans for Greece.",
  },
};

export default function ContactLayout({ children }) {
  return children;
}
