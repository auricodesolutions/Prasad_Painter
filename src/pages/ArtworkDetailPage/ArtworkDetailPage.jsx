import { useEffect, useMemo, useState } from 'react'
import ArtworkViewer from '../../components/ArtworkViewer/ArtworkViewer'
import { storeArtworks } from '../../data/portfolioContent'
import './ArtworkDetailPage.css'

const viewOptions = [
  { id: 'room', label: 'In a room' },
  { id: 'framed', label: 'Framed view' },
  { id: 'artwork', label: 'Artwork only' },

]

export default function ArtworkDetailPage({ artworkSlug, onNavigate }) {
  const artwork = storeArtworks.find((item) => item.slug === artworkSlug) || storeArtworks[0]
  const [view, setView] = useState('artwork')
  const [fullscreen, setFullscreen] = useState(false)
  const related = useMemo(() => storeArtworks.filter((item) => item.slug !== artwork.slug).slice(0, 3), [artwork.slug])

  useEffect(() => {
    setView('artwork')
  }, [artwork.slug])

  const navigate = (target) => {
    if (onNavigate) onNavigate(target)
  }

  return (
    <main className="artwork-detail">
      <nav className="artwork-detail__breadcrumb" aria-label="Breadcrumb">
        <a href="/store/" onClick={(event) => { event.preventDefault(); navigate('store') }}>Online Store</a>
        <span>/</span>
        <span>{artwork.category}</span>
        <span>/</span>
        <strong>{artwork.title}</strong>
      </nav>

      <section className="artwork-detail__product" aria-labelledby="artwork-title">
        <div className="artwork-detail__gallery">
          <div className="artwork-detail__thumbnails" role="tablist" aria-label="Artwork presentation views">
            {viewOptions.map((option) => (
              <button
                className={view === option.id ? 'is-active' : ''}
                type="button"
                role="tab"
                aria-selected={view === option.id}
                aria-label={option.label}
                onClick={() => setView(option.id)}
                key={option.id}
              >
                <span className={`artwork-thumb artwork-thumb--${option.id}`}>
                  <span><img src={artwork.image} alt="" /></span>
                </span>
                <small>{option.label}</small>
              </button>
            ))}
          </div>

          <button
            className={`artwork-detail__stage artwork-detail__stage--${view}`}
            type="button"
            aria-label={`Open ${artwork.title} in full screen`}
            onClick={() => setFullscreen(true)}
            key={view}
          >
            {view === 'artwork' && <img src={artwork.image} alt={artwork.alt || artwork.title} />}
            {view === 'framed' && (
              <div className="artwork-detail__frame">
                <div><img src={artwork.image} alt={`${artwork.title} in a timber frame`} /></div>
              </div>
            )}
            {view === 'room' && (
              <div className="artwork-detail__room">
                <span><img src={artwork.image} alt={`${artwork.title} displayed in an interior`} /></span>
              </div>
            )}
            <span className="artwork-detail__expand">Full screen <b aria-hidden="true">⛶</b></span>
          </button>
        </div>

        <aside className="artwork-detail__information">
          <p className="eyebrow">Original work · Available</p>
          <h1 id="artwork-title">{artwork.title}</h1>
          <p className="artwork-detail__artist">Prasad Weerasinghe</p>

          <dl>
            <div><dt>Category</dt><dd>{artwork.category}</dd></div>
            <div><dt>Medium</dt><dd>{artwork.medium}</dd></div>
            <div><dt>Presentation</dt><dd>{artwork.size}</dd></div>
            <div><dt>Format</dt><dd>{artwork.format}</dd></div>
          </dl>

          <p className="artwork-detail__description">{artwork.description}</p>

          <div className="artwork-detail__actions">
            <a href="/contact/" onClick={(event) => { if (!onNavigate) return; event.preventDefault(); navigate('contact') }}>
              Ask for price <span>↗</span>
            </a>
            <p>Request dimensions, detailed photographs, framing options and delivery information directly from the studio.</p>
          </div>

          <ul>
            <li>Certificate of authenticity</li>
            <li>Collector support from the studio</li>
            <li>International enquiries welcome</li>
          </ul>
        </aside>
      </section>

      <section className="artwork-detail__related" aria-labelledby="related-title">
        <header>
          <p className="eyebrow">Continue looking</p>
          <h2 id="related-title">Related works.</h2>
        </header>
        <div>
          {related.map((item) => (
            <a
              href={`/store/${item.slug}/`}
              onClick={(event) => { event.preventDefault(); navigate(`store-item:${item.slug}`) }}
              key={item.slug}
            >
              <span><img src={item.image} alt={item.alt || item.title} loading="lazy" /></span>
              <strong>{item.title}</strong>
              <small>{item.medium}</small>
            </a>
          ))}
        </div>
      </section>

      <ArtworkViewer artwork={fullscreen ? artwork : null} onClose={() => setFullscreen(false)} />
    </main>
  )
}
