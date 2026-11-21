import { education } from '../data'
import Icon from './Icons'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section__inner section__inner--narrow">
        <SectionHead label="Education" title="Academic background" center />
        {education.map((e) => (
          <Reveal key={e.degree} from="zoom" className="card edu2">
            <span className="edu2__icon"><Icon name="cap" /></span>
            <div className="edu2__main">
              <h3>{e.degree}</h3>
              <p className="muted">{e.school}</p>
            </div>
            <span className="edu2__period">{e.period}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
