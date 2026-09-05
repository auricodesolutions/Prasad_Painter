import './About.css'

export default function About({ onNavigate }) {
  const navigate = (event, page) => {
    if (!onNavigate) return
    event.preventDefault()
    onNavigate(page)
  }

  return (
    <section className="about section" id="about">
      <figure className="about__artwork" data-reveal>
        <div className="about__image-wrap">
          <img src="/assets/prasad-painting-process.png" alt="Prasad Weerasinghe, Sri Lankan contemporary visual artist" loading="lazy" />
          <span className="about__image-index" aria-hidden="true"><small>Artist in practice</small></span>
        </div>
        <figcaption><span>Studio portrait</span><span>Colombo · Sri Lanka</span></figcaption>
      </figure>

      <div className="about__copy" data-reveal>
        <p className="eyebrow"><span /> About the artist</p>
        <h2>Prasad builds a visual language from <em>research, tradition and composite form.</em></h2>

        <p className="about__lead">Born in Sri Lanka in 1978, Prasad Weerasinghe is a painter, art director and set designer with a Master of Art History from the University of Kelaniya.</p>

        <div className="about__body">
          <p>His paintings bring together textured and paper-like surfaces, decorative elements and carefully constructed composite figures.</p>
          <p>Drawing from extensive research and 18th-century Sri Lankan art, he reorganises familiar elements into a distinctive contemporary language.</p>
        </div>

        <div className="about__signature" aria-label="Prasad Weerasinghe artist signature">
          <span className="about__signature-mark" aria-hidden="true" />
          <span className="about__signature-name">Prasad Weerasinghe</span>
        </div>

        <dl className="about__facts">
          <div><dt>Born</dt><dd>Sri Lanka · 1978</dd></div>
          <div><dt>Education</dt><dd>Master of Art History</dd></div>
          <div><dt>Practice</dt><dd>Painting · Art direction · Set design</dd></div>
        </dl>

        <div className="about__actions">
          <a className="about__primary" href="/about/" onClick={(event) => navigate(event, 'about')}>Learn more <span>&#8599;</span></a>
          <a className="about__secondary" href="/contact/" onClick={(event) => navigate(event, 'contact')}>Contact the studio <span>&rarr;</span></a>
        </div>

        <nav className="about__socials" aria-label="Follow Prasad Weerasinghe on social media">
          <span>Follow Prasad</span>
          <a href="https://www.instagram.com/prasart78?igsh=MTV2M2l2bzE1YnFmdQ==&utm_source=ig_contact_invite" target="_blank" rel="noreferrer">Instagram &#8599;</a>
          <a href="https://www.tiktok.com/@artprasad?_r=1&_t=ZS-98BHGXEwf3v" target="_blank" rel="noreferrer">TikTok &#8599;</a>
          <a href="https://www.facebook.com/share/1CGuesswFt/" target="_blank" rel="noreferrer">Facebook &#8599;</a>
        </nav>
      </div>
    </section>
  )
}
