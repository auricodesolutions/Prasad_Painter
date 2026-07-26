import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { artworks } from '../../data/artworks'
import './Works.css'

export default function Works() {
  const [selected, setSelected] = useState(null)
  const sliderRef = useRef(null)
  const isPaused = useRef(false)

  const slideWorks = (direction = 1) => {
    const slider = sliderRef.current
    if (!slider) return

    const card = slider.querySelector('.work-card')
    const gap = Number.parseFloat(getComputedStyle(slider).columnGap) || 0
    const distance = (card?.getBoundingClientRect().width || slider.clientWidth * 0.75) + gap
    const isAtEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 12
    const isAtStart = slider.scrollLeft <= 12

    if (direction > 0 && isAtEnd) {
      slider.scrollTo({ left: 0, behavior: 'smooth' })
    } else if (direction < 0 && isAtStart) {
      slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' })
    } else {
      slider.scrollBy({ left: distance * direction, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!isPaused.current && !selected) slideWorks(1)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [selected])

  useEffect(() => {
    if (!selected) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selected])

  return (
    <section className="works section" id="work">
      <div className="works__heading" data-reveal>
        <div>
          <p className="eyebrow">Curated selection</p>
          <h2>Selected <em>works.</em></h2>
        </div>
        <p className="works__intro">Paintings and close-up details moving through Prasad’s intricate visual world of memory, nature and imagination.</p>
      </div>

      <div className="works__slider-shell" data-reveal>
      <div
        className="works__grid"
        ref={sliderRef}
        onMouseEnter={() => { isPaused.current = true }}
        onMouseLeave={() => { isPaused.current = false }}
        onFocus={() => { isPaused.current = true }}
        onBlur={() => { isPaused.current = false }}
      >
        {artworks.map((work, index) => (
          <button
            className="work-card"
            key={work.id}
            onClick={() => setSelected(work)}
            data-reveal
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <span className="work-card__image">
              <img
                src={work.image}
                alt={work.title}
                loading="lazy"
                style={{ objectPosition: work.position }}
              />
            </span>
            <span className="work-card__meta">
              <span><strong>{work.title}</strong><small>{work.medium}</small></span>
              <small>{work.year}</small>
            </span>
          </button>
        ))}
      </div>
        <div className="works__controls" aria-label="Selected works slider controls">
          <button type="button" onClick={() => slideWorks(-1)} aria-label="Previous artwork">←</button>
          <span>Drag to explore</span>
          <button type="button" onClick={() => slideWorks(1)} aria-label="Next artwork">→</button>
        </div>
      </div>

      {selected && createPortal(
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <button className="lightbox__close" aria-label="Close artwork view" onClick={() => setSelected(null)}><span aria-hidden="true">&times;</span></button>
          <div className="lightbox__frame" onClick={(event) => event.stopPropagation()}>
            <img src={selected.image} alt={selected.title} />
          </div>
          <p>{selected.title} <span>{selected.medium}, {selected.year}</span></p>
        </div>,
        document.body,
      )}
    </section>
  )
}
