import { useEffect, useRef, useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Works from './components/Works/Works'
import OnlineStore from './components/GalleryWall/GalleryWall'
import FeaturedCategories from './components/FeaturedCategories/FeaturedCategories'
import About from './components/About/About'
import ExhibitionPoster from './components/ExhibitionPoster/ExhibitionPoster'
import SetDesign from './components/SetDesign/SetDesign'
import LatestNews from './components/LatestNews/LatestNews'
import Footer from './components/Footer/Footer'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import StorePage from './pages/StorePage/StorePage'
import ArtworkDetailPage from './pages/ArtworkDetailPage/ArtworkDetailPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import PracticePage from './pages/PracticePage/PracticePage'
import Preloader from './components/Preloader/Preloader'
import SmoothScroll from './components/SmoothScroll/SmoothScroll'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

const getPageFromPath = () => {
  const path = window.location.pathname
  if (path.startsWith('/store/')) {
    const artworkSlug = path.split('/')[2]
    if (artworkSlug) return `store-item:${artworkSlug}`
  }
  if (path.startsWith('/store')) return 'store'
  if (path.startsWith('/category/')) return `category:${path.split('/')[2] || 'paintings'}`
  if (path.startsWith('/set-design')) return 'set-design'
  if (path.startsWith('/art-direction')) return 'art-direction'
  if (path.startsWith('/contact')) return 'contact'
  if (path.startsWith('/about')) return 'about'
  return 'home'
}

const getPathFromPage = (targetPage) => {
  if (targetPage === 'about') return '/about/'
  if (targetPage === 'contact') return '/contact/'
  if (targetPage === 'store') return '/store/'
  if (targetPage.startsWith('store-item:')) return `/store/${targetPage.split(':')[1]}/`
  if (targetPage === 'set-design') return '/set-design/'
  if (targetPage === 'art-direction') return '/art-direction/'
  if (targetPage.startsWith('category:')) return `/category/${targetPage.split(':')[1]}/`
  return '/'
}

export default function App() {
  const [page, setPage] = useState(getPageFromPath)
  const [isPageTransitioning, setIsPageTransitioning] = useState(false)
  const transitionTimer = useRef(null)

  const scrollToDestination = (sectionId, smooth = true) => {
    window.requestAnimationFrame(() => {
      if (sectionId) document.getElementById(sectionId)?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' })
      else window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
    })
  }

  const navigate = (targetPage, sectionId) => {
    const basePath = getPathFromPage(targetPage)
    const path = `${basePath}${sectionId ? `#${sectionId}` : ''}`
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
      const targetPage = getPageFromPath()
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
    const sections = document.querySelectorAll('main > section, .about-page > section')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' })

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-section-visible')
        sectionObserver.unobserve(entry.target)
      })
    }, { threshold: 0.045, rootMargin: '0px 0px -7% 0px' })

    document.documentElement.classList.add('section-motion-ready')
    elements.forEach((element) => observer.observe(element))
    sections.forEach((section, index) => {
      section.classList.add('section-motion')
      section.style.setProperty('--section-delay', `${Math.min(index * 35, 140)}ms`)
      sectionObserver.observe(section)
    })

    return () => {
      observer.disconnect()
      sectionObserver.disconnect()
      document.documentElement.classList.remove('section-motion-ready')
    }
  }, [page])

  return (
    <>
      <Preloader />
      <SmoothScroll />
      <WhatsAppButton/>
      <div className={`site-transition ${isPageTransitioning ? 'is-active' : ''}`} aria-hidden="true"><span /></div>
      <Header page={page} onNavigate={navigate} />
      <div className={`site-page ${isPageTransitioning ? 'is-transitioning' : ''}`} key={page}>
        {page === 'about' ? <AboutPage /> :
          page === 'contact' ? <ContactPage /> :
          page === 'store' ? <StorePage onNavigate={navigate} /> :
          page.startsWith('store-item:') ? <ArtworkDetailPage artworkSlug={page.split(':')[1]} onNavigate={navigate} /> :
          page.startsWith('category:') ? <CategoryPage categoryKey={page.split(':')[1]} /> :
          page === 'set-design' || page === 'art-direction' ? <PracticePage practiceKey={page} /> : (
          <main>
            <Hero />
            <Works />
            <FeaturedCategories onNavigate={navigate} />
            <OnlineStore onNavigate={navigate} />
            <ExhibitionPoster />
            <SetDesign onNavigate={navigate} />
            <About />
          </main>
        )}
        <Footer />
      </div>
    </>
  )
}
