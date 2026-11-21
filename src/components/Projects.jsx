import { projects } from '../data'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

const host = (u) => { try { return new URL(u).hostname.replace('www.', '') } catch { return u } }

// Translate the screenshot's aspect ratio into how far it scrolls on hover.
const CARD_W = 480
const PREVIEW_H = 260
const scrollEnd = (ar) => -(1 - Math.min(PREVIEW_H / (CARD_W * ar), 1)) * 100

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="section__inner">
        <SectionHead
          label="My work"
          title="Selected work"
          text="Real, live websites I built for clients. Click any project to visit the site."
          center
        />
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 140} from={i % 2 ? 'right' : 'left'}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="card project"
                style={{ '--scroll-end': `${scrollEnd(p.aspectRatio)}%` }}>
                <div className="project__browser">
                  <span /><span /><span />
                  <div className="project__url">https://{host(p.url)}</div>
                </div>
                <div className="project__shot">
                  <img src={p.image} alt={`${p.name} homepage`} loading="lazy" />
                </div>
                <div className="project__body">
                  <p className="project__type">{p.type}</p>
                  <h3>{p.name}</h3>
                  <p className="project__desc">{p.description}</p>
                  <div className="project__foot">
                    <div className="pills">{p.tags.map((t) => <span className="pill pill--sm" key={t}>{t}</span>)}</div>
                    <span className="project__link">Visit ↗</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
