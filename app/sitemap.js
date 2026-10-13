import { BASE_URL } from "./const";

const baseUrl = BASE_URL.replace(/\/+$/, "");

export default function sitemap() {
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/doctors", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/testimonials", priority: 0.6, changeFrequency: "monthly" },
    { path: "/faqs", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blogs", priority: 0.8, changeFrequency: "weekly" },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path || "/"}`,
    changeFrequency,
    priority,
  }));
}
