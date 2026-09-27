const SUPPORTED_LANGUAGES = ["en", "ru"];

const BASE_URL = "https://your-domain.com";

const metadataByLanguage = {
  en: {
    title: "Investor Handbook | Greece Golden Visa",
    description:
      "A practical guide to the Greek Golden Visa, investment routes, property selection, due diligence and the residence process.",
  },

  ru: {
    title: "Справочник инвестора | Greece Golden Visa",
    description:
      "Практическое руководство по программе Golden Visa в Греции, инвестиционным маршрутам, выбору недвижимости, проверке объекта и процессу получения вида на жительство.",
  },
};

export async function generateMetadata({ params }) {
  const { lang } = await params;

  const language = SUPPORTED_LANGUAGES.includes(lang) ? lang : "en";
  const content = metadataByLanguage[language];

  const path = "/investor-guide";
  const url = `${BASE_URL}/${language}${path}`;

  return {
    title: content.title,

    description: content.description,

    keywords: [
      "Greece Golden Visa",
      "Greek Golden Visa",
      "Golden Visa Greece",
      "Greece Golden Visa investment",
      "Golden Visa investment routes Greece",
      "Greece Golden Visa property",
      "Greece Golden Visa due diligence",
      "Greece Golden Visa eligibility",
      "Greece Golden Visa residence permit",
      "Greek residency by investment",
      "Greece investor guide",
      "Greek property investment",
    ],

    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}/en${path}`,
        ru: `${BASE_URL}/ru${path}`,
        "x-default": `${BASE_URL}/en${path}`,
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
      url,
      siteName: "Greece Golden Visa",
      locale: language === "ru" ? "ru_RU" : "en_GB",
      title: content.title,
      description: content.description,
    },

    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
    },
  };
}

export default function InvestorHandbookLayout({ children }) {
  return children;
}