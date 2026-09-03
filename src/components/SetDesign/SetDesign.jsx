import { useEffect, useRef } from 'react'
import './SetDesign.css'

const scenes = [
  {
    eyebrow: 'Spatial practice',
    title: 'Set Design',
    image: '/assets/SD23.jpg',
    alt: 'Contemporary turquoise and white living room set with patterned walls, sectional seating and sculptural lighting',
    text: 'Building camera-ready environments where scale, movement and light work together to support the story.',
    tags: ['Scenic concepts', 'Spatial composition', 'Broadcast environments'],
  },
  {
    eyebrow: 'Visual leadership',
    title: 'Art Direction',
    image: '/assets/img%20(66).png',
    alt: 'Contemporary television studio environment guided through art direction',
    text: 'Guiding the complete visual language of a production, from its first idea to the final image on screen.',
    tags: ['Creative direction', 'Colour & atmosphere', 'Production detail'],
  },
]

export default function SetDesign({ onNavigate }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    let animationFrame = null

    const updateProgress = () => {
      animationFrame = null
      const bounds = section.getBoundingClientRect()
      const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1)
      const progress = Math.min(1, Math.max(0, -bounds.top / scrollDistance))
      const artProgress = Math.min(1, Math.max(0, (progress - .34) / .36))

      section.style.setProperty('--set-opacity', `${1 - artProgress}`)
      section.style.setProperty('--set-y', `${artProgress * -8}vh`)
      section.style.setProperty('--set-scale', `${1 - artProgress * .035}`)
      section.style.setProperty('--art-opacity', `${artProgress}`)
      section.style.setProperty('--art-y', `${(1 - artProgress) * 10}vh`)
      section.style.setProperty('--art-clip', `${(1 - artProgress) * 100}%`)
      section.style.setProperty('--scroll-progress', `${progress * 100}%`)
      section.dataset.activeScene = artProgress > .5 ? 'art' : 'set'
    }

    const requestUpdate = () => {
      if (animationFrame === null) animationFrame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return (
    <section
      className="set-design"
      id="set-design"
      aria-label="Set design and art direction"
      data-active-scene="set"
      ref={sectionRef}
    >
      <div className="set-design__sticky">
        <div className="set-design__topline">
        </div>

        {scenes.map((scene, index) => (
          <article
            className={`set-design__scene set-design__scene--${index === 0 ? 'set' : 'art'}`}
            aria-hidden={undefined}
            key={scene.title}
          >
            <div className="set-design__visual">
              <img src={scene.image} alt={scene.alt} loading="lazy" />
              <span className="set-design__visual-wash" aria-hidden="true" />
            </div>

            <div className="set-design__copy">
              <p className="eyebrow">{scene.eyebrow}</p>
              <h2>{scene.title}</h2>
              <p className="set-design__statement">{scene.text}</p>
              <ul>
                {scene.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <a
                className="set-design__explore"
                href={index === 0 ? '/set-design/' : '/art-direction/'}
                onClick={(event) => {
                  if (!onNavigate) return
                  event.preventDefault()
                  onNavigate(index === 0 ? 'set-design' : 'art-direction')
                }}
              >
                Explore {scene.title} <span>↗</span>
              </a>
            </div>
          </article>
        ))}

        <div className="set-design__navigation" aria-hidden="true">
          <div className="set-design__steps">
            <span className="set-design__step set-design__step--set">Set Design</span>
            <span className="set-design__step set-design__step--art">Art Direction</span>
          </div>
          <span className="set-design__track"><i /></span>
          <span className="set-design__scroll">Scroll to transition ↓</span>
        </div>
      </div>
    </section>
  )
}
