import { experience, otherExperience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section section--tint-blue">
      <div className="section__inner">
        <div className="section__heading">
          <p className="section__label">Experience</p>
          <h2>Where I've worked</h2>
        </div>

        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline__item" key={job.company}>
              <div className="timeline__marker" />
              <div className="timeline__content">
                <div className="timeline__top">
                  <h3>{job.role}</h3>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <p className="timeline__company">{job.company}</p>
                <ul>
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="other-exp">
          <h3>{otherExperience.title}</h3>
          <p>{otherExperience.description}</p>
        </div>
      </div>
    </section>
  )
}
