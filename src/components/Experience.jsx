import { experience } from '../data'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-head reveal">
        <h2 className="section-title">
          <span className="section-num">03.</span> Where I&apos;ve Worked
        </h2>
      </div>

      <div className="timeline">
        {experience.map((e) => (
          <div className="exp-item reveal" key={e.company}>
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
