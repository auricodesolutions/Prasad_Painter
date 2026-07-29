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
  const whatsappUrl = `https://wa.me/94714562736?text=${encodeURIComponent(
    artwork.status === 'sold'
      ? `Hello Prasad, I would like to ask about a similar work to “${artwork.title}”.`
      : `Hello Prasad, I would like to ask for the price and details of “${artwork.title}”.`,
  )}`

  return createPortal(
    <div className="artwork-viewer" role="dialog" aria-modal="true" aria-label={`${artwork.title} artwork viewer`} onClick={onClose}>
      <button type="button" onClick={onClose} aria-label="Close artwork viewer" autoFocus>×</button>
      <figure onClick={(event) => event.stopPropagation()}>
        <div><img src={artwork.image} alt={artwork.alt || artwork.title} /></div>
        <figcaption>
          <span><strong>{artwork.title}</strong><small>{artwork.status === 'sold' ? 'Sold out' : artwork.medium || artwork.detail}</small></span>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">{artwork.status === 'sold' ? 'Request a similar work' : 'Ask for price'} ↗</a>
        </figcaption>
      </figure>
    </div>,
    document.body,
  )
}
