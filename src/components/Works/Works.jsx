import { useEffect, useState } from 'react'
import { artworks } from '../../data/artworks'
import './Works.css'

export default function Works() {
  const [selected, setSelected] = useState(null)

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
          <p className="eyebrow">A journey through the collection</p>
          <h2>Selected <em>works.</em></h2>
        </div>
        <p className="works__intro">Paintings and close-up details moving through Prasad’s intricate visual world of memory, nature and imagination.</p>
      </div>

      <div className="works__viewport" data-reveal>
        <div className="works__track">
          {[0, 1].map((groupIndex) => (
            <div className="works__group" aria-hidden={groupIndex === 1 ? 'true' : undefined} key={groupIndex}>
              {artworks.map((work, index) => (
                <button
                  className="work-card"
                  key={`${groupIndex}-${work.id}`}
                  onClick={() => setSelected(work)}
                  tabIndex={groupIndex === 1 ? -1 : 0}
                >
                  <span className="work-card__image">
                    <span className="work-card__count">{String(index + 1).padStart(2, '0')}</span>
                    <img
                      src={work.image}
                      alt={groupIndex === 0 ? work.title : ''}
                      loading="lazy"
                      style={{ objectPosition: work.position, '--crop-scale': work.scale }}
                    />
                  </span>
                  <span className="work-card__meta">
                    <span><strong>{work.title}</strong><small>{work.medium}</small></span>
                    <small>{work.year}</small>
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <button className="lightbox__close" aria-label="Close artwork view" onClick={() => setSelected(null)}>Close &times;</button>
          <img src={selected.image} alt={selected.title} onClick={(event) => event.stopPropagation()} />
          <p>{selected.title} <span>{selected.medium}, {selected.year}</span></p>
        </div>
      )}
    </section>
  )
}
