"use client";

import type { TravelDestination } from "@/lib/validations/contact";

function scrollToPricingDates() {
  document.getElementById("pricing-dates")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
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
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-[#ec575e] px-4 py-3 backdrop-blur-lg md:hidden">
      <button
        type="button"
        onClick={scrollToPricingDates}
        className="flex w-full items-center justify-center gap-3 text-sm font-bold text-white"
      >
        Check Pricing &amp; Dates
      </button>
    </div>
  );
}
