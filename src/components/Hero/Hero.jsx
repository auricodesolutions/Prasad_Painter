import { useEffect, useState } from 'react'
import './Hero.css'

const heroImages = [
  { src: '/assets/prasad-research-practice.png', alt: 'Prasad Weerasinghe standing in his studio surrounded by artworks' },
  { src: '/assets/img%20(55).jpeg', alt: 'Prasad Weerasinghe standing in his studio surrounded by artworks' },
  { src: '/assets/img%20(27).jpeg', alt: 'Prasad Weerasinghe standing in his studio surrounded by artworks' },
  { src: '/assets/img%20(5).jpeg', alt: 'A monochrome architectural drawing with intricate symbolic forms' },


]

export default function Hero() {
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
            key={image.src}
          />
        ))}
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__copy">
          <h1 className="reveal reveal--delay">
            <span>Art begins with</span>
            <em>looking deeper.</em>
          </h1>
          <p className="hero__summary reveal reveal--delay-2">
            Step into a world of symbolic paintings where memory, nature and imagination meet on canvas.
          </p>
          <div className="hero__actions reveal reveal--delay-2">
            <a className="hero__primary" href="collection">
              <span>Explore the collection</span><i>&rarr;</i>
            </a>
            <a className="hero__secondary" href="#about">Meet the artist</a>
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
      </div>
    </section>
  )
}
