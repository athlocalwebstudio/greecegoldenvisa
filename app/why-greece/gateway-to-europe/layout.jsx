
export const metadata = {
  title: "Greece: A European Base for Golden Visa Investors",

  description:
    "Understand why Greece offers an attractive European base for Golden Visa investors, with EU membership, Schengen access, Mediterranean connectivity and residence in Greece.",

  keywords: [
    "Greece European base",
    "Greece Golden Visa Europe",
    "Golden Visa Greece Europe",
    "Greece residence permit Europe",
    "Greek residence permit",
    "Greece EU residence",
    "Greece Schengen residence",
    "Greece Schengen Area",
    "Greece European Union",
    "living in Greece",
    "Greece Mediterranean lifestyle",
    "Golden Visa Greece benefits",
    "Greece residency by investment",
    "Greek residency by investment",
    "Greek Golden Visa",
  ],

  alternates: {
    canonical: "/why-greece/gateway-to-europe",
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
    url: "/why-greece/gateway-to-europe",
    siteName: "Greece Golden Visa",
    locale: "en_GB",

    title:
      "Greece: A European Base for Golden Visa Investors | Greece Golden Visa",

    description:
      "Explore Greece as a European base for Golden Visa investors, including its EU and Schengen position, Mediterranean connectivity and Greek residence framework.",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Greece: A European Base for Golden Visa Investors | Greece Golden Visa",

    description:
      "Explore Greece as a European base for Golden Visa investors, including its EU and Schengen position, Mediterranean connectivity and Greek residence framework.",
  },
};

export default function GatewayToEuropeLayout({ children }) {
  return children;
}
