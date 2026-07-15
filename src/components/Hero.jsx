import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { hero, heroCode } from '../data'
import MagneticButton from './MagneticButton'

// Motion spec #01 — hero entrance: staggered fade + slide-up at 70ms intervals,
// ~700ms easeOutExpo.
const easeOutExpo = [0.16, 1, 0.3, 1]
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
}

// Motion spec #02 — terminal typewriter: code types in line-by-line with a
// blinking caret.
function useTypedLines(lines, active) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(lines.length)
      return
    }
    setCount(0)
    let i = 0
    const id = setInterval(() => {
      i += 1
      setCount(i)
      if (i >= lines.length) clearInterval(id)
    }, 260)
    return () => clearInterval(id)
  }, [active, lines.length])
  return count
}

export default function Hero() {
  const [start, setStart] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setStart(true), 500)
    return () => clearTimeout(t)
  }, [])
  const typed = useTypedLines(heroCode, start)

  return (
    <header className="hero" id="top">
      <div className="hero-bg" aria-hidden>
        <div className="hero-grid" />
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="hero-inner">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p className="hero-eyebrow" variants={item}>
            {hero.eyebrow}
          </motion.p>
          <motion.h1 className="hero-name" variants={item}>
            {hero.name}
          </motion.h1>
          <motion.p className="hero-tagline" variants={item}>
            {hero.tagline}
          </motion.p>
          <motion.p className="hero-blurb" variants={item}>
            {hero.blurb}
          </motion.p>

          <motion.div className="hero-ctas" variants={item}>
            <MagneticButton href="#projects" className="btn btn-primary">
              View my work <span className="arrow">→</span>
            </MagneticButton>
            <MagneticButton href="#contact" className="btn btn-ghost" strength={0.25}>
              Get in touch
            </MagneticButton>
          </motion.div>

          <motion.div className="hero-stats" variants={item}>
            {hero.stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <div className="num">{s.value}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="terminal"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: easeOutExpo }}
        >
          <div className="term-bar">
            <span className="dot r" />
            <span className="dot y" />
            <span className="dot g" />
            <span className="term-title">engineer.ts</span>
            <span className="term-lang">TypeScript</span>
          </div>
          <div className="code-body">
            <div className="gutter">
              {heroCode.map((_, i) => (
                <span key={i}>{String(i + 1).padStart(2, ' ')}</span>
              ))}
            </div>
            <div className="code">
              {heroCode.map((line, i) => (
                <div className="code-line" key={i}>
                  {i < typed &&
                    line.map(([text, kind], j) => (
                      <span key={j} className={`t-${kind}`}>
                        {text}
                      </span>
                    ))}
                  {i === typed && <span className="caret" />}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
