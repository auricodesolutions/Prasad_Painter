import { useEffect, useState } from 'react'
import './LatestNews.css'

const updates = [
  {
    type: 'Biography',
    date: 'Sri Lanka · 1978',
    title: 'The Sri Lankan roots behind Prasad Weerasinghe’s visual language',
    image: '/assets/owner.jpeg',
    alt: 'Portrait of Prasad Weerasinghe',
  },
  {
    type: 'Education',
    date: 'Art history',
    title: 'Academic research at the University of Kelaniya',
    image: '/assets/hero-gallery-painter.png',
    alt: 'Artist studying paintings in a gallery',
  },
  {
    type: 'Professional practice',
    date: 'Since 2006',
    title: 'Art direction and set design at Sri Lanka Rupavahini',
    image: '/assets/img%20(4).jpeg',
    alt: 'Broadcast studio with a rainbow and cloud set',
  },
  {
    type: 'Artistic method',
    date: 'Visual literacy',
    title: 'Why extensive research begins every creation',
    image: '/assets/img2.jpeg',
    alt: 'Detailed painting with layered figures and decorative forms',
  },
  {
    type: 'Visual language',
    date: 'Composite form',
    title: 'Texture, decoration and figures assembled in layers',
    image: '/assets/img1.jpeg',
    alt: 'Symbolic painting with figures and organic patterns',
  },
  {
    type: 'Tradition',
    date: 'Sri Lankan art',
    title: 'Rebuilding historical elements into contemporary work',
    image: '/assets/img3.jpeg',
    alt: 'Ornamental painting with a tree and layered traditional motifs',
  },
]

export default function LatestNews() {
  const [activePage, setActivePage] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const pages = [updates.slice(0, 3), updates.slice(3, 6)]

  useEffect(() => {
    if (!autoPlay || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => {
      setActivePage((current) => (current + 1) % pages.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [autoPlay, pages.length])

  const showPage = (page) => {
    setActivePage(page)
    setAutoPlay(false)
  }

  return (
    <section className="latest-news section" id="news">
      <div className="latest-news__heading" data-reveal>
        <div>
          <p className="eyebrow">From the artist</p>
          <h2>News &amp; <em>stories.</em></h2>
        </div>
        <p>Biography, research and ideas that shape Prasad Weerasinghe's paintings.</p>
      </div>

      <div className="latest-news__navigation" aria-label="News pages">
        <span><strong>0{activePage + 1}</strong> / 02</span>
        <div>
          <button type="button" onClick={() => showPage((activePage + pages.length - 1) % pages.length)} aria-label="Show previous three news items">&larr;</button>
          <button type="button" onClick={() => showPage((activePage + 1) % pages.length)} aria-label="Show next three news items">&rarr;</button>
        </div>
      </div>

      <div className="latest-news__viewport" aria-live="polite">
        <div className="latest-news__track" style={{ transform: `translateX(-${activePage * 50}%)` }}>
          {pages.map((page, pageIndex) => (
            <div className="latest-news__grid" aria-hidden={activePage !== pageIndex} key={pageIndex}>
              {page.map((update, itemIndex) => {
                const number = (pageIndex * 3) + itemIndex + 1
                return (
                  <article key={update.title}>
                    <a
                      href="https://gibugallery.com.au/prasad-weerasinghe/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Read more about ${update.title}`}
                      tabIndex={activePage === pageIndex ? 0 : -1}
                    >
                      <div className="latest-news__image">
                        <img src={update.image} alt={update.alt} loading="lazy" />
                        <span>0{number}</span>
                      </div>
                      <div className="latest-news__meta"><span>{update.type}</span><time>{update.date}</time></div>
                      <h3>{update.title}</h3>
                      <span className="latest-news__link">Read profile <i>&rarr;</i></span>
                    </a>
                  </article>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
