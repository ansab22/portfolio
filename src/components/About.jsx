import { about } from '../data'
import { MeshBackdrop } from './Decor'

const INTRO_VIDEO_ID = '4GO7DFhKkNU'

export default function About() {
  return (
    <section id="about" className="section section--tint-blue">
      <MeshBackdrop variant="blue" count={16} seed={4} />
      <div className="section__inner about">
        <div className="about__side">
          <div className="section__heading">
            <p className="section__label">About</p>
            <h2>Five years of shipping software that survives real traffic and real deadlines</h2>
          </div>
          <div className="about__highlight">
            <span className="about__highlight-value">20,000+</span>
            <span className="about__highlight-label">
              unmanaged images cleaned up with a custom-built solution on one production site
            </span>
          </div>
        </div>
        <div className="about__body">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="about__video">
            <p className="about__video-label">Watch a quick introduction</p>
            <div className="about__video-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${INTRO_VIDEO_ID}`}
                title="Muhammad Ansab — introduction video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
