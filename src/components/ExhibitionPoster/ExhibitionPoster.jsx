import { useEffect, useRef, useState } from 'react'
import './ExhibitionPoster.css'

const posters = [
  {
    image: '/assets/visual-literacy-exhibition-poster.png',
    background: '/assets/exhibition-gallery-poster.png',
    alt: 'Visual Literacy solo exhibition poster for Prasad Weerasinghe',
    label: 'Visual Literacy',
    description: 'A solo exhibition exploring painting as a language of research, memory and symbolic form.',
  },
  {
    image: '/assets/between-memory-myth-exhibition-poster.png',
    background: '/assets/exhibition-view-banner.png',
    alt: 'Between Memory and Myth selected works exhibition poster for Prasad Weerasinghe',
    label: 'Between Memory & Myth',
    description: 'Selected works bringing personal memory, traditional motifs and contemporary visual language together.',
  },
]

export default function ExhibitionPoster({ onNavigate }) {
  const [active, setActive] = useState(0)
  const [outgoing, setOutgoing] = useState(null)
  const [direction, setDirection] = useState('next')
  const [paused, setPaused] = useState(false)
  const turnTimer = useRef(null)

  const turnPage = (step) => {
    if (outgoing !== null) return

    const next = (active + step + posters.length) % posters.length
    setDirection(step > 0 ? 'next' : 'previous')
    setOutgoing(active)
    setActive(next)

    turnTimer.current = window.setTimeout(() => {
      setOutgoing(null)
    }, 920)
  }

  useEffect(() => {
    if (paused || outgoing !== null) return undefined
    const timer = window.setTimeout(() => turnPage(1), 6200)
    return () => window.clearTimeout(timer)
  }, [active, outgoing, paused])

  useEffect(() => () => {
    if (turnTimer.current) window.clearTimeout(turnTimer.current)
  }, [])

  const currentPoster = posters[active]

  return (
    <section className="poster-feature" id="exhibition-poster">
      <div className="poster-feature__heading" data-reveal>
        <p className="eyebrow">Exhibition posters · Artist archive</p>
        <p>{currentPoster.label}</p>
      </div>

      <div
        className="poster-feature__frame"
        data-reveal
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {posters.map((poster, index) => (
          <img
            className={`poster-feature__backdrop ${index === active ? 'is-active' : ''}`}
            src={poster.background}
            alt=""
            aria-hidden="true"
            loading="lazy"
            key={poster.background}
          />
        ))}
        <div className="poster-feature__wash" />

        <button className="poster-feature__arrow poster-feature__arrow--left" type="button" onClick={() => turnPage(-1)} aria-label="Previous exhibition poster">
          <span aria-hidden="true">&larr;</span>
        </button>

        <div className={`poster-feature__book is-turning-${direction}`}>
          <div className="poster-feature__page poster-feature__page--current" key={`current-${active}`}>
            <img src={currentPoster.image} alt={currentPoster.alt} loading="lazy" />
          </div>

          {outgoing !== null && (
            <div className="poster-feature__page poster-feature__page--turning" key={`outgoing-${outgoing}-${direction}`}>
              <img src={posters[outgoing].image} alt="" aria-hidden="true" />
            </div>
          )}
        </div>

        <button className="poster-feature__arrow poster-feature__arrow--right" type="button" onClick={() => turnPage(1)} aria-label="Next exhibition poster">
          <span aria-hidden="true">&rarr;</span>
        </button>

        <div className="poster-feature__status" aria-label={`Poster ${active + 1} of ${posters.length}`}>
          {posters.map((poster, index) => (
            <button
              className={index === active ? 'is-active' : ''}
              type="button"
              aria-label={`Show ${poster.label}`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => {
                if (index !== active) turnPage(index > active ? 1 : -1)
              }}
              key={poster.label}
            >
              <span />
            </button>
          ))}
        </div>
      </div>

      <div className="poster-feature__details" data-reveal>
        <span>Exhibition archive</span>
        <p>{currentPoster.description}</p>
        <a
          href="/about/"
          onClick={(event) => {
            if (!onNavigate) return
            event.preventDefault()
            onNavigate('about')
          }}
        >
          View artist profile &#8599;
        </a>
      </div>
    </section>
  )
}
