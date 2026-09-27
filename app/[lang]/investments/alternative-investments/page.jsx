import AlternativeInvestmentsClient from "./AlternativeInvestmentsClient";

const BASE_URL = "https://goldenvisagreece.org";

const SEO = {
  en: {
    title: "Greek Golden Visa Alternative Investments",
    description:
      "Explore alternative Greek Golden Visa investment options beyond real estate, including qualifying funds, bonds, company investments and other financial investment routes.",
    locale: "en_GB",
  },

  ru: {
    title: "Альтернативные инвестиции для Золотой визы Греции",
    description:
      "Изучите альтернативные варианты инвестирования для получения Золотой визы Греции без покупки недвижимости, включая соответствующие фонды, облигации, инвестиции в компании и другие финансовые маршруты.",
    locale: "ru_RU",
  },
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const config = SEO[lang] || SEO.en;

  const canonicalUrl = `${BASE_URL}/${lang}/investments/alternative-investments`;

  return {
    title: config.title,
    description: config.description,

    keywords: [
      "Greek Golden Visa alternative investments",
      "Greece Golden Visa alternative investments",
      "Golden Visa Greece alternative investment",
      "Greek Golden Visa investment options",
      "Greece Golden Visa investment options",
      "Golden Visa Greece financial investment",
      "Greek Golden Visa funds",
      "Greece Golden Visa funds",
      "Greek Golden Visa bonds",
      "Greece Golden Visa bonds",
      "Golden Visa Greece company investment",
      "Greek residency by investment",
      "Greece residency by investment",
      "Golden Visa investment Greece",
    ],

    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en/investments/alternative-investments`,
        ru: `${BASE_URL}/ru/investments/alternative-investments`,
        "x-default": `${BASE_URL}/en/investments/alternative-investments`,
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

export default function AlternativeInvestmentsPage() {
  return <AlternativeInvestmentsClient />;
}