import { useState } from 'react'
import { contact } from '../data'
import MagneticButton from './MagneticButton'
import ContactModal from './ContactModal'

export default function Contact() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <section className="section contact" id="contact">
        <div className="reveal">
          <p className="contact-eyebrow">{contact.eyebrow}</p>
          <h2 className="contact-title">{contact.title}</h2>
          <p className="contact-blurb">{contact.blurb}</p>
          <MagneticButton
            as="button"
            type="button"
            onClick={() => setOpen(true)}
            className="btn btn-primary"
            style={{ display: 'inline-flex' }}
          >
            Say hello <span className="arrow">↗</span>
          </MagneticButton>

          <div className="contact-socials">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="contact-social"
              >
                {s.label} <span>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Akash Gupta</span>
        <span className="center">// scroll-reveal · magnetic buttons · smart-animate transitions</span>
        <span>Designed in Figma · Made with ☕ + TypeScript</span>
      </footer>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
