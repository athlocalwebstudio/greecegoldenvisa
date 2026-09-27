import { notFound } from "next/navigation";
import CompareOptionsClient from "./CompareOptionsClient";

const SUPPORTED_LANGUAGES = ["en", "ru"];
const BASE_URL = "https://goldenvisagreece.org";

const englishTitle = "Compare Greek Golden Visa Investment Options";

const englishDescription =
  "Compare Greek Golden Visa investment options, including property acquisition, strategic property opportunities and alternative investment routes, to understand which approach may suit your goals.";

const russianTitle =
  "Сравнение инвестиционных вариантов для Золотой визы Греции";

const russianDescription =
  "Сравните инвестиционные варианты для Золотой визы Греции, включая покупку недвижимости, стратегический подбор объектов и альтернативные инвестиционные маршруты, чтобы понять, какой подход может соответствовать вашим целям.";

export async function generateMetadata({ params }) {
  const { lang } = await params;

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    notFound();
  }

  const isRussian = lang === "ru";

  const title = isRussian ? russianTitle : englishTitle;
  const description = isRussian
    ? russianDescription
    : englishDescription;

  const canonical = `${BASE_URL}/${lang}/investments/compare-options`;

  return {
    title,
    description,

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
      canonical,
      languages: {
        en: `${BASE_URL}/en/investments/compare-options`,
        ru: `${BASE_URL}/ru/investments/compare-options`,
        "x-default": `${BASE_URL}/en/investments/compare-options`,
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

      title: isRussian
        ? `${russianTitle} | Greece Golden Visa`
        : `${englishTitle} | Greece Golden Visa`,

      description,
    },

    twitter: {
      card: "summary_large_image",

      title: isRussian
        ? `${russianTitle} | Greece Golden Visa`
        : `${englishTitle} | Greece Golden Visa`,

      description,
    },
  };
}

export default function CompareOptionsPage() {
  return <CompareOptionsClient />;
}