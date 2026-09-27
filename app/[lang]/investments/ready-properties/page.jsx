import ReadyPropertiesClient from "./ReadyPropertyClients";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isRussian = lang === "ru";

  const title = isRussian
    ? "Недвижимость для Золотой визы в Греции"
    : "Golden Visa Properties in Greece";

  const description = isRussian
    ? "Изучите готовые объекты недвижимости в Греции для инвесторов, рассматривающих Золотую визу, включая инвестиционные маршруты €250 000, €400 000 и €800 000."
    : "Explore ready-to-move properties in Greece for Golden Visa investors, including qualifying €250K, €400K and €800K investment routes and property opportunities.";

  const canonical = isRussian
    ? "https://goldenvisagreece.org/ru/investments/ready-properties"
    : "https://goldenvisagreece.org/en/investments/ready-properties";

  return {
    title,
    description,

    keywords: [
      "Golden Visa properties Greece",
      "Greece Golden Visa properties",
      "Golden Visa property investment Greece",
      "Greek Golden Visa property",
      "Golden Visa Greece property investment",
      "Golden Visa properties for sale Greece",
      "Greece residency by investment property",
      "Greek residency by investment property",
      "Greece Golden Visa €250K property",
      "Greece Golden Visa €400K property",
      "Greece Golden Visa €800K property",
      "ready to move properties Greece",
      "investment properties Greece",
      "Golden Visa real estate Greece",
    ],

    alternates: {
      canonical,
      languages: {
        en: "https://goldenvisagreece.org/en/investments/ready-properties",
        ru: "https://goldenvisagreece.org/ru/investments/ready-properties",
        "x-default":
          "https://goldenvisagreece.org/en/investments/ready-properties",
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
        ? "Недвижимость для Золотой визы в Греции | Greece Golden Visa"
        : "Golden Visa Properties in Greece | Greece Golden Visa",

      description,
    },

    twitter: {
      card: "summary_large_image",

      title: isRussian
        ? "Недвижимость для Золотой визы в Греции | Greece Golden Visa"
        : "Golden Visa Properties in Greece | Greece Golden Visa",

      description,
    },
  };
}

const PROPERTIES_QUERY = `
  *[
    _type == "property"
    && visibility == "Published"
  ] | order(_createdAt desc) {
    _id,
    title,
    mainImage,
    location,
    city,
    price,
    route,
    type,
    status,
    description,
    features,
    propertyUrl
  }
`;

export default async function ReadyPropertiesPage() {
  const sanityProperties = await client.fetch(
    PROPERTIES_QUERY,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const properties = sanityProperties.map((property) => ({
    id: property._id,

    title: property.title,

    location: property.location,

    city: property.city,

    price: property.price,

    route: property.route,

    type: property.type,

    status: property.status,

    image: property.mainImage
      ? urlFor(property.mainImage)
          .width(1200)
          .height(800)
          .fit("crop")
          .url()
      : "/images/properties/property-placeholder.jpg",

    description: property.description,

    features: property.features || [],

    propertyUrl: property.propertyUrl,
  }));

  return <ReadyPropertiesClient properties={properties} />;
}