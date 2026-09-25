const BASE_URL = "https://goldenvisagreece.org";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}