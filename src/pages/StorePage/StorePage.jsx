import { useMemo, useState } from 'react'
import { storeArtworks } from '../../data/portfolioContent'
import './StorePage.css'

const categories = ['All', 'Paintings', 'Drawings', 'Commercial']
const mediumGroups = ['Acrylic', 'Ink', 'Mixed media']

export default function StorePage({ onNavigate }) {
  const [category, setCategory] = useState('All')
  const [mediums, setMediums] = useState([])
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredWorks = useMemo(() => {
    const works = storeArtworks.filter((work) => {
      const categoryMatches = category === 'All' || work.category === category
      const mediumMatches = mediums.length === 0 || mediums.some((medium) => work.medium.toLowerCase().includes(medium.toLowerCase()))
      return categoryMatches && mediumMatches
    })

    if (sort === 'title') return [...works].sort((a, b) => a.title.localeCompare(b.title))
    if (sort === 'medium') return [...works].sort((a, b) => a.medium.localeCompare(b.medium))
    return works
  }, [category, mediums, sort])

  const toggleMedium = (medium) => {
    setMediums((current) => current.includes(medium)
      ? current.filter((item) => item !== medium)
      : [...current, medium])
  }

  const openArtwork = (slug) => {
    if (onNavigate) onNavigate(`store-item:${slug}`)
    else window.location.assign(`/store/${slug}/`)
  }

  return (
    <main className="store-page">
      <section className="store-page__hero">
        <img className="store-page__hero-image" src="/assets/exhibition-view-banner.png" alt="" aria-hidden="true" />
        <span className="store-page__hero-shade" aria-hidden="true" />
        <div className="store-page__hero-title">
          <h1><span>Store</span></h1>
        </div>
        <div className="store-page__hero-copy">
          <div>
            <strong>Art for thoughtful spaces.</strong>
            <p>Explore six original works by Prasad Weerasinghe.</p>
          </div>
          <a href="#store-catalogue-title">Browse the collection <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="store-catalogue" aria-labelledby="store-catalogue-title">
        <header className="store-catalogue__toolbar" data-reveal>
          <div>
            <p className="eyebrow" id="store-catalogue-title">Available works</p>
            <span>{filteredWorks.length} {filteredWorks.length === 1 ? 'work' : 'works'}</span>
          </div>
          <button
            className="store-filter-toggle"
            type="button"
            aria-expanded={filtersOpen}
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            Filter & sort <span>{filtersOpen ? '−' : '+'}</span>
          </button>
        </header>

        <div className="store-catalogue__layout">
          <aside className={`store-filters ${filtersOpen ? 'is-open' : ''}`} aria-label="Filter store artworks">
            <div className="store-filter-group store-filter-group--sort">
              <label htmlFor="store-sort">Sort</label>
              <select id="store-sort" value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="featured">Curated order</option>
                <option value="title">Title A–Z</option>
                <option value="medium">Medium A–Z</option>
              </select>
            </div>

            <fieldset className="store-filter-group">
              <legend>Category</legend>
              {categories.map((item) => (
                <label key={item}>
                  <input type="radio" name="store-category" checked={category === item} onChange={() => setCategory(item)} />
                  <span>{item}</span>
                </label>
              ))}
            </fieldset>

            <fieldset className="store-filter-group">
              <legend>Medium</legend>
              {mediumGroups.map((medium) => (
                <label key={medium}>
                  <input type="checkbox" checked={mediums.includes(medium)} onChange={() => toggleMedium(medium)} />
                  <span>{medium}</span>
                </label>
              ))}
            </fieldset>

            <div className="store-filter-group store-filter-notes">
              <span>Availability</span>
              <p>Original works</p>
              <p>Price on request</p>
              <p>Worldwide enquiries</p>
            </div>

            <button
              className="store-filters__clear"
              type="button"
              onClick={() => {
                setCategory('All')
                setMediums([])
                setSort('featured')
              }}
            >
              Clear filters
            </button>
          </aside>

          <div className="store-catalogue__results">
            {filteredWorks.length > 0 ? (
              <div className="store-catalogue__grid" key={`${category}-${mediums.join('-')}-${sort}`}>
                {filteredWorks.map((work, index) => (
                  <article className="store-artwork" style={{ '--store-index': index }} key={work.slug}>
                    <button type="button" onClick={() => openArtwork(work.slug)} aria-label={`View details for ${work.title}`}>
                      <span className="store-artwork__image">
                        <img src={work.image} alt={work.alt || work.title} loading="lazy" />
                      </span>
                    </button>
                    <div className="store-artwork__details">
                      <div>
                        <h2>{work.title}</h2>
                        <p>{work.medium}</p>
                      </div>
                      <div>
                        <span>{work.category}</span>
                        <a href={`/store/${work.slug}/`} onClick={(event) => { event.preventDefault(); openArtwork(work.slug) }}>View details ↗</a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="store-catalogue__empty">
                <p>No works match these filters.</p>
                <button type="button" onClick={() => { setCategory('All'); setMediums([]) }}>Show all works</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="store-page__assistance" data-reveal>
        <p className="eyebrow">Collector assistance</p>
        <h2>Need a closer view?</h2>
        <p>Request dimensions, detail photographs, framing information or a private studio appointment.</p>
        <a href="/contact/">Contact the studio <span>↗</span></a>
      </section>
    </main>
  )
}
