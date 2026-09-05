
export const metadata = {
  title: "Greek Golden Visa Advisors & Property Experts",

  description:
    "Meet the team behind Greece Golden Visa guidance, led by Dipl. Civil Engineer Svetlana Novikova, with 15+ years of Greek real estate experience and 1,000+ properties examined.",

  keywords: [
    "Greek Golden Visa advisor",
    "Greece Golden Visa advisor",
    "Golden Visa Greece consultant",
    "Greek Golden Visa consultant",
    "Greece Golden Visa experts",
    "Greek Golden Visa experts",
    "Golden Visa Greece property consultant",
    "Greek real estate consultant",
    "Greece real estate consultant",
    "Greek property investment advisor",
    "Greece property investment advisor",
    "technical due diligence Greece",
    "Greek property due diligence",
    "Golden Visa property due diligence",
    "Greece Golden Visa guidance",
    "Greek residency by investment",
    "Greece residency by investment",
  ],

  alternates: {
    canonical: "/team/who-we-are",
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
    url: "/team/who-we-are",
    siteName: "Greece Golden Visa",
    locale: "en_GB",

    title:
      "Greek Golden Visa Advisors & Property Experts | Greece Golden Visa",

    description:
      "Meet Svetlana Novikova, Dipl. Civil Engineer and Golden Visa Advisor, with 15+ years of Greek real estate experience and 1,000+ properties examined.",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Greek Golden Visa Advisors & Property Experts | Greece Golden Visa",

    description:
      "Meet Svetlana Novikova, Dipl. Civil Engineer and Golden Visa Advisor, with 15+ years of Greek real estate experience and 1,000+ properties examined.",
  },
};

export default function WhoWeAreLayout({ children }) {
  return children;
}
