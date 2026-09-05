import StrategicPropertyClient from "./StrategicPropertyClient";


export const metadata = {
  title: "Strategic Property Opportunities in Greece",

  description:
    "Explore strategically selected property opportunities in Greece for Golden Visa investors, considering location, asset type, technical feasibility and the applicable investment route.",

  keywords: [
    "strategic property opportunities Greece",
    "Greek Golden Visa property opportunities",
    "Greece Golden Visa property opportunities",
    "Golden Visa Greece investment property",
    "Greek Golden Visa real estate",
    "Greece Golden Visa real estate investment",
    "Golden Visa property investment Greece",
    "strategic real estate investment Greece",
    "investment property Greece",
    "Golden Visa Greece property",
    "Greek residency by investment property",
    "Greece residency by investment property",
    "Golden Visa investment routes Greece",
  ],

  alternates: {
    canonical: "/investments/strategic-opportunities",
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
    url: "/investments/strategic-opportunities",
    siteName: "Greece Golden Visa",
    locale: "en_GB",

    title:
      "Strategic Property Opportunities in Greece | Greece Golden Visa",

    description:
      "Explore strategically selected property opportunities in Greece for Golden Visa investors, considering location, asset type, technical feasibility and the applicable investment route.",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Strategic Property Opportunities in Greece | Greece Golden Visa",

    description:
      "Explore strategically selected property opportunities in Greece for Golden Visa investors, considering location, asset type, technical feasibility and the applicable investment route.",
  },
};


export default function StrategicPropertyPage() {
  return <StrategicPropertyClient />;
}