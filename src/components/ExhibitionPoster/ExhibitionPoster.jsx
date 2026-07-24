import './ExhibitionPoster.css'

export default function ExhibitionPoster() {
  return (
    <section className="poster-feature" id="exhibition-poster">
      <div className="poster-feature__heading" data-reveal>
        <p className="eyebrow">Artist spotlight · Profile preview</p>
      </div>

      <div className="poster-feature__frame" data-reveal>
        <img src="/assets/exhibition-gallery-poster.png" alt="Contemporary gallery presenting Prasad's symbolic paintings" loading="lazy" />
        <div className="poster-feature__wash" />

        <span className="poster-feature__arrow poster-feature__arrow--left" aria-hidden="true">&larr;</span>

        <div className="poster-feature__card">
          <p>PRASAD <span>WEERASINGHE</span></p>
          <small>Research-led painting</small>
          <h3>Visual<br />Literacy</h3>
          <div className="poster-feature__date">
            <strong>1978</strong>
            <span>Born in<br />Sri Lanka</span>
          </div>
          <a href="https://gibugallery.com.au/prasad-weerasinghe/" target="_blank" rel="noreferrer">View artist profile <i>&rarr;</i></a>
        </div>

        <span className="poster-feature__arrow poster-feature__arrow--right" aria-hidden="true">&rarr;</span>

        <div className="poster-feature__socials">
          <span>Follow</span><i /><i /><i />
        </div>
      </div>

      <div className="poster-feature__details" data-reveal>
        <span>Published artist profile</span>
        <p>Discover the education, professional career and research behind Prasad's visual language.</p>
        <a href="https://gibugallery.com.au/prasad-weerasinghe/" target="_blank" rel="noreferrer">Read on Gibu Gallery &#8599;</a>
      </div>
    </section>
  )
}
