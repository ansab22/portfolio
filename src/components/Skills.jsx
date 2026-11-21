import { skills } from '../data'
import Icon from './Icons'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="section__inner">
        <SectionHead label="Skills" title="Tools I work with" center />
        <div className="skills">
          {skills.map((g, i) => (
            <Reveal key={g.category} delay={i * 100} className="card skill">
              <div className="skill__top">
                <div className="card__icon card__icon--small"><Icon name={g.icon} /></div>
                <h3>{g.category}</h3>
              </div>
              <div className="pills">
                {g.items.map((it) => <span className="pill" key={it}>{it}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
