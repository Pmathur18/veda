import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vedaimpex.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/cookies-policy",
    "/export-process",
    "/legal-documents",
    "/privacy-policy",
    "/products",
    "/terms-and-conditions",
  ];

  const sitemapEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic product routes
  const productRoutes = [
    "psyllium-husk",
    "psyllium-powder",
    "senna-leaves",
  ];

  const productEntries = productRoutes.map((id) => ({
    url: `${baseUrl}/products/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...sitemapEntries, ...productEntries];
}
