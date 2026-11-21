import { useEffect, useRef, useState } from 'react'
import { experience, otherExperience } from '../data'
import SectionHead from './SectionHead'

// Timeline whose line fills as you scroll; the job nearest the middle of
// the screen is highlighted, the ones already passed stay lit.
export default function Experience() {
  const listRef = useRef(null)
  const itemRefs = useRef([])
  const [fill, setFill] = useState(0)
  const [active, setActive] = useState(-1)

  useEffect(() => {
    const on = () => {
      const list = listRef.current
      if (!list) return
      const mid = window.innerHeight * 0.55
      const r = list.getBoundingClientRect()
      setFill(Math.max(0, Math.min(1, (mid - r.top) / r.height)))
      let a = -1
      itemRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < mid) a = i
      })
      setActive(a)
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on) }
  }, [])

  const items = [...experience, { ...otherExperience, company: otherExperience.title, other: true }]

  return (
    <section id="experience" className="section">
      <div className="section__inner section__inner--narrow">
        <SectionHead label="Experience" title="Where I've worked" text="5+ years building websites and web apps for companies and clients in the US and abroad." />

        <ol className="tl" ref={listRef}>
          <span className="tl__rail" aria-hidden="true"><span className="tl__fill" style={{ transform: `scaleY(${fill})` }} /></span>
          {items.map((job, i) => (
            <li
              key={job.company}
              ref={(el) => (itemRefs.current[i] = el)}
              className={`tl__item ${i <= active ? 'is-done' : ''} ${i === active ? 'is-active' : ''}`}
            >
              <span className="tl__dot" aria-hidden="true" />
              <div className={`card job ${job.other ? 'job--other' : ''}`}>
                <div className={`job__logo ${job.other ? 'job__logo--other' : ''}`} aria-hidden="true">{job.other ? '+' : job.company[0]}</div>
                <div className="job__main">
                  {job.other ? (
                    <>
                      <h3>{job.title}</h3>
                      <p className="job__desc">{job.description}</p>
                    </>
                  ) : (
                    <>
                      <div className="job__top">
                        <div>
                          <h3>{job.company} {job.current && <span className="job__now">Current</span>}</h3>
                          <p className="job__role">{job.role}</p>
                        </div>
                        <div className="job__when">
                          <span className="job__period">{job.period}</span>
                          <span className="job__meta">{job.meta}</span>
                        </div>
                      </div>
                      <ul className="ticks">
                        {job.points.map((p, k) => <li key={k}>{p}</li>)}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
