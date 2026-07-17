import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__main">
        <div className="footer__identity">
          <a className="footer__brand" href="/" aria-label="Prasad Artist home">
            PRASAD<span>ARTIST</span>
          </a>
          <p>Contemporary paintings shaped by memory, nature and the human experience.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <strong>Explore</strong>
          <a href="/#work">Selected works</a>
          <a href="/about/">About the artist</a>
          <a href="/#exhibition-poster">Exhibitions</a>
        </nav>

        <div className="footer__details">
          <strong>Studio</strong>
          <p>Colombo, Sri Lanka<br />Visits by appointment</p>
        </div>

        <div className="footer__details">
          <strong>Enquiries</strong>
          <a href="mailto:studio@prasadartist.com">studio@prasadartist.com</a>
          <a href="tel:+94770000000">+94 77 000 0000</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Prasad Artist. All rights reserved.</p>
        <div>
          <a href="#top">Instagram ↗</a>
          <a href="#top">Facebook ↗</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
