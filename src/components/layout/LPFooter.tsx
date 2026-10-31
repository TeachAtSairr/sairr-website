import Image from "next/image";
import { siteConfig } from "@/data/site";

export function LPFooter() {
  return (
    <footer className="h-[10rem] border-t border-charcoal/10 bg-[#FDFBF2] text-[#5d5d5d]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <Image
              src="/sairr-logo.webp"
              alt={siteConfig.name}
              width={130.4}
              height={41.7}
              className="h-[22px] w-[68.8px] md:h-[26px] md:w-[81.25px]"
            />
            <p className="mt-1 text-xs sm:text-sm text-[#5d5d5d]">
              With you, wherever you go next.
            </p>
          </div>

          <div className="flex flex-col items-center gap-0.5 text-xs text-[#5d5d5d]/80 sm:items-end">
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p className="italic">Meenadeep Experiences Pvt. Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

