export default function HeroScan() {
  return (
    <div className="hero-inspect relative isolate overflow-hidden border border-white/20 bg-forest-2 text-paper">
      <div className="hero-inspect-viewport relative aspect-[5/4] w-full overflow-hidden">
        <div className="hero-wall absolute inset-0">
          <BuildingScene />
          <div className="hero-scan-beam pointer-events-none absolute inset-x-0 top-0 h-20" />
          <div className="hero-reticle pointer-events-none absolute left-[48%] top-[54%] h-24 w-24 -translate-x-1/2 -translate-y-1/2">
            <span className="absolute inset-0 rounded-full border border-scan/80" />
            <span className="absolute left-1/2 top-0 h-full w-px bg-scan/70" />
            <span className="absolute left-0 top-1/2 h-px w-full bg-scan/70" />
          </div>
        </div>

        <div className="hero-pipe absolute inset-0">
          <PipeScene />
        </div>

        <p className="hero-status hero-status-scan pointer-events-none absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[0.18em] text-scan">
          Scanning surface
        </p>
        <p className="hero-status hero-status-lock pointer-events-none absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[0.18em] text-scan">
          Moisture zone locked
        </p>
        <p className="hero-status hero-status-zoom pointer-events-none absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[0.18em] text-scan">
          Zooming to pipeline
        </p>
        <p className="hero-status hero-status-found pointer-events-none absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9ee7ff]">
          Pipeline leak confirmed
        </p>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061a38] to-transparent p-4 text-xs tracking-wide text-paper/80">
        Scanner finds the stain, then zooms to the pipe that is actually leaking.
      </div>
    </div>
  );
}

function BuildingScene() {
  return (
    <svg
      viewBox="0 0 640 520"
      className="h-full w-full"
      role="img"
      aria-label="Building scan locating a hidden leak"
    >
      <defs>
        <linearGradient id="wall" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f7fbff" />
          <stop offset="100%" stopColor="#d9e8f8" />
        </linearGradient>
        <radialGradient id="wet" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4da3ff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#4da3ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="520" fill="#0A3D7A" />
      <g opacity="0.18" stroke="#ffffff" strokeWidth="1">
        {Array.from({ length: 16 }, (_, i) => (
          <line key={`v${i}`} x1={40 * i} y1="0" x2={40 * i} y2="520" />
        ))}
        {Array.from({ length: 14 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={40 * i} x2="640" y2={40 * i} />
        ))}
      </g>
      <rect x="88" y="78" width="370" height="392" fill="url(#wall)" stroke="#4DA3FF" />
      {Array.from({ length: 5 }, (_, row) =>
        Array.from({ length: 3 }, (_, col) => (
          <rect
            key={`${row}-${col}`}
            x={118 + col * 104}
            y={108 + row * 68}
            width="68"
            height="42"
            fill={row === 2 && col === 1 ? "#c5e0ff" : "#eef5fc"}
            stroke="#1677D0"
          />
        )),
      )}
      <path d="M88 78 L273 22 L458 78" fill="#E8F3FF" stroke="#4DA3FF" />
      <ellipse cx="308" cy="286" rx="58" ry="42" fill="url(#wet)" />
      <path
        d="M70 330 C140 300 180 360 250 340 C320 320 360 380 430 350"
        fill="none"
        stroke="#4DA3FF"
        strokeDasharray="6 6"
      />
      <circle className="source-pulse" cx="308" cy="286" r="7" fill="#4DA3FF" />
      <text x="338" y="270" fill="#ffffff" fontSize="12">
        suspected zone
      </text>
      <rect x="486" y="92" width="128" height="168" fill="#082F5E" stroke="#4DA3FF" />
      <text x="500" y="116" fill="#D6EBFF" fontSize="11">
        THERMAL
      </text>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x="504"
          y={132 + i * 22}
          width={96 - i * 10}
          height="12"
          fill={i === 2 ? "#ffffff" : "#4DA3FF"}
          opacity={0.95 - i * 0.12}
        />
      ))}
    </svg>
  );
}

function PipeScene() {
  return (
    <svg
      viewBox="0 0 640 520"
      className="h-full w-full"
      role="img"
      aria-label="Close-up of a leaking pipe joint inside the wall"
    >
      <defs>
        <linearGradient id="slab" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1a4f8c" />
          <stop offset="100%" stopColor="#0b2c58" />
        </linearGradient>
        <linearGradient id="pipe" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#cfd8e3" />
          <stop offset="50%" stopColor="#8a97a8" />
          <stop offset="100%" stopColor="#5c6a7a" />
        </linearGradient>
        <radialGradient id="spray" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#9ee7ff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4da3ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="520" fill="url(#slab)" />
      <g opacity="0.12" stroke="#fff">
        {Array.from({ length: 8 }, (_, i) => (
          <line key={i} x1={80 * i} y1="0" x2={80 * i + 80} y2="520" />
        ))}
      </g>
      <rect x="0" y="168" width="640" height="78" fill="url(#pipe)" />
      <rect x="0" y="176" width="640" height="10" fill="#ffffff" opacity="0.25" />
      <rect x="268" y="148" width="104" height="118" rx="12" fill="#6b7888" stroke="#dce6f2" />
      <circle cx="320" cy="206" r="18" fill="#3a4552" />
      <ellipse cx="352" cy="248" rx="46" ry="28" fill="url(#spray)" />
      <g className="hero-drip">
        <circle cx="360" cy="262" r="5" fill="#9ee7ff" />
      </g>
      <g className="hero-drip hero-drip-2">
        <circle cx="372" cy="278" r="4" fill="#4da3ff" />
      </g>
      <g className="hero-drip hero-drip-3">
        <circle cx="348" cy="286" r="3.5" fill="#c8f2ff" />
      </g>
      <path
        d="M352 248 C390 270 410 310 418 360"
        fill="none"
        stroke="#9ee7ff"
        strokeWidth="2"
        strokeDasharray="3 6"
        opacity="0.8"
      />
      <rect x="40" y="390" width="240" height="86" fill="#061a38" stroke="#4DA3FF" />
      <text x="54" y="416" fill="#D6EBFF" fontSize="12">
        SOURCE LOCKED
      </text>
      <text x="54" y="438" fill="#ffffff" fontSize="14">
        Joint leak on supply line
      </text>
      <text x="54" y="458" fill="#9ee7ff" fontSize="11">
        Behind tile · not the ceiling stain
      </text>
      <rect x="420" y="40" width="180" height="70" fill="#061a38" stroke="#4DA3FF" />
      <text x="434" y="68" fill="#ffffff" fontSize="13">
        MAGNIFIED PIPE
      </text>
      <text x="434" y="90" fill="#4DA3FF" fontSize="11">
        4.2× wall cross-section
      </text>
    </svg>
  );
}
