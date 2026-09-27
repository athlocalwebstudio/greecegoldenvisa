const metadataByLanguage = {
  en: {
    title: "Greek Real Estate & Golden Visa Experience",
    description:
      "Explore our experience in Greek real estate, civil engineering, technical property assessment and Golden Visa guidance, backed by 15+ years and 1,000+ properties examined.",
    keywords: [
      "Greek real estate experience",
      "Greece real estate experience",
      "Greek real estate consultant",
      "Greece real estate consultant",
      "Greek property investment advisor",
      "Greece property investment advisor",
      "Greek Golden Visa advisor",
      "Greece Golden Visa advisor",
      "Golden Visa Greece consultant",
      "Greek Golden Visa property consultant",
      "technical due diligence Greece",
      "Greek property due diligence",
      "Golden Visa property due diligence",
      "civil engineer Greece real estate",
      "Greek civil engineer property",
      "Greece property assessment",
      "Greek property assessment",
      "Golden Visa Greece property investment",
      "Greece residency by investment",
      "Greek residency by investment",
    ],
    ogTitle:
      "Greek Real Estate & Golden Visa Experience | Greece Golden Visa",
    ogDescription:
      "Explore our experience in Greek real estate, civil engineering, technical property assessment and Golden Visa guidance, backed by 15+ years and 1,000+ properties examined.",
  },

  ru: {
    title: "Опыт в недвижимости Греции и Golden Visa",
    description:
      "Узнайте больше об опыте в сфере недвижимости Греции, гражданского строительства, технической оценки объектов и сопровождения Golden Visa, основанном на более чем 15 годах работы и проверке более 1 000 объектов.",
    keywords: [
      "опыт в недвижимости Греции",
      "недвижимость Греции",
      "консультант по недвижимости Греции",
      "инвестиции в недвижимость Греции",
      "консультант Golden Visa Греция",
      "Golden Visa Греция",
      "техническая проверка недвижимости Греция",
      "due diligence недвижимости Греция",
      "инженер по недвижимости Греция",
      "оценка недвижимости Греция",
      "инвестиции в недвижимость Golden Visa",
      "ВНЖ Греции за инвестиции",
      "вид на жительство Греция инвестиции",
    ],
    ogTitle:
      "Опыт в недвижимости Греции и Golden Visa | Greece Golden Visa",
    ogDescription:
      "Узнайте больше об опыте в сфере недвижимости Греции, гражданского строительства, технической оценки объектов и сопровождения Golden Visa, основанном на более чем 15 годах работы и проверке более 1 000 объектов.",
  },
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const language = lang === "ru" ? "ru" : "en";
  const content = metadataByLanguage[language];

  const localizedPath =
    language === "ru"
      ? "/ru/team/our-experience"
      : "/en/team/our-experience";

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,

    alternates: {
      canonical: localizedPath,
      languages: {
        en: "/en/team/our-experience",
        ru: "/ru/team/our-experience",
        "x-default": "/en/team/our-experience",
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

export default function OurExperienceLayout({ children }) {
  return children;
}