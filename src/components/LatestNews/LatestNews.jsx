import { useEffect, useState } from 'react'
import './LatestNews.css'

const updates = [
  {
    type: 'Exhibition',
    date: 'Details coming soon',
    title: 'A new exhibition of recent paintings is taking shape',
    image: '/assets/img3.jpeg',
  },
  {
    type: 'From the studio',
    date: '2026',
    title: 'New works exploring memory, place and transformation',
    image: '/assets/img1%20(1).jpeg',
  },
  {
    type: 'Studio viewing',
    date: 'By appointment',
    title: 'Private viewings for collectors and curators in Colombo',
    image: '/assets/hero-gallery-painter.png',
  },
  {
    type: 'Artist journal',
    date: 'July 2026',
    title: 'Inside the layered details and symbols of a new painting',
    image: '/assets/img2.jpeg',
  },
  {
    type: 'In conversation',
    date: 'Coming soon',
    title: 'A conversation about colour, memory and the creative process',
    image: '/assets/img1%20(1).jpeg',
  },
  {
    type: 'Studio notes',
    date: '2026',
    title: 'Sketches and studies from the artist’s working archive',
    image: '/assets/exhibition-gallery-poster.png',
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
          <p className="eyebrow">From the artist's studio</p>
          <h2>Latest <em>news.</em></h2>
        </div>
        <p>Exhibitions, works in progress and opportunities to experience Prasad's paintings.</p>
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
                      href="mailto:studio@prasadartist.com?subject=Studio%20news%20enquiry"
                      aria-label={`Enquire about ${update.title}`}
                      tabIndex={activePage === pageIndex ? 0 : -1}
                    >
                      <div className="latest-news__image">
                        <img src={update.image} alt="" loading="lazy" />
                        <span>0{number}</span>
                      </div>
                      <div className="latest-news__meta"><span>{update.type}</span><time>{update.date}</time></div>
                      <h3>{update.title}</h3>
                      <span className="latest-news__link">Read update <i>&rarr;</i></span>
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
