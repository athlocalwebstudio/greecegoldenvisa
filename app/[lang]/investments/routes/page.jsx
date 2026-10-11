import InvestmentRoutesContent from "./InvestmentRoutesContent";

const BASE_URL = "https://goldenvisagreece.org";

const SEO = {
  en: {
    title: "Greek Golden Visa Investment Routes: €250k, €400k & €800k",
    description:
      "Explore the official Greek Golden Visa investment routes. Learn how you can start from €250k through conversions and restorations, or explore the €400k and €800k real estate tiers.",
    locale: "en_GB",
  },
  ru: {
    title: "Инвестиционные маршруты Золотой визы Греции: €250k, €400k и €800k",
    description:
      "Изучите официальные инвестиционные маршруты Золотой визы Греции. Узнайте, как начать от €250k через реконструкцию, или выберите пороги €400k и €800k.",
    locale: "ru_RU",
  },
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const config = SEO[lang] || SEO.en;
  const canonicalUrl = `${BASE_URL}/${lang}/investments/routes`;

  return {
    title: config.title,
    description: config.description,

    keywords: [
      "Greek Golden Visa investment routes",
      "Greece Golden Visa 250k route",
      "Greece Golden Visa 400k threshold",
      "Greece Golden Visa 800k areas",
      "commercial to residential conversion Greece Golden Visa",
      "restoration of listed buildings Greece Golden Visa",
      "Greek residency by investment tiers",
    ],

    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en/investments/routes`,
        ru: `${BASE_URL}/ru/investments/routes`,
        "x-default": `${BASE_URL}/en/investments/routes`,
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

export default function InvestmentRoutesPage() {
  return <InvestmentRoutesContent />;
}