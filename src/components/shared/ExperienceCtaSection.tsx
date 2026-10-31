"use client";

import Image from "next/image";
import Link from "next/link";
import { whatsappHref } from "@/data/site";
import whatsappIcon from "@/public/whatsappLogo.svg";
import { AnimatedSectionHeader } from "@/components/shared/AnimatedSectionHeader";
import { FadeIn } from "@/components/shared/FadeIn";
import { cn } from "@/lib/utils";

const GOLD_BG = "#C8A867";

export type ExperienceCtaSectionData = {
  eyebrow?: string;
  heading: string;
  para: string;
  primaryCtaLabel?: string;
  whatsappLabel?: string;
  whatsappMessage?: string;
};

export type ExperienceCtaSectionProps = ExperienceCtaSectionData & {
  onPrimaryClick: () => void;
  primaryCtaClass?: string;
  className?: string;
  showWhatsApp?: boolean;
};

export function ExperienceCtaSection({
  eyebrow,
  heading,
  para,
  primaryCtaLabel = "Tell Us You're Interested →",
  whatsappLabel = "WhatsApp us",
  whatsappMessage = "Hi Sairr — I'd like to talk about a journey.",
  onPrimaryClick,
  primaryCtaClass,
  className,
  showWhatsApp = true,
}: ExperienceCtaSectionProps) {
  return (
    <section
      className={cn("px-4 py-8 sm:px-6 sm:py-20 lg:px-8 lg:py-12", className)}
      style={className?.includes("bg-") ? undefined : { backgroundColor: GOLD_BG }}
    >
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow ? (
          <FadeIn>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#EAA850] sm:text-xs">
              {eyebrow}
            </p>
          </FadeIn>
        ) : null}
        <AnimatedSectionHeader
          heading={heading}
          description={para}
          headingClassName="font-heading text-[1.75rem] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
          descriptionClassName="-mt-2 md:mt-0 max-w-2xl text-white/95 sm:text-lg"
        />

        <FadeIn delay={0.15}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-5">
            <button
              type="button"
              onClick={onPrimaryClick}
              className={cn(
                primaryCtaClass,
                "inline-flex h-12 w-[11rem] cursor-pointer items-center justify-center rounded bg-[#ec575e] px-6 text-sm font-semibold text-white transition-opacity hover:bg-[#dc4850] hover:opacity-90",
              )}
            >
              {primaryCtaLabel}
            </button>

            {showWhatsApp && (
              <Link
                href={whatsappHref(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-[11rem] items-center justify-center gap-2 rounded border border-gray-300 bg-white px-6 text-sm font-semibold text-black opacity-70 transition-opacity hover:bg-gray-100 hover:opacity-90"
              >
                <Image
                  src={whatsappIcon}
                  alt=""
                  width={22}
                  height={22}
                  className="size-[22px] shrink-0"
                  aria-hidden
                />
                {whatsappLabel}
              </Link>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
