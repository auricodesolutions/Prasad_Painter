import './AboutPage.css'

const education = [
  { year: '1994', title: 'Diploma in Painting', place: 'National Youth Centre · Sri Lanka' },
  { year: '1999', title: 'Diploma in Indoor Advertising', place: 'Vishva Education Centre · Sri Lanka' },
  { year: '2008', title: 'Bachelor of Fine Arts', place: 'University of the Visual and Performing Arts · Colombo' },
  { year: '2017', title: 'Master of Art History', place: 'Postgraduate Institute of Archaeology · University of Kelaniya' },
]

const career = [
  { year: '2026', title: 'Opening ceremony of Art Rhizome', place: 'Gregory’s Road, Colombo 07 · Group exhibition' },
  { year: '2019', title: 'Composite Figure', place: 'Paradise Road Gallery · Solo painting exhibition' },
  { year: '2011', title: 'Translation', place: 'Harold Peiris Art Gallery · Solo painting exhibition' },
  { year: '2008', title: 'Young Contemporaries', place: 'National Art Gallery · Group exhibition' },
  { year: '2006', title: 'Traditional Painting Exhibition', place: 'University Gallery, Colombo 07 · Group exhibition' },
  { year: 'Since 2006', title: 'Set Designer & Art Director', place: 'Sri Lanka Rupavahini Corporation' },
  { year: '2005', title: 'With the Other', place: 'National Art Gallery · Group exhibition' },
  { year: '2005', title: 'Traditional Art Workshop', place: 'University of the Visual and Performing Arts · Workshop' },
]

const awards = [
  ['1992', 'Certificate Award', 'National Forest Department of Sri Lanka'],
  ['1994', 'First Place', 'Buddhist Cultural Department · Sri Lanka'],
  ['1996', 'Second Place', 'Buddhist Cultural Department · Sri Lanka'],
  ['1997', 'First Place', 'Inter Youth Council Competition · District Youth Cultural Centre'],
  ['1998', 'Award Certificate', 'National School Poster Competition · World AIDS Day'],
  ['1998', 'Second Place', '50th Anniversary of the Universal Declaration of Human Rights Art Competition'],
  ['2003', 'Best Award', 'State May Day Art Competition · Cultural Department'],
  ['2007', 'Best Art Director Nomination', 'Raigam Tele Awards · Rala Bindena Thana'],
  ['2007', 'Second Place', 'State Art and Sculpture Festival'],
  ['2008', 'First Place', '120th Annual Art and Craft Exhibition · Ceylon Society of Arts'],
  ['2008', 'Best Art Director Nomination', 'State Television Drama Festival'],
  ['2017', 'Third Place', 'State Art and Sculpture Festival'],
]

const skills = ['Painting', 'Drawing', 'Sculpture', 'Management', 'TV art direction', 'Set design']

export default function AboutPage() {
  return (
    <main className="about-page" id="top">
      <section className="about-page__hero">
        <img src="/assets/about-hero-prasad.png" alt="Prasad Weerasinghe in his studio" />
        <span className="about-page__hero-shade" />
        <div className="about-page__hero-copy">
          <p className="eyebrow reveal">Artist · Art director · Set designer</p>
          <h1 className="reveal reveal--delay">About Me</h1>
          <p className="reveal reveal--delay-2">A Sri Lankan visual artist building contemporary work through research, traditional decorative language and composite form.</p>
        </div>
      </section>

      <section className="about-page__introduction">
        <div className="about-page__intro-heading" data-reveal>
          <p className="eyebrow">Profile</p>
          <h2>Art developed through<br /><em>history and enquiry.</em></h2>
        </div>

        <figure data-reveal>
          <img src="/assets/prasad-painting-process.png" alt="Portrait of Prasad Weerasinghe in his studio" loading="lazy" />
          <figcaption>Prasad Weerasinghe · Sri Lanka</figcaption>
        </figure>

        <div className="about-page__intro-copy" data-reveal>
          <p className="about-page__lead">Prasad’s practice combines traditional decorative elements from Sri Lankan temples with observations of contemporary social behaviour.</p>
          <p>Working across painting, drawing, sculpture, set design and television art direction, he brings different media, techniques and materials together to form a distinct visual language.</p>
          <blockquote>“I view art as visual literacy. Research helps me understand what art means to me and allows each painting to become a newly composed creation.”</blockquote>
          <div className="about-page__skills">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="about-cv">
        <header data-reveal>
          <p className="eyebrow">Curriculum vitae</p>
          <h2>Education &amp;<br /><em>professional history.</em></h2>
        </header>

        <div className="about-cv__columns">
          <article data-reveal>
            <div className="about-cv__title"><p className="eyebrow">Education</p><span>Qualifications</span></div>
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
            <div className="about-cv__title"><p className="eyebrow">Experience</p><span>Exhibitions &amp; occupation</span></div>
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
          <h2 id="about-awards-title">Awards &amp; other activities.</h2>
        </header>

        <div className="about-awards__grid">
          {awards.map(([year, title, organisation]) => (
            <article data-reveal key={`${year}-${title}-${organisation}`}>
              <time>{year}</time>
              <h3>{title}</h3>
              <p>{organisation}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-contact">
        <div data-reveal>
          <p className="eyebrow">Studio details</p>
          <h2>Continue the conversation.</h2>
        </div>
        <dl data-reveal>
          <div><dt>Email</dt><dd><a href="mailto:prasart.adro@gmail.com">prasart.adro@gmail.com</a></dd></div>
          <div><dt>Telephone</dt><dd><a href="tel:+94714562736">+94 71 456 2736</a></dd></div>
          <div><dt>Studio</dt><dd>Pinwatta, Panadura · Sri Lanka</dd></div>
        </dl>
        <a className="about-contact__button" href="/contact/">Contact the studio <span>↗</span></a>
      </section>
    </main>
  )
}
