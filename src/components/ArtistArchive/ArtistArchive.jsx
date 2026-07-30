import { useEffect, useRef } from 'react'
import './ArtistArchive.css'

const pieces = [
  ['identity', '/assets/prasad-signature-transparent.png', 'Prasad Weerasinghe signature mark', 'Artist identity', 0.45],
  ['language', '/assets/img%20(9).jpeg', 'Ornamental symbolic painting by Prasad Weerasinghe', 'Visual language', -0.35],
  ['figure', '/assets/img%20(11).jpeg', 'Colourful figurative painting detail', 'Figure and ornament', 0.65],
  ['study', '/assets/img%20(28).jpeg', 'Symbolic figure study in ochre and blue', 'Transformation study', -0.5],
  ['installation', '/assets/img%20(30).jpeg', 'Works by Prasad Weerasinghe installed in a gallery', 'Exhibition archive', 0.3],
  ['encounter', '/assets/img%20(32).jpeg', 'Gallery visitor viewing a painting by Prasad Weerasinghe', 'The viewing encounter', -0.6],
]

export default function ArtistArchive() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      section.classList.add('is-in-view')
      observer.disconnect()
    }, { threshold: 0.13 })
    observer.observe(section)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      section.classList.add('is-in-view')
      return () => observer.disconnect()
    }

    const cards = [...section.querySelectorAll('.artist-archive__piece')]
    let frame = null

    const move = (event) => {
      if (frame !== null) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const bounds = section.getBoundingClientRect()
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 22
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 18
        cards.forEach((card) => {
          const depth = Number(card.dataset.depth)
          card.style.setProperty('--shift-x', `${x * depth}px`)
          card.style.setProperty('--shift-y', `${y * depth}px`)
        })
        frame = null
      })
    }

    const reset = () => cards.forEach((card) => {
      card.style.setProperty('--shift-x', '0px')
      card.style.setProperty('--shift-y', '0px')
    })

    section.addEventListener('pointermove', move)
    section.addEventListener('pointerleave', reset)
    return () => {
      observer.disconnect()
      section.removeEventListener('pointermove', move)
      section.removeEventListener('pointerleave', reset)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="artist-archive" id="artist-archive" ref={sectionRef} aria-labelledby="artist-archive-title">
      <header className="artist-archive__header">
        <div><strong>Prasad Weerasinghe</strong><span>Selected practice · Sri Lanka</span></div>
        <nav aria-label="Artist archive links">
          <div><span>Practice</span><a href="/#work">Paintings</a><a href="/art-direction/">Art direction</a></div>
          <div><span>Connect</span><a href="https://www.instagram.com/prasart78" target="_blank" rel="noreferrer">Instagram</a><a href="/contact/">Enquiries</a></div>
        </nav>
      </header>

      <h2 id="artist-archive-title" className="artist-archive__title">A living archive of visual literacy</h2>

      <div className="artist-archive__canvas">
        {pieces.map(([key, image, alt, caption, depth], index) => (
          <figure
            className={`artist-archive__piece artist-archive__piece--${key}`}
            data-depth={depth}
            style={{ '--reveal-delay': `${index * 100}ms`, '--drift-delay': `${index * -1.2}s` }}
            key={key}
          >
            <div className="artist-archive__drift">
              <div className="artist-archive__image"><img src={image} alt={alt} loading="lazy" /></div>
              <figcaption>{caption}</figcaption>
            </div>
          </figure>
        ))}

        <div className="artist-archive__eye" aria-hidden="true"><i /></div>
        <div className="artist-archive__statement">
          <span>Research-led painting</span>
          <p>Memory, history and symbolic forms<br />assembled into a contemporary language.</p>
        </div>
      </div>

      <div className="artist-archive__marquee" aria-hidden="true">
        <div>
          <span>Visual literacy · Painting · Memory · Research · Symbolic form · </span>
          <span>Visual literacy · Painting · Memory · Research · Symbolic form · </span>
        </div>
      </div>
    </section>
  )
}
