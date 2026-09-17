import { certifications, education } from '../data'

export default function Credentials() {
  return (
    <section id="credentials" className="section section--tint-blue">
      <div className="section__inner credentials">
        <div className="credentials__col">
          <div className="section__heading">
            <p className="section__label">Certifications</p>
            <h2>Verified skills</h2>
          </div>
          {certifications.map((cert) => (
            <div className="credential-card credential-card--cert" key={cert.name}>
              {cert.image && (
                <div className="credential-card__image">
                  <img src={cert.image} alt={`${cert.name} certificate`} loading="lazy" />
                </div>
              )}
              <div className="credential-card__text">
                <h3>{cert.name}</h3>
                <p className="credential-card__meta">{cert.issuer} · {cert.date}</p>
                <p className="credential-card__detail">{cert.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="credentials__col">
          <div className="section__heading">
            <p className="section__label">Education</p>
            <h2>Academic background</h2>
          </div>
          {education.map((ed) => (
            <div className="credential-card credential-card--wide" key={ed.degree}>
              <div className="credential-card__text">
                <h3>{ed.degree}</h3>
                <p className="credential-card__meta">{ed.school}</p>
              </div>
              <span className="credential-card__period">{ed.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
