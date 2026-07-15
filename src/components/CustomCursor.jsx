import { useEffect, useRef } from 'react'

// Motion spec #08 — a dot + trailing ring follow the pointer (lerp 0.15) and
// scale up over interactive targets.
export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...mouse }
    let raf

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`
      }
    }

    const interactive = 'a, button, input, .term-chip, .project-card, .skill-card, .now-card, .fun-stat'
    const onOver = (e) => {
      if (e.target.closest(interactive)) ring.current?.classList.add('hover')
    }
    const onOut = (e) => {
      if (e.target.closest(interactive)) ring.current?.classList.remove('hover')
    }

    const loop = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.15
      ringPos.y += (mouse.y - ringPos.y) * 0.15
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    loop()

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
