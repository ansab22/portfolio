import profileImg from '../assets/profile.jpg'
import { profile, terminalRun } from '../data'
import TypedRoles from './TypedRoles'
import Terminal from './Terminal'
import { ClientsBadge } from './Flags'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__badge"><span className="pulse" /> Available for new projects</p>
          <p className="hero__hello">Hi, I'm <strong>{profile.name}</strong></p>
          <h1 className="hero__title">
            <span className="grad">{profile.title.split(' & ')[0]}</span>
            <br />& {profile.title.split(' & ')[1]}
          </h1>
          <p className="hero__typed">
            <span className="hero__typed-label">I build</span>{' '}
            <TypedRoles words={profile.roles} />
          </p>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">Book a free call</a>
            <a href="#projects" className="btn btn--ghost">See my work</a>
          </div>
          <ClientsBadge />
        </div>

        <div className="hero__visual">
          <div className="hero__photo">
            <img src={profileImg} alt={`Portrait of ${profile.name}`} />
            <span className="hero__photo-ring" />
          </div>
          <Terminal lines={terminalRun} />
          <div className="chip chip--1"><span>⚡</span> Reply in 14s</div>
          <div className="chip chip--2"><span>🤖</span> AI agent</div>
        </div>
      </div>
      <a href="#services" className="hero__scroll" aria-label="Scroll down"><span /></a>
    </section>
  )
}
