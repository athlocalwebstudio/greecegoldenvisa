const SUPPORTED_LANGUAGES = ["en", "ru"];

const BASE_URL = "goldenvisagreece.org";

const metadataByLanguage = {
  en: {
    title: "Family & Future in Greece | Golden Visa",
    description:
      "Discover how Greece can become a European base for your family, with residence options for qualifying family members, Mediterranean living and a long-term future in Greece.",
    ogTitle: "Family & Future in Greece | Greece Golden Visa",
    ogDescription:
      "Explore family residence possibilities, Mediterranean living and the long-term lifestyle Greece can offer families considering the Golden Visa.",
  },

  ru: {
    title: "Семья и будущее в Греции | Golden Visa",
    description:
      "Узнайте, как Греция может стать европейской базой для вашей семьи, предлагая возможности проживания для соответствующих требованиям членов семьи, средиземноморский образ жизни и долгосрочную перспективу.",
    ogTitle: "Семья и будущее в Греции | Greece Golden Visa",
    ogDescription:
      "Изучите возможности проживания для семьи, средиземноморский образ жизни и долгосрочные перспективы жизни в Греции для участников программы Golden Visa.",
  },
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const language = SUPPORTED_LANGUAGES.includes(lang) ? lang : "en";
  const content = metadataByLanguage[language];

  const path = `/why-greece/family-and-future`;
  const url = `${BASE_URL}/${language}${path}`;

  return {
    title: content.title,

    description: content.description,

    keywords: [
      "Greece Golden Visa family",
      "Greek Golden Visa family",
      "Golden Visa Greece family benefits",
      "Greece Golden Visa family residence",
      "Greek Golden Visa family residence",
      "Golden Visa Greece spouse",
      "Golden Visa Greece children",
      "Greece residency by investment family",
      "Greek residency by investment family",
      "living in Greece with family",
      "family life in Greece",
      "moving to Greece with family",
      "Greece family residence",
      "Greece Golden Visa benefits",
      "Greek Golden Visa",
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
      title: content.ogTitle,
      description: content.ogDescription,
    },

    twitter: {
      card: "summary_large_image",
      title: content.ogTitle,
      description: content.ogDescription,
    },
  };
}

export default function FamilyAndFutureLayout({ children }) {
  return children;
}