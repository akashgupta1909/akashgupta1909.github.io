import { useMemo, useRef, useState } from 'react'
import { funStatus, funStats, jokes, social } from '../data'

const CHIPS = ['help', 'whoami', 'joke', 'coffee --refill', 'sudo hire-me', 'open resume']

const seedHistory = [
  { cmd: 'whoami', out: 'akash — full-stack engineer who ships fast & sweats the details' },
  {
    cmd: 'cat passions.json',
    out: '{ code: "always", coffee: "religiously", clean_diffs: true }',
  },
  { cmd: 'sudo hire-me', out: `[✓] access granted · opening mailto:${social.email} …`, green: true },
]

function runCommand(raw) {
  const cmd = raw.trim().toLowerCase()
  switch (cmd) {
    case '':
      return null
    case 'help':
      return { out: 'commands: whoami · joke · coffee --refill · sudo hire-me · open resume · clear' }
    case 'whoami':
      return { out: 'akash — full-stack engineer who ships fast & sweats the details' }
    case 'joke':
      return { out: jokes[Math.floor(Math.random() * jokes.length)].q }
    case 'coffee --refill':
      return { out: '☕ refilled. +1 focus. bugs beware.', green: true }
    case 'sudo hire-me':
      window.open(`mailto:${social.email}`)
      return { out: '[✓] access granted · opening mailto:' + social.email + ' …', green: true }
    case 'open resume':
      window.open(social.resume, '_blank')
      return { out: '[✓] opening resume.pdf …', green: true }
    default:
      return { out: `zsh: command not found: ${raw.trim()} — try \`help\`` }
  }
}

function Terminal() {
  const [history, setHistory] = useState(seedHistory)
  const [value, setValue] = useState('')
  const bodyRef = useRef(null)

  const submit = (raw) => {
    if (raw.trim().toLowerCase() === 'clear') {
      setHistory([])
      setValue('')
      return
    }
    const res = runCommand(raw)
    if (res) setHistory((h) => [...h, { cmd: raw, ...res }])
    setValue('')
    requestAnimationFrame(() => {
      bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
    })
  }

  return (
    <div className="terminal fun-terminal">
      <div className="term-bar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="term-title">zsh — akash@portfolio</span>
        <span className="term-kbd">⌘K</span>
      </div>
      <div className="term-body-fun" ref={bodyRef}>
        {history.map((h, i) => (
          <div key={i}>
            <div className="term-line">
              <span className="term-prompt">akash@portfolio</span>
              <span className="term-path">~</span>
              <span className="term-pct">%</span>
              <span className="term-cmd">{h.cmd}</span>
            </div>
            <div className="term-out">
              <span className={h.green ? 'green' : ''}>{h.out}</span>
            </div>
          </div>
        ))}
        <div className="term-input-row">
          <span className="term-prompt">akash@portfolio</span>
          <span className="term-path">~</span>
          <span className="term-pct">%</span>
          <input
            className="term-input"
            value={value}
            placeholder="type a command…"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit(value)}
            aria-label="terminal input"
          />
        </div>
        <div className="term-chips">
          {CHIPS.map((c) => (
            <button className="term-chip" key={c} onClick={() => submit(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function NowPlaying() {
  return (
    <div>
      <div className="now-label">// right now</div>
      {funStatus.map((s) => (
        <div className="now-card" key={s.label}>
          <span className="now-icon">{s.icon}</span>
          <div className="now-meta">
            <div className="k">{s.label}</div>
            <div className="v">{s.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function JokeCard() {
  const [idx, setIdx] = useState(0)
  const joke = jokes[idx]
  return (
    <div className="joke-card">
      <div className="joke-head">
        <span className="joke-cmd">$ joke --random</span>
        <span className="joke-num">#{42 + idx}</span>
      </div>
      <div className="joke-q">{joke.q}</div>
      <div className="joke-a">{joke.a}</div>
      <div className="joke-foot">
        <button className="joke-btn" onClick={() => setIdx((i) => (i + 1) % jokes.length)}>
          next joke <span>↻</span>
        </button>
        <span className="joke-warn">warning: may cause groans</span>
      </div>
    </div>
  )
}

const MONTHS = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

function ContribGraph() {
  // Deterministic pseudo-random heatmap — 53 weeks × 7 days.
  const cells = useMemo(() => {
    const out = []
    let seed = 7
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280
      return seed / 233280
    }
    for (let i = 0; i < 53 * 7; i++) {
      const r = rand()
      const lvl = r > 0.82 ? 4 : r > 0.65 ? 3 : r > 0.42 ? 2 : r > 0.2 ? 1 : 0
      out.push(lvl)
    }
    return out
  }, [])

  return (
    <div className="contrib reveal">
      <div className="contrib-head">
        <span className="contrib-cmd">
          $ git log --graph --all <span>· since 2020</span>
        </span>
        <span className="contrib-total">building in public &amp; private repos · github.com/akashgupta1909</span>
      </div>
      <div className="contrib-months">
        {MONTHS.map((m) => (
          <span key={m} style={{ flex: 1 }}>
            {m}
          </span>
        ))}
      </div>
      <div className="contrib-grid">
        {cells.map((lvl, i) => (
          <span className={`cell l${lvl}`} key={i} />
        ))}
      </div>
      <div className="contrib-foot">
        <div className="contrib-stats">
          <span className="fire">🔥 ships on weekends</span>
          <span>peak: 2:00am</span>
          <span>busiest: hackathons</span>
        </div>
        <div className="contrib-legend">
          Less
          <span className="cell l1" />
          <span className="cell l2" />
          <span className="cell l3" />
          <span className="cell l4" />
          More
        </div>
      </div>
    </div>
  )
}

export default function Fun() {
  return (
    <section className="section" id="fun">
      <div className="section-head reveal">
        <h2 className="section-title">
          <span className="section-num">04.</span> Beyond the Code
        </h2>
      </div>
      <p className="fun-sub reveal">
        A little corner for the fun stuff. Poke around — some of it even talks back. →
      </p>

      <div className="fun-grid reveal">
        <Terminal />
        <NowPlaying />
      </div>

      <div className="fun-lower">
        <div className="stat-grid reveal">
          {funStats.map((s) => (
            <div className="fun-stat" key={s.label}>
              <div className="icon">{s.icon}</div>
              <div className="val">
                {s.value} <span className="up">▲</span>
              </div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="reveal">
          <JokeCard />
        </div>
      </div>

      <ContribGraph />
    </section>
  )
}
