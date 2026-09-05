import "./globals.css";

import Navbar from "./components/Navbar";
import { NavbarProvider } from "./context/NavbarContext";

import {
  Playfair_Display,
  Inter,
} from "next/font/google";

import ClientLayout from "./ClientLayout";

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

export const metadata = {
  metadataBase: new URL(
    "https://greecegoldenvisa-mocha.vercel.app"
  ),

  title: {
    default: "Greece Golden Visa | Investment & Residency Guidance",
    template: "%s | Greece Golden Visa",
  },

  description:
    "Expert guidance for investors exploring the Greece Golden Visa through property investment, technical due diligence and a structured residency process.",

  applicationName: "Greece Golden Visa",

  authors: [
    {
      name: "Greece Golden Visa",
    },
  ],

  creator: "Greece Golden Visa",

  publisher: "Greece Golden Visa",

  keywords: [
    "Greece Golden Visa",
    "Greek Golden Visa",
    "Golden Visa Greece",
    "Greece residency by investment",
    "Golden Visa property investment",
    "Greek residency",
    "Greece investment",
    "Golden Visa requirements",
    "Golden Visa eligibility",
    "property investment Greece",
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
    locale: "en_US",
    url: "/",
    siteName: "Greece Golden Visa",
    title: "Greece Golden Visa | Investment & Residency Guidance",
    description:
      "Expert guidance for investors exploring the Greece Golden Visa through property investment, technical due diligence and a structured residency process.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Greece Golden Visa | Investment & Residency Guidance",
    description:
      "Expert guidance for investors exploring the Greece Golden Visa through property investment, technical due diligence and a structured residency process.",
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