import { storeArtworks } from '../../data/portfolioContent'
import './GalleryWall.css'

export default function OnlineStore({ onNavigate }) {
  const whatsappFor = (work) => `https://wa.me/94714562736?text=${encodeURIComponent(
    work.status === 'sold'
      ? `Hello Prasad, I would like to ask about a similar work to “${work.title}”.`
      : `Hello Prasad, I would like to ask for the price and details of “${work.title}”.`,
  )}`

  const openArtwork = (slug) => {
    if (onNavigate) onNavigate(`store-item:${slug}`)
    else window.location.assign(`/store/${slug}/`)
  }

  return (
    <section className="online-store" id="online-store" aria-labelledby="online-store-title">
      <header className="online-store__heading" data-reveal>
        <div>
          <p className="eyebrow">Online store preview</p>
          <h2 id="online-store-title">Studio <em>collection.</em></h2>
        </div>
        <div className="online-store__intro">
          <p>Available original works sit beside selected sold pieces from the artist archive. Open a work to view its full presentation and details.</p>
          <a
            className="online-store__button"
            href="/store/"
            onClick={(event) => {
              if (!onNavigate) return
              event.preventDefault()
              onNavigate('store')
            }}
          >
            Visit the online store <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <div className="online-store__grid">
        {storeArtworks.slice(0, 6).map((work) => (
          <article className={`store-card ${work.status === 'sold' ? 'is-sold' : ''}`} data-reveal key={work.slug}>
            <button className="store-card__wall" type="button" aria-label={`View details for ${work.title}`} onClick={() => openArtwork(work.slug)}>
              <span className={`store-card__status store-card__status--${work.status}`}>
                {work.status === 'sold' ? 'Sold out' : 'Available'}
              </span>
              <span className="store-card__frame">
                <img src={work.image} alt={work.alt || work.title} loading="lazy" />
              </span>
            </button>

            <div className="store-card__content">
              <h3>{work.title}</h3>
              <p className="store-card__category">{work.category} · {work.medium}</p>
              <div className="store-card__more">
                <p>{work.status === 'sold' ? 'Placed in a private collection' : `${work.size} · Framing available`}</p>
                <div>
                  <a href={whatsappFor(work)} target="_blank" rel="noreferrer" aria-label={`${work.status === 'sold' ? 'Request a similar work to' : 'Ask for the price of'} ${work.title}`}>
                    {work.status === 'sold' ? 'Request similar work' : 'Ask for price'}
                  </a>
                  <a href={`/store/${work.slug}/`} aria-label={`View details for ${work.title}`} onClick={(event) => { event.preventDefault(); openArtwork(work.slug) }}>
                    {work.status === 'sold' ? 'View sold work' : 'Details'} ↗
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
