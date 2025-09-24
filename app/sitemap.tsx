import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.filaquin.com/", lastModified: new Date() },
    // add other URLs if you have them
  ];
}
