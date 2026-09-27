import { notFound } from "next/navigation";

const SUPPORTED_LANGUAGES = ["en", "ru"];

const BASE_URL = "https://goldenvisagreece.org";

const SITE_NAME = "Greece Golden Visa";

const LOCALE_CONFIG = {
  en: {
    locale: "en_GB",
    languageName: "English",
    title:
      "Greece Golden Visa | Investment & Residency Guidance",
    description:
      "Expert guidance for investors exploring the Greece Golden Visa through property investment, technical due diligence and a structured residency process.",
  },

  ru: {
    locale: "ru_RU",
    languageName: "Русский",
    title:
      "Золотая виза Греции | Инвестиции и сопровождение ВНЖ",
    description:
      "Профессиональное сопровождение инвесторов, рассматривающих Золотую визу Греции через инвестиции в недвижимость, техническую проверку и структурированный процесс получения ВНЖ.",
  },
};

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({
    lang,
  }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    notFound();
  }

  const config = LOCALE_CONFIG[lang];

  const canonicalUrl =
    lang === "en"
      ? `${BASE_URL}/en`
      : `${BASE_URL}/ru`;

  return {
    title: {
      default: config.title,
      template: `%s | ${SITE_NAME}`,
    },

    description: config.description,

    alternates: {
      canonical: canonicalUrl,

      languages: {
        en: `${BASE_URL}/en`,
        ru: `${BASE_URL}/ru`,
        "x-default": `${BASE_URL}/en`,
      },
    },

    openGraph: {
      type: "website",
      locale: config.locale,
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: config.title,
      description: config.description,
    },

    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
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
  };
}

export default async function LanguageLayout({
  children,
  params,
}) {
  const { lang } = await params;

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    notFound();
  }

  return children;
}