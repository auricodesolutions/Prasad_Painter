import './AboutPage.css'

const profile = [
  ['Based in', 'Colombo, Sri Lanka'],
  ['Practice', 'Contemporary painting'],
  ['Primary media', 'Acrylic · Mixed media · Canvas'],
  ['Exploring', 'Memory · Nature · Identity'],
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
          <p className="reveal reveal--delay-2">Sri Lankan contemporary artist exploring the inner landscapes between people, nature and memory.</p>
        </div>
        <a className="about-page__scroll" href="#artist-story"><span>Discover his story</span><i>&darr;</i></a>
      </section>

      <section className="about-page__story" id="artist-story">
        <div className="about-page__story-heading" data-reveal>
          <p className="eyebrow">Artist profile</p>
          <h2>Painting what exists<br /><em>beneath the surface.</em></h2>
        </div>

        <div className="about-page__portrait" data-reveal>
          <img src="/assets/hero-gallery-painter.png" alt="Artist contemplating symbolic paintings" loading="lazy" />
          <span>In the gallery · Colombo</span>
        </div>

        <div className="about-page__biography" data-reveal>
          <p className="about-page__lead">Prasad creates symbolic worlds in which the human figure, botanical forms and fragments of memory move together.</p>
          <div className="about-page__body-copy">
            <p>Based in Sri Lanka, his contemporary painting practice is rooted in close observation. People, changing landscapes and the patterns found in nature become the starting points for images that feel both intimate and universal.</p>
            <p>Each canvas develops gradually through drawing, colour and repeated layers. Figures emerge, disappear and return among organic shapes—mirroring the way identity and memory are continually reshaped over time.</p>
            <p>Rather than offering one fixed meaning, the paintings invite a slower encounter. Their details reward repeated viewing and allow every person to discover a different path through the work.</p>
          </div>
        </div>

        <dl className="about-page__profile" data-reveal>
          {profile.map(([term, detail]) => (
            <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>
          ))}
        </dl>
      </section>

      <section className="about-page__exhibition-archive" aria-labelledby="exhibition-archive-title">
        <div className="about-page__archive-heading" data-reveal>
          <span />
          <p className="eyebrow">Exhibition archive</p>
          <h2 id="exhibition-archive-title">Solo exhibitions</h2>
        </div>

        <div className="about-page__archive-row about-page__archive-row--solo">
          <div className="about-page__archive-column" data-reveal>
            <p><time>2026</time><strong>The Weight of Light</strong><span>Barefoot Gallery · Colombo, Sri Lanka</span></p>
            <p><time>14 Aug — 21 Sep</time><strong>Current exhibition</strong><span>New paintings on home, landscape and memory</span></p>
          </div>
          <div className="about-page__archive-column" data-reveal>
            <p><time>Selected archive</time><strong>Complete exhibition CV</strong><span>Available directly from the artist's studio</span></p>
            <p><time>Studio enquiries</time><strong>Private and curatorial viewing</strong><span>Colombo · By appointment</span></p>
          </div>
          <figure className="about-page__archive-image" data-reveal>
            <img src="/assets/img3.jpeg" alt="Where Memory Blooms, mixed media painting" loading="lazy" />
            <figcaption>Where Memory Blooms · 2026</figcaption>
          </figure>
        </div>

        <div className="about-page__archive-heading about-page__archive-heading--group" data-reveal>
          <span />
          <h2>Group exhibitions</h2>
        </div>

        <div className="about-page__archive-row about-page__archive-row--group">
          <figure className="about-page__archive-image about-page__archive-image--portrait" data-reveal>
            <img src="/assets/hero-gallery-painter.png" alt="Artist viewing paintings in a gallery" loading="lazy" />
            <figcaption>Prasad · Visual artist</figcaption>
          </figure>
          <div className="about-page__archive-column" data-reveal>
            <p><time>Exhibitions</time><strong>Gallery and museum enquiries</strong><span>Selected group exhibition history available on request</span></p>
            <p><time>Collaborations</time><strong>Cross-disciplinary projects</strong><span>Creative, cultural and curatorial partnerships</span></p>
          </div>
          <div className="about-page__archive-column" data-reveal>
            <p><time>Collections</time><strong>Original paintings</strong><span>Private and institutional collection enquiries</span></p>
            <p><time>Professional CV</time><strong>Request the full archive</strong><span><a href="mailto:studio@prasadartist.com?subject=Artist%20CV%20request">studio@prasadartist.com &rarr;</a></span></p>
          </div>
        </div>
      </section>

      <section className="about-page__education" aria-labelledby="education-title">
        <div className="about-page__education-heading" data-reveal>
          <span />
          <p className="eyebrow">Learning and development</p>
          <h2 id="education-title">Education</h2>
        </div>

        <div className="about-page__education-records" data-reveal>
          <p><time>Ongoing</time><span>Independent studio research in contemporary painting and mixed media</span></p>
          <p><time>Practice</time><span>Continued visual studies of memory, nature, identity and the human figure</span></p>
          <p><time>Artist CV</time><span>Formal education and professional development record available from the studio</span></p>
        </div>

        <div className="about-page__education-images">
          <figure data-reveal>
            <img src="/assets/hero-gallery-painter.png" alt="Artist studying paintings in a gallery" loading="lazy" />
            <figcaption>Looking · Researching · Reflecting</figcaption>
          </figure>
          <figure data-reveal>
            <img src="/assets/img2.jpeg" alt="Detailed painting used in Prasad's continuing visual studies" loading="lazy" />
            <figcaption>Studio study · Mixed media and colour</figcaption>
          </figure>
        </div>
      </section>

      <section className="about-page__credentials">
        <div className="about-page__credentials-heading" data-reveal>
          <p className="eyebrow">Professional practice</p>
          <h2>Work, collaboration<br />and <em>engagement.</em></h2>
        </div>

        <div className="about-page__credentials-layout">
          <div className="about-page__credentials-list">
            <article data-reveal>
              <span>01</span>
              <div>
                <h3>Commissions</h3>
                <p>Original paintings developed in conversation with private collectors, interior spaces and selected creative projects.</p>
                <a href="mailto:studio@prasadartist.com?subject=Commission%20enquiry">Discuss a commission &rarr;</a>
              </div>
            </article>

            <article data-reveal>
              <span>02</span>
              <div>
                <h3>Current exhibition</h3>
                <p><strong>The Weight of Light</strong><br />14 August — 21 September 2026<br />Barefoot Gallery · Colombo, Sri Lanka</p>
              </div>
            </article>

            <article data-reveal>
              <span>03</span>
              <div>
                <h3>Studio engagements</h3>
                <p>Private viewings by appointment<br />Artist conversations and studio visits<br />Curatorial and gallery enquiries</p>
              </div>
            </article>

            <article data-reveal>
              <span>04</span>
              <div>
                <h3>Available for</h3>
                <p>Exhibitions · Collaborations<br />Original artwork enquiries<br />Press and creative partnerships</p>
              </div>
            </article>
          </div>

          <figure className="about-page__credentials-image" data-reveal>
            <div>
              <img src="/assets/hero-gallery-painter.png" alt="Prasad standing among his paintings in a gallery" loading="lazy" />
            </div>
            <figcaption><span>Prasad</span><small>Visual artist · Colombo, Sri Lanka</small></figcaption>
          </figure>
        </div>
      </section>

      <section className="about-page__recognition" aria-labelledby="recognition-title">
        <div className="about-page__recognition-heading" data-reveal>
          <span />
          <p className="eyebrow">Professional recognition</p>
          <h2 id="recognition-title">Awards &amp; sponsorships</h2>
        </div>

        <div className="about-page__recognition-layout">
          <div className="about-page__recognition-column" data-reveal>
            <p><time>Artist archive</time><span>Complete awards and recognition record available with the professional CV</span></p>
            <p><time>Exhibition support</time><span>Gallery, institutional and cultural partnership enquiries welcomed</span></p>
            <p><time>Collections</time><span>Original works held through private collector and studio relationships</span></p>
            <p><time>Press materials</time><span>Artist biography, selected images and portfolio information available on request</span></p>
          </div>

          <div className="about-page__recognition-column" data-reveal>
            <p><time>Collaborations</time><span>Creative and cross-disciplinary projects</span></p>
            <p><time>Sponsorships</time><span>Exhibition and cultural-programme partnership opportunities</span></p>
            <p><time>Professional CV</time><span><a href="mailto:studio@prasadartist.com?subject=Awards%20and%20professional%20CV">Request the verified record &rarr;</a></span></p>
            <p><time>Studio</time><span>Colombo, Sri Lanka · By appointment</span></p>
          </div>

          <figure className="about-page__recognition-image" data-reveal>
            <img src="/assets/hero-gallery-painter.png" alt="Prasad studying a wall of paintings" loading="lazy" />
            <figcaption>Prasad · Contemporary visual artist</figcaption>
          </figure>
        </div>
      </section>

      <section className="about-page__studio-details">
        <div className="about-page__studio-image" data-reveal>
          <img src="/assets/img1%20(1).jpeg" alt="Detailed symbolic painting from Prasad's studio" loading="lazy" />
          <span>Studio detail · The Inner Eye</span>
        </div>

        <div className="about-page__studio-content">
          <div data-reveal>
            <p className="eyebrow">Studio &amp; enquiries</p>
            <h2>A place for art,<br /><em>ideas and dialogue.</em></h2>
            <p className="about-page__studio-intro">The studio welcomes thoughtful conversations with collectors, galleries, curators and creative collaborators.</p>
          </div>

          <div className="about-page__studio-grid">
            <article data-reveal>
              <span>01</span>
              <h3>Visit the studio</h3>
              <p>Colombo, Sri Lanka<br />Private viewings by appointment</p>
            </article>
            <article data-reveal>
              <span>02</span>
              <h3>Artwork enquiries</h3>
              <p>Original paintings<br />Availability and collection details</p>
            </article>
            <article data-reveal>
              <span>03</span>
              <h3>Commissions</h3>
              <p>Site-conscious original works<br />Private and creative projects</p>
            </article>
            <article data-reveal>
              <span>04</span>
              <h3>Professional material</h3>
              <p>Artist CV · Portfolio images<br />Press and curatorial information</p>
            </article>
          </div>

          <div className="about-page__studio-actions" data-reveal>
            <a href="mailto:studio@prasadartist.com">studio@prasadartist.com <span>&rarr;</span></a>
            <a href="tel:+94770000000">+94 77 000 0000 <span>&#8599;</span></a>
          </div>
        </div>
      </section>
    </main>
  )
}
