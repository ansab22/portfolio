// Decorative flowing line art used behind the hero and section dividers —
// echoes the "light trail" look referenced from the Local Cable Provider site,
// rendered in the brand's blue/gold instead of teal.

// Deterministic pseudo-random generator so the network layout is stable
// across renders instead of reshuffling on every re-render.
function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

function buildNetwork(count, seed) {
  const rand = seededRandom(seed)
  const points = Array.from({ length: count }, () => ({
    x: rand() * 1200,
    y: rand() * 700,
  }))
  const lines = []
  points.forEach((p, i) => {
    const nearest = points
      .map((q, j) => ({ j, d: Math.hypot(p.x - q.x, p.y - q.y) }))
      .filter((d) => d.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2)
    nearest.forEach(({ j }) => {
      const key = [i, j].sort((a, b) => a - b).join('-')
      if (!lines.some((l) => l.key === key)) {
        lines.push({ key, x1: p.x, y1: p.y, x2: points[j].x, y2: points[j].y })
      }
    })
  })
  return { points, lines }
}

const NETWORK = buildNetwork(46, 11)

// A faint, slowly-rotating connectivity mesh spanning the full hero section —
// nodes joined by lines, rotating gently around the section's center.
export function NetworkGlobe() {
  return (
    <svg
      className="network-globe"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g className="network-globe__spin" style={{ transformOrigin: '600px 350px' }}>
        {NETWORK.lines.map((l) => (
          <line
            key={l.key}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            className="network-globe__line"
          />
        ))}
        {NETWORK.points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={i % 7 === 0 ? 3.4 : 2}
            className={`network-globe__node ${i % 7 === 0 ? 'network-globe__node--gold' : ''}`}
          />
        ))}
      </g>
    </svg>
  )
}

// A sparser version of the same mesh, used as a light textured backdrop for
// non-hero sections. `variant` swaps the palette to echo that section's tint.
const MESH_CACHE = new Map()

export function MeshBackdrop({ count = 16, seed = 3, variant = 'blue' }) {
  const cacheKey = `${count}-${seed}`
  if (!MESH_CACHE.has(cacheKey)) {
    MESH_CACHE.set(cacheKey, buildNetwork(count, seed))
  }
  const { points, lines } = MESH_CACHE.get(cacheKey)

  return (
    <svg
      className={`network-globe network-globe--sparse network-globe--${variant}`}
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g className="network-globe__spin" style={{ transformOrigin: '600px 350px' }}>
        {lines.map((l) => (
          <line key={l.key} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} className="network-globe__line" />
        ))}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={i % 6 === 0 ? 3 : 1.8}
            className={`network-globe__node ${i % 6 === 0 ? 'network-globe__node--accent' : ''}`}
          />
        ))}
      </g>
    </svg>
  )
}

export function HeroLines() {
  return (
    <svg
      className="deco-lines deco-lines--hero"
      viewBox="0 0 1200 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E5BA8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#1E5BA8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGold" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5B800" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#F5B800" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        className="deco-lines__path deco-lines__path--1"
        d="M50,420 C220,340 260,180 470,190 C660,200 640,380 860,360 C1020,345 1040,220 1180,180"
        stroke="url(#lineBlue)"
        strokeWidth="2.5"
      />
      <path
        className="deco-lines__path deco-lines__path--2"
        d="M120,520 C300,470 340,610 560,560 C760,515 780,650 980,600 C1080,575 1100,500 1190,470"
        stroke="url(#lineGold)"
        strokeWidth="2"
      />
      <path
        className="deco-lines__path deco-lines__path--3"
        d="M0,220 C160,120 280,260 420,150 C560,40 620,190 760,120"
        stroke="url(#lineBlue)"
        strokeWidth="1.5"
      />
      <circle className="deco-lines__dot" cx="470" cy="190" r="4" fill="#F5B800" />
      <circle className="deco-lines__dot deco-lines__dot--2" cx="860" cy="360" r="3.5" fill="#1E5BA8" />
      <circle className="deco-lines__dot deco-lines__dot--3" cx="560" cy="560" r="3.5" fill="#F5B800" />
    </svg>
  )
}

export function SectionDivider({ flip = false }) {
  return (
    <svg
      className={`deco-divider ${flip ? 'deco-divider--flip' : ''}`}
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,40 C200,80 300,0 500,30 C700,60 800,10 1000,35 C1100,48 1150,30 1200,20"
        stroke="url(#dividerGradient)"
        strokeWidth="2"
        fill="none"
      />
      <defs>
        <linearGradient id="dividerGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E5BA8" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#F5B800" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#1E5BA8" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  )
}
