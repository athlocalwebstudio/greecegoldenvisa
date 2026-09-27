const metadataByLanguage = {
  en: {
    title: "Greek Golden Visa FAQ",
    description:
      "Find answers to common Greek Golden Visa questions about investment routes, eligibility, property, due diligence, costs, family residence and the application process.",
    keywords: [
      "Greece Golden Visa FAQ",
      "Greek Golden Visa FAQ",
      "Golden Visa Greece questions",
      "Greece Golden Visa frequently asked questions",
      "Greek Golden Visa investment questions",
      "Golden Visa Greece requirements",
      "Greece Golden Visa eligibility",
      "Golden Visa Greece property",
      "Greek Golden Visa property investment",
      "Golden Visa Greece due diligence",
      "Greece Golden Visa costs",
      "Greek Golden Visa family",
      "Greece Golden Visa application process",
      "Greece residency by investment",
      "Greek residency by investment",
    ],
    ogTitle: "Greek Golden Visa FAQ | Greece Golden Visa",
    ogDescription:
      "Find answers to common questions about Greek Golden Visa investment routes, eligibility, property, due diligence, costs, family residence and the application process.",
  },

  ru: {
    title: "Часто задаваемые вопросы о Golden Visa в Греции",
    description:
      "Ответы на распространённые вопросы о Golden Visa в Греции: инвестиционные маршруты, требования к заявителям, недвижимость, техническая проверка, расходы, семья и процесс оформления.",
    keywords: [
      "Golden Visa Греция FAQ",
      "Golden Visa Греция вопросы",
      "Золотая виза Греция",
      "Golden Visa Греция требования",
      "Golden Visa Греция инвестиции",
      "Golden Visa Греция недвижимость",
      "Golden Visa Греция техническая проверка",
      "Golden Visa Греция стоимость",
      "Golden Visa Греция семья",
      "Golden Visa Греция процесс оформления",
      "ВНЖ Греции за инвестиции",
      "инвестиции в недвижимость Греции",
    ],
    ogTitle:
      "Часто задаваемые вопросы о Golden Visa в Греции | Greece Golden Visa",
    ogDescription:
      "Ответы на распространённые вопросы об инвестиционных маршрутах, требованиях, недвижимости, технической проверке, расходах, семье и процессе оформления Golden Visa в Греции.",
  },
};

export async function generateMetadata({ params }) {
  const { lang } = await params;

  const language = lang === "ru" ? "ru" : "en";
  const content = metadataByLanguage[language];

  const localizedPath =
    language === "en"
      ? "/en/investor-guide/faq"
      : "/ru/investor-guide/faq";

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,

    alternates: {
      canonical: localizedPath,
      languages: {
        en: "/en/investor-guide/faq",
        ru: "/ru/investor-guide/faq",
        "x-default": "/en/investor-guide/faq",
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

export default function InvestorFaqLayout({ children }) {
  return children;
}