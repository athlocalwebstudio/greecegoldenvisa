import { notFound } from "next/navigation";

const SUPPORTED_LANGUAGES = ["en", "ru"];
const BASE_URL = "https://goldenvisagreece.org";

export async function generateMetadata({ params }) {
  const { lang } = await params;

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    notFound();
  }

  const isRussian = lang === "ru";

  const title = isRussian
    ? "Рынок недвижимости Греции и инвестиционный потенциал"
    : "Greek Real Estate Market & Investment Potential";

  const description = isRussian
    ? "Изучите рынок недвижимости Греции через динамику цен, жилые инвестиции, международный спрос, предложение жилья и рыночные данные для инвесторов."
    : "Explore the Greek real estate market through property price growth, residential investment, international demand, housing supply and market data for investors.";

  const canonical = `${BASE_URL}/${lang}/why-greece/real-estate-potential`;

  const ogTitle = isRussian
    ? "Рынок недвижимости Греции и инвестиционный потенциал | Greece Golden Visa"
    : "Greek Real Estate Market & Investment Potential | Greece Golden Visa";

  const ogDescription = isRussian
    ? "Изучите рынок недвижимости Греции через динамику цен, жилые инвестиции, международный спрос, предложение жилья и актуальные рыночные данные."
    : "Explore the Greek real estate market through property price growth, residential investment, international demand, housing supply and current market data.";

  return {
    title,
    description,

    keywords: [
      "Greek real estate market",
      "Greece real estate market",
      "Greece property market",
      "Greek property market",
      "Greece real estate investment",
      "Greek real estate investment",
      "property investment Greece",
      "Greece property prices",
      "Greek property prices",
      "Greece real estate market trends",
      "Greek housing market",
      "Greece residential investment",
      "Athens property market",
      "Greece property investment opportunities",
      "Golden Visa Greece property investment",
      "Greece residency by investment",
    ],

    alternates: {
      canonical,
      languages: {
        en: `${BASE_URL}/en/why-greece/real-estate-potential`,
        ru: `${BASE_URL}/ru/why-greece/real-estate-potential`,
        "x-default": `${BASE_URL}/en/why-greece/real-estate-potential`,
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
      url: canonical,
      siteName: "Greece Golden Visa",
      locale: isRussian ? "ru_RU" : "en_GB",

      title: ogTitle,
      description: ogDescription,
    },

    twitter: {
      card: "summary_large_image",

      title: ogTitle,
      description: ogDescription,
    },
  };
}

export default function RealEstatePotentialLayout({ children }) {
  return children;
}