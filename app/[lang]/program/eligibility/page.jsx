import EligibilityContent from "./EligibilityContent";

export async function generateMetadata({ params }) {
  const { lang } = await params;

  const isRussian = lang === "ru";

  const title = isRussian
    ? "Соответствие требованиям Золотой визы Греции"
    : "Greek Golden Visa Eligibility";

  const description = isRussian
    ? "Узнайте, кто может получить Золотую визу Греции, каковы основные требования, инвестиционные условия и ключевые факторы, которые необходимо проверить перед подачей заявления."
    : "Find out who can qualify for the Greek Golden Visa, the main eligibility conditions, investment requirements and key factors to check before applying.";

  const canonical = isRussian
    ? "https://goldenvisagreece.org/ru/program/eligibility"
    : "https://goldenvisagreece.org/en/program/eligibility";

  return {
    title,

    description,

    keywords: [
      "Greece Golden Visa eligibility",
      "Greek Golden Visa eligibility",
      "Golden Visa Greece eligibility",
      "who can apply for Greece Golden Visa",
      "Greece Golden Visa requirements",
      "Greek Golden Visa requirements",
      "Golden Visa Greece investment requirements",
      "Greece residency by investment",
      "Greek residency by investment",
      "Golden Visa Greece family",
      "Greece Golden Visa property investment",
      "Golden Visa Greece application",
    ],

    alternates: {
      canonical,
      languages: {
        en: "https://goldenvisagreece.org/en/program/eligibility",
        ru: "https://goldenvisagreece.org/ru/program/eligibility",
        "x-default": "https://goldenvisagreece.org/en/program/eligibility",
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
        ? "Соответствие требованиям Золотой визы Греции | Greece Golden Visa"
        : "Greek Golden Visa Eligibility | Greece Golden Visa",

      description,
    },

    twitter: {
      card: "summary_large_image",

      title: isRussian
        ? "Соответствие требованиям Золотой визы Греции | Greece Golden Visa"
        : "Greek Golden Visa Eligibility | Greece Golden Visa",

      description,
    },
  };
}

export default function EligibilityPage() {
  return <EligibilityContent />;
}