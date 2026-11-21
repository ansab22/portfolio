import { useEffect, useState } from 'react'
import { certifications } from '../data'
import Icon from './Icons'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Certification() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])

  return (
    <section id="certification" className="section section--alt">
      <div className="section__inner">
        <SectionHead label="Certification" title="Verified skills" text="Independently tested and certified. Click the certificate to view it full size." center />
        {certifications.map((c) => (
          <Reveal key={c.name} from="zoom" className="card cert2">
            <button type="button" className="cert2__thumb" onClick={() => setOpen(c)} aria-label={`View ${c.name} certificate full size`}>
              <img src={c.image} alt={`${c.name} certificate`} loading="lazy" />
              <span className="cert2__overlay"><Icon name="zoom" /> Click to enlarge</span>
            </button>
            <div className="cert2__info">
              <span className="cert2__badge"><Icon name="award" /> Certified</span>
              <h3>{c.name}</h3>
              <p className="muted">Issued by {c.issuer} · {c.date.replace('Issued ', '')}</p>
              <div className="cert2__score">
                <strong>100%</strong>
                <span>Score: 10 out of 10 correct<br />on Hard difficulty</span>
              </div>
              <button type="button" className="btn btn--ghost btn--small" onClick={() => setOpen(c)}>
                <Icon name="zoom" /> View certificate
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${open.name} certificate`} onClick={() => setOpen(null)}>
          <button type="button" className="lightbox__close" aria-label="Close" onClick={() => setOpen(null)}><Icon name="close" /></button>
          <img src={open.image} alt={`${open.name} certificate`} onClick={(e) => e.stopPropagation()} />
          <p className="lightbox__hint">Click outside or press Esc to close</p>
        </div>
      )}
    </section>
  )
}
