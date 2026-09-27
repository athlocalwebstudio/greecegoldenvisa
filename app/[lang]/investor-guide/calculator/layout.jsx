const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.homesingreece.eu";

const SUPPORTED_LANGUAGES = ["en", "ru"];

const metadataByLanguage = {
  en: {
    title:
      "Greece Golden Visa Investment Calculator",

    description:
      "Estimate the total budget for a Greek Golden Visa property investment, including the investment amount, transfer tax, professional costs, technical due diligence, residence application and insurance.",

    locale: "en_GB",
  },

  ru: {
    title:
      "Калькулятор инвестиций Greece Golden Visa",

    description:
      "Рассчитайте ориентировочный бюджет инвестиции в недвижимость по программе Golden Visa в Греции, включая стоимость объекта, налоги, профессиональные услуги, техническую проверку, оформление ВНЖ и страхование.",

    locale: "ru_RU",
  },
};

const keywords = [
  "Greece Golden Visa calculator",
  "Golden Visa Greece calculator",
  "Greek Golden Visa investment calculator",
  "Golden Visa investment cost",
  "Greece Golden Visa investment cost",
  "Golden Visa property investment calculator",
  "Greece property investment costs",
  "Greek Golden Visa property investment",
  "Greece residency by investment",
  "Golden Visa Greece investment requirements",
];

export async function generateMetadata({
  params,
}) {
  const { lang } = await params;

  const language =
    SUPPORTED_LANGUAGES.includes(lang)
      ? lang
      : "en";

  const metadata =
    metadataByLanguage[language];

  const enUrl =
    `${BASE_URL}/en/investor-guide/calculator`;

  const ruUrl =
    `${BASE_URL}/ru/investor-guide/calculator`;

  const currentUrl =
    language === "ru"
      ? ruUrl
      : enUrl;

  return {
    title: metadata.title,

    description:
      metadata.description,

    keywords,

    alternates: {
      canonical: currentUrl,

      languages: {
        en: enUrl,
        ru: ruUrl,
        "x-default": enUrl,
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
      url: currentUrl,
      siteName: "Greece Golden Visa",
      locale: metadata.locale,
      title: metadata.title,
      description: metadata.description,
    },

    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default function InvestmentCalculatorLayout({
  children,
}) {
  return children;
}