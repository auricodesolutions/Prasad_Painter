import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './CollectionShowcase.css'

const collection = [
  {
    image: '/assets/img%20(17).jpeg',
    title: 'Ancestral Bloom',
    medium: 'Mixed media on canvas',
    position: '50% 50%',
    scale: 1,
  },
  {
    image: '/assets/img%20(10).jpeg',
    title: 'The Memory Keeper',
    medium: 'Acrylic on canvas',
    position: '50% 50%',
    scale: 1,
  },
  {
    image: '/assets/img%20(12).jpeg',
    title: 'A Garden of Symbols',
    medium: 'Mixed media on canvas',
    position: '50% 50%',
    scale: 1,
  },
  {
    image: '/assets/img2.jpeg',
    title: 'Ceremonial Vessel',
    medium: 'Mixed media on canvas',
    position: '50% 50%',
    scale: 1,
  },
  {
    image: '/assets/img%20(35).jpeg',
    title: 'Messenger in Ochre',
    medium: 'Acrylic and mixed media',
    position: '50% 50%',
    scale: 1,
  },
  {
    image: '/assets/img%20(13).jpeg',
    title: 'Blue Mythology',
    medium: 'Mixed media on canvas',
    position: '50% 50%',
    scale: 1,
  },
  {
    image: '/assets/img1.jpeg',
    title: 'Small Worlds Within',
    medium: 'Acrylic and mixed media',
    position: '50% 50%',
    scale: 1,
  },
  {
    image: '/assets/img%20(14).jpeg',
    title: 'A Conversation in Form',
    medium: 'Diptych installation view',
    position: '50% 50%',
    scale: 1,
  },
]

export default function CollectionShowcase() {
  const [active, setActive] = useState(0)
  const [viewing, setViewing] = useState(null)

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!viewing) setActive((current) => (current + 1) % collection.length)
    }, 3800)
    return () => window.clearInterval(timer)
  }, [viewing])

  useEffect(() => {
    if (!viewing) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setViewing(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [viewing])

  const move = (direction) => {
    setActive((current) => (current + direction + collection.length) % collection.length)
  }

  const cardPosition = (index) => {
    let offset = index - active
    if (offset > collection.length / 2) offset -= collection.length
    if (offset < -collection.length / 2) offset += collection.length
    return Math.abs(offset) > 2 ? 'hidden' : offset
  }

  return (
    <section className="collection-showcase" id="collection" aria-labelledby="collection-title">
      <div className="collection-showcase__intro">
        <div data-reveal>
          <p className="eyebrow">Portfolio</p>
          <h2 id="collection-title">Step into the worlds<br />held <em>within each canvas.</em></h2>
        </div>
        <div className="collection-showcase__copy" data-reveal>
          <p>Explore a curated collection of symbolic paintings shaped by memory, nature and the unseen connections between people and place.</p>
          <a href="#work">Explore all works <span>&rarr;</span></a>
        </div>
      </div>

      <div className="collection-showcase__stage" data-reveal aria-live="polite">
        {collection.map((work, index) => (
          <button
            className={`collection-showcase__card position-${cardPosition(index)}`}
            type="button"
            onClick={() => {
              setActive(index)
              setViewing(work)
            }}
            aria-label={`View ${work.title} at full size`}
            aria-current={index === active ? 'true' : undefined}
            key={work.title}
          >
            <img
              src={work.image}
              alt={index === active ? work.title : ''}
              style={{ objectPosition: work.position, '--collection-scale': work.scale }}
            />
          </button>
        ))}
        <div className="collection-showcase__caption" key={`caption-${active}`}>
          <strong>{collection[active].title}</strong>
          <span>{collection[active].medium}</span>
        </div>
      </div>

      <div className="collection-showcase__controls" data-reveal>
        <button type="button" onClick={() => move(-1)} aria-label="Previous artwork">&larr;</button>
        <div className="collection-showcase__counter">
          <i key={`progress-${active}`} aria-hidden="true" />
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Next artwork">&rarr;</button>
      </div>

      {viewing && createPortal(
        <div
          className="collection-showcase__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={viewing.title}
          onClick={() => setViewing(null)}
        >
          <button
            className="collection-showcase__lightbox-close"
            type="button"
            aria-label="Close full artwork"
            onClick={() => setViewing(null)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={viewing.image} alt={viewing.title} />
            <figcaption>
              <strong>{viewing.title}</strong>
              <span>{viewing.medium}</span>
            </figcaption>
          </figure>
        </div>,
        document.body,
      )}
    </section>
  )
}
