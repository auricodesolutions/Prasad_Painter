import './ExhibitionPoster.css'

export default function ExhibitionPoster() {
  return (
    <section className="poster-feature" id="exhibition-poster">
      <div className="poster-feature__heading" data-reveal>
        <p className="eyebrow">Upcoming exhibition · Poster preview</p>
      </div>

      <div className="poster-feature__frame" data-reveal>
        <img src="/assets/exhibition-gallery-poster.png" alt="Contemporary gallery presenting Prasad's symbolic paintings" loading="lazy" />
        <div className="poster-feature__wash" />

        <span className="poster-feature__arrow poster-feature__arrow--left" aria-hidden="true">&larr;</span>

        <div className="poster-feature__card">
          <p>PRASAD <span>ARTIST</span></p>
          <small>Contemporary paintings</small>
          <h3>New<br />Works</h3>
          <div className="poster-feature__date">
            <strong>2026</strong>
            <span>Opening details<br />to be announced</span>
          </div>
          <a href="mailto:studio@prasadartist.com?subject=Exhibition%20preview">Colombo, Sri Lanka <i>&rarr;</i></a>
        </div>

        <span className="poster-feature__arrow poster-feature__arrow--right" aria-hidden="true">&rarr;</span>

        <div className="poster-feature__socials">
          <span>Follow</span><i /><i /><i />
        </div>
      </div>

      <div className="poster-feature__details" data-reveal>
        <span>Exhibition poster preview</span>
        <p>Final venue and opening dates will be announced when confirmed.</p>
        <a href="mailto:studio@prasadartist.com?subject=Exhibition%20updates">Request exhibition updates &rarr;</a>
      </div>
    </section>
  )
}
