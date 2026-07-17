import './About.css'

export default function About() {
  return (
    <section className="about section" id="about">
      <span className="about__number" aria-hidden="true">02</span>

      <figure className="about__artwork" data-reveal>
        <div className="about__image-wrap">
          <img src="/assets/img2.jpeg" alt="Painting featuring a blue figure surrounded by detailed organic forms" loading="lazy" />
          <span className="about__image-index">Selected work · 02</span>
        </div>
        <figcaption>Many Selves · Acrylic on canvas · 2025</figcaption>
      </figure>

      <div className="about__copy" data-reveal>
        <p className="eyebrow"><span /> About the artist</p>
        <h2>Prasad creates symbolic worlds where <em>people, nature and memory</em> move together.</h2>

        <p className="about__lead">Prasad is a Sri Lankan contemporary visual artist whose paintings combine figurative storytelling, organic pattern and carefully layered detail.</p>

        <div className="about__body">
          <p>His work explores identity, transformation and the inner experiences that connect people to one another and to the natural world.</p>
          <p>Every composition grows slowly through repeated lines, forms and colours—inviting viewers to discover a new story each time they look.</p>
        </div>

        <dl className="about__facts">
          <div><dt>Based in</dt><dd>Sri Lanka</dd></div>
          <div><dt>Practice</dt><dd>Contemporary painting</dd></div>
          <div><dt>Exploring</dt><dd>Memory · Nature · Identity</dd></div>
        </dl>

        <div className="about__actions">
          <a className="about__primary" href="#work">View selected works <span>&#8599;</span></a>
          <a className="about__secondary" href="#contact">Contact the studio <span>&rarr;</span></a>
        </div>
      </div>
    </section>
  )
}
