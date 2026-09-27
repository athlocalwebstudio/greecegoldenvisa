import RequirementsContent from "./RequirementsContent";

export async function generateMetadata({ params }) {
  const { lang } = await params;

  const isRussian = lang === "ru";

  const title = isRussian
    ? "Требования для Золотой визы Греции"
    : "Greek Golden Visa Investment Requirements";

  const description = isRussian
    ? "Узнайте о порогах инвестиций для Золотой визы Греции, маршрутах €250K, €400K и €800K, требованиях к местоположению и ключевых условиях перед инвестированием в Грецию."
    : "Understand the Greek Golden Visa investment thresholds, €250K, €400K and €800K property routes, location requirements and key conditions before investing in Greece.";

  const canonical = isRussian
    ? "https://goldenvisagreece.org/ru/program/requirements"
    : "https://goldenvisagreece.org/en/program/requirements";

  return {
    title,
    description,

    keywords: [
      "Greece Golden Visa requirements",
      "Greek Golden Visa requirements",
      "Golden Visa Greece requirements",
      "Greece Golden Visa investment requirements",
      "Greek Golden Visa investment requirements",
      "Golden Visa property requirements Greece",
      "Greece Golden Visa minimum investment",
      "Golden Visa Greece €250K",
      "Golden Visa Greece €400K",
      "Golden Visa Greece €800K",
      "Greece Golden Visa property investment",
      "Greek residency by investment",
      "Greece residency by investment",
    ],

    alternates: {
      canonical,
      languages: {
        en: "https://goldenvisagreece.org/en/program/requirements",
        ru: "https://goldenvisagreece.org/ru/program/requirements",
        "x-default": "https://goldenvisagreece.org/en/program/requirements",
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
        ? "Требования для инвестиций по Золотой визе Греции | Greece Golden Visa"
        : "Greek Golden Visa Investment Requirements | Greece Golden Visa",

      description,
    },

    twitter: {
      card: "summary_large_image",

      title: isRussian
        ? "Требования для инвестиций по Золотой визе Греции | Greece Golden Visa"
        : "Greek Golden Visa Investment Requirements | Greece Golden Visa",

      description,
    },
  };
}

export default function InvestmentRequirementsPage() {
  return <RequirementsContent />;
}