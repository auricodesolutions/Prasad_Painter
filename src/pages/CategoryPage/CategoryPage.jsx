import { useEffect, useRef, useState } from 'react'
import ArtworkViewer from '../../components/ArtworkViewer/ArtworkViewer'
import { categoryPages } from '../../data/portfolioContent'
import './CategoryPage.css'

const categoryOrder = ['paintings', 'drawings', 'commercial', 'sculptures']

export default function CategoryPage({ categoryKey, onNavigate }) {
  const [selected, setSelected] = useState(null)
  const [activeAlbum, setActiveAlbum] = useState(null)
  const [activeHero, setActiveHero] = useState(0)
  const [isSwitching, setIsSwitching] = useState(false)
  const switchTimer = useRef(null)
  const category = categoryPages[categoryKey] || categoryPages.paintings
  const hasAlbums = Array.isArray(category.albums)
  const categoryLabel = category.title.replace(/s$/, '')
  const heroImages = hasAlbums
    ? category.albums.slice(0, 5).map((album) => ({
        src: album.works[0].image,
        alt: `${album.title} ${categoryLabel.toLowerCase()} album`,
      }))
    : [{ src: category.hero, alt: category.heroAlt || `${category.title} by Prasad Weerasinghe` }]

  useEffect(() => {
    window.clearTimeout(switchTimer.current)
    setSelected(null)
    setActiveAlbum(null)
    setActiveHero(0)
    setIsSwitching(false)

    return () => window.clearTimeout(switchTimer.current)
  }, [categoryKey])

  useEffect(() => {
    if (heroImages.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroImages.length)
    }, 4800)

    return () => window.clearInterval(timer)
  }, [categoryKey, heroImages.length])

  const scrollToGallery = () => {
    window.requestAnimationFrame(() => {
      document.getElementById('category-gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const changeAlbum = (nextAlbum) => {
    if (isSwitching) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setActiveAlbum(nextAlbum)
      scrollToGallery()
      return
    }

    setIsSwitching(true)
    window.clearTimeout(switchTimer.current)
    switchTimer.current = window.setTimeout(() => {
      setActiveAlbum(nextAlbum)
      setIsSwitching(false)
      scrollToGallery()
    }, 220)
  }

  return (
    <main className={`category-page category-page--${categoryKey}`}>
      <section className="category-hero">
        <div className="category-hero__media">
          {heroImages.map((heroImage, index) => (
            <div
              className={`category-hero__slide${activeHero === index ? ' is-active' : ''}`}
              role={activeHero === index ? 'img' : undefined}
              aria-label={activeHero === index ? heroImage.alt : undefined}
              aria-hidden={activeHero !== index}
              key={heroImage.src}
            >
              {Array.from({ length: 6 }, (_, slice) => (
                <span className="category-hero__slice" style={{ '--hero-slice': slice }} aria-hidden="true" key={slice}>
                  <img className="category-hero__slide-image" src={heroImage.src} alt="" />
                </span>
              ))}
            </div>
          ))}
        </div>
        <span className="category-hero__shade" aria-hidden="true" />
        <div className="category-hero__copy" data-reveal>
          <p className="eyebrow">{category.eyebrow}</p>
          <h1>{category.title}</h1>
          <p className="category-hero__intro">{category.intro}</p>
          <button className="category-hero__button" type="button" onClick={scrollToGallery}>
            {hasAlbums ? `Explore ${categoryLabel.toLowerCase()} albums` : `View ${category.title.toLowerCase()}`} <span aria-hidden="true">↓</span>
          </button>
        </div>
        {heroImages.length > 1 && (
          <div className="category-hero__slides" aria-label={`Hero image ${activeHero + 1} of ${heroImages.length}`}>
            {heroImages.map((heroImage, index) => (
              <button
                className={activeHero === index ? 'is-active' : ''}
                type="button"
                onClick={() => setActiveHero(index)}
                aria-label={`Show ${heroImage.alt}`}
                aria-current={activeHero === index ? 'true' : undefined}
                key={heroImage.src}
              ><span /></button>
            ))}
          </div>
        )}
      </section>

      <section className={`category-gallery${hasAlbums ? ' category-gallery--albums' : ''}${isSwitching ? ' category-gallery--switching' : ''}`} id="category-gallery" aria-labelledby="category-gallery-title" aria-busy={isSwitching}>
        {hasAlbums && !activeAlbum ? (
          <div className="painting-library__view painting-library__view--overview" key={`${categoryKey}-album-overview`}>
            <header className="category-gallery__heading">
              <div>
                <p className="eyebrow">{categoryLabel} archive</p>
                <h2 id="category-gallery-title">Browse by <em>theme.</em></h2>
              </div>
              <p>Five themed albums bring related works together, followed by an archive for works and images outside those themes. Open any album to explore its full-screen collection.</p>
            </header>

            <div className="painting-albums">
              {category.albums.map((album, index) => (
                <button
                  className="painting-album-card"
                  type="button"
                  onClick={() => changeAlbum(album)}
                  style={{ '--category-index': index }}
                  key={album.slug}
                  aria-label={`Open ${album.title} album, ${album.works.length} works`}
                >
                  <span className="painting-album-card__image">
                    <img src={album.works[0].image} alt={`${album.title} album cover: ${album.works[0].alt}`} loading="lazy" />
                  </span>
                  <span className="painting-album-card__copy">
                    <span>
                      <span className="painting-album-card__type">{album.title === 'Other Images' ? 'Open archive' : 'Curated theme'}</span>
                      <strong>{album.title}</strong>
                      <small>{album.description}</small>
                    </span>
                    <span className="painting-album-card__action">{album.works.length} works <b aria-hidden="true">↗</b></span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="painting-library__view painting-library__view--album" key={activeAlbum?.slug || categoryKey}>
            <header className={`category-gallery__heading${activeAlbum ? ' category-gallery__heading--album' : ''}`} data-reveal={hasAlbums ? undefined : ''}>
              <div>
                {activeAlbum && (
                  <button className="painting-album__back" type="button" onClick={() => changeAlbum(null)}>
                    <span aria-hidden="true">←</span> All {categoryLabel.toLowerCase()} albums
                  </button>
                )}
                <p className="eyebrow">{activeAlbum ? `${categoryLabel} album` : 'Selected archive'}</p>
                <h2 id="category-gallery-title">
                  {activeAlbum ? activeAlbum.title : <>Works in <em>{category.title.toLowerCase()}.</em></>}
                </h2>
              </div>
              <p>{activeAlbum ? activeAlbum.description : 'Select any image to enter a closer full-screen view.'}</p>
            </header>

            <div className="category-gallery__grid">
              {(activeAlbum?.works || category.works || []).map((work, index) => (
                <button
                  className="category-work"
                  type="button"
                  onClick={() => setSelected(work)}
                  style={{ '--category-index': index }}
                  data-reveal={hasAlbums ? undefined : ''}
                  key={`${work.title}-${index}`}
                >
                  <span className="category-work__image"><img src={work.image} alt={work.alt || work.title} loading="lazy" /></span>
                  <span className="category-work__meta"><strong>{work.title}</strong><small>{work.medium}</small></span>
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      <nav className="category-page__navigation" aria-label="Browse featured categories">
        <p className="eyebrow">Continue exploring</p>
        <div>
          {categoryOrder.filter((key) => key !== categoryKey).map((key) => (
            <a
              href={`/category/${key}/`}
              key={key}
              onClick={(event) => {
                if (!onNavigate) return
                event.preventDefault()
                onNavigate(`category:${key}`)
              }}
            >
              {categoryPages[key].title}<span>↗</span>
            </a>
          ))}
        </div>
      </nav>

      <ArtworkViewer artwork={selected} onClose={() => setSelected(null)} />
    </main>
  )
}
