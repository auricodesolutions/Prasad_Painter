import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './ArtworkViewer.css'

export default function ArtworkViewer({ artwork, onClose }) {
  useEffect(() => {
    if (!artwork) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [artwork, onClose])

  if (!artwork) return null

  return createPortal(
    <div className="artwork-viewer" role="dialog" aria-modal="true" aria-label={`${artwork.title} artwork viewer`} onClick={onClose}>
      <button type="button" onClick={onClose} aria-label="Close artwork viewer" autoFocus>×</button>
      <figure onClick={(event) => event.stopPropagation()}>
        <div><img src={artwork.image} alt={artwork.alt || artwork.title} /></div>
        <figcaption>
          <span><strong>{artwork.title}</strong><small>{artwork.medium || artwork.detail}</small></span>
          <a href="/contact/">Enquire about this work ↗</a>
        </figcaption>
      </figure>
    </div>,
    document.body,
  )
}
