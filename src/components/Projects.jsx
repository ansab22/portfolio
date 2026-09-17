import { projects } from '../data'

function siteLabel(url) {
  try {
    return new URL(url).hostname.replace('www.', '')
  } catch {
    return url
  }
}

// Assumed rendered card width used to translate aspectRatio into a hover
// scroll distance. It's an approximation (actual card width is responsive)
// but gives a consistent, natural-feeling "scroll through the page" reveal.
const ASSUMED_CARD_WIDTH = 480
const PREVIEW_HEIGHT = 260

function scrollPercent(aspectRatio) {
  const imageHeight = ASSUMED_CARD_WIDTH * aspectRatio
  const ratio = Math.min(PREVIEW_HEIGHT / imageHeight, 1)
  return -(1 - ratio) * 100
}

export default function Projects() {
  return (
    <section id="projects" className="section section--tint-gold">
      <div className="section__inner">
        <div className="section__heading">
          <p className="section__label">Projects</p>
          <h2>Selected work</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              key={project.name}
              style={{ '--scroll-end': `${scrollPercent(project.aspectRatio)}%` }}
            >
              <div className="project-card__browser">
                <div className="project-card__dots">
                  <span /> <span /> <span />
                </div>
                <div className="project-card__url">{siteLabel(project.url)}</div>
              </div>

              <div className="project-card__shot">
                <img src={project.image} alt={`${project.name} homepage`} loading="lazy" />
                <span className="project-card__hint">Hover to scroll the page ↓</span>
              </div>

              <div className="project-card__body">
                <h3>{project.name}</h3>
                <p className="project-card__type">{project.type}</p>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="project-card__link">Visit site ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
