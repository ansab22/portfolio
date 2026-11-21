import { useEffect, useState } from 'react'
import logoIcon from '../assets/logo-icon.png'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#automation', label: 'How it works' },
  { href: '#projects', label: 'My Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="site-header__inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <img src={logoIcon} alt="" className="brand__mark" />
          <span className="brand__name">ansab<span className="brand__dot">.dev</span></span>
        </a>

        <nav className="nav nav--desktop" aria-label="Primary">
          {LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <a href="#contact" className="btn btn--primary btn--small nav--desktop">
          Book a free call
        </a>

        <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span /><span />
        </button>
      </div>

      <nav className="nav nav--mobile" aria-label="Mobile">
        {LINKS.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <a href="#contact" className="btn btn--primary" onClick={() => setOpen(false)}>Book a free call</a>
      </nav>
    </header>
  )
}
