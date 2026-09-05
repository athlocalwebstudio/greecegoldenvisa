import CompareOptionsClient from "./CompareOptionsClient";


export const metadata = {
  title: "Compare Greek Golden Visa Investment Options",

  description:
    "Compare Greek Golden Visa investment options, including property acquisition, strategic property opportunities and alternative investment routes, to understand which approach may suit your goals.",

  keywords: [
    "Greek Golden Visa investment options",
    "Greece Golden Visa investment options",
    "Golden Visa Greece investment options",
    "compare Golden Visa investment options",
    "Greek Golden Visa investment comparison",
    "Greece Golden Visa investment comparison",
    "Golden Visa Greece property investment",
    "Golden Visa Greece alternative investments",
    "Golden Visa strategic property investment",
    "Greek residency by investment options",
    "Greece residency by investment",
    "Greek Golden Visa investment routes",
    "Greece Golden Visa investment routes",
  ],

  alternates: {
    canonical: "/investments/compare-options",
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
    url: "/investments/compare-options",
    siteName: "Greece Golden Visa",
    locale: "en_GB",

    title:
      "Compare Greek Golden Visa Investment Options | Greece Golden Visa",

    description:
      "Compare Greek Golden Visa investment options, including property acquisition, strategic property opportunities and alternative investment routes, to understand which approach may suit your goals.",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Compare Greek Golden Visa Investment Options | Greece Golden Visa",

    description:
      "Compare Greek Golden Visa investment options, including property acquisition, strategic property opportunities and alternative investment routes, to understand which approach may suit your goals.",
  },
};


export default function CompareOptionsPage() {
return <CompareOptionsClient />;
}
