// Tiny inline flags (emoji flags don't render on Windows).
export function FlagUS() {
  return (
    <svg viewBox="0 0 30 20" className="flag" aria-hidden="true">
      <rect width="30" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => <rect key={i} y={i * 1.54} width="30" height="1.54" fill="#b22234" />)}
      <rect width="13" height="10.8" fill="#3c3b6e" />
      {[2, 5, 8, 11].map((x) => [2.4, 5.4, 8.4].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.7" fill="#fff" />))}
    </svg>
  )
}
export function FlagUK() {
  return (
    <svg viewBox="0 0 30 20" className="flag" aria-hidden="true">
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0 30 20M30 0 0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0 30 20M30 0 0 20" stroke="#c8102e" strokeWidth="1.6" />
      <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0v20M0 10h30" stroke="#c8102e" strokeWidth="3.4" />
    </svg>
  )
}
export function FlagEU() {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2
    return <circle key={i} cx={15 + Math.cos(a) * 6} cy={10 + Math.sin(a) * 6} r="0.95" fill="#ffcc00" />
  })
  return (
    <svg viewBox="0 0 30 20" className="flag" aria-hidden="true">
      <rect width="30" height="20" fill="#003399" />
      {stars}
    </svg>
  )
}

export function ClientsBadge({ big = false }) {
  return (
    <div className={`clients ${big ? 'clients--big' : ''}`}>
      <span className="clients__label">Working with clients in</span>
      <span className="clients__list">
        <span className="clients__chip"><FlagUS /> USA</span>
        <span className="clients__chip"><FlagUK /> UK</span>
        <span className="clients__chip"><FlagEU /> Europe</span>
      </span>
    </div>
  )
}
