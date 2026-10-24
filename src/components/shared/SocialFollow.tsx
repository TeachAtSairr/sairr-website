import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    href: siteConfig.social.instagram,
    label: "@sairr.in",
    icon: "/contact/inta.svg",
  },
  {
    href: siteConfig.social.youtube,
    label: "@SairrOfficial",
    icon: "/contact/youtube.svg",
  },
  {
    href: siteConfig.social.linkedin,
    label: "Sairr",
    icon: "/contact/linkedin.svg",
  },
] as const;

function SocialLinkItem({
  href,
  label,
  icon,
  iconClassName,
  labelClassName,
}: {
  href: string;
  label: string;
  icon: string;
  iconClassName: string;
  labelClassName: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-0.5 text-center transition-opacity hover:opacity-80 sm:gap-1.5"
    >
      <Image
        src={icon}
        alt=""
        width={56}
        height={56}
        aria-hidden
        className={iconClassName}
      />
      <span className={labelClassName}>{label}</span>
    </a>
  );
}

type SocialFollowProps = {
  className?: string;
};

export function SocialFollow({ className }: SocialFollowProps) {
  return (
    <section
      className={cn(
        "mx-3 mb-10 rounded-lg bg-[#F5F0E1] px-3 py-4 sm:mx-6 sm:px-8 sm:py-6 md:py-7 lg:mx-auto lg:mb-16 lg:max-w-6xl lg:px-12",
        className,
      )}
    >
      <FadeIn>
        <div className="flex flex-row items-center justify-evenly">
          <div className="min-w-0">
            <h2
              className="font-heading text-base font-semibold leading-tight text-[#1a1a1a] sm:text-[1.75rem] lg:text-4xl"
            >
              Follow along
            </h2>
            <p className="mt-0.5 text-[8px] leading-snug text-[#5d5d5d] sm:mt-1 sm:text-sm lg:text-base">
              See what Sairr is all about
            </p>
          </div>
          <div className="relative w-px shrink-0 self-center" aria-hidden>
            <div
              className="absolute left-0 top-1/2 h-12 w-px -translate-y-1/2 bg-[#EC575E] sm:h-14 lg:h-24"
            />
          </div>
          {socialLinks.map((link) => (
            <SocialLinkItem
              key={link.href}
              {...link}
              iconClassName="size-8 sm:size-12 lg:size-14"
              labelClassName="text-[9px] leading-tight text-[#5d5d5d] sm:text-sm"
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
