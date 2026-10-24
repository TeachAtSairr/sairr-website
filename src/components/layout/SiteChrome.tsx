"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { FloatingCallProvider } from "@/components/layout/FloatingCallContext";
import { Header } from "@/components/layout/Header";
import {
  consumeScheduledSectionScroll,
  scrollToSectionId,
} from "@/lib/section-nav";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const sectionId = consumeScheduledSectionScroll();
    if (!sectionId) return;

    const frame = window.requestAnimationFrame(() => {
      scrollToSectionId(sectionId);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <FloatingCallProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCallButton />
    </FloatingCallProvider>
  );
}
