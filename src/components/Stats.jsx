import { experience, projects, certifications, profile } from '../data'

const stats = [
  { value: profile.experience.split(' ')[0], label: 'Years of experience' },
  { value: `${projects.length}`, label: 'Featured projects' },
  { value: `${experience.length}`, label: 'Companies worked with' },
  { value: `${certifications[0]?.detail.match(/^\d+%/)?.[0] ?? '100%'}`, label: 'Certification score' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__inner">
        {stats.map((s) => (
          <div className="stats__item" key={s.label}>
            <span className="stats__value">{s.value}</span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
