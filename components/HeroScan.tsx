export default function HeroScan() {
  return (
    <div className="relative overflow-hidden border border-white/20 bg-forest-2 text-paper">
      <svg viewBox="0 0 640 520" className="h-auto w-full" role="img" aria-label="LEAKScan-IQ diagnostic overlay on a building elevation">
        <rect width="640" height="520" fill="#0A3D7A" />
        <g opacity="0.22" stroke="#ffffff" strokeWidth="1">
          {Array.from({ length: 14 }, (_, i) => (
            <line key={`v${i}`} x1={40 * i} y1="0" x2={40 * i} y2="520" />
          ))}
          {Array.from({ length: 13 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={40 * i} x2="640" y2={40 * i} />
          ))}
        </g>
        <rect x="90" y="70" width="360" height="400" fill="#ffffff" stroke="#4DA3FF" />
        {Array.from({ length: 5 }, (_, row) =>
          Array.from({ length: 3 }, (_, col) => (
            <rect
              key={`${row}-${col}`}
              x={120 + col * 100}
              y={100 + row * 70}
              width="64"
              height="44"
              fill={row === 2 && col === 1 ? "#D6EBFF" : "#F4F8FC"}
              stroke="#1677D0"
            />
          )),
        )}
        <path d="M90 70 L270 18 L450 70" fill="#E8F3FF" stroke="#4DA3FF" />
        <circle cx="322" cy="268" r="34" fill="none" stroke="#0A3D7A" strokeWidth="2" />
        <line x1="322" y1="234" x2="322" y2="302" stroke="#0A3D7A" />
        <line x1="288" y1="268" x2="356" y2="268" stroke="#0A3D7A" />
        <path d="M70 330 C140 300 180 360 250 340 C320 320 360 380 430 350" fill="none" stroke="#4DA3FF" strokeDasharray="6 6" />
        <circle cx="430" cy="350" r="6" fill="#4DA3FF" />
        <text x="448" y="354" fill="#ffffff" fontSize="12">
          suspected zone
        </text>
        <rect x="480" y="90" width="130" height="160" fill="#082F5E" stroke="#4DA3FF" />
        <text x="494" y="114" fill="#D6EBFF" fontSize="11">
          THERMAL
        </text>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x="498"
            y={128 + i * 22}
            width={90 - i * 8}
            height="12"
            fill={i === 2 ? "#ffffff" : "#4DA3FF"}
            opacity={0.9 - i * 0.1}
          />
        ))}
      </svg>
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="scan-line absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-white/25 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A3D7A] to-transparent p-4 text-xs tracking-wide text-paper/80">
        LEAKScan-IQ surface scan · moisture overlay · not an X-ray of the wall
      </div>
    </div>
  );
}
