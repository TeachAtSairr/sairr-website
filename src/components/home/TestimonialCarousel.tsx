"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { cn } from "@/lib/utils";

const SLIDE_GAP_MOBILE_PX = 30;
const SLIDE_GAP_DESKTOP_PX = 40;

function getSlideGapPx() {
  if (typeof window === "undefined") return SLIDE_GAP_MOBILE_PX;
  return window.matchMedia("(min-width: 768px)").matches
    ? SLIDE_GAP_DESKTOP_PX
    : SLIDE_GAP_MOBILE_PX;
}

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  function updateNavigationState() {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setAtStart(carousel.scrollLeft <= 1);
    setAtEnd(
      carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 1,
    );

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (maxScroll > 0 && testimonials.length > 1) {
      setActiveDotIndex(
        Math.min(
          testimonials.length - 1,
          Math.max(
            0,
            Math.round(
              (carousel.scrollLeft / maxScroll) * (testimonials.length - 1),
            ),
          ),
        ),
      );
    } else {
      setActiveDotIndex(0);
    }
  }

  function scrollToDot(dotIndex: number) {
    const carousel = carouselRef.current;
    if (!carousel || testimonials.length <= 1) return;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const target =
      testimonials.length > 1
        ? (dotIndex / (testimonials.length - 1)) * maxScroll
        : 0;

    carousel.scrollTo({ left: target, behavior: "smooth" });
  }

  function scroll(direction: "previous" | "next") {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild as HTMLElement | null;
    if (!carousel || !firstCard) return;

    carousel.scrollBy({
      left:
        (firstCard.offsetWidth + getSlideGapPx()) *
          (direction === "next" ? 1 : -1),
      behavior: "smooth",
    });
  }

  useEffect(() => {
    updateNavigationState();
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new ResizeObserver(updateNavigationState);
    observer.observe(carousel);
    return () => observer.disconnect();
  }, [testimonials.length]);

  return (
    <div className="mt-8 md:mt-10">
      <div
        ref={carouselRef}
        onScroll={updateNavigationState}
        className="-mr-1 flex gap-5 overflow-x-auto scroll-smooth px-4 pb-5 pt-1 snap-x snap-mandatory scrollbar-none sm:-mr-6 md:gap-10 lg:-mr-8 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Traveller stories"
        aria-roledescription="carousel"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex w-[calc((100%-5px)/1.05)] shrink-0 snap-start sm:w-[calc((100%-40px)/2.15)] md:w-[calc((100%-80px)/2.15)] lg:w-[calc((100%-120px)/3.25)]"
          >
            <TestimonialCard testimonial={testimonial} variant="quote-first" />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center">
        <div className="flex items-center gap-2 md:hidden">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => scrollToDot(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                "size-2 rounded-full transition-all",
                activeDotIndex === i
                  ? "bg-[#C8A867]"
                  : "bg-[#E5DECE] hover:bg-[#C8A867]/60",
              )}
            />
          ))}
        </div>

        <div className="hidden items-center justify-center gap-3 md:flex">
          <button
            type="button"
            aria-label="Previous testimonial"
            disabled={atStart}
            onClick={() => scroll("previous")}
            className="flex size-8 cursor-pointer items-center justify-center rounded border border-charcoal/15 bg-white text-charcoal transition-colors hover:border-charcoal/30 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            disabled={atEnd}
            onClick={() => scroll("next")}
            className="flex size-8 cursor-pointer items-center justify-center rounded border border-charcoal/15 bg-white text-charcoal transition-colors hover:border-charcoal/30 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
