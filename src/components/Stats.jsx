import { useEffect, useState } from 'react'
import useInView from './useInView'

const STATS = [
  { to: 5, suffix: '+', label: 'Years building for the web' },
  { to: 24, suffix: '/7', label: 'Automations work while you sleep' },
  { to: 20000, suffix: '+', label: 'Images cleaned on one live site' },
  { to: 100, suffix: '%', label: 'WordPress expert certification score' },
]

function Counter({ to, suffix, run }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf
    const start = performance.now()
    const dur = 1400
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1)
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, to])
  return <>{v.toLocaleString()}{suffix}</>
}

export default function Stats() {
  const [ref, inView] = useInView()
  return (
    <section className="stats" ref={ref}>
      <div className="stats__inner">
        {STATS.map((s, i) => (
          <div className={`stats__item reveal reveal--up ${inView ? 'is-in' : ''}`} style={{ transitionDelay: `${i * 90}ms` }} key={s.label}>
            <span className="stats__value"><Counter {...s} run={inView} /></span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
