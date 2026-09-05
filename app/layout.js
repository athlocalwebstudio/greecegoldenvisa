
import "./globals.css";

import Navbar from "./components/Navbar";
import { NavbarProvider } from "./context/NavbarContext";

import {
  Playfair_Display,
  Inter,
} from "next/font/google";

import ClientLayout from "./ClientLayout";

const BASE_URL =
  "https://greecegoldenvisa-mocha.vercel.app";

const SITE_NAME = "Greece Golden Visa";

const SITE_DESCRIPTION =
  "Expert guidance for investors exploring the Greece Golden Visa through property investment, technical due diligence and a structured residency process.";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/*
|--------------------------------------------------------------------------
| STRUCTURED DATA
|--------------------------------------------------------------------------
| Helps search engines understand the website and its main subject.
| This does not change anything visually on the website.
*/

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: SITE_NAME,
  url: BASE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.jpg`,
  description: SITE_DESCRIPTION,
};

const webpageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "Greece Golden Visa | Investment & Residency Guidance",
  description: SITE_DESCRIPTION,
  isPartOf: {
    "@id": `${BASE_URL}/#website`,
  },
  about: [
    {
      "@type": "Thing",
      name: "Greek Golden Visa",
    },
    {
      "@type": "Thing",
      name: "Greece Residency by Investment",
    },
    {
      "@type": "Thing",
      name: "Property Investment in Greece",
    },
  ],
  inLanguage: "en",
};

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:
      "Greece Golden Visa | Investment & Residency Guidance",
    template: "%s | Greece Golden Visa",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  authors: [
    {
      name: "Greece Golden Visa",
      url: BASE_URL,
    },
  ],

  creator: SITE_NAME,

  publisher: SITE_NAME,

  keywords: [
    "Greece Golden Visa",
    "Golden Visa Greece",
    "Greek Golden Visa",
    "Greece residency by investment",
    "Greek residency by investment",
    "Golden Visa requirements Greece",
    "Golden Visa eligibility Greece",
    "Golden Visa property investment Greece",
    "property investment Greece",
    "Greek property investment",
  ],

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
    locale: "en_GB",
    url: "/",
    siteName: SITE_NAME,

    title:
      "Greece Golden Visa | Investment & Residency Guidance",

    description: SITE_DESCRIPTION,
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Greece Golden Visa | Investment & Residency Guidance",

    description: SITE_DESCRIPTION,
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              websiteStructuredData
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organizationStructuredData
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              webpageStructuredData
            ),
          }}
        />

        <ClientLayout>
          <NavbarProvider>
            <Navbar />

            {children}
          </NavbarProvider>
        </ClientLayout>
      </body>
    </html>
  );
}
