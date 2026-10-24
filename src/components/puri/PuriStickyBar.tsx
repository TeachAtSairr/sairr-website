"use client";

import type { TravelDestination } from "@/lib/validations/contact";
import { scrollToSectionId, stripHashFromUrl } from "@/lib/section-nav";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function scrollToPricingDates() {
  stripHashFromUrl();
  scrollToSectionId("pricing-dates");
}

export function PuriStickyBar({
  priceLabel: _priceLabel,
  notifyDestination: _notifyDestination,
  ctaPage: _ctaPage = "puri",
}: {
  priceLabel: string;
  notifyDestination: TravelDestination;
  ctaPage?: string;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) setIsVisible(false);
      if (currentScrollY < lastScrollY.current) setIsVisible(true);
      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-[#ec575e] px-4 py-4 backdrop-blur-lg transition-transform duration-200 md:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        type="button"
        onClick={scrollToPricingDates}
        className="flex w-full items-center justify-center gap-3 text-base font-bold text-white"
      >
        Check Pricing &amp; Dates <ArrowUpRight className="w-5 h-5 mb-1 -ml-1" />
      </button>
    </div>
  );
}
