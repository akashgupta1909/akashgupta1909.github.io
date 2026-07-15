import { contact, social } from '../data'
import MagneticButton from './MagneticButton'

export default function Contact() {
  return (
    <>
      <section className="section contact" id="contact">
        <div className="reveal">
          <p className="contact-eyebrow">{contact.eyebrow}</p>
          <h2 className="contact-title">{contact.title}</h2>
          <p className="contact-blurb">{contact.blurb}</p>
          <MagneticButton
            href={`mailto:${social.email}`}
            className="btn btn-primary"
            style={{ display: 'inline-flex' }}
          >
            Say hello <span>↗</span>
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
    </>
  )
}
