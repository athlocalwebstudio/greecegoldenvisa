const metadataByLanguage = {
  en: {
    title: "Contact a Greek Golden Visa Advisor",

    description:
      "Speak with a Greek Golden Visa advisor about eligibility, investment routes, property search, technical due diligence and your investment plans in Greece.",

    keywords: [
      "Greek Golden Visa advisor",
      "Greece Golden Visa advisor",
      "Golden Visa Greece consultant",
      "Greek Golden Visa consultation",
      "Greece Golden Visa consultation",
      "Golden Visa Greece contact",
      "Greek Golden Visa property review",
      "Greece property investment advisor",
      "Greek property investment consultant",
      "Golden Visa property due diligence",
      "Greece Golden Visa eligibility",
      "Greek Golden Visa investment options",
      "Greece Golden Visa investment strategy",
      "Greece residency by investment",
      "Greek residency by investment",
    ],

    ogTitle:
      "Contact a Greek Golden Visa Advisor | Greece Golden Visa",

    ogDescription:
      "Speak directly with a Greek Golden Visa advisor about eligibility, investment routes, property review, technical due diligence and your plans for Greece.",
  },

  ru: {
    title: "Связаться с консультантом по Golden Visa в Греции",

    description:
      "Свяжитесь с консультантом по Golden Visa в Греции, чтобы обсудить требования, инвестиционные варианты, поиск недвижимости, техническую проверку объекта и ваши планы в Греции.",

    keywords: [
      "Golden Visa Греция",
      "консультант Golden Visa Греция",
      "Golden Visa недвижимость Греция",
      "консультация Golden Visa Греция",
      "Golden Visa Греция контакты",
      "проверка недвижимости Греция",
      "техническая проверка недвижимости Греция",
      "инвестиции в недвижимость Греции",
      "консультант по недвижимости Греция",
      "проверка объекта Golden Visa",
      "требования Golden Visa Греция",
      "инвестиции Golden Visa Греция",
      "инвестиционная стратегия Греция",
      "вид на жительство Греция через инвестиции",
      "инвестиции в Греции для иностранцев",
    ],

    ogTitle:
      "Связаться с консультантом по Golden Visa в Греции | Greece Golden Visa",

    ogDescription:
      "Свяжитесь напрямую с консультантом по Golden Visa в Греции, чтобы обсудить требования, инвестиционные варианты, проверку недвижимости, техническую экспертизу и ваши планы в Греции.",
  },
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const language = lang === "ru" ? "ru" : "en";

  const content = metadataByLanguage[language];

  const localizedPath =
    language === "ru"
      ? "/ru/team/contact"
      : "/en/team/contact";

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,

    alternates: {
      canonical: localizedPath,
      languages: {
        en: "/en/team/contact",
        ru: "/ru/team/contact",
        "x-default": "/en/team/contact",
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
      url: localizedPath,
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

export default function ContactLayout({ children }) {
  return children;
}