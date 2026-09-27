import { notFound } from "next/navigation";
import GatewayToEuropeClient from "./GatewayToEuropeClient";

const SUPPORTED_LANGUAGES = ["en", "ru"];
const BASE_URL = "https://goldenvisagreece.org";

export async function generateMetadata({ params }) {
  const { lang } = await params;

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    notFound();
  }

  const isRussian = lang === "ru";

  const title = isRussian
    ? "Греция: европейская база для инвесторов Golden Visa"
    : "Greece: A European Base for Golden Visa Investors";

  const description = isRussian
    ? "Узнайте, почему Греция предлагает привлекательную европейскую базу для инвесторов Golden Visa: членство в ЕС, доступ к Шенгенской зоне, средиземноморская связь и право проживания в Греции."
    : "Understand why Greece offers an attractive European base for Golden Visa investors, with EU membership, Schengen access, Mediterranean connectivity and residence in Greece.";

  const ogTitle = isRussian
    ? "Греция: европейская база для инвесторов Golden Visa | Greece Golden Visa"
    : "Greece: A European Base for Golden Visa Investors | Greece Golden Visa";

  const ogDescription = isRussian
    ? "Узнайте о Греции как о европейской базе для инвесторов Golden Visa, включая её положение в ЕС и Шенгенской зоне, средиземноморскую связь и систему проживания в Греции."
    : "Explore Greece as a European base for Golden Visa investors, including its EU and Schengen position, Mediterranean connectivity and Greek residence framework.";

  const canonical = `${BASE_URL}/${lang}/why-greece/gateway-to-europe`;

  return {
    title,
    description,

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
      canonical,
      languages: {
        en: `${BASE_URL}/en/why-greece/gateway-to-europe`,
        ru: `${BASE_URL}/ru/why-greece/gateway-to-europe`,
        "x-default": `${BASE_URL}/en/why-greece/gateway-to-europe`,
      },
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
      url: canonical,
      siteName: "Greece Golden Visa",
      locale: isRussian ? "ru_RU" : "en_GB",

      title: ogTitle,
      description: ogDescription,
    },

    twitter: {
      card: "summary_large_image",

      title: ogTitle,
      description: ogDescription,
    },
  };
}

export default function GatewayToEuropePage() {
  return <GatewayToEuropeClient />;
}