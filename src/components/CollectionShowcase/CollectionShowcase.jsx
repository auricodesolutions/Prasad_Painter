import { useEffect, useState } from 'react'
import './CollectionShowcase.css'

const collection = [
  {
    image: '/assets/img1.jpeg',
    title: 'The Inner Eye',
    medium: 'Mixed media on canvas',
    position: '50% 38%',
    scale: 1,
  },
  {
    image: '/assets/img2.jpeg',
    title: 'Many Selves',
    medium: 'Acrylic on canvas',
    position: '50% 44%',
    scale: 1,
  },
  {
    image: '/assets/img3.jpeg',
    title: 'Where Memory Blooms',
    medium: 'Mixed media on canvas',
    position: '50% 50%',
    scale: 1,
  },
  {
    image: '/assets/img1.jpeg',
    title: 'A Language Within',
    medium: 'Detail from The Inner Eye',
    position: '28% 68%',
    scale: 1.55,
  },
  {
    image: '/assets/img2.jpeg',
    title: 'The Garden Remembers',
    medium: 'Detail from Many Selves',
    position: '68% 34%',
    scale: 1.55,
  },
]

export default function CollectionShowcase() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % collection.length)
    }, 3800)
    return () => window.clearInterval(timer)
  }, [])

  const move = (direction) => {
    setActive((current) => (current + direction + collection.length) % collection.length)
  }

  const cardPosition = (index) => {
    let offset = index - active
    if (offset > 2) offset -= collection.length
    if (offset < -2) offset += collection.length
    return offset
  }

  return (
    <section className="collection-showcase" id="collection" aria-labelledby="collection-title">
      <div className="collection-showcase__intro">
        <div data-reveal>
          <p className="eyebrow">Selected works · Portfolio</p>
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
            onClick={() => setActive(index)}
            aria-label={`Show ${work.title}`}
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
          <span>{String(active + 1).padStart(2, '0')} / 05</span>
          <i key={`progress-${active}`} aria-hidden="true" />
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Next artwork">&rarr;</button>
      </div>
    </section>
  )
}
