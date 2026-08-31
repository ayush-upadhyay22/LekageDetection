export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "find-water-leak-without-breaking-walls",
    title: "How to investigate a water leak before you break a wall",
    category: "Water Leakage",
    excerpt:
      "A stain is a symptom. Opening tiles first often misses the path the water actually took.",
    date: "2026-04-12",
    body: [
      "Most households start with a hammer because the stain is on a wall they can reach. Water, however, often travels along a slab, a pipe chase, or a joint before it appears. Breaking the stained finish can destroy evidence and still miss the source.",
      "A better sequence is to record when the moisture appears, inspect the wet room above or adjacent, compare moisture readings, and only then decide whether a small opening is justified. Thermal patterns on surfaces can help mark a zone; they cannot promise a pipe location by themselves.",
      "If you are mid-repair, pause cosmetic covering until the active path is understood. Paint over a live leak and the same patch usually returns.",
    ],
  },
  {
    slug: "why-dampness-keeps-coming-back",
    title: "Why dampness keeps coming back after painting",
    category: "Dampness",
    excerpt:
      "Fresh paint hides a stain. It does not stop moisture that is still moving through the assembly.",
    date: "2026-05-03",
    body: [
      "Paint and putty fail when moisture remains in the substrate. Recurrence after a ‘full scrape and repaint’ is a signal to look for leakage, seepage, condensation, or rising damp rather than workmanship of the painter alone.",
      "Look at timing: after showers, after rain, or constantly. Look at neighbours: the bathroom above, the shaft, the terrace. Patterns matter more than a single wet photograph.",
      "An inspection report should say what category of moisture is likely and what would falsify that idea. If nobody can explain why the wall is wet, painting is a delay, not a fix.",
    ],
  },
  {
    slug: "signs-of-hidden-bathroom-leakage",
    title: "Five signs of hidden bathroom leakage",
    category: "Home Inspection",
    excerpt:
      "Wet rooms fail quietly. These clues are worth a structured inspection rather than another round of grout.",
    date: "2026-06-18",
    body: [
      "A ceiling stain in the room below a bathroom is the classic clue, but it is not the only one. Soft grout, hollow-sounding floor tiles, musty cabinets, and paint failure on the wall behind a shower also deserve attention.",
      "Another sign is a water bill or tank refill rate that does not match occupancy. That may point beyond the bathroom to a supply line, but bathrooms remain the first place to look in stacked apartments.",
      "None of these signs prove a single joint has failed. They justify a moisture and plumbing review before you retile the entire floor.",
    ],
  },
  {
    slug: "thermal-imaging-in-building-inspection",
    title: "How thermal imaging actually helps in a building inspection",
    category: "Waterproofing",
    excerpt:
      "Infrared is a temperature camera. Used carefully, it is useful. Used as a magic trick, it is marketing.",
    date: "2026-07-09",
    body: [
      "A thermal camera reports surface temperature. Moisture can cool a surface through evaporation; a concealed pipe may change a local pattern; a thermal bridge can look dramatic and still be dry. Interpretation needs context: weather, HVAC, time of day, and moisture meter checks.",
      "We use infrared to decide where to look next, not as a stand-alone verdict. Annotated frames belong in the report with a sentence on what they might mean.",
      "If a vendor claims the camera sees through concrete to a leaking joint, treat that as a claim to question, not a specification.",
    ],
  },
  {
    slug: "checks-before-buying-a-flat",
    title: "Things to check before buying a flat",
    category: "Property Buying",
    excerpt:
      "A walkthrough that only looks at finishes will miss the water-related costs that show up after you move in.",
    date: "2026-08-21",
    body: [
      "Visit bathrooms, the kitchen wet wall, and any terrace attached to the unit. Look at the ceiling of the flat if you can understand what sits above you. Ask the society about historic leakage in the stack.",
      "Cosmetic renovation can hide historic dampness. A moisture check and a written observation list are more useful in a price negotiation than a verbal ‘looks fine’.",
      "Construction quality at handover is a separate exercise: fixtures, slopes to drains, and visible plumbing. If the unit is still being finished, book the inspection when water is actually available to the fittings.",
    ],
  },
];

export const blogCategories = [
  "Water Leakage",
  "Dampness",
  "Waterproofing",
  "Home Inspection",
  "Construction Quality",
  "Property Buying",
  "Maintenance",
] as const;

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
