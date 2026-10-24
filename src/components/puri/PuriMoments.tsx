"use client";

import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { CardRevealCarouselItem } from "@/components/shared/CardReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { CarouselSection } from "@/components/shared/CarouselSection";
import { cn } from "@/lib/utils";
import { type PuriMomentCard } from "@/components/puri/puriMomentsData";

const MOMENT_CARD_WIDTH_PX = 306.38;

function MomentCard({ moment }: { moment: PuriMomentCard }) {
  return (
    <article className="group flex h-full w-full flex-col bg-white p-3.5 sm:p-5 lg:h-[468.83px] lg:w-[306.38px] lg:p-7">
      <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-charcoal/5">
        <Image
          src={moment.image}
          alt={moment.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 233px"
        />
      </div>
      <p className="mt-3 text-xs leading-relaxed text-[#5d5d5d] sm:mt-4 sm:text-sm lg:mt-5 lg:text-[16px]">
        <span className="font-bold text-charcoal">{moment.title}</span>{" "}
        {moment.line}
      </p>
    </article>
  );
}

export function PuriMoments({
  heading,
  cards,
  flush = false,
}: {
  heading: string;
  cards: PuriMomentCard[];
  flush?: boolean;
}) {

  return (
    <section className=" bg-[#FDFBF2]">
      <div
        className={cn(
          "py-6 sm:py-16 lg:pb-10 lg:pt-16",
          flush
            ? "w-full"
            : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        )}
      >
        <FadeIn className="text-center">
          <TextReveal
            as="h2"
            text={heading}
            className="font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl"
          />
        </FadeIn>

        <div className="mt-4 sm:mt-6">
          <CarouselSection
            trackWrapperClassName={cn(
              "overflow-hidden bg-[#E9DFC8] py-6 sm:py-8",
              flush
                ? "-mx-4 pl-4 pr-0 sm:-mx-6 lg:mx-0"
                : "-mx-4 pl-4 pr-0 sm:-mx-6 lg:-mx-8 lg:pl-8 lg:pr-0",
            )}
            slideClassName="py-2 last:mr-4 sm:last:mr-6 lg:last:mr-8"
            gap={{ mobile: 12, tablet: 20, desktop: 20 }}
            fixedSlideWidthLg={MOMENT_CARD_WIDTH_PX}
            items={cards}
            getKey={(item) => item.id}
            renderItem={(item, index) => (
              <CardRevealCarouselItem
                index={index}
                direction="left"
                stagger={0.1}
                revealOnScroll={false}
                className="h-full bg-transparent"
              >
                <MomentCard moment={item} />
              </CardRevealCarouselItem>
            )}
            slidesPerView={{ mobile: 1.15, tablet: 2, desktop: 3 }}
            ariaLabel="Moments that make Puri"
            autoplay={false}
            showDots
            controlsPosition="split"
            controlsClassName="mt-5"
            previousButtonClassName="size-8 rounded border border-charcoal/15 bg-white text-charcoal transition-colors hover:border-charcoal/30 hover:bg-white disabled:cursor-not-allowed disabled:opacity-35 [&_svg]:size-5"
            nextButtonClassName="size-8 rounded border border-charcoal/15 bg-white text-charcoal transition-colors hover:border-charcoal/30 hover:bg-white disabled:cursor-not-allowed disabled:opacity-35 [&_svg]:size-5"
          />
        </div>
      </div>
    </section>
  );
}
