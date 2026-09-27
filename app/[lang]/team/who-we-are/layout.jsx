const metadataByLanguage = {
  en: {
    title: "Greek Golden Visa Advisors & Property Experts",

    description:
      "Meet the team behind Greece Golden Visa guidance, led by Dipl. Civil Engineer Svetlana Novikova, with 15+ years of Greek real estate experience and 1,000+ properties examined.",

    keywords: [
      "Greek Golden Visa advisor",
      "Greece Golden Visa advisor",
      "Golden Visa Greece consultant",
      "Greek Golden Visa consultant",
      "Greece Golden Visa experts",
      "Greek Golden Visa experts",
      "Golden Visa Greece property consultant",
      "Greek real estate consultant",
      "Greece real estate consultant",
      "Greek property investment advisor",
      "Greece property investment advisor",
      "technical due diligence Greece",
      "Greek property due diligence",
      "Golden Visa property due diligence",
      "Greece Golden Visa guidance",
      "Greek residency by investment",
      "Greece residency by investment",
    ],

    ogTitle:
      "Greek Golden Visa Advisors & Property Experts | Greece Golden Visa",

    ogDescription:
      "Meet Svetlana Novikova, Dipl. Civil Engineer and Golden Visa Advisor, with 15+ years of Greek real estate experience and 1,000+ properties examined.",
  },

  ru: {
    title:
      "Консультанты по Golden Visa в Греции и эксперты по недвижимости",

    description:
      "Познакомьтесь с командой Greece Golden Visa во главе с дипломированным инженером-строителем Светланой Новиковой, имеющей более 15 лет опыта на рынке недвижимости Греции и опыт проверки более 1 000 объектов.",

    keywords: [
      "консультант Golden Visa Греция",
      "Golden Visa Греция консультант",
      "эксперты Golden Visa Греция",
      "Golden Visa Греция недвижимость",
      "консультант по недвижимости Греция",
      "инвестиции в недвижимость Греции",
      "техническая проверка недвижимости Греция",
      "due diligence недвижимости Греция",
      "проверка недвижимости Golden Visa",
      "Golden Visa Греция сопровождение",
      "ВНЖ Греции за инвестиции",
      "инвестиции в недвижимость Греции",
    ],

    ogTitle:
      "Консультанты по Golden Visa в Греции и эксперты по недвижимости | Greece Golden Visa",

    ogDescription:
      "Познакомьтесь со Светланой Новиковой, дипломированным инженером-строителем и консультантом по Golden Visa, с более чем 15-летним опытом работы на рынке недвижимости Греции и опытом проверки более 1 000 объектов.",
  },
};

export async function generateMetadata({ params }) {
  const { lang } = await params;

  const language = lang === "ru" ? "ru" : "en";
  const content = metadataByLanguage[language];

  const localizedPath =
    language === "ru"
      ? "/ru/team/who-we-are"
      : "/en/team/who-we-are";

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,

    alternates: {
      canonical: localizedPath,

      languages: {
        en: "/en/team/who-we-are",
        ru: "/ru/team/who-we-are",
        "x-default": "/en/team/who-we-are",
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

export default function WhoWeAreLayout({ children }) {
  return children;
}