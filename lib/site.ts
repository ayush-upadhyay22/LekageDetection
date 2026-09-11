export const site = {
  name: "LEAKScan-IQ",
  legalName: "LEAKScan-IQ",
  tagline: "Find the source. Fix the cause. Protect the property.",
  description:
    "LEAKScan-IQ provides water leakage detection, dampness inspection, seepage detection, thermal inspection, and property diagnostics for homes, societies, and commercial buildings in Indore, Bhopal, Ahmedabad, and Mumbai.",
  url: "https://ayush-upadhyay22.github.io/LekageDetection",
  email: "leakscaniq@gmail.com",
  phoneDisplay: "+91 88399 70150",
  phoneTel: "+918839970150",
  whatsapp: "918839970150",
  hours: "Mon–Sat, 9:00–19:00 IST",
  region: "India",
  upiId: "8839970150@ybl",
  keywords: [
    "LEAKScan-IQ",
    "water leakage detection",
    "water leakage detection near me",
    "dampness inspection",
    "seepage detection",
    "underground leak detection",
    "thermal leak detection",
    "property inspection",
    "bathroom leakage inspection",
    "water leakage detection Indore",
    "water leakage detection Bhopal",
    "water leakage detection Ahmedabad",
    "water leakage detection Mumbai",
  ],
} as const;

export const inspectionPackages = [
  {
    id: "apartment",
    name: "Apartment / flat",
    amount: 1499,
    blurb: "Focused wet-area and adjoining-ceiling inspection.",
  },
  {
    id: "house",
    name: "Independent house / villa",
    amount: 2499,
    blurb: "Interior wet rooms plus accessible terrace and plumbing.",
  },
  {
    id: "commercial",
    name: "Society / commercial",
    amount: 3999,
    blurb: "Scoped visit for offices, shops, or common areas.",
  },
] as const;

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
    text ?? "Hello LEAKScan-IQ — I would like to book a water leakage inspection.",
  );
  return `https://wa.me/${site.whatsapp}?text=${encoded}`;
};

export const telHref = `tel:${site.phoneTel}`;

export function upiPayHref(amount: number, note: string) {
  const query = new URLSearchParams({
    pa: site.upiId,
    pn: site.legalName,
    am: String(amount),
    cu: "INR",
    tn: note.slice(0, 50),
  });
  return `upi://pay?${query.toString()}`;
}