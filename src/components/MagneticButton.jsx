import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Motion spec #04 — primary CTAs drift toward the cursor within a small radius,
// snapping back on leave (spring, stiffness ~260).
export default function MagneticButton({ as = 'a', className, children, strength = 0.4, ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const MotionTag = as === 'button' ? motion.button : motion.a
  return (
    <MotionTag
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
