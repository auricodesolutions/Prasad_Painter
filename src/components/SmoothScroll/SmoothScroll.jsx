import { useEffect } from 'react'

const clamp = (value, minimum, maximum) => Math.min(Math.max(value, minimum), maximum)

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const hasFinePointer = window.matchMedia('(pointer: fine)')

    if (prefersReducedMotion.matches || !hasFinePointer.matches) return undefined

    const root = document.documentElement
    let current = window.scrollY
    let target = current
    let animationFrame = 0
    let isAnimating = false

    root.classList.add('has-smooth-wheel')

    const maximumScroll = () => Math.max(0, root.scrollHeight - window.innerHeight)

    const animate = () => {
      current += (target - current) * 0.115

      if (Math.abs(target - current) < 0.45) {
        current = target
        isAnimating = false
      }

      window.scrollTo(0, current)
      if (isAnimating) animationFrame = window.requestAnimationFrame(animate)
    }

    const scrollToTarget = (nextTarget) => {
      current = window.scrollY
      target = clamp(nextTarget, 0, maximumScroll())
      window.cancelAnimationFrame(animationFrame)
      isAnimating = true
      animationFrame = window.requestAnimationFrame(animate)
    }

    const canScrollInside = (element, delta) => {
      let node = element instanceof Element ? element : null

      while (node && node !== document.body) {
        const style = window.getComputedStyle(node)
        const scrollable = /(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight
        if (scrollable) {
          const canMoveDown = delta > 0 && node.scrollTop + node.clientHeight < node.scrollHeight - 1
          const canMoveUp = delta < 0 && node.scrollTop > 1
          if (canMoveDown || canMoveUp) return true
        }
        node = node.parentElement
      }

      return false
    }

    const onWheel = (event) => {
      if (event.ctrlKey || event.metaKey || document.body.style.overflow === 'hidden') return

      const multiplier = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1
      const delta = clamp(event.deltaY * multiplier, -180, 180)
      if (!delta || canScrollInside(event.target, delta)) return

      event.preventDefault()
      if (!isAnimating) {
        current = window.scrollY
        target = current
      }

      target = clamp(target + delta, 0, maximumScroll())

      if (!isAnimating) {
        isAnimating = true
        animationFrame = window.requestAnimationFrame(animate)
      }
    }

    const onScroll = () => {
      if (!isAnimating) current = target = window.scrollY
    }

    const onAnchorClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return

      const anchor = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null
      if (!anchor) return

      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return
      const destination = hash === '#top' ? document.getElementById('top') : document.querySelector(hash)
      if (!destination) return

      event.preventDefault()
      const scrollMargin = Number.parseFloat(window.getComputedStyle(destination).scrollMarginTop) || 0
      const nextTarget = hash === '#top' ? 0 : destination.getBoundingClientRect().top + window.scrollY - scrollMargin
      window.history.pushState({}, '', hash)
      scrollToTarget(nextTarget)
    }

    const stopAnimation = () => {
      if (!isAnimating) return
      window.cancelAnimationFrame(animationFrame)
      isAnimating = false
      current = target = window.scrollY
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', stopAnimation)
    window.addEventListener('pointerdown', stopAnimation)
    document.addEventListener('click', onAnchorClick)

    return () => {
      root.classList.remove('has-smooth-wheel')
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', stopAnimation)
      window.removeEventListener('pointerdown', stopAnimation)
      document.removeEventListener('click', onAnchorClick)
    }
  }, [])

  return null
}
