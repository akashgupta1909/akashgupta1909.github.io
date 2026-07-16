import { useEffect, useRef, useState } from 'react'
import { experience } from '../data'

export default function Experience() {
  const timelineRef = useRef(null)
  const [progress, setProgress] = useState(0)

  // Grow a glowing line down the timeline as the section scrolls past the
  // middle of the viewport.
  useEffect(() => {
    const el = timelineRef.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const anchor = window.innerHeight * 0.5
      const p = (anchor - rect.top) / rect.height
      setProgress(Math.min(1, Math.max(0, p)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section className="section" id="experience">
      <div className="section-head reveal">
        <h2 className="section-title">
          <span className="section-num">02.</span> Where I&apos;ve Worked
        </h2>
      </div>

      <div className="timeline" ref={timelineRef}>
        <span
          className="timeline-progress"
          style={{ height: `calc(${progress} * (100% - 16px))` }}
          aria-hidden
        />
        {experience.map((e) => (
          <div className="exp-item reveal" key={`${e.company}-${e.period}`}>
            <div className="exp-period">{e.period}</div>
            <div>
              <span className="exp-role">{e.role}</span>
              <span className="exp-company">{e.company}</span>
            </div>
            <p className="exp-desc">{e.desc}</p>
            <div className="exp-tags">
              {e.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
