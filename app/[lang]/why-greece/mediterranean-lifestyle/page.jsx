import { notFound } from "next/navigation";
import MediterraneanLifestyleClient from "./MediterraneanLifestyleClient";

const SUPPORTED_LANGUAGES = ["en", "ru"];
const BASE_URL = "https://goldenvisagreece.org";

export async function generateMetadata({ params }) {
  const { lang } = await params;

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    notFound();
  }

  const isRussian = lang === "ru";

  const title = isRussian
    ? "Средиземноморский образ жизни в Греции"
    : "Mediterranean Lifestyle in Greece";

  const description = isRussian
    ? "Откройте для себя средиземноморский образ жизни в Греции: жизнь у моря, греческая кухня, культура, природа, острова, города и впечатления круглый год."
    : "Discover the Mediterranean lifestyle in Greece, from coastal living and Greek food to culture, nature, islands, cities and year-round experiences.";

  const canonical = `${BASE_URL}/${lang}/why-greece/mediterranean-lifestyle`;

  return {
    title,
    description,

    keywords: [
      "Mediterranean lifestyle Greece",
      "living in Greece",
      "Greece lifestyle",
      "Greek lifestyle",
      "life in Greece",
      "Greece coastal living",
      "Greece islands lifestyle",
      "Greece culture and lifestyle",
      "Greek food and gastronomy",
      "Greece nature and outdoor lifestyle",
      "living in Greece for investors",
      "Greece Golden Visa lifestyle",
      "Golden Visa Greece lifestyle",
      "Greece residency by investment",
    ],

    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/why-greece/mediterranean-lifestyle`,
        ru: `${BASE_URL}/ru/why-greece/mediterranean-lifestyle`,
        "x-default": `${BASE_URL}/en/why-greece/mediterranean-lifestyle`,
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
        ? "Средиземноморский образ жизни в Греции | Greece Golden Visa"
        : "Mediterranean Lifestyle in Greece | Greece Golden Visa",

      description,
    },

    twitter: {
      card: "summary_large_image",

      title: isRussian
        ? "Средиземноморский образ жизни в Греции | Greece Golden Visa"
        : "Mediterranean Lifestyle in Greece | Greece Golden Visa",

      description,
    },
  };
}

export default function MediterraneanLifestylePage() {
  return <MediterraneanLifestyleClient />;
}