import './AboutPage.css'

const education = [
  { year: '1994', title: 'Diploma in Painting', place: 'National Youth Centre, Sri Lanka' },
  { year: '1999', title: 'Diploma in Indoor Advertising', place: 'Vishva Education Centre, Sri Lanka' },
  { year: '2008', title: 'Bachelor of Fine Arts', place: 'University of the Visual and Performing Arts, Colombo' },
  { year: '2017', title: 'Master of Art History', place: 'Postgraduate Institute of Archaeology, University of Kelaniya' },
]

const career = [
  { year: '2026', title: 'Opening Ceremony of Art Rhizome', place: 'Gregory’s Road, Colombo 07 · Group exhibition' },
  { year: '2019', title: 'Composite Figure', place: 'Paradise Road Gallery · Solo painting exhibition' },
  { year: '2011', title: 'Translation', place: 'Harold Peiris Art Gallery · Solo painting exhibition' },
  { year: '2008', title: 'Young Contemporaries', place: 'National Art Gallery · Group exhibition' },
  { year: 'Since 2006', title: 'Set Designer & Art Director', place: 'Sri Lanka Rupavahini Corporation' },
  { year: '2006', title: 'Traditional Painting Exhibition', place: 'University Gallery, Colombo 07 · Group exhibition' },
  { year: '2005', title: 'With the Other', place: 'National Art Gallery · Group exhibition' },
  { year: '2005', title: 'Traditional Art Workshop', place: 'University of the Visual and Performing Arts' },
]

const awards = [
  ['1992', 'Certificate Award', 'National Forest Department of Sri Lanka'],
  ['1994', 'First Place', 'Buddhist Cultural Department, Sri Lanka'],
  ['1996', 'Second Place', 'Buddhist Cultural Department, Sri Lanka'],
  ['1997', 'First Place', 'Inter Youth Council Competition · District Youth Cultural Centre'],
  ['1998', 'Award Certificate', 'National School Poster Competition · World AIDS Day'],
  ['1998', 'Second Place', 'Universal Declaration of Human Rights art competition'],
  ['2003', 'Best Award', 'State May Day Art Competition · Cultural Department'],
  ['2007', 'Best Art Director Nomination', 'Raigam Tele Awards · Rala Bindena Thana'],
  ['2007', 'Second Place', 'State Art and Sculpture Festival'],
  ['2008', 'First Place', '120th Annual Art and Craft Exhibition · Ceylon Society of Arts'],
  ['2008', 'Best Art Director Nomination', 'State Television Drama Festival'],
  ['2017', 'Third Place', 'State Art and Sculpture Festival'],
]

const skills = ['Painting', 'Drawing', 'Sculpture', 'Set design', 'TV art direction', 'Creative management']

export default function AboutPage({ onNavigate }) {
  return (
    <main className="about-page" id="top">
      <section className="about-page__hero">
        <img src="/assets/about-hero-prasad.png" alt="Prasad Weerasinghe working beside one of his paintings" />
        <span className="about-page__hero-shade" aria-hidden="true" />
        <div className="about-page__hero-copy">
          <p className="eyebrow reveal">Sri Lankan visual artist</p>
          <h1 className="reveal reveal--delay">About Me</h1>
          <p className="reveal reveal--delay-2">Painting, visual research and spatial storytelling shaped by history, ornament and contemporary life.</p>
        </div>
        
      </section>

      <section className="about-story">
        <header className="about-story__heading" data-reveal>
          <p className="eyebrow">Artist profile</p>
          <h2>A language built through<br /><em>research and making.</em></h2>
        </header>

        <div className="about-story__layout">
          <figure data-reveal>
            <img src="/assets/prasad-painting-process.png" alt="Prasad Weerasinghe painting in the studio" loading="lazy" />
          </figure>

          <div className="about-story__copy" data-reveal>
            <p className="about-story__lead">Traditional decorative elements become a living vocabulary for observing today’s social world.</p>
            <div className="about-story__body">
              <p>Prasad’s practice draws from Sri Lankan temple art, art history and sustained visual research. Composite figures, patterned surfaces and symbolic detail are carefully assembled into a contemporary form of visual literacy.</p>
              <p>His work moves across painting, drawing and sculpture while extending into television set design and art direction. Each discipline informs the others: the paintings think spatially, and the environments carry a painter’s attention to rhythm, colour and detail.</p>
            </div>
            <blockquote>“I view art as visual literacy. Research helps me understand what art means to me and allows each painting to become a newly composed creation.”</blockquote>
            <div className="about-story__signature" aria-label="Prasad Weerasinghe artist signature">
              <span className="about-story__signature-mark" aria-hidden="true" />
              <span>Prasad Weerasinghe</span>
            </div>
            <div className="about-story__skills" aria-label="Areas of practice">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="about-cv">
        <header data-reveal>
          <div>
            <p className="eyebrow">Selected curriculum vitae</p>
            <h2>Learning and<br /><em>working history.</em></h2>
          </div>
          <p>A practice developed through formal study, independent enquiry, exhibitions and more than two decades of production experience.</p>
        </header>

        <div className="about-cv__columns">
          <article data-reveal>
            <div className="about-cv__title"><p className="eyebrow">Education</p><span>Formal study</span></div>
            <div className="about-cv__list">
              {education.map((item) => (
                <div key={`${item.year}-${item.title}`}>
                  <time>{item.year}</time>
                  <p><strong>{item.title}</strong><span>{item.place}</span></p>
                </div>
              ))}
            </div>
          </article>

          <article data-reveal>
            <div className="about-cv__title"><p className="eyebrow">Experience</p><span>Exhibitions & practice</span></div>
            <div className="about-cv__list">
              {career.map((item) => (
                <div key={`${item.year}-${item.title}`}>
                  <time>{item.year}</time>
                  <p><strong>{item.title}</strong><span>{item.place}</span></p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="about-awards" aria-labelledby="about-awards-title">
        <header data-reveal>
          <p className="eyebrow">Recognition</p>
          <h2 id="about-awards-title">Awards &amp; <em>distinctions.</em></h2>
        </header>
        <div className="about-awards__list">
          {awards.map(([year, title, body]) => (
            <article data-reveal key={`${year}-${title}-${body}`}>
              <time>{year}</time>
              <h3>{title}</h3>
              <p>{body}</p>
              <span aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-contact" data-reveal>
        <div>
          <p className="eyebrow">Studio enquiries</p>
          <h2>Start a thoughtful<br /><em>collaboration.</em></h2>
        </div>
        <p>For original works, exhibitions, commissions, set design and art direction, contact the studio directly.</p>
        <a
          className="about-contact__button"
          href="/contact/"
          onClick={(event) => {
            if (!onNavigate) return
            event.preventDefault()
            onNavigate('contact')
          }}
        >
          Contact the studio <span>↗</span>
        </a>
      </section>
    </main>
  )
}
