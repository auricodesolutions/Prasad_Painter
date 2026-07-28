import { useState } from 'react'
import ArtworkViewer from '../../components/ArtworkViewer/ArtworkViewer'
import { categoryPages } from '../../data/portfolioContent'
import './CategoryPage.css'

const categoryOrder = ['paintings', 'drawings', 'commercial', 'sculptures']

export default function CategoryPage({ categoryKey }) {
  const [selected, setSelected] = useState(null)
  const category = categoryPages[categoryKey] || categoryPages.paintings

  return (
    <main className={`category-page category-page--${categoryKey}`}>
      <section className="category-hero">
        <img src={category.hero} alt={`${category.title} by Prasad Weerasinghe`} />
        <span className="category-hero__shade" />
        <div className="category-hero__copy" data-reveal>
          <p className="eyebrow">{category.eyebrow}</p>
          <h1>{category.title}</h1>
          <p>{category.intro}</p>
        </div>
      </section>

      <section className="category-gallery" aria-labelledby="category-gallery-title">
        <header className="category-gallery__heading" data-reveal>
          <div>
            <p className="eyebrow">Selected archive</p>
            <h2 id="category-gallery-title">Works in <em>{category.title.toLowerCase()}.</em></h2>
          </div>
          <p>Select any image to enter a closer full-screen view.</p>
        </header>

        <div className="category-gallery__grid">
          {category.works.map((work, index) => (
            <button
              className="category-work"
              type="button"
              onClick={() => setSelected(work)}
              style={{ '--category-index': index }}
              data-reveal
              key={work.title}
            >
              <span className="category-work__image"><img src={work.image} alt={work.title} loading="lazy" /></span>
              <span className="category-work__meta"><strong>{work.title}</strong><small>{work.medium}</small></span>
            </button>
          ))}
        </div>
      </section>

      <nav className="category-page__navigation" aria-label="Browse featured categories">
        <p className="eyebrow">Continue exploring</p>
        <div>
          {categoryOrder.filter((key) => key !== categoryKey).map((key) => (
            <a href={`/category/${key}/`} key={key}>{categoryPages[key].title}<span>↗</span></a>
          ))}
        </div>
      </nav>

      <ArtworkViewer artwork={selected} onClose={() => setSelected(null)} />
    </main>
  )
}
