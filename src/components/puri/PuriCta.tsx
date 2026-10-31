"use client";

import {
  ExperienceCtaSection,
  type ExperienceCtaSectionData,
} from "@/components/shared/ExperienceCtaSection";
import { useContactFormDialog } from "@/components/forms/ContactFormDialogProvider";
import { ctaClass } from "@/lib/cta";
import type { ContactFormIntent, TravelDestination } from "@/lib/validations/contact";

export type { ExperienceCtaSectionData };

export type PuriCtaProps = {
  sectionData: ExperienceCtaSectionData;
  notifyDestination?: TravelDestination;
  intent?: ContactFormIntent;
  ctaPage?: string;
  className?: string;
  hrefTxt?: string;
  showWhatsApp?: boolean;
};

export function PuriCta({
  sectionData,
  notifyDestination = "Puri & Bhubaneswar",
  intent = "private-journey",
  ctaPage = "puri",
  className,
  hrefTxt,
  showWhatsApp = true,
}: PuriCtaProps) {
  const { openContactForm } = useContactFormDialog();
  const bottomCta = ctaClass(ctaPage, "bottom-cta", "primary");

  return (
    <ExperienceCtaSection
      {...sectionData}
      className={className}
      primaryCtaClass={bottomCta}
      showWhatsApp={showWhatsApp}
      onPrimaryClick={() =>
        openContactForm({
          destination: notifyDestination,
          intent,
          ctaClass: bottomCta,
        })
      }
      whatsappMessage={hrefTxt}
    />
  );
}
