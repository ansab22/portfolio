import Reveal from './Reveal'

// Section heading: a clear label badge + title (+ optional intro text).
export default function SectionHead({ label, title, text, center = false }) {
  return (
    <Reveal className={`section-head ${center ? 'section-head--center' : ''}`}>
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {text && <p className="section-head__text">{text}</p>}
    </Reveal>
  )
}
