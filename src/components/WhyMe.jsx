import { promises } from '../data'
import Reveal from './Reveal'

// "Why work with me": big numbered promises, no icons.
export default function WhyMe() {
  return (
    <section id="why" className="section why">
      <div className="section__inner why__inner">
        <Reveal className="why__intro" from="left">
          <p className="eyebrow">Why work with me</p>
          <h2>Less stress for you.<br /><span className="grad">Results you can count on.</span></h2>
          <p className="why__text">Hiring a developer shouldn't feel risky. Here's what you can expect on every project, big or small.</p>
          <a href="#contact" className="btn btn--primary">Start your project</a>
        </Reveal>
        <ol className="why__list">
          {promises.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 120} from="right" className="why__item">
              <span className="why__num">0{i + 1}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
