import { certifications, education } from '../data'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Credentials() {
  return (
    <section id="credentials" className="section">
      <div className="section__inner credentials">
        <div>
          <SectionHead label="Certification" title="Verified skills" />
          {certifications.map((c) => (
            <Reveal key={c.name} className="card cert" from="left">
              {c.image && <img src={c.image} alt={`${c.name} certificate`} loading="lazy" />}
              <div>
                <h3>{c.name}</h3>
                <p className="muted">{c.issuer} · {c.date}</p>
                <p className="cert__score">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div>
          <SectionHead label="Education" title="Academic background" />
          {education.map((e) => (
            <Reveal key={e.degree} className="card edu" from="right">
              <h3>{e.degree}</h3>
              <p className="muted">{e.school}</p>
              <span className="edu__period">{e.period}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
