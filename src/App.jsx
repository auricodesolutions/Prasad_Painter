import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Works from './components/Works/Works'
import CollectionShowcase from './components/CollectionShowcase/CollectionShowcase'
import About from './components/About/About'
import ExhibitionPoster from './components/ExhibitionPoster/ExhibitionPoster'
import LatestNews from './components/LatestNews/LatestNews'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import AboutPage from './pages/AboutPage/AboutPage'

export default function App() {
  const [page, setPage] = useState(() => window.location.pathname.startsWith('/about') ? 'about' : 'home')

  const navigate = (targetPage, sectionId) => {
    const path = targetPage === 'about' ? `/about/${sectionId ? `#${sectionId}` : ''}` : `/${sectionId ? `#${sectionId}` : ''}`
    window.history.pushState({}, '', path)
    setPage(targetPage)

    window.setTimeout(() => {
      if (sectionId) document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      else window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)
  }

  useEffect(() => {
    const onPopState = () => {
      setPage(window.location.pathname.startsWith('/about') ? 'about' : 'home')
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [page])

  if (page === 'about') {
    return (
      <>
        <Header page={page} onNavigate={navigate} />
        <AboutPage />
        <Footer />
        <WhatsAppButton />
      </>
    )
  }

  return (
    <>
      <Header page={page} onNavigate={navigate} />
      <main>
        <Hero />
        <Works />
        <CollectionShowcase />
        <ExhibitionPoster />
        <About />
        <LatestNews />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
