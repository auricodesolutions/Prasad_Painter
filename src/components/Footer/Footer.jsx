import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__accent" aria-hidden="true"><i /></div>

      

      <div className="footer__main" data-reveal>
        <div className="footer__identity">
          <a className="footer__brand" href="/" aria-label="Prasad Weerasinghe home">
            <strong>Prasad</strong>
            <span>Weerasinghe</span>
          </a>
          <p>Contemporary paintings shaped by memory, nature and the human experience.</p>
          <span>Painter · Art Director · Set Designer</span>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <strong>Explore</strong>
          <a href="/#work"><span>Selected works</span><i>↗</i></a>
          <a href="/store/"><span>Online store</span><i>↗</i></a>
          <a href="/about/"><span>About the artist</span><i>↗</i></a>
          <a href="/contact/"><span>Contact</span><i>↗</i></a>
        </nav>

        <nav className="footer__nav" aria-label="Creative practice">
          <strong>Practice</strong>
          <a href="/category/paintings/"><span>Paintings</span><i>↗</i></a>
          <a href="/category/drawings/"><span>Drawings</span><i>↗</i></a>
          <a href="/set-design/"><span>Set design</span><i>↗</i></a>
          <a href="/art-direction/"><span>Art direction</span><i>↗</i></a>
        </nav>

        <div className="footer__details">
          <strong>Connect</strong>
          <a href="mailto:prasart.adro@gmail.com">prasart.adro@gmail.com</a>
          <a href="https://www.instagram.com/prasart78" target="_blank" rel="noreferrer">Instagram · @prasart78</a>
          <a href="https://www.tiktok.com/@artprasad" target="_blank" rel="noreferrer">TikTok · @artprasad</a>
          <a href="https://www.facebook.com/share/1CGuesswFt/" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Prasad Weerasinghe. All rights reserved.</p>
        <p>Independent artist portfolio</p>
        <a href="#top">Back to top <span>↑</span></a>
      </div>
    </footer>
  )
}
