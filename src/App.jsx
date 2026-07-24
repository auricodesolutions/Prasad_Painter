import { useEffect, useRef, useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Works from './components/Works/Works'
import CollectionShowcase from './components/CollectionShowcase/CollectionShowcase'
import About from './components/About/About'
import ExhibitionPoster from './components/ExhibitionPoster/ExhibitionPoster'
import LatestNews from './components/LatestNews/LatestNews'
import Footer from './components/Footer/Footer'
import AboutPage from './pages/AboutPage/AboutPage'
import Preloader from './components/Preloader/Preloader'
import SmoothScroll from './components/SmoothScroll/SmoothScroll'

export default function App() {
  const [page, setPage] = useState(() => window.location.pathname.startsWith('/about') ? 'about' : 'home')
  const [isPageTransitioning, setIsPageTransitioning] = useState(false)
  const transitionTimer = useRef(null)

  const scrollToDestination = (sectionId, smooth = true) => {
    window.requestAnimationFrame(() => {
      if (sectionId) document.getElementById(sectionId)?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' })
      else window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
    })
  }

  const navigate = (targetPage, sectionId) => {
    const path = targetPage === 'about' ? `/about/${sectionId ? `#${sectionId}` : ''}` : `/${sectionId ? `#${sectionId}` : ''}`
    const transitionDelay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 430

    if (targetPage === page) {
      window.history.pushState({}, '', path)
      scrollToDestination(sectionId)
      return
    }

    window.clearTimeout(transitionTimer.current)
    setIsPageTransitioning(true)

    transitionTimer.current = window.setTimeout(() => {
      window.history.pushState({}, '', path)
      setPage(targetPage)
      window.scrollTo(0, 0)

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsPageTransitioning(false)
          if (sectionId) scrollToDestination(sectionId)
        })
      })
    }, transitionDelay)
  }

  useEffect(() => {
    const onPopState = () => {
      const targetPage = window.location.pathname.startsWith('/about') ? 'about' : 'home'
      const transitionDelay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 430
      setIsPageTransitioning(true)
      window.clearTimeout(transitionTimer.current)
      transitionTimer.current = window.setTimeout(() => {
        setPage(targetPage)
        window.scrollTo(0, 0)
        window.requestAnimationFrame(() => setIsPageTransitioning(false))
      }, transitionDelay)
    }
    window.addEventListener('popstate', onPopState)
    return () => {
      window.removeEventListener('popstate', onPopState)
      window.clearTimeout(transitionTimer.current)
    }
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

  return (
    <>
      <Preloader />
      <SmoothScroll />
      <div className={`site-transition ${isPageTransitioning ? 'is-active' : ''}`} aria-hidden="true"><span /></div>
      <Header page={page} onNavigate={navigate} />
      <div className={`site-page ${isPageTransitioning ? 'is-transitioning' : ''}`} key={page}>
        {page === 'about' ? (
          <AboutPage />
        ) : (
          <main>
            <Hero />
            <Works />
            <CollectionShowcase />
            <ExhibitionPoster />
            <About />
            <LatestNews />
          </main>
        )}
        <Footer />
      </div>
    </>
  )
}
