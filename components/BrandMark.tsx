export default function BrandMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="LEAKScan-IQ"
    >
      <rect width="64" height="64" rx="12" fill="#0A3D7A" />
      <path
        d="M32 12c-7 8.5-13 15-13 22.5a13 13 0 1 0 26 0C45 27 39 20.5 32 12Z"
        fill="#ffffff"
      />
      <path
        d="M26 36.5c1.2 3.2 3.6 5 6.5 5"
        fill="none"
        stroke="#1677D0"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M14 52h36" fill="none" stroke="#4DA3FF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
