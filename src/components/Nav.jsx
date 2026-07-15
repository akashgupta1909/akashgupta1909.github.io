import { useEffect, useState } from 'react'
import { nav, social } from '../data'

// Motion spec #05 — sticky nav morph: on scroll the bar gains backdrop-blur,
// shrinks height, and reveals a hairline border.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="logo">
          <b>akash</b>
          <span>.dev</span>
        </a>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link" onClick={() => setOpen(false)}>
              <i>{item.num}</i>
              {item.label}
            </a>
          ))}
          <a href={social.resume} target="_blank" rel="noreferrer" className="nav-resume">
            résumé <span>↗</span>
          </a>
        </div>

        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
