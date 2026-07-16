import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const FORMSPREE_URL = 'https://formspree.io/f/xrgdzpwj'
const empty = { name: '', email: '', subject: '', message: '' }

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  // Close on Escape + lock background scroll while open. We measure the exact
  // scrollbar width and expose it as --sbw so the scroller and the fixed
  // elements can pad by that amount — hiding the scrollbar then causes no shift.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)

    const docEl = document.documentElement
    const scrollbarW = window.innerWidth - docEl.clientWidth
    docEl.style.setProperty('--sbw', `${scrollbarW}px`)
    docEl.classList.add('scroll-locked')

    return () => {
      window.removeEventListener('keydown', onKey)
      docEl.classList.remove('scroll-locked')
      docEl.style.removeProperty('--sbw')
    }
  }, [open, onClose])

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(empty)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const close = () => {
    onClose()
    // reset after the exit animation
    setTimeout(() => setStatus('idle'), 250)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={close}
        >
          <motion.div
            className="modal"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onMouseDown={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Contact form"
          >
            <button className="modal-close" onClick={close} aria-label="Close">
              ✕
            </button>

            {status === 'success' ? (
              <div className="modal-success">
                <div className="modal-check">✓</div>
                <h3 className="modal-title">Message sent!</h3>
                <p className="modal-sub">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
                <button className="btn btn-primary" onClick={close}>
                  Done
                </button>
              </div>
            ) : (
              <>
                <p className="modal-eyebrow">// let&apos;s talk</p>
                <h3 className="modal-title">Say hello 👋</h3>
                <p className="modal-sub">
                  Drop me a message and I&apos;ll reply to your email.
                </p>

                <form className="modal-form" onSubmit={submit}>
                  <div className="modal-row">
                    <label className="field">
                      <span>Name</span>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Ada Lovelace"
                      />
                    </label>
                    <label className="field">
                      <span>Email</span>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={update('email')}
                        placeholder="you@company.com"
                      />
                    </label>
                  </div>
                  <label className="field">
                    <span>Subject</span>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={update('subject')}
                      placeholder="A quick hello / an opportunity / …"
                    />
                  </label>
                  <label className="field">
                    <span>Message</span>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Tell me what's on your mind…"
                    />
                  </label>

                  {status === 'error' && (
                    <p className="modal-err">
                      Something went wrong — please try again, or email me directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary modal-submit"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send message'} <span>↗</span>
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
