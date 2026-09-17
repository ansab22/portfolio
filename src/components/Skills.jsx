import { skills } from '../data'

const ICONS = {
  WordPress: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M4 10.5h16M6 14.5l3 5.5M18 14.5l-3 5.5M9 4.5l3 15 3-15" strokeLinecap="round" />
    </svg>
  ),
  Backend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="4" width="17" height="6" rx="1.5" />
      <rect x="3.5" y="14" width="17" height="6" rx="1.5" />
      <circle cx="7" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  Frontend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 8.5 4.5 12 8 15.5M16 8.5 19.5 12 16 15.5M13.5 5 10.5 19" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export default function Skills() {
  return (
    <section id="skills" className="section section--tint-gold">
      <div className="section__inner">
        <div className="section__heading">
          <p className="section__label">Skills</p>
          <h2>What I work with</h2>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skills-card" key={group.category}>
              <div className="skills-card__icon" aria-hidden="true">
                {ICONS[group.category] ?? ICONS.Frontend}
              </div>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
