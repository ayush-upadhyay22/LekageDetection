export const site = {
  name: "Aperture",
  legalName: "Aperture Inspection",
  tagline: "Find the source. Fix the cause. Protect the property.",
  description:
    "Technology-first water leakage detection, dampness inspection, and property diagnostics for homes, societies, and commercial buildings.",
  url: "https://ayush-upadhyay22.github.io/LekageDetection",
  email: "ayushupadhyay22@gmail.com",
  phoneDisplay: "+91 88399 70150",
  phoneTel: "+918839970150",
  whatsapp: "918839970150",
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
