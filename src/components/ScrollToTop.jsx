import { useEffect, useState } from 'react'

// A floating button that appears once you scroll down; click to glide back to top.
export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      className={`scroll-top ${show ? 'show' : ''}`}
      onClick={toTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <span className="arrow-up" aria-hidden>↑</span>
    </button>
  )
}
