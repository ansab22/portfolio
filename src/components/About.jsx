import { about, profile } from '../data'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

const INTRO_VIDEO_ID = '4GO7DFhKkNU'

const FACTS = [
  { k: 'Experience', v: '5+ years' },
  { k: 'Clients in', v: 'USA, UK & Europe' },
  { k: 'Time zones', v: 'Overlap with US & UK hours' },
  { k: 'Replies', v: 'Within 24 hours' },
  { k: 'Status', v: 'Available for new projects', ok: true },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section__inner about">
        <div className="about__side">
          <SectionHead label="About me" title="Your developer for websites and smart automation" />
          <Reveal className="card facts" from="left">
            <p className="facts__title">Quick facts</p>
            <dl>
              {FACTS.map((f) => (
                <div className="facts__row" key={f.k}>
                  <dt>{f.k}</dt>
                  <dd className={f.ok ? 'is-ok' : ''}>{f.ok && <span className="pulse" />}{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <div className="about__body">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 100}><p>{p}</p></Reveal>
          ))}
          <Reveal className="about__video" delay={200}>
            <p className="about__video-label">▶ Watch a short introduction from {profile.name.split(' ')[1]}</p>
            <div className="about__video-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${INTRO_VIDEO_ID}`}
                title="Muhammad Ansab — introduction video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
