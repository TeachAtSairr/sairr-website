import type { DestinationPageContent } from "@/data/destinationPages";
import { puriLpPage } from "@/data/puriLP";

const landingPages: DestinationPageContent[] = [
  puriLpPage,
];

export function getLandingPage(slug: string): DestinationPageContent | undefined {
  return landingPages.find((page) => page.slug === slug);
}

export function getLandingPageParams(): { slug: string }[] {
  return landingPages.map((page) => ({ slug: page.slug }));
}
