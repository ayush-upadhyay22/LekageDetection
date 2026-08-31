export const site = {
  name: "Aperture",
  legalName: "Aperture Inspection",
  tagline: "Find the source. Fix the cause. Protect the property.",
  description:
    "Technology-first water leakage detection, dampness inspection, and property diagnostics for homes, societies, and commercial buildings.",
  url: "https://aperture.example",
  email: "inspect@aperture.example",
  phoneDisplay: "+91 98765 43210",
  phoneTel: "+919876543210",
  whatsapp: "919876543210",
  hours: "Mon–Sat, 9:00–19:00 IST",
  region: "India",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/sample-report", label: "Report" },
  { href: "/blog", label: "Journal" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export const whatsappHref = (text?: string) => {
  const encoded = encodeURIComponent(
    text ?? "Hello Aperture — I would like to book a property inspection.",
  );
  return `https://wa.me/${site.whatsapp}?text=${encoded}`;
};

export const telHref = `tel:${site.phoneTel}`;
