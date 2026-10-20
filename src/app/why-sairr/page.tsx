import Image from "next/image";
import { whySairrFaqs } from "@/data/faqs";
import { CtaSection } from "@/components/home/CtaSection";
import { PuriFaqs } from "@/components/puri/PuriFaqs";
import { FadeIn } from "@/components/shared/FadeIn";
import { createMetadata } from "@/lib/seo";

const whatGetsInTheWay = [
  {
    icon: "/why-sairr/plan-yourself.svg",
    title: "Plan it yourself",
    description: "Juggling flights, stays, transfers and every detail",
  },
  {
    icon: "/why-sairr/travel-with-family.svg",
    title: "Travel with family",
    description: "Waiting for everyone's calendars to align",
  },
  {
    icon: "/why-sairr/group-tour.svg",
    title: "Join a conventional group tour",
    description: "Keeping pace with people at a different stage of life",
  },
  {
    icon: "/why-sairr/traditional-operator.svg",
    title: "Book through a traditional operator",
    description: "Wondering who has your back once the trip begins",
  },
] as const;

const onTripFeatures: {
  icon: string;
  label: string;
  text: string;
}[] = [
    { icon: "/destinations/seaside-view.svg", label: "Stays:", text: "every one 4-star and up" },
    {
      icon: "/destinations/seeting.svg",
      label: "Transport:",
      text: "well-maintained, never packed to the last seat",
    },
    {
      icon: "/destinations/food.svg",
      label: "Food:",
      text: "your dietary needs met all the way through",
    },
    {
      icon: "/destinations/profile.svg",
      label: "Sairr host:",
      text:
        "a trained host with you throughout, so you're never figuring it out alone",
    },
    {
      icon: "/destinations/car.svg",
      label: "Door-to-door:",
      text: "taken care of from the moment you leave home until you're back",
    },
  ];

const faqSection = {
  heading: "FAQS - Frequently Asked Questions",
  faqData: whySairrFaqs,
};

const ctaContent = {
  title: "There should always be another journey to look forward to.",
  description:
    "Don't let planning be the reason you say no. You just pack your bags. We'll handle the rest.",
  callbackLabel: "Get a Callback",
  whatsappLabel: "WhatsApp us",
};

export const metadata = createMetadata({
  title: "Why Sairr — How We Plan Thoughtful Travel",
  description:
    "Discover how Sairr combines safety, comfort, and family peace of mind to create travel experiences your loved ones will cherish.",
  path: "/why-sairr",
});

function SectionBullet() {
  return (
    <span
      className="mt-2 size-2.5 shrink-0 rounded-full bg-[#C8A867]"
      aria-hidden
    />
  );
}

export default function WhySairrPage() {
  return (
    <main className="bg-[#FDFBF2]">
      {/* Banner — fill + aspect ratio (see contact & thank-you pages) */}
      <section
        data-header-hero
        className="relative flex min-h-[440px] items-center justify-center overflow-hidden sm:min-h-[500px] md:min-h-[580px] lg:min-h-[620px] lg:aspect-[1512/572]"
      >
        <Image
          src="/why-sairr/why-sairr-banner.webp"
          alt="Scenic European town by the water"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 mx-auto max-w-5xl -translate-y-4 px-4 pb-6 pt-12 text-center text-white sm:-translate-y-6 sm:px-6 sm:pb-8 sm:pt-14 md:-translate-y-8 md:pb-8 md:pt-16 lg:-translate-y-10 lg:pb-8">
          <FadeIn>
            <h1 className="font-heading text-2xl font-semibold leading-tight text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)] sm:text-4xl md:text-5xl lg:text-[3.125rem] lg:leading-[1.18]">
              The desire to explore doesn&apos;t change.
              <br />
              What you want from travel does.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Overlapping intro card — positioned like thank-you & contact pages */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="-mt-20 overflow-hidden rounded-lg border border-[#E9DFC8]/90 bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.06)] sm:-mt-24 sm:p-6 md:-mt-32 md:p-7 lg:-mt-28 lg:py-2 lg:pl-6 lg:pr-2">
          <FadeIn>
            <div className="flex flex-row items-center justify-center gap-14">
              <div className="text-sm leading-relaxed text-[#5D5D5D] sm:text-base lg:text-[1.25rem] lg:leading-[1.5]">
                <p>
                  <span className="font-semibold italic text-[#0E5E6F]">
                    Sairr designs travel for life after 50
                  </span>
                  , around the person taking it: your pace and preferences, the
                  experiences you want, and the ones you&apos;d rather skip.
                  Every detail is worked out, from the first call to the flight
                  back home.
                </p>
                <p className="mt-4 font-bold text-[#0E5E6F] sm:mt-5">
                  So there&apos;s less to plan, and more to actually be in.
                </p>
              </div>
              <Image
                src="/why-sairr/Tropical-Beach-Stroll.webp"
                alt="Friends strolling along a tropical beach"
                width={410}
                height={213.07}
                className="object-cover rounded-lg"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* What gets in the way */}
      <section className="bg-[#FDFBF2] pt-12 pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative rounded-lg border border-[#C8A867] bg-[#FDFBF2] px-5 pb-8 pt-14 sm:px-8 sm:pb-10 sm:pt-16 md:pt-24 lg:pt-28">
              <div
                className="absolute left-1/2 top-0 flex max-w-[calc(100%-2rem)] -translate-x-2/3 -translate-y-1/2 items-center gap-3 bg-[#FDFBF2] px-3 sm:max-w-none sm:gap-4 sm:px-5"
              >
                <Image
                  src="/why-sairr/confused-couple.svg"
                  alt=""
                  width={98.93}
                  height={105.06}
                  className="w-[98.93px] h-[105.06px]"
                  aria-hidden
                />
                <h2 className="font-heading text-xl font-semibold text-black sm:text-2xl lg:text-[2.25rem]">
                  What gets in the way
                </h2>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16">
                {whatGetsInTheWay.map((item) => (
                  <div key={item.title} className="flex gap-4 sm:gap-5">
                    <Image
                      src={item.icon}
                      alt=""
                      width={62}
                      height={57}
                      className="object-contain"
                      aria-hidden
                    />
                    <div>
                      <p className="text-base font-semibold text-[#1b1d1f] sm:text-2xl">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-snug text-[#5D5D5D] sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gap Sairr fills */}
      <section className="relative overflow-hidden bg-[#0E5E6F] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl flex flex-row items-center justify-between">
          <FadeIn>
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-[2.313rem]">
                There should be another way.
                <br />
                Travel you can count on.
              </h2>
              <div className="mx-auto mt-8 h-[1px] w-20 bg-[#C8A867] lg:mx-0" />
              <p className="mt-8 text-lg font-medium text-[#C8A867] sm:text-3xl">
                That&apos;s the gap Sairr exists to fill.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Image
              src="/why-sairr/group-dinner-beach.webp"
              alt="Group enjoying dinner by the beach at sunset"
              width={354.79}
              height={280}
              className="object-cover w-[354.79px] h-[280px]"
            />
          </FadeIn>
        </div>
      </section>

      {/* How Sairr works */}
      <section className="bg-[#FDFBF2] pt-14 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-semibold text-black sm:text-4xl">
              How sairr works
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-base text-[#5D5D5D] sm:text-xl">
              Thought through before you leave. Taken care of until you&apos;re
              home.
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            <FadeIn>
              <div className="flex flex-row items-center justify-between gap-40">
                <div className="flex gap-3 sm:gap-4">
                  <SectionBullet />
                  <div className="text-sm leading-relaxed text-[#5D5D5D] sm:text-base lg:text-lg">
                    <h3 className="text-lg font-semibold text-[#1b1d1f] sm:text-2xl">
                      Before you book
                    </h3>
                    <p className="mt-4 text-sm md:text-base">
                      Before a trip opens for booking, every route, stay, transfer and itinerary is extensively vetted on the ground for pace, hygiene, food, amenities, location, timing, all of it.
                    </p>
                    <p className="mt-4 text-sm md:text-base">
                      Each trip is built as a whole, around how the days should feel. We plan for what&apos;s right, not what&apos;s easiest to sell.
                    </p>
                    <p className="mt-4 text-sm md:text-base">
                      You&apos;ll know who&apos;s coming along, what it costs and what&apos;s included.{" "}
                      <span className="font-medium italic text-[#0E5E6F]">
                        Nothing hidden.
                      </span>
                    </p>
                  </div>
                </div>
                <Image
                  src="/why-sairr/cab-service.webp"
                  alt="Sairr travellers greeted at the airport"
                  width={237}
                  height={205.83}
                  className="object-cover w-[237px] h-[205.83px]"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="mt-10 sm:mt-12 border-t-[1px] border-[#C8A867] py-10 sm:py-12 flex flex-row items-center justify-between gap-40">
                <div className="flex gap-3 sm:gap-4">
                  <SectionBullet />
                  <div className="text-sm leading-relaxed text-[#5D5D5D] sm:text-base lg:text-lg">
                    <h3 className="text-lg font-semibold text-[#1b1d1f] sm:text-xl">
                      On the trip
                    </h3>
                    <p className="mt-2 text-sm md:text-base">
                      We&apos;d rather go deep on a few hand-picked places than
                      wide across many.
                    </p>
                    <ul className="mt-4 space-y-3">
                      {onTripFeatures.map(({ icon, label, text }) => (
                        <li key={label} className="flex gap-3 md:gap-4">
                          <Image
                            src={icon}
                            alt=""
                            width={20}
                            height={20}
                            className="mt-0.5 size-6 shrink-0 text-[#5D5D5D]"
                          />
                          <span className="text-sm md:text-base">
                            <span className="font-semibold text-[#0E5E6F]">
                              {label}
                            </span>{" "}
                            {text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Image
                  src="/why-sairr/hotel-stay.webp"
                  alt="Sairr group with their host at a resort"
                  width={401.65}
                  height={262.12}
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="relative border-t-[1px] border-[#C8A867] py-10 sm:py-12 flex flex-row items-start justify-between gap-40">
                <Image
                  src="/why-sairr/two-birds.svg"
                  alt=""
                  width={103.79}
                  height={34}
                  className="w-[103.79px] h-auto pointer-events-none absolute bottom-4 left-0 hidden opacity-80 sm:block lg:bottom-8"
                  aria-hidden
                />
                <div className="flex gap-3 sm:gap-4">
                  <SectionBullet />
                  <div className="text-sm leading-relaxed text-[#5D5D5D] sm:text-base lg:text-lg">
                    <h3 className="text-lg font-semibold text-[#1b1d1f] sm:text-xl">
                      For your family
                    </h3>
                    <p className="mt-4">
                      Daily updates on how the trip is going, and a human point
                      of contact at Sairr if your family needs to reach us.
                    </p>
                  </div>
                </div>
                <Image
                  src="/why-sairr/update-for-family.webp"
                  alt="Family member receiving a trip update on their phone"
                  width={244.84}
                  height={226.78}
                  className="w-[244.84px] h-[226.78px]"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PuriFaqs {...faqSection} />

      <CtaSection
        backgroundImage="/why-sairr/ctaSectionBg.webp"
        content={ctaContent}
        hrefTxt="Hi, I'd like to know more about travelling with Sairr."
      />
    </main>
  );
}
