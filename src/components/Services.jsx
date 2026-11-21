import { services } from '../data'
import Icon from './Icons'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

function tilt(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
}

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section__inner">
        <SectionHead
          label="Services"
          title="What I can build for you"
          text="One developer for your website, your web app and the AI automations that connect them."
          center
        />
        <div className="services">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className={`card service ${i === 0 ? 'service--featured' : ''}`} onMouseMove={tilt}>
              {i === 0 && <span className="service__tag">Most requested</span>}
              <div className="card__icon"><Icon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="ticks">
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
