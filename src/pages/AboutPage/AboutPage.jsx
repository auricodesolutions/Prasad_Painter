import './AboutPage.css'

const profile = [
  ['Born', 'Sri Lanka · 1978'],
  ['Education', 'Master of Art History'],
  ['Professional work', 'Art Director · Set Designer'],
  ['Practice', 'Research-led contemporary painting'],
]

const setDesignWorks = [
  { image: '/assets/img%20(1).jpeg', caption: 'Concept environment · Scenic landscape design', alt: 'Scenic environment with stone circles, monoliths and a mountain landscape' },
  { image: '/assets/img%20(2).jpeg', caption: 'Decorative nature set · Broadcast production', alt: 'Colourful nature-inspired broadcast set with sculptural plants and clouds' },
  { image: '/assets/img%20(3).jpeg', caption: 'Organic architecture · Scenic installation', alt: 'Interior set formed from large organic tree-like structures' },
  { image: '/assets/img%20(4).jpeg', caption: 'Rainbow set · Studio production', alt: 'Television studio production with performers on a cloud and rainbow set' },
  { image: '/assets/img%20(5).jpeg', caption: 'Illuminated stage · Production view', alt: 'Performance set with hanging lights, sculptural plants and coloured stage lighting' },
  { image: '/assets/img%20(6).jpeg', caption: 'Light and atmosphere · Scenic design', alt: 'Wide view of an illuminated performance set with trees and suspended lights' },
]

export default function AboutPage() {
  return (
    <main className="about-page" id="top">
      <section className="about-page__hero">
        <img src="/assets/hero-gallery-painter.png" alt="Prasad viewing a collection of paintings in a gallery" />
        <div className="about-page__hero-shade" />
        <div className="about-page__hero-copy">
          <p className="eyebrow reveal">The artist behind the canvas</p>
          <h1 className="reveal reveal--delay">About<br /><em>Prasad.</em></h1>
          <p className="reveal reveal--delay-2">Sri Lankan painter, art director and set designer building a distinctive visual language through research and tradition.</p>
        </div>
        <a className="about-page__scroll" href="#artist-story"><span>Discover his story</span><i>&darr;</i></a>
      </section>

      <section className="about-page__story" id="artist-story">
        <div className="about-page__story-heading" data-reveal>
          <p className="eyebrow">Artist profile</p>
          <h2>Art as a form of<br /><em>visual literacy.</em></h2>
        </div>

        <div className="about-page__portrait" data-reveal>
          <img src="/assets/owner.jpeg" alt="Portrait of Prasad Weerasinghe, Sri Lankan contemporary artist" loading="lazy" />
          <span>Prasad Weerasinghe · Visual artist · Colombo</span>
        </div>

        <div className="about-page__biography" data-reveal>
          <p className="about-page__lead">Prasad Weerasinghe brings research, decorative detail and composite figures together in a visual language of his own.</p>
          <div className="about-page__body-copy">
            <p>Born in Sri Lanka in 1978, he completed a Master of Art History through the Postgraduate Institute of the University of Kelaniya.</p>
            <p>He joined the Sri Lanka Rupavahini Corporation in 2006 and has worked professionally as an art director and set designer alongside his painting practice.</p>
            <p>His works combine paper-like and textured surfaces, decorative elements, composite figures and references to 18th-century traditional Sri Lankan art. Extensive research underpins the way these elements are reassembled into new creations.</p>
          </div>
        </div>

        <dl className="about-page__profile" data-reveal>
          {profile.map(([term, detail]) => (
            <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>
          ))}
        </dl>

        <nav className="about-page__socials" aria-label="Follow Prasad Weerasinghe on social media" data-reveal>
          <span>Follow the artist</span>
          <a href="https://www.instagram.com/prasart78?igsh=MTV2M2l2bzE1YnFmdQ==&utm_source=ig_contact_invite" target="_blank" rel="noreferrer">Instagram <small>@prasart78</small> &#8599;</a>
          <a href="https://www.tiktok.com/@artprasad?_r=1&_t=ZS-98BHGXEwf3v" target="_blank" rel="noreferrer">TikTok <small>@artprasad</small> &#8599;</a>
          <a href="https://www.facebook.com/share/1CGuesswFt/" target="_blank" rel="noreferrer">Facebook &#8599;</a>
        </nav>
      </section>

      <section className="about-page__exhibition-archive" aria-labelledby="exhibition-archive-title">
        <div className="about-page__archive-heading" data-reveal>
          <span />
          <p className="eyebrow">Biography</p>
          <h2 id="exhibition-archive-title">Career &amp; formation</h2>
        </div>

        <div className="about-page__archive-row about-page__archive-row--solo">
          <div className="about-page__archive-column" data-reveal>
            <p><time>1978</time><strong>Born in Sri Lanka</strong><span>A practice rooted in Sri Lankan visual culture</span></p>
            <p><time>2006</time><strong>Joined Sri Lanka Rupavahini</strong><span>Professional work across art direction and set design</span></p>
          </div>
          <div className="about-page__archive-column" data-reveal>
            <p><time>Higher education</time><strong>Master of Art History</strong><span>Postgraduate Institute · University of Kelaniya</span></p>
            <p><time>Professional practice</time><strong>Art Director &amp; Set Designer</strong><span>Sri Lanka Rupavahini Corporation</span></p>
          </div>
          <figure className="about-page__archive-image" data-reveal>
            <img src="/assets/img3.jpeg" alt="Where Memory Blooms, mixed media painting" loading="lazy" />
            <figcaption>Selected work · Composite figures and decorative form</figcaption>
          </figure>
        </div>

        <div className="about-page__archive-heading about-page__archive-heading--group" data-reveal>
          <span />
          <h2>Research-led practice</h2>
        </div>

        <div className="about-page__archive-row about-page__archive-row--group">
          <figure className="about-page__archive-image about-page__archive-image--portrait" data-reveal>
            <img src="/assets/hero-gallery-painter.png" alt="Artist viewing paintings in a gallery" loading="lazy" />
            <figcaption>Prasad Weerasinghe · Visual artist</figcaption>
          </figure>
          <div className="about-page__archive-column" data-reveal>
            <p><time>Visual literacy</time><strong>Art built through enquiry</strong><span>Research is central to how each painting develops</span></p>
            <p><time>Composition</time><strong>Layered visual structures</strong><span>Paper-like surfaces, texture, decoration and composite figures</span></p>
          </div>
          <div className="about-page__archive-column" data-reveal>
            <p><time>Tradition</time><strong>Sri Lankan art history</strong><span>References include 18th-century traditional Sri Lankan art</span></p>
            <p><time>Artist profile</time><strong>Published biography</strong><span><a href="https://gibugallery.com.au/prasad-weerasinghe/" target="_blank" rel="noreferrer">View Gibu Gallery profile &#8599;</a></span></p>
          </div>
        </div>
      </section>

      <section className="about-page__education" aria-labelledby="education-title">
        <div className="about-page__education-heading" data-reveal>
          <span />
          <p className="eyebrow">Academic foundation</p>
          <h2 id="education-title">Education</h2>
        </div>

        <div className="about-page__education-records" data-reveal>
          <p><time>Qualification</time><span>Master of Art History</span></p>
          <p><time>Institute</time><span>Postgraduate Institute</span></p>
          <p><time>University</time><span>University of Kelaniya · Sri Lanka</span></p>
        </div>

        <div className="about-page__education-images">
          <figure data-reveal>
            <img src="/assets/hero-gallery-painter.png" alt="Artist studying paintings in a gallery" loading="lazy" />
            <figcaption>Visual research · Historical context · Contemporary form</figcaption>
          </figure>
          <figure data-reveal>
            <img src="/assets/img2.jpeg" alt="Detailed painting used in Prasad's continuing visual studies" loading="lazy" />
            <figcaption>Composite form · Texture · Decorative detail</figcaption>
          </figure>
        </div>
      </section>

      <section className="about-page__credentials">
        <div className="about-page__credentials-heading" data-reveal>
          <p className="eyebrow">Professional practice</p>
          <h2>Painting, research<br />and <em>visual direction.</em></h2>
        </div>

        <div className="about-page__credentials-layout">
          <div className="about-page__credentials-list">
            <article data-reveal>
              <span>01</span>
              <div>
                <h3>Painting</h3>
                <p>A research-led practice combining textured surfaces, decorative elements and complex composite figures.</p>
              </div>
            </article>

            <article data-reveal>
              <span>02</span>
              <div>
                <h3>Art direction</h3>
                <p>Professional experience at the Sri Lanka Rupavahini Corporation, which he joined in 2006.</p>
              </div>
            </article>

            <article data-reveal>
              <span>03</span>
              <div>
                <h3>Set design</h3>
                <p>Spatial and visual storytelling developed through his professional work as a set designer.</p>
              </div>
            </article>

            <article data-reveal>
              <span>04</span>
              <div>
                <h3>Research</h3>
                <p>Art history and close visual study inform the language, surfaces and structures within each creation.</p>
              </div>
            </article>
          </div>

          <figure className="about-page__credentials-image" data-reveal>
            <div>
              <img src="/assets/owner.jpeg" alt="Portrait of Prasad Weerasinghe, visual artist" loading="lazy" />
            </div>
            <figcaption><span>Prasad Weerasinghe</span><small>Visual artist · Colombo, Sri Lanka</small></figcaption>
          </figure>
        </div>
      </section>

      <section className="about-page__set-design" aria-labelledby="set-design-title">
        <div className="about-page__set-design-heading" data-reveal>
          <p className="eyebrow">Art direction &amp; set design</p>
          <h2 id="set-design-title">Worlds built for<br /><em>stage and screen.</em></h2>
          <p>Selected scenic environments showing Prasad's work with space, colour, structure, lighting and visual storytelling.</p>
        </div>

        <div className="about-page__set-design-grid">
          {setDesignWorks.map((work, index) => (
            <figure data-reveal key={work.image}>
              <div>
                <img src={work.image} alt={work.alt} loading="lazy" />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <figcaption>{work.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="about-page__recognition" aria-labelledby="recognition-title">
        <div className="about-page__recognition-heading" data-reveal>
          <span />
          <p className="eyebrow">Artistic language</p>
          <h2 id="recognition-title">Elements in the work</h2>
        </div>

        <div className="about-page__recognition-layout">
          <div className="about-page__recognition-column" data-reveal>
            <p><time>Surface</time><span>Paper-like and textured foundations</span></p>
            <p><time>Figure</time><span>Composite forms assembled through careful research</span></p>
            <p><time>Detail</time><span>Decorative elements that reward close viewing</span></p>
            <p><time>Method</time><span>Separate visual elements composed into a new creation</span></p>
          </div>

          <div className="about-page__recognition-column" data-reveal>
            <p><time>History</time><span>References to 18th-century traditional Sri Lankan art</span></p>
            <p><time>Literacy</time><span>Painting approached as a form of visual literacy</span></p>
            <p><time>Context</time><span>Master of Art History · University of Kelaniya</span></p>
            <p><time>Biography</time><span><a href="https://gibugallery.com.au/prasad-weerasinghe/" target="_blank" rel="noreferrer">Read the published artist profile &#8599;</a></span></p>
          </div>

          <figure className="about-page__recognition-image" data-reveal>
            <img src="/assets/hero-gallery-painter.png" alt="Prasad studying a wall of paintings" loading="lazy" />
            <figcaption>Research · Tradition · A new visual language</figcaption>
          </figure>
        </div>
      </section>

    </main>
  )
}
