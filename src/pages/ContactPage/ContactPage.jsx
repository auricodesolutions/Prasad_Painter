import './ContactPage.css'

export default function ContactPage() {
  const sendWhatsApp = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = encodeURIComponent(
      `Hello Prasad, I would like to make an enquiry.\n\nName: ${form.get('name')}\nEmail: ${form.get('email')}\nEnquiry: ${form.get('enquiry')}\n\n${form.get('message')}`,
    )
    window.open(`https://wa.me/94714562736?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__heading">
          <p className="eyebrow reveal">Prasad Weerasinghe Studio</p>
          <h1 className="reveal reveal--delay">A conversation<br />can begin <em>here.</em></h1>
          <p className="reveal reveal--delay-2">For original artwork, exhibitions, commissions, set design and art direction.</p>
        </div>
      </section>

      <section className="contact-details" aria-labelledby="contact-form-title">
        <aside className="contact-details__studio" data-reveal>
          <p className="eyebrow">Contact the artist</p>
          <h2>Share the idea,<br /><em>context or work.</em></h2>
          <p>A short outline is enough to begin. Include the title of an artwork when enquiring about a piece, or a project date and location for creative production work.</p>

          <dl>
            <div><dt>Response</dt><dd>Directly from the studio</dd></div>
            <div><dt>Location</dt><dd>Panadura, Sri Lanka</dd></div>
            <div><dt>Enquiries</dt><dd>Local and international</dd></div>
          </dl>

          <nav aria-label="Artist social profiles">
            <a href="https://www.instagram.com/prasart78" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://www.tiktok.com/@artprasad" target="_blank" rel="noreferrer">TikTok ↗</a>
            <a href="https://www.facebook.com/share/1CGuesswFt/" target="_blank" rel="noreferrer">Facebook ↗</a>
          </nav>
        </aside>

        <form className="contact-form" onSubmit={sendWhatsApp} data-reveal>
          <div className="contact-form__top">
            <div>
              <p className="eyebrow" id="contact-form-title">Send an enquiry</p>
              <h2>Tell us what you have in mind.</h2>
            </div>
            <span>All fields required</span>
          </div>

          <div className="contact-form__row">
            <label>
              <span>Your name</span>
              <input type="text" name="name" autoComplete="name" placeholder="Name" required />
            </label>
            <label>
              <span>Email address</span>
              <input type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
            </label>
          </div>

          <label>
            <span>Type of enquiry</span>
            <select name="enquiry" defaultValue="Artwork">
              <option>Artwork</option>
              <option>Commission</option>
              <option>Exhibition</option>
              <option>Set design</option>
              <option>Art direction</option>
            </select>
          </label>

          <label>
            <span>Your message</span>
            <textarea name="message" rows="5" placeholder="Tell the studio about your enquiry…" required />
          </label>

          <button type="submit">Send via WhatsApp <span aria-hidden="true">↗</span></button>
          <p className="contact-form__note">Your enquiry opens securely in WhatsApp. The message is not stored on this website.</p>
        </form>
      </section>
    </main>
  )
}
