const metadataByLanguage = {
  en: {
    title: "Why Investors Trust Our Greek Golden Visa Guidance",
    description:
      "Understand why investors choose our Greek Golden Visa guidance, from technical due diligence and property assessment to investment strategy, local knowledge and professional coordination.",
    keywords: [
      "Greek Golden Visa advisor",
      "Greece Golden Visa advisor",
      "Greek Golden Visa consultant",
      "Greece Golden Visa consultant",
      "Golden Visa Greece property advisor",
      "Greek property investment advisor",
      "Greece property investment consultant",
      "Greek real estate consultant",
      "Greece real estate consultant",
      "technical due diligence Greece",
      "Greek property due diligence",
      "Golden Visa property due diligence",
      "Greece Golden Visa property assessment",
      "Golden Visa Greece investment guidance",
      "Greek Golden Visa investment guidance",
      "Greece residency by investment",
      "Greek residency by investment",
    ],
    ogTitle:
      "Why Investors Trust Our Greek Golden Visa Guidance | Greece Golden Visa",
    ogDescription:
      "Discover the approach behind our Greek Golden Visa guidance, including technical due diligence, property assessment, investment strategy, local knowledge and professional coordination.",
  },

  ru: {
    title: "Почему инвесторы доверяют нашим консультациям по Golden Visa в Греции",
    description:
      "Узнайте, почему инвесторы выбирают наши консультации по Golden Visa в Греции: техническая проверка недвижимости, оценка объектов, инвестиционная стратегия, знание местного рынка и координация специалистов.",
    keywords: [
      "консультант Golden Visa Греция",
      "Golden Visa Греция консультант",
      "Golden Visa Греция недвижимость",
      "инвестиции в недвижимость Греции",
      "консультант по недвижимости Греция",
      "инвестиционный консультант Греция",
      "техническая проверка недвижимости Греция",
      "due diligence недвижимости Греция",
      "проверка недвижимости Golden Visa",
      "оценка недвижимости Греция",
      "инвестиции Golden Visa Греция",
      "ВНЖ Греция за инвестиции",
      "вид на жительство Греция инвестиции",
    ],
    ogTitle:
      "Почему инвесторы доверяют нашим консультациям по Golden Visa в Греции | Greece Golden Visa",
    ogDescription:
      "Узнайте о подходе к сопровождению Golden Visa в Греции: техническая проверка недвижимости, оценка объектов, инвестиционная стратегия, знание местного рынка и координация специалистов.",
  },
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const language = lang === "ru" ? "ru" : "en";
  const content = metadataByLanguage[language];

  const localizedPath =
    language === "ru"
      ? "/ru/team/why-clients-trust-us"
      : "/en/team/why-clients-trust-us";

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,

    alternates: {
      canonical: localizedPath,
      languages: {
        en: "/en/team/why-clients-trust-us",
        ru: "/ru/team/why-clients-trust-us",
        "x-default": "/en/team/why-clients-trust-us",
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

export default function WhyClientsTrustUsLayout({ children }) {
  return children;
}