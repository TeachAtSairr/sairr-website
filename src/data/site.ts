export const siteConfig = {
  name: "Sairr",
  title: "Sairr: Travel designed for life after 50",
  legalName: "Meenadeep Experiences Pvt Ltd",
  tagline: "Travel designed for life after 50",
  description:
    "Thoughtfully designed journeys with 4-star+ stays, handpicked experiences, a dedicated host and door-to-door care.",
  url: "https://sairr.in",
  phone: "+91 99717 37186",
  email: "hello@sairr.in",
  whatsapp: "919971737186",
  address: "Gurgaon, India",
  social: {
    instagram: "https://www.instagram.com/sairr.in?igsh=Znk3cDZpbG4ydDdi",
    linkedin: "https://www.linkedin.com/company/sairr/about/?viewAsMember=true",
    youtube: "https://youtube.com/@sairrofficial?si=26XU80RM031WizL5",
  },
} as const;

export function phoneHref() {
  return `tel:${siteConfig.phone.replace(/\s/g, "")}`;
}

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const homeHeroHref = "/#home";

export const navLinks = [
  { href: homeHeroHref, label: "Home" },
  { href: "/#destinations", label: "Destinations" },
  { href: "/why-sairr", label: "Why Sairr" },
  { href: "/about", label: "About" },
] as const;

export const exploreLinks = [
  { href: "/#destinations", label: "Destinations" },
  { href: "/why-sairr", label: "Why Sairr" },
  { href: "/about", label: "About Sairr" },
] as const;

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/cancellation", label: "Cancellation and Refund Policy" },
] as const;
