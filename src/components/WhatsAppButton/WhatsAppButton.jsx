import { useState } from 'react'
import './WhatsAppButton.css'

const whatsappUrl = 'https://wa.me/94714562736?text=Hello%20Prasad%2C%20I%27d%20like%20to%20enquire%20about%20your%20artwork.'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className={`whatsapp ${open ? 'is-open' : ''}`}>
      <aside className="whatsapp__enquiry" id="whatsapp-enquiry" aria-hidden={!open}>
        <button className="whatsapp__close" type="button" onClick={() => setOpen(false)} aria-label="Close enquiry message" tabIndex={open ? 0 : -1}>&times;</button>
        <span className="whatsapp__online"><i /> Artist studio</span>
        <strong>Interested in an artwork?</strong>
        <p>Hello! Send the studio an enquiry about available paintings, exhibitions or private viewings.</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>Start WhatsApp chat <i>&rarr;</i></a>
      </aside>

      <button
        className="whatsapp-button"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label="Open artwork enquiry message"
        aria-expanded={open}
        aria-controls="whatsapp-enquiry"
      >
        <span className="whatsapp-button__label">WhatsApp</span>
        <span className="whatsapp-button__icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" role="img">
            <path d="M16.04 3.2A12.75 12.75 0 0 0 5.13 22.53L3.2 28.8l6.43-1.88a12.8 12.8 0 1 0 6.41-23.72Zm0 23.42c-2.06 0-4.08-.56-5.84-1.62l-.42-.25-3.81 1.11 1.14-3.71-.27-.43a10.62 10.62 0 1 1 9.2 4.9Zm5.82-7.94c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.58a9.55 9.55 0 0 1-1.77-2.2c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.25-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.57 1.14 3.08 1.3 3.29.16.21 2.24 3.42 5.43 4.8.76.32 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.14-.29-.22-.61-.38Z" />
          </svg>
        </span>
      </button>
    </div>
  )
}
