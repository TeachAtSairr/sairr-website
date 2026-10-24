/** Pending in-page scroll after a client navigation (consumed in SiteChrome). */
export const SECTION_SCROLL_STORAGE_KEY = "section-scroll-target";

const LEGACY_HEADER_SCROLL_KEY = "header-scroll-target";
const LEGACY_FOOTER_SCROLL_KEY = "footer-scroll-target";

export function scrollToSectionId(
  sectionId: string,
  behavior: ScrollBehavior = "smooth",
) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior });
}

/** Section jumps are handled in JS — keep `/#…` out of the address bar. */
export function stripHashFromUrl() {
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${window.location.search}`,
  );
}

export function scheduleSectionScroll(sectionId: string) {
  window.sessionStorage.setItem(SECTION_SCROLL_STORAGE_KEY, sectionId);
}

export function consumeScheduledSectionScroll(): string | null {
  const legacy =
    window.sessionStorage.getItem(LEGACY_HEADER_SCROLL_KEY) ??
    window.sessionStorage.getItem(LEGACY_FOOTER_SCROLL_KEY);
  if (legacy) {
    window.sessionStorage.removeItem(LEGACY_HEADER_SCROLL_KEY);
    window.sessionStorage.removeItem(LEGACY_FOOTER_SCROLL_KEY);
    return legacy;
  }

  const sectionId = window.sessionStorage.getItem(SECTION_SCROLL_STORAGE_KEY);
  if (sectionId) {
    window.sessionStorage.removeItem(SECTION_SCROLL_STORAGE_KEY);
  }
  return sectionId;
}

export function navigateToPageSection(
  path: string,
  sectionId: string,
  pathname: string,
  push: (href: string) => void,
) {
  if (pathname === path) {
    stripHashFromUrl();
    scrollToSectionId(sectionId);
    return;
  }

  scheduleSectionScroll(sectionId);
  push(path);
}
