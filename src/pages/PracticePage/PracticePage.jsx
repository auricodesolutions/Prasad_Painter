import { useState } from 'react'
import ArtworkViewer from '../../components/ArtworkViewer/ArtworkViewer'
import { practicePages } from '../../data/portfolioContent'
import './PracticePage.css'

export default function PracticePage({ practiceKey, onNavigate }) {
  const [selected, setSelected] = useState(null)
  const practice = practicePages[practiceKey] || practicePages['set-design']
  const otherKey = practiceKey === 'set-design' ? 'art-direction' : 'set-design'

  return (
    <main className="practice-page">
      <section className="practice-hero">
        <img src={practice.hero} alt={`${practice.title} project by Prasad Weerasinghe`} />
        <span className="practice-hero__shade" />
        <div className="practice-hero__copy" data-reveal>
          <p className="eyebrow">{practice.eyebrow}</p>
          <h1>{practice.title}</h1>
          <p>{practice.intro}</p>
        </div>
        <div className="practice-hero__services" data-reveal>
          {practice.services.map((service) => <span key={service}>{service}</span>)}
        </div>
      </section>

      <section className="practice-projects" aria-labelledby="practice-projects-title">
        <header data-reveal>
          <p className="eyebrow">Selected production archive</p>
          <h2 id="practice-projects-title">Work built for<br /><em>space and screen.</em></h2>
          <p>Professional practice at Sri Lanka Rupavahini Corporation and across independent creative projects.</p>
        </header>

        <div className="practice-projects__grid">
          {practice.works.map((work) => (
            <button type="button" onClick={() => setSelected(work)} data-reveal key={work.title}>
              <span><img src={work.image} alt={work.title} loading="lazy" /></span>
              <strong>{work.title}</strong>
              <small>{work.detail}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="practice-process">
        <div data-reveal>
          <p className="eyebrow">Approach</p>
          <h2>From the first mark to the final frame.</h2>
        </div>
        <ol data-reveal>
          <li><span>Research</span><p>Narrative, cultural and visual references establish the world of the production.</p></li>
          <li><span>Development</span><p>Sketches, palettes, materials and spatial relationships shape the direction.</p></li>
          <li><span>Realisation</span><p>The environment is refined through construction, lighting and the camera.</p></li>
        </ol>
      </section>

      <a
        className="practice-page__next"
        href={`/${otherKey}/`}
        onClick={(event) => {
          if (!onNavigate) return
          event.preventDefault()
          onNavigate(otherKey)
        }}
      >
        <span>Continue to</span>
        <strong>{practicePages[otherKey].title}</strong>
        <i>↗</i>
      </a>

      <ArtworkViewer artwork={selected} onClose={() => setSelected(null)} />
    </main>
  )
}
