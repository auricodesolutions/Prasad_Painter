import { useEffect, useState } from 'react'
import './Header.css'

const links = [
  ['Home', '/', null, 'home'],
  ['About', '/about/', null, 'about'],
  ['Online Store', '/store/', null, 'store'],
  ['Collection', '/', 'collection', 'home'],
  ['Exhibitions', '/', 'exhibition-poster', 'home'],
  // ['News', '/', 'news', 'home'],
]

export default function Header({ page = 'home', onNavigate }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const useSurfaceHeader = page.startsWith('category:') || page.startsWith('store-item:')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const navigateFromHeader = (targetPage, section) => {
    document.body.style.overflow = ''
    setOpen(false)
    onNavigate(targetPage, section)
  }

  return (
    <header className={`header ${useSurfaceHeader ? 'header--surface' : ''} ${scrolled ? 'header--scrolled' : ''} ${open ? 'header--open' : ''}`}>
      <a className="header__brand" href="/" aria-label="Prasad Weerasinghe home" onClick={(event) => { event.preventDefault(); navigateFromHeader('home') }}>
        <img src="/assets/prasad-signature-transparent.png" alt="Prasad Weerasinghe" />
      </a>

      <button
        className={`header__toggle ${open ? 'is-open' : ''}`}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <i /><i />
      </button>

      <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        {links.map(([label, href, section, targetPage]) => (
          <a
            href={section ? `${href}#${section}` : href}
            className={!section && (targetPage === page || (targetPage === 'store' && page.startsWith('store-item:'))) ? 'is-active' : ''}
            key={label}
            onClick={(event) => {
              event.preventDefault()
              navigateFromHeader(targetPage, section)
            }}
          >{label}</a>
        ))}
        <a className={`header__contact ${page === 'contact' ? 'is-active' : ''}`} href="/contact/" onClick={(event) => { event.preventDefault(); navigateFromHeader('contact') }}>Enquire</a>
      </nav>
      <span className="header__progress" style={{ transform: `scaleX(${progress / 100})` }} />
    </header>
  )
}
