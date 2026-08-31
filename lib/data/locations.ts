export type Location = {
  slug: string;
  city: string;
  state: string;
  blurb: string;
  problems: string[];
  localities: string[];
};

export const locations: Location[] = [
  {
    slug: "indore",
    city: "Indore",
    state: "Madhya Pradesh",
    blurb:
      "Apartment towers, independent houses, and commercial interiors across Indore, with a focus on bathroom leakage, terrace seepage, and concealed plumbing.",
    problems: [
      "Ceiling stains under bathrooms in older apartment societies",
      "Terrace and parapet seepage after monsoon",
      "Concealed wall-pipe leakage in compact 2BHK and 3BHK flats",
    ],
    localities: [
      "Vijay Nagar",
      "Scheme 54",
      "Palasia",
      "Rajendra Nagar",
      "Bhawarkuan",
      "New Palasia",
    ],
  },
  {
    slug: "bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    blurb:
      "Inspection visits for residential colonies, government and private offices, and lakeside properties where dampness and plumbing faults are often misread as surface issues.",
    problems: [
      "Rising damp on ground-floor walls",
      "Bathroom leakage into the flat below",
      "Roof and parapet moisture after heavy rain",
    ],
    localities: [
      "Arera Colony",
      "MP Nagar",
      "Kolar Road",
      "Berasia Road",
      "Shahpura",
      "Habibganj",
    ],
  },
  {
    slug: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    blurb:
      "Diagnostics for high-rise apartments, bungalows, and commercial floors, including wet-area detailing typical of newer construction and older inner-city buildings.",
    problems: [
      "Recurring bathroom floor leakage",
      "Shaft and concealed plumbing faults",
      "Terrace waterproofing that fails at drains and upstands",
    ],
    localities: [
      "Satellite",
      "Bodakdev",
      "Navrangpura",
      "Maninagar",
      "SG Highway",
      "Gota",
    ],
  },
  {
    slug: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    blurb:
      "Coastal humidity, stacked wet rooms, and high-rise plumbing make Mumbai properties a frequent case for non-invasive leak investigation before breaking tiles.",
    problems: [
      "Inter-floor bathroom leakage in towers",
      "External wall seepage in monsoon months",
      "Concealed plumbing in compact bathrooms",
    ],
    localities: [
      "Andheri",
      "Bandra",
      "Powai",
      "Thane",
      "Navi Mumbai",
      "Worli",
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
