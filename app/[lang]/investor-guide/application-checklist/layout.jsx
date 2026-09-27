const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.homesingreece.eu";

const SUPPORTED_LANGUAGES = ["en", "ru"];

const metadataByLanguage = {
  en: {
    title:
      "Greek Golden Visa Application Checklist",

    description:
      "Use this Greek Golden Visa application checklist to organise identity, investment, property, insurance and route-specific documents before submitting your residence permit application.",

    locale: "en_GB",

    openGraphTitle:
      "Greek Golden Visa Application Checklist | Greece Golden Visa",

    openGraphDescription:
      "Organise the documents and professional checks needed for a Greek Golden Visa application, including investment, property, insurance and route-specific requirements.",
  },

  ru: {
    title:
      "Чек-лист документов для Golden Visa в Греции",

    description:
      "Используйте этот чек-лист для подготовки документов по программе Golden Visa в Греции, включая документы личности, инвестиции, недвижимости, страхования и требования конкретного инвестиционного маршрута.",

    locale: "ru_RU",

    openGraphTitle:
      "Чек-лист документов Golden Visa в Греции | Greece Golden Visa",

    openGraphDescription:
      "Организуйте документы и профессиональные проверки, необходимые для оформления Golden Visa в Греции, включая инвестиционные, имущественные, страховые и специальные требования.",
  },
};

const keywords = [
  "Greece Golden Visa application checklist",
  "Greek Golden Visa application checklist",
  "Golden Visa Greece checklist",
  "Greece Golden Visa documents",
  "Greek Golden Visa documents",
  "Golden Visa Greece required documents",
  "Greece Golden Visa application documents",
  "Greek Golden Visa application requirements",
  "Golden Visa Greece application process",
  "Greece Golden Visa residence permit application",
  "Greek Golden Visa property documents",
  "Greece Golden Visa investment documents",
  "Greece residency by investment",
  "Greek residency by investment",
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
    `${BASE_URL}/en/investor-guide/application-checklist`;

  const ruUrl =
    `${BASE_URL}/ru/investor-guide/application-checklist`;

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
      title: metadata.openGraphTitle,
      description:
        metadata.openGraphDescription,
    },

    twitter: {
      card: "summary_large_image",
      title: metadata.openGraphTitle,
      description:
        metadata.openGraphDescription,
    },
  };
}

export default function ApplicationChecklistLayout({
  children,
}) {
  return children;
}