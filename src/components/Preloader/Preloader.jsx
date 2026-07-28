import { useEffect, useState } from 'react'
import './Preloader.css'

export default function Preloader() {
  const [isLeaving, setIsLeaving] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const startedAt = performance.now()
    const previousOverflow = document.body.style.overflow
    let leaveTimer
    let removeTimer

    document.body.style.overflow = 'hidden'

    const finish = () => {
      const minimumDisplay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 150 : 1450
      const delay = Math.max(0, minimumDisplay - (performance.now() - startedAt))

      leaveTimer = window.setTimeout(() => {
        setIsLeaving(true)
        document.body.style.overflow = previousOverflow
        removeTimer = window.setTimeout(() => setIsVisible(false), 750)
      }, delay)
    }

    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })

    return () => {
      window.removeEventListener('load', finish)
      window.clearTimeout(leaveTimer)
      window.clearTimeout(removeTimer)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className={`preloader ${isLeaving ? 'preloader--leaving' : ''}`} role="status" aria-live="polite" aria-label="Loading Prasad Weerasinghe's portfolio">
      <div className="preloader__grain" aria-hidden="true" />
      <div className="preloader__topline" aria-hidden="true">
        <span>Official artist portfolio</span>
        <span>Colombo · Sri Lanka</span>
      </div>

      <div className="preloader__identity">
        <p className="preloader__edition">Entering the studio</p>
        <div className="preloader__logo">
          <img src="/assets/prasad-signature-transparent.png" alt="Prasad Weerasinghe" />
        </div>
        <div className="preloader__disciplines" aria-hidden="true">
          <span>Painter</span><i /><span>Art Director</span><i /><span>Set Designer</span>
        </div>
      </div>

      <div className="preloader__progress" aria-hidden="true">
        <span>Loading selected practice</span>
        <div><i /></div>
        <b>PW · 2026</b>
      </div>
    </div>
  )
}
