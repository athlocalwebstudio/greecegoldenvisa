import BenefitsContent from "./BenefitsContent";

export async function generateMetadata({ params }) {
  const { lang } = await params;

  const isRussian = lang === "ru";

  const title = isRussian
    ? "Преимущества Золотой визы Греции"
    : "Greek Golden Visa Benefits";

  const description = isRussian
    ? "Узнайте об основных преимуществах Золотой визы Греции, включая проживание в Греции, поездки по Шенгенской зоне, ВНЖ для семьи и продление разрешения на пять лет."
    : "Discover the main Greek Golden Visa benefits, including residence in Greece, Schengen travel, family residence and five-year permit renewal.";

  const canonical = isRussian
    ? "https://goldenvisagreece.org/ru/program/benefits"
    : "https://goldenvisagreece.org/en/program/benefits";

  return {
    title,

    description,

    keywords: [
      "Greece Golden Visa benefits",
      "Greek Golden Visa benefits",
      "Golden Visa Greece benefits",
      "Greek Golden Visa advantages",
      "Greece Golden Visa residence permit",
      "Golden Visa Greece Schengen travel",
      "Greece Golden Visa family",
      "Greek Golden Visa family benefits",
      "Greece Golden Visa five year residence",
      "Golden Visa Greece residency",
      "Greece residency by investment",
      "Greek residency by investment",
      "Golden Visa Greece investment",
    ],

    alternates: {
      canonical,
      languages: {
        en: "https://goldenvisagreece.org/en/program/benefits",
        ru: "https://goldenvisagreece.org/ru/program/benefits",
        "x-default": "https://goldenvisagreece.org/en/program/benefits",
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

      title: isRussian
        ? "Преимущества Золотой визы Греции | Greece Golden Visa"
        : "Greek Golden Visa Benefits | Greece Golden Visa",

      description,
    },

    twitter: {
      card: "summary_large_image",

      title: isRussian
        ? "Преимущества Золотой визы Греции | Greece Golden Visa"
        : "Greek Golden Visa Benefits | Greece Golden Visa",

      description,
    },
  };
}

export default function ResidencyBenefitsPage() {
  return <BenefitsContent />;
}