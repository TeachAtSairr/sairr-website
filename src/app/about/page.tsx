import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";
import { PuriCta, type ExperienceCtaSectionData } from "@/components/puri/PuriCta";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Sairr — Our Story & Mission",
  description:
    "Meet the founder behind Sairr and learn why we're building thoughtful travel experiences for travellers over 50 and families across India.",
  path: "/about",
});

const aboutCtaSectionData: ExperienceCtaSectionData = {
  eyebrow: "START A CONVERSATION",
  heading: "The best way to know us is to talk to us.",
  para: "Curious about Sairr, or have a journey in mind? We'd love to hear from you.",
  primaryCtaLabel: "Get a Callback",
  whatsappLabel: "WhatsApp us",
  whatsappMessage: "Hi Sairr — I'd like to talk about travelling with Sairr.",
};

const beliefs = [
  {
    icon: "/about-us/writing-note.svg",
    iconWidth: 35,
    iconHeight: 27,
    title: "What we believe",
    paragraphs: [
      "Most people have a trip they've been meaning to take. For travellers over 50 in India, it can stay on the list for years.",
      (
        <span key="p2">
          The hard part isn&apos;t finding a trip. It&apos;s finding the right people to go with, knowing what you&apos;re signing up for, and having someone to count on along the way.{" "}
          <span className="font-medium italic text-[#0E5E6F]">Too often, responsibility ends with the booking</span>, and quality stays an open question.
        </span>
      ),
      (
        <span key="p3">
          Sairr is built the other way round.{" "}
          <span className="font-medium italic text-[#0E5E6F]">We own the whole journey</span>, so the unknowns are ours to handle. A Sairr host goes with every journey. And a good trip should earn its price.
        </span>
      ),
      "Getting the details right is the least we owe you. Every journey is a small group of travellers at a similar stage of life, built around experiences, not a checklist of places. Come with family or friends, or come on your own. You'll be in good company either way.",
      (
        <span key="p5" className="block font-medium italic text-[#0E5E6F]">
          The trip is half of it. The people are the rest.
        </span>
      ),
    ],
  },
  {
    icon: "/about-us/fly-around-globe.svg",
    iconWidth: 37,
    iconHeight: 36,
    title: "Where we're starting",
    paragraphs: [
      (
        <span key="p1">
          <span className="font-medium italic text-[#0E5E6F]">We&apos;re starting with travellers over 50 because that&apos;s where we see the widest gap.</span>{" "}
          They have the time, the curiosity and the wish to see more. Yet most travel isn&apos;t built to give them the confidence to go. For many, a trip still waits for a son or daughter to find the time to plan it and see it through.
        </span>
      ),
      "We want to make travel easier to say yes to, and easier to do more often, while their families stay in the loop without having to run it.",
    ],
  },
  {
    icon: "/about-us/shining-star.svg",
    iconWidth: 44,
    iconHeight: 41,
    title: "Our ambition",
    paragraphs: [
      (
        <span key="p1">
          <span className="font-medium italic text-[#0E5E6F]">To build a human-led, technology-enabled travel company for travellers of every age</span>, bringing the right people together on experiential group journeys to discover new places and form lasting connections.
        </span>
      ),
      (
        <span key="p2">
          As we grow, we hold ourselves to two things:{" "}
          <span className="font-medium italic text-[#0E5E6F]">journeys that are worth it</span>, and{" "}
          <span className="font-medium italic text-[#0E5E6F]">service standards that stay high</span>.
        </span>
      ),
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        data-header-hero
        className="relative overflow-hidden"
      >
        <Image
          src="/about-us/AlpineRiversideTownInBloom.webp"
          alt="Alpine riverside town in bloom"
          width={4536}
          height={1740}
          priority
          sizes="100vw"
          className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-8 md:pt-20 text-center">
          <div className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)] sm:text-5xl md:text-6xl lg:text-[3.938rem]">
            Sairr (सैर)
          </div>
          <p className="mt-2 text-base font-normal italic text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:mt-3 sm:text-2xl md:text-3xl lg:text-4xl">
            A leisurely outing, simply for the joy of it.
          </p>
        </div>
      </section>

      {/* Beliefs & Mission Section */}
      <section className="bg-[#FDFBF2] py-[2.5rem] sm:py-[3.9rem] lg:py-[4.375rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {beliefs.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.1}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[260px_1fr] lg:grid-cols-[320px_1fr] md:gap-6 lg:gap-8 items-start">
                  <div className="flex items-start gap-3.5 sm:gap-4 md:pt-1">
                    <Image
                      src={item.icon}
                      alt=""
                      width={item.iconWidth}
                      height={item.iconHeight}
                      className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
                      aria-hidden
                    />
                    <h2 className="font-heading text-lg font-semibold leading-tight text-[#0E5E6F] sm:text-[1.375rem]">
                      {item.title}
                    </h2>
                  </div>
                  <div className="space-y-3 text-xs leading-relaxed text-[#5D5D5D] sm:space-y-4 sm:text-sm lg:text-[1rem] lg:leading-[1.4rem]">
                    {item.paragraphs.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Note Section */}
      <section id="note-from-founder" className="bg-[#FDFBF2] pb-20 sm:pb-24 lg:pb-28 scroll-mt-12 md:scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl border border-[#E9DFC8] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] sm:rounded-3xl sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr] lg:gap-12 items-start">
                <div>
                  <div className="relative aspect-[780/675] w-full overflow-hidden rounded-xl sm:rounded-2xl">
                    <Image
                      src="/about-us/tanmay.webp"
                      alt="Tanmay Khandelwal"
                      width={780}
                      height={675}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 sm:mt-6 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[#1b1d1f] text-base sm:text-lg">
                        Tanmay Khandelwal
                      </p>
                      <p className="text-[0.813rem] italic text-black">
                        Founder, Sairr
                      </p>
                    </div>
                    <Link
                      href="https://www.linkedin.com/in/tanmay-khandelwal-7486a5a3"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Tanmay Khandelwal on LinkedIn"
                      className="text-[#0A66C2] transition-transform hover:scale-110"
                    >
                      <Image
                        src="/about-us/linkedin.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="size-6 shrink-0"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </div>

                <div className="scroll-mt-24">
                  <div className="text-xl font-semibold text-[#0E5E6F] sm:text-[1.375rem]">
                    A note from the founder
                  </div>
                  <div className="mt-2.5 mb-5 h-0.5 w-12 bg-[#C8A867]" />
                  <div className="space-y-4 text-xs leading-relaxed text-[#5D5D5D] sm:space-y-5 sm:text-sm lg:text-[1rem] lg:leading-[1.3rem]">
                    <p>
                      I&apos;ve always wanted my parents to travel more and experience more of India and beyond. But finding a trip was never the challenge. Finding one I&apos;d genuinely feel confident sending them on was.
                    </p>
                    <p>
                      And I wasn&apos;t alone. Through conversations with friends, families and travellers, I kept hearing variations of the same concern.
                    </p>
                    <p>
                      So I&apos;m building what I wished existed: a travel company that brings the care, accountability and attention to detail I&apos;d want for my own family.
                    </p>
                    <p>
                      I&apos;ve spent 10 years building trust-led consumer startups. Sairr is my attempt to bring that same standard to travel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Teal CTA Section */}
      <PuriCta
        className="!bg-[#0E5E6F]"
        sectionData={aboutCtaSectionData}
        notifyDestination="Puri & Bhubaneswar"
        intent="callback"
        ctaPage="about"
        hrefTxt="Hi, I'd like to know more about travelling with Sairr."
      />
    </>
  );
}
