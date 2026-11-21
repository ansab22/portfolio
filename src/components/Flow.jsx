import { flow, industries } from '../data'
import Icon from './Icons'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import useInView from './useInView'

const IND_ICONS = ['tooth', 'home', 'tool']

export default function Flow() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  return (
    <section id="automation" className="section section--alt">
      <div className="section__inner">
        <SectionHead
          label="How it works"
          title="From new lead to booked client, on autopilot"
          text="Most businesses lose leads simply because they reply too late. This is the system I set up so every lead gets an answer in seconds."
          center
        />

        <div ref={ref} className={`flow ${inView ? 'is-running' : ''}`}>
          <div className="flow__track"><span className="flow__fill" /><span className="flow__packet" /></div>
          {flow.map((f, i) => (
            <div className="flow__step" key={f.title} style={{ '--i': i }}>
              <div className="flow__node"><Icon name={f.icon} /><span className="flow__num">0{i + 1}</span></div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>

        <Reveal className="industries-head"><p className="eyebrow">Who I help</p><h3>Built for businesses that live on leads</h3></Reveal>
        <div className="industries">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 110} from="zoom" className="card industry">
              <div className="card__icon card__icon--small"><Icon name={IND_ICONS[i]} /></div>
              <div>
                <h3>{ind.title}</h3>
                <p>{ind.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
