import JourneyContent from "./JourneyContent";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isRussian = lang === "ru";

  const title = isRussian
    ? "Процесс получения Золотой визы Греции"
    : "Greek Golden Visa Application Process";

  const description = isRussian
    ? "Узнайте о процессе получения Золотой визы Греции шаг за шагом — от определения соответствия требованиям и инвестиционной стратегии до технической проверки недвижимости, сопровождения сделки и подачи заявления на ВНЖ."
    : "Understand the Greek Golden Visa application process step by step, from eligibility and investment strategy to property due diligence, transaction coordination and residence permit application.";

  const canonical = isRussian
    ? "https://goldenvisagreece.org/ru/program/journey"
    : "https://goldenvisagreece.org/en/program/journey";

  return {
    title,
    description,

    keywords: [
      "Greece Golden Visa process",
      "Greek Golden Visa process",
      "Golden Visa Greece application process",
      "Greece Golden Visa application",
      "Greek Golden Visa application",
      "Greece Golden Visa journey",
      "Golden Visa Greece steps",
      "Greek Golden Visa steps",
      "Greece Golden Visa procedure",
      "Golden Visa property due diligence",
      "Greece Golden Visa property investment",
      "Golden Visa Greece requirements",
      "Greece residency by investment",
      "Greek residency by investment",
    ],

    alternates: {
      canonical,
      languages: {
        en: "https://goldenvisagreece.org/en/program/journey",
        ru: "https://goldenvisagreece.org/ru/program/journey",
        "x-default": "https://goldenvisagreece.org/en/program/journey",
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
        ? "Процесс получения Золотой визы Греции | Greece Golden Visa"
        : "Greek Golden Visa Application Process | Greece Golden Visa",
      description,
    },

    twitter: {
      card: "summary_large_image",
      title: isRussian
        ? "Процесс получения Золотой визы Греции | Greece Golden Visa"
        : "Greek Golden Visa Application Process | Greece Golden Visa",
      description,
    },
  };
}

export default function JourneyPage() {
  return <JourneyContent />;
}