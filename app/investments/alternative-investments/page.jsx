import AlternativeInvestmentsClient from "./AlternativeInvestmentsClient";


export const metadata = {
  title: "Greek Golden Visa Alternative Investments",

  description:
    "Explore alternative Greek Golden Visa investment options beyond real estate, including qualifying funds, bonds, company investments and other financial investment routes.",

  keywords: [
    "Greek Golden Visa alternative investments",
    "Greece Golden Visa alternative investments",
    "Golden Visa Greece alternative investment",
    "Greek Golden Visa investment options",
    "Greece Golden Visa investment options",
    "Golden Visa Greece financial investment",
    "Greek Golden Visa funds",
    "Greece Golden Visa funds",
    "Greek Golden Visa bonds",
    "Greece Golden Visa bonds",
    "Golden Visa Greece company investment",
    "Greek residency by investment",
    "Greece residency by investment",
    "Golden Visa investment Greece",
  ],

  alternates: {
    canonical: "/investments/alternative-investments",
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
    url: "/investments/alternative-investments",
    siteName: "Greece Golden Visa",
    locale: "en_GB",

    title:
      "Greek Golden Visa Alternative Investments | Greece Golden Visa",

    description:
      "Explore alternative Greek Golden Visa investment options beyond real estate, including qualifying funds, bonds, company investments and other financial investment routes.",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Greek Golden Visa Alternative Investments | Greece Golden Visa",

    description:
      "Explore alternative Greek Golden Visa investment options beyond real estate, including qualifying funds, bonds, company investments and other financial investment routes.",
  },
};


export default function AlternativeInvestmentsPage() {
return <AlternativeInvestmentsClient />;
}
