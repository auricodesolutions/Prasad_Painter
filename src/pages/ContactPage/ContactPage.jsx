import './ContactPage.css'

const whatsappUrl = 'https://wa.me/94714562736?text=Hello%20Prasad%2C%20I%27d%20like%20to%20enquire%20about%20your%20artwork.'

export default function ContactPage() {
  const sendEmail = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`${form.get('enquiry')} enquiry from ${form.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${form.get('name')}\nEmail: ${form.get('email')}\nEnquiry: ${form.get('enquiry')}\n\n${form.get('message')}`,
    )
    window.location.href = `mailto:prasart.adro@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__mark" aria-hidden="true">
        </div>
        <div className="contact-hero__heading" data-reveal>
          <p className="eyebrow">Contact the studio</p>
          <h1>Begin a creative<br /><em>conversation.</em></h1>
        </div>
        <p className="contact-hero__intro" data-reveal>
          For original artwork, commissions, exhibitions, set design and art direction.
        </p>
        <span className="contact-hero__scroll" aria-hidden="true">Enquiries ↓</span>
      </section>

      <section className="contact-details" aria-labelledby="contact-form-title">
        <aside className="contact-details__studio" data-reveal>
          <p className="eyebrow">Prasad Weerasinghe Studio</p>
          <h2>Let’s make something with meaning.</h2>
          <p>Share a few details about the artwork, exhibition or production you have in mind. The studio will respond directly.</p>

          <dl>
            <div><dt>Email</dt><dd><a href="mailto:prasart.adro@gmail.com">prasart.adro@gmail.com</a></dd></div>
            <div><dt>WhatsApp</dt><dd><a href={whatsappUrl} target="_blank" rel="noreferrer">+94 71 456 2736 ↗</a></dd></div>
            <div><dt>Studio</dt><dd>Panadura, Sri Lanka</dd></div>
          </dl>

          <nav aria-label="Artist social profiles">
            <a href="https://www.instagram.com/prasart78" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://www.tiktok.com/@artprasad" target="_blank" rel="noreferrer">TikTok ↗</a>
            <a href="https://www.facebook.com/share/1CGuesswFt/" target="_blank" rel="noreferrer">Facebook ↗</a>
          </nav>
        </aside>

        <form className="contact-form" onSubmit={sendEmail} data-reveal>
          <div className="contact-form__top">
            <p className="eyebrow">Send an enquiry</p>
            <span>All fields required</span>
          </div>

          <label>
            <span>Your name</span>
            <input type="text" name="name" autoComplete="name" placeholder="Name" required />
          </label>

          <label>
            <span>Email address</span>
            <input type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
          </label>

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

          <button type="submit">Prepare email <span aria-hidden="true">↗</span></button>
          <p className="contact-form__note">Submitting opens your preferred email application with the enquiry prepared.</p>
        </form>
      </section>
    </main>
  )
}
