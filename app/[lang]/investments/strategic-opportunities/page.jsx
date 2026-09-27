import StrategicPropertyClient from "./StrategicPropertyClient";

const BASE_URL = "https://goldenvisagreece.org";

const SEO = {
  en: {
    title: "Strategic Property Opportunities in Greece",
    description:
      "Explore strategically selected property opportunities in Greece for Golden Visa investors, considering location, asset type, technical feasibility and the applicable investment route.",
    locale: "en_GB",
  },
  ru: {
    title: "Стратегические инвестиционные возможности в недвижимости Греции",
    description:
      "Изучите стратегические возможности инвестирования в недвижимость Греции для инвесторов, рассматривающих Золотую визу, с учётом местоположения, типа объекта, технической реализуемости и применимого инвестиционного маршрута.",
    locale: "ru_RU",
  },
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const config = SEO[lang] || SEO.en;

  const canonicalUrl = `${BASE_URL}/${lang}/investments/strategic-opportunities`;

  return {
    title: config.title,
    description: config.description,

    keywords: [
      "strategic property opportunities Greece",
      "Greek Golden Visa property opportunities",
      "Greece Golden Visa property opportunities",
      "Golden Visa Greece investment property",
      "Greek Golden Visa real estate",
      "Greece Golden Visa real estate investment",
      "Golden Visa property investment Greece",
      "strategic real estate investment Greece",
      "investment property Greece",
      "Golden Visa Greece property",
      "Greek residency by investment property",
      "Greece residency by investment property",
      "Golden Visa investment routes Greece",
    ],

    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en/investments/strategic-opportunities`,
        ru: `${BASE_URL}/ru/investments/strategic-opportunities`,
        "x-default": `${BASE_URL}/en/investments/strategic-opportunities`,
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
      url: canonicalUrl,
      siteName: "Greece Golden Visa",
      locale: config.locale,
      title: `${config.title} | Greece Golden Visa`,
      description: config.description,
    },

    twitter: {
      card: "summary_large_image",
      title: `${config.title} | Greece Golden Visa`,
      description: config.description,
    },
  };
}

export default function StrategicPropertyPage() {
  return <StrategicPropertyClient />;
}