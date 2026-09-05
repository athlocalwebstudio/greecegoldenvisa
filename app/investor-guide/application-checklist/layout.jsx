
export const metadata = {
  title: "Greek Golden Visa Application Checklist",

  description:
    "Use this Greek Golden Visa application checklist to organise identity, investment, property, insurance and route-specific documents before submitting your residence permit application.",

  keywords: [
    "Greece Golden Visa application checklist",
    "Greek Golden Visa application checklist",
    "Golden Visa Greece checklist",
    "Greece Golden Visa documents",
    "Greek Golden Visa documents",
    "Golden Visa Greece required documents",
    "Greece Golden Visa application documents",
    "Greek Golden Visa application requirements",
    "Golden Visa Greece application process",
    "Greece Golden Visa residence permit application",
    "Greek Golden Visa property documents",
    "Greece Golden Visa investment documents",
    "Greece residency by investment",
    "Greek residency by investment",
  ],

  alternates: {
    canonical: "/investor-guide/application-checklist",
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
    url: "/investor-guide/application-checklist",
    siteName: "Greece Golden Visa",
    locale: "en_GB",

    title:
      "Greek Golden Visa Application Checklist | Greece Golden Visa",

    description:
      "Organise the documents and professional checks needed for a Greek Golden Visa application, including investment, property, insurance and route-specific requirements.",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Greek Golden Visa Application Checklist | Greece Golden Visa",

    description:
      "Organise the documents and professional checks needed for a Greek Golden Visa application, including investment, property, insurance and route-specific requirements.",
  },
};

export default function ApplicationChecklistLayout({ children }) {
  return children;
}
