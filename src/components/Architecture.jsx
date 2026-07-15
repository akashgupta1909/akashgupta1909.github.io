import { architecture as a } from '../data'

export default function Architecture() {
  return (
    <section className="section" id="architecture">
      <div className="reveal">
        <p className="eyebrow">{a.eyebrow}</p>
        <h2 className="arch-title">{a.title}</h2>
        <p className="arch-sub">{a.subtitle}</p>
      </div>

      <div className="arch-flow reveal">
        {a.columns.map((col, i) => (
          <div className="arch-col" key={col.label}>
            <div className="arch-col-label">{col.label}</div>
            {col.items.map((it) => (
              <div className="arch-node" key={it}>
                {it}
              </div>
            ))}
            {i < a.columns.length - 1 && <span className="arch-arrow">→</span>}
          </div>
        ))}
      </div>

      <div className="arch-features reveal">
        {a.features.map((f) => (
          <span className="arch-feature" key={f}>
            <span className="g">{f.slice(0, 1)}</span>
            {f.slice(1)}
          </span>
        ))}
      </div>
    </section>
  )
}
