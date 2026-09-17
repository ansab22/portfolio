import profileImg from '../assets/profile.jpg'
import { profile } from '../data'
import { NetworkGlobe } from './Decor'
import { TypedName } from './TypedName'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <NetworkGlobe />
      <div className="hero__inner">
        <div className="hero__text">
          <p className="eyebrow">{profile.experience} experience</p>
          <h1 className="hero__name" aria-label={profile.name}>
            <TypedName text={profile.name} />
          </h1>
          <p className="hero__title">
            {profile.title} <span className="dot">/</span> {profile.subtitle}
          </p>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              See my work
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero__visual hero__visual--solo">
          <div className="photo-orbit">
            <span className="photo-orbit__ring photo-orbit__ring--1" />
            <span className="photo-orbit__ring photo-orbit__ring--2" />
            <span className="photo-orbit__ring photo-orbit__ring--3" />
            <div className="photo-orbit__inner">
              <img src={profileImg} alt={`Portrait of ${profile.name}`} />
            </div>
            <span className="photo-orbit__badge">
              <span className="photo-orbit__badge-dot" /> Available for work
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
