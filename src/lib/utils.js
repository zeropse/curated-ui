import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getSiteImageSrc(site) {
  return `/images/${site.imageSlug}.jpg`;
}

export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function filterSites(sitesList, { category = "All", query = "" } = {}) {
  const q = query?.trim().toLowerCase();
  if (!sitesList) return [];
  return sitesList.filter((site) => {
    const matchesCategory = category === "All" || site.category === category;
    if (!matchesCategory) return false;

    if (q) {
      return (
        site.name.toLowerCase().includes(q) ||
        site.description.toLowerCase().includes(q) ||
        site.category.toLowerCase().includes(q)
      );
    }
    return true;
  });
}
