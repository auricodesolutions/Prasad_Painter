import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(pointer: fine)')

    if (reducedMotion.matches || !finePointer.matches) return undefined

    let current = window.scrollY
    let target = window.scrollY
    let frame = null

    const maximumScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight)

    const animate = () => {
      const distance = target - current
      current += distance * 0.11

      if (Math.abs(distance) < 0.5) {
        current = target
        window.scrollTo(0, target)
        frame = null
        return
      }

      window.scrollTo(0, current)
      frame = window.requestAnimationFrame(animate)
    }

    const onWheel = (event) => {
      if (
        event.defaultPrevented
        || event.ctrlKey
        || document.body.style.overflow === 'hidden'
        || Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ) return

      const interactive = event.target instanceof Element
        ? event.target.closest('input, textarea, select, [contenteditable="true"]')
        : null
      if (interactive) return

      let scrollable = event.target instanceof Element ? event.target : null
      while (scrollable && scrollable !== document.body) {
        const style = window.getComputedStyle(scrollable)
        const canScroll = /(auto|scroll)/.test(style.overflowY)
          && scrollable.scrollHeight > scrollable.clientHeight
        const movingDown = event.deltaY > 0
        const hasRoom = movingDown
          ? scrollable.scrollTop + scrollable.clientHeight < scrollable.scrollHeight - 1
          : scrollable.scrollTop > 1

        if (canScroll && hasRoom) return
        scrollable = scrollable.parentElement
      }

      event.preventDefault()

      const multiplier = event.deltaMode === 1
        ? 28
        : event.deltaMode === 2
          ? window.innerHeight
          : 1

      target = Math.min(maximumScroll(), Math.max(0, target + event.deltaY * multiplier))

      if (frame === null) {
        current = window.scrollY
        frame = window.requestAnimationFrame(animate)
      }
    }

    const onAnchorClick = (event) => {
      if (!(event.target instanceof Element)) return

      const anchor = event.target.closest('a[href^="#"]')
      const href = anchor?.getAttribute('href')
      if (!href || href === '#') return

      const destination = document.querySelector(href)
      if (!destination) return

      event.preventDefault()
      const destinationTop = destination.getBoundingClientRect().top + window.scrollY - 72
      target = Math.min(maximumScroll(), Math.max(0, destinationTop))
      window.history.pushState({}, '', href)

      if (frame === null) {
        current = window.scrollY
        frame = window.requestAnimationFrame(animate)
      }
    }

    const syncPosition = () => {
      if (frame === null) {
        current = window.scrollY
        target = window.scrollY
      }
    }

    document.documentElement.classList.add('has-smooth-wheel')
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('scroll', syncPosition, { passive: true })
    document.addEventListener('click', onAnchorClick)

    return () => {
      document.documentElement.classList.remove('has-smooth-wheel')
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('scroll', syncPosition)
      document.removeEventListener('click', onAnchorClick)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  return null
}
