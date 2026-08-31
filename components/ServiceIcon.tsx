import type { ReactNode } from "react";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-forest"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const icons: Record<string, ReactNode> = {
  "water-leakage-detection": (
    <Icon>
      <path d="M12 3c-3.2 4-6 7.2-6 10.2a6 6 0 0 0 12 0C18 10.2 15.2 7 12 3Z" />
    </Icon>
  ),
  "dampness-inspection": (
    <Icon>
      <rect x="4" y="4" width="16" height="16" />
      <path d="M4 14h16M9 4v16" />
    </Icon>
  ),
  "seepage-detection": (
    <Icon>
      <path d="M4 7h16M6 12h12M8 17h8" />
    </Icon>
  ),
  "thermal-inspection": (
    <Icon>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  ),
  "underground-leak-detection": (
    <Icon>
      <path d="M3 16c4-6 6-6 9-2s5 4 9 0" />
      <path d="M3 20h18" />
    </Icon>
  ),
  "bathroom-leakage-inspection": (
    <Icon>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h4" />
    </Icon>
  ),
  "property-inspection": (
    <Icon>
      <path d="M4 20V10l8-6 8 6v10" />
      <path d="M10 20v-6h4v6" />
    </Icon>
  ),
  "pre-purchase-inspection": (
    <Icon>
      <path d="M8 20V9l4-3 4 3v11" />
      <path d="M9 14h6" />
    </Icon>
  ),
  "construction-quality-inspection": (
    <Icon>
      <path d="M4 20h16M7 20V8l5-4 5 4v12" />
    </Icon>
  ),
  "waterproofing-assessment": (
    <Icon>
      <path d="M4 18c4-8 12-8 16 0" />
      <path d="M12 4v6" />
    </Icon>
  ),
};

export default function ServiceIcon({ slug }: { slug: string }) {
  return <span className="mb-4 inline-flex h-9 w-9 items-center justify-center border border-line">{icons[slug]}</span>;
}
