export type Service = {
  slug: string;
  name: string;
  short: string;
  summary: string;
  who: string;
  method: string;
  outcome: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "water-leakage-detection",
    name: "Water Leakage Detection",
    short: "Locate concealed plumbing and building leaks before demolition.",
    summary:
      "A structured investigation of unexplained water, wet patches, and pressure loss. We combine visual survey with moisture mapping and, where useful, thermal or acoustic methods to narrow the likely source.",
    who: "Homeowners, societies, hotels, and facilities teams facing unexplained water or recurring repairs.",
    method:
      "We start with the visible symptom, then work backward through likely paths: bathrooms above, concealed pipes, roofs, tanks, and drainage. Methods are chosen for the property, not applied as a one-size kit.",
    outcome:
      "A documented set of observations, suspected zones, and recommended next steps so repair work can be targeted rather than speculative.",
    related: ["dampness-inspection", "underground-leak-detection", "seepage-detection"],
  },
  {
    slug: "dampness-inspection",
    name: "Dampness Inspection",
    short: "Map moisture in walls, ceilings, and floors to understand why it returns.",
    summary:
      "Recurring damp patches are often a symptom. This inspection looks at moisture distribution, likely moisture paths, and whether the pattern points to leakage, condensation, or rising damp.",
    who: "Residents seeing peeling paint, musty rooms, or stains that return after painting.",
    method:
      "Surface moisture readings, pattern mapping, and visual review of adjacent wet areas. Thermal imaging may be used to highlight cooler, moisture-related surfaces when conditions allow.",
    outcome:
      "A moisture map, likely cause categories, and a plan that distinguishes cosmetic covering from source control.",
    related: ["seepage-detection", "water-leakage-detection"],
  },
  {
    slug: "seepage-detection",
    name: "Seepage Detection",
    short: "Investigate water movement through walls, slabs, and joints.",
    summary:
      "Seepage often travels laterally. We inspect joints, wet rooms, external faces, and slab interfaces to understand how water is reaching the visible stain.",
    who: "Apartment owners with stains on shared walls, ceilings below bathrooms, or terrace-related dampness.",
    method:
      "Visual tracing, moisture comparison across surfaces, and selective diagnostic tools depending on access and construction type.",
    outcome:
      "Suspected seepage paths and a written recommendation for further opening-up or waterproofing review if needed.",
    related: ["dampness-inspection", "waterproofing-assessment"],
  },
  {
    slug: "thermal-inspection",
    name: "Thermal Inspection",
    short: "Use infrared imaging to highlight temperature patterns that may relate to moisture.",
    summary:
      "Infrared cameras do not see through walls. They show surface temperature differences. Those differences can, in the right conditions, help mark zones worth investigating for moisture or concealed plumbing issues.",
    who: "Clients who want a non-destructive first pass before opening finishes.",
    method:
      "Controlled thermal survey of relevant rooms, comparison with moisture readings, and interpretation against building layout.",
    outcome:
      "Annotated thermal frames plus a plain-language explanation of what the patterns may and may not mean.",
    related: ["water-leakage-detection", "property-inspection"],
  },
  {
    slug: "underground-leak-detection",
    name: "Underground Leak Detection",
    short: "Investigate suspected buried or concealed pipeline leakage with acoustic methods where suitable.",
    summary:
      "Buried leaks rarely show at the exact failure point. We review pressure symptoms, wet ground, tank and supply lines, then apply acoustic or ultrasonic listening where the site allows.",
    who: "Villa and campus owners, societies, and industrial sites with unexplained water loss or wet soil.",
    method:
      "Site history, isolation of sections where possible, and acoustic/ultrasonic investigation along likely pipe routes. Results are probabilistic, not a guarantee of a single pin-drop.",
    outcome:
      "A marked investigation corridor and documented confidence notes for excavation or repair planning.",
    related: ["water-leakage-detection"],
  },
  {
    slug: "bathroom-leakage-inspection",
    name: "Bathroom Leakage Inspection",
    short: "Focus on wet rooms: fixtures, concealed lines, floors, and the ceiling below.",
    summary:
      "Bathrooms are the most common source of apartment leakage. We inspect fixtures, visible connections, grout and floor condition, and the space below when accessible.",
    who: "Apartment residents, landlords, and buyers reviewing a flat before or after handover.",
    method:
      "Room-by-room wet-area survey, moisture checks on adjoining walls and ceilings, and thermal or acoustic support if the pattern is unclear.",
    outcome:
      "A bathroom-specific findings sheet with suspected zones ranked by evidence strength.",
    related: ["water-leakage-detection", "construction-quality-inspection"],
  },
  {
    slug: "property-inspection",
    name: "Property Inspection",
    short: "Condition review for purchase, handover, rental, or resale decisions.",
    summary:
      "A structured walkthrough of accessible areas covering water-related risk, visible workmanship, and notable defects that affect livability or negotiation.",
    who: "Buyers, sellers, tenants, and property managers who need a written snapshot of condition.",
    method:
      "Checklist-led visual inspection with moisture sampling in high-risk rooms. Specialized leak diagnostics can be added if symptoms are present.",
    outcome:
      "A condition report with photographs, observations, and suggested follow-up items.",
    related: ["construction-quality-inspection", "water-leakage-detection"],
  },
  {
    slug: "pre-purchase-inspection",
    name: "Pre-Purchase Inspection",
    short: "Independent eyes on a flat or house before you commit.",
    summary:
      "Buying a property without checking wet rooms, terrace drainage, and visible plumbing is a common source of later cost. This visit is designed for decision support, not for selling a repair package.",
    who: "Home buyers and their advisors during due diligence.",
    method:
      "Time-boxed inspection of accessible interiors and exteriors with emphasis on bathrooms, kitchens, terraces, and signs of historic dampness.",
    outcome:
      "A concise report you can share with the seller, society, or your legal advisor.",
    related: ["property-inspection", "construction-quality-inspection"],
  },
  {
    slug: "construction-quality-inspection",
    name: "Construction Quality Inspection",
    short: "Visual review of workmanship, plumbing, wet areas, and waterproofing details.",
    summary:
      "We document visible construction quality: alignment, wet-area detailing, plumbing fixtures, flooring, walls, and ceilings. Structural opinions are limited to visual observations, not hidden engineering calculations.",
    who: "Buyers at handover, builders seeking a third-party check, and facility managers taking over a site.",
    method:
      "Room-wise visual scoring with photographs. Leak diagnostics are recommended separately if active moisture is found.",
    outcome:
      "A punch-style report of observations, severity tags, and recommended specialist follow-up where needed.",
    related: ["property-inspection", "waterproofing-assessment"],
  },
  {
    slug: "waterproofing-assessment",
    name: "Waterproofing Assessment",
    short: "Review existing waterproofing performance and suspected failure points.",
    summary:
      "Before repeating waterproofing coats, it helps to know whether the failure is at a joint, drain, upstand, or a leak from another system. We inspect accessible waterproofed surfaces and related interiors.",
    who: "Societies, terrace owners, and contractors planning targeted repair rather than blanket recoating.",
    method:
      "Visual survey of waterproofed areas, drainage, and corresponding interiors, with moisture and thermal support when useful.",
    outcome:
      "Suspected failure points and a recommended investigation or repair sequence. We do not sell a specific coating brand.",
    related: ["seepage-detection", "construction-quality-inspection"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
