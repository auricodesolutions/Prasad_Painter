import { useEffect, useState } from 'react'
import './Hero.css'

const heroImages = [
  { src: '/assets/prasad-research-practice.png', alt: 'Prasad Weerasinghe painting an ornamental artwork in his studio', label: 'Inside the studio', position: '58% 48%' },
  { src: '/assets/hero-crimson-landscape.svg', alt: 'Crimson Landscape, a richly patterned composition on a deep red ground by Prasad Weerasinghe', label: 'Crimson Landscape', position: 'center 48%', mobilePosition: '62% center' },
  { src: '/assets/hero-night-on-water.svg', alt: 'Night on the Water, a reclining figure among luminous blue botanical forms by Prasad Weerasinghe', label: 'Night on the Water', position: 'center 50%', mobilePosition: '60% center' },
  { src: '/assets/exhibition-view-banner.png', alt: 'A gallery wall presenting selected works by Prasad Weerasinghe', label: 'Exhibition view', position: 'center' },
]

export default function Hero({ onNavigate }) {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length)
    }, 5200)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero__gallery" aria-live="off">
        {heroImages.map((image, index) => (
          <img
            className={`hero__image ${activeImage === index ? 'is-active' : ''}`}
            src={image.src}
            alt={activeImage === index ? image.alt : ''}
            aria-hidden={activeImage !== index}
            style={{ '--hero-image-position': image.position, '--hero-mobile-position': image.mobilePosition || image.position }}
            key={image.src}
          />
        ))}
        <span className={`hero__canvas-sweep hero__canvas-sweep--${activeImage % 2 === 0 ? 'forward' : 'reverse'}`} aria-hidden="true" key={`sweep-${activeImage}`} />
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__copy">
          <p className="hero__eyebrow reveal"><span /> Contemporary artist · Sri Lanka</p>
          <h1 className="reveal reveal--delay">
            <span>Art begins with</span>
            <em>looking deeper.</em>
          </h1>
          <p className="hero__summary reveal reveal--delay-2">
            Step into a world of symbolic paintings where memory, nature and imagination meet on canvas.
          </p>
          <div className="hero__actions reveal reveal--delay-2">
            <a
              className="hero__primary"
              href="/#collection"
              onClick={(event) => {
                if (!onNavigate) return
                event.preventDefault()
                onNavigate('home', 'collection')
              }}
            >
              <span>Explore the collection</span><i aria-hidden="true">↘</i>
            </a>
            <a
              className="hero__secondary"
              href="/about/"
              onClick={(event) => {
                if (!onNavigate) return
                event.preventDefault()
                onNavigate('about')
              }}
            >
              Meet the artist
            </a>
          </div>
        </div>
      </div>

      <div className="hero__footer reveal reveal--delay-2">
        <div className="hero__slider-status" aria-label={`Hero image ${activeImage + 1} of ${heroImages.length}`}>
          {heroImages.map((image, index) => (
            <button
              className={activeImage === index ? 'is-active' : ''}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Show hero image ${index + 1}`}
              aria-current={activeImage === index ? 'true' : undefined}
              key={image.src}
            ><span /></button>
          ))}
        </div>
        <div className="hero__slide-meta" aria-live="polite">
          <span>{heroImages[activeImage].label}</span>
          <b>{String(activeImage + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}</b>
        </div>
      </div>
    </section>
  )
}
