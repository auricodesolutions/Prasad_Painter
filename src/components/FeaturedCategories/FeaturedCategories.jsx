import './FeaturedCategories.css'

const categories = [
  {
    slug: 'paintings',
    title: 'Paintings',
    image: '/assets/img%20(42).jpeg',
    alt: 'Colourful figurative painting by Prasad Weerasinghe',
    description: 'Research-led paintings where symbolic figures, ornament and memory meet.',
  },
  {
    slug: 'drawings',
    title: 'Drawings',
    image: '/assets/img%20(61).jpeg',
    alt: 'Detailed drawing and mixed media study',
    description: 'Intimate works on paper shaped through line, texture and close observation.',
  },
  {
    slug: 'commercial',
    title: 'Commercial',
    image: '/assets/exhibition-view-banner.png',
    alt: 'Conceptual artwork created for a commissioned project',
    description: 'Commissioned visual concepts, art direction and distinctive creative collaborations.',
  },
  {
    slug: 'sculptures',
    title: 'Sculptures',
    image: '/assets/img%20(1).jpeg',
    alt: 'Sculptural environmental installation with stone forms',
    description: 'Spatial works and constructed forms that bring the artist’s language into three dimensions.',
  },
]

export default function CollectionShowcase({ onNavigate }) {
  return (
    <section className="featured-categories" id="collection" aria-labelledby="featured-categories-title">
      <header className="featured-categories__heading" data-reveal>
        <div>
          <p className="eyebrow">Explore the practice</p>
          <h2 id="featured-categories-title">Featured <em>categories.</em></h2>
        </div>
        <p>Four areas of practice, connected through a shared language of research, symbolism and Sri Lankan visual traditions.</p>
      </header>

      <div className="featured-categories__list" data-reveal>
        {categories.map((category) => (
          <article className="category-panel" key={category.title}>
            <img src={category.image} alt={category.alt} loading="lazy" />
            <span className="category-panel__wash" aria-hidden="true" />

            <div className="category-panel__content">
              <p>Featured category</p>
              <h3>{category.title}</h3>
              <div className="category-panel__reveal">
                <p>{category.description}</p>
                <a
                  href={`/category/${category.slug}/`}
                  onClick={(event) => {
                    if (!onNavigate) return
                    event.preventDefault()
                    onNavigate(`category:${category.slug}`)
                  }}
                >
                  Explore category <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <a
              className="category-panel__link"
              href={`/category/${category.slug}/`}
              aria-label={`Explore ${category.title}`}
              onClick={(event) => {
                if (!onNavigate) return
                event.preventDefault()
                onNavigate(`category:${category.slug}`)
              }}
            />
          </article>
        ))}
      </div>

      <footer className="featured-categories__footer" data-reveal>
        <p>Original work · Commissions · Creative collaborations</p>
        <a href="/contact/">Discuss a project <span aria-hidden="true">↗</span></a>
      </footer>
    </section>
  )
}
