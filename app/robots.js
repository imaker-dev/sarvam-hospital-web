import { BASE_URL } from "./const";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${BASE_URL.replace(/\/+$/, "")}/sitemap.xml`,
  };
}
