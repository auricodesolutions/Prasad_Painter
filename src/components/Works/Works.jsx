import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { artworks } from '../../data/artworks'
import './Works.css'

export default function Works() {
  const [selected, setSelected] = useState(null)
  const sliderRef = useRef(null)
  const isPaused = useRef(false)
  const loopedArtworks = [...artworks, ...artworks]

  const getLoopDistance = (slider) => {
    const first = slider.querySelector('.work-card[data-loop="0"]')
    const duplicate = slider.querySelector('.work-card[data-loop="1"]')
    return first && duplicate ? duplicate.offsetLeft - first.offsetLeft : slider.scrollWidth / 2
  }

  const slideWorks = (direction = 1) => {
    const slider = sliderRef.current
    if (!slider) return

    const card = slider.querySelector('.work-card')
    const gap = Number.parseFloat(getComputedStyle(slider).columnGap) || 0
    const distance = (card?.getBoundingClientRect().width || slider.clientWidth * 0.75) + gap
    const loopDistance = getLoopDistance(slider)

    if (direction < 0 && slider.scrollLeft < distance) slider.scrollLeft += loopDistance
    slider.scrollBy({ left: distance * direction, behavior: 'smooth' })
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const mobile = window.matchMedia('(max-width: 760px)').matches
    if (mobile) {
      const timer = window.setInterval(() => {
        if (!isPaused.current && !selected) {
          const distance = getLoopDistance(slider)
          const card = slider.querySelector('.work-card')
          const gap = Number.parseFloat(getComputedStyle(slider).columnGap) || 0
          const step = (card?.getBoundingClientRect().width || slider.clientWidth * .84) + gap

          if (distance > 0 && slider.scrollLeft >= distance - step * .5) {
            slider.scrollLeft -= distance
          }
          slider.scrollBy({ left: step, behavior: 'smooth' })
        }
      }, 2800)

      return () => window.clearInterval(timer)
    }

    let frame = null
    let previousTime = performance.now()

    const moveContinuously = (time) => {
      const elapsed = Math.min(time - previousTime, 40)
      previousTime = time

      if (!isPaused.current && !selected) {
        slider.scrollLeft += elapsed * 0.035
        const loopDistance = getLoopDistance(slider)
        if (loopDistance > 0 && slider.scrollLeft >= loopDistance) {
          slider.scrollLeft -= loopDistance
        }
      }

      frame = window.requestAnimationFrame(moveContinuously)
    }

    frame = window.requestAnimationFrame(moveContinuously)
    return () => window.cancelAnimationFrame(frame)
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
        onPointerDown={() => { isPaused.current = true }}
        onPointerUp={() => { isPaused.current = false }}
        onPointerCancel={() => { isPaused.current = false }}
      >
        {loopedArtworks.map((work, index) => {
          const loop = index >= artworks.length ? 1 : 0
          return (
          <button
            className="work-card"
            key={`${loop}-${work.id}`}
            data-loop={loop}
            onClick={() => setSelected(work)}
            data-reveal
            style={{ transitionDelay: `${(index % artworks.length) * 70}ms` }}
            tabIndex={loop ? -1 : 0}
            aria-hidden={loop ? 'true' : undefined}
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
          )
        })}
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
