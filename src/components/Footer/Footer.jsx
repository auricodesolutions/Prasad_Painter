import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__main">
        <div className="footer__identity">
          <a className="footer__brand" href="/" aria-label="Prasad Weerasinghe home">
            <img src="/assets/prasad-signature-mark.png" alt="Prasad Weerasinghe" loading="lazy" />
          </a>
          <p>Contemporary paintings shaped by memory, nature and the human experience.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <strong>Explore</strong>
          <a href="/#work">Selected works</a>
          <a href="/store/">Online store</a>
          <a href="/about/">About the artist</a>
          <a href="/set-design/">Set design</a>
          <a href="/art-direction/">Art direction</a>
          <a href="/contact/">Contact the studio</a>
        </nav>

        <div className="footer__details">
          <strong>Studio</strong>
          <p>Sri Lanka<br />Painter · Art Director · Set Designer</p>
        </div>

        <div className="footer__details">
          <strong>Follow the artist</strong>
          <a href="https://www.instagram.com/prasart78" target="_blank" rel="noreferrer">Instagram · @prasart78</a>
          <a href="https://www.tiktok.com/@artprasad" target="_blank" rel="noreferrer">TikTok · @artprasad</a>
          <a href="https://www.facebook.com/share/1CGuesswFt/" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Prasad Weerasinghe. All rights reserved.</p>
        <div>
          <a href="https://www.instagram.com/prasart78?igsh=MTV2M2l2bzE1YnFmdQ==&utm_source=ig_contact_invite" target="_blank" rel="noreferrer" aria-label="Prasad on Instagram (opens in a new tab)">Instagram ↗</a>
          <a href="https://www.tiktok.com/@artprasad?_r=1&_t=ZS-98BHGXEwf3v" target="_blank" rel="noreferrer" aria-label="Prasad on TikTok (opens in a new tab)">TikTok ↗</a>
          <a href="https://www.facebook.com/share/1CGuesswFt/" target="_blank" rel="noreferrer" aria-label="Prasad on Facebook (opens in a new tab)">Facebook ↗</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
