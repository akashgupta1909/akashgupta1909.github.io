import { about, skillGroups } from '../data'

export default function About() {
  const { card } = about
  return (
    <section className="section" id="about">
      <div className="section-head reveal">
        <h2 className="section-title">
          <span className="section-num">01.</span> About Me
        </h2>
      </div>

      <div className="about-grid">
        <div className="reveal">
          {about.paragraphs.map((p, i) => (
            <p className="about-p" key={i}>
              {p}
            </p>
          ))}

          <div className="currently">
            <div className="currently-label">// currently</div>
            {about.currently.map((c, i) => (
              <div className="currently-item" key={i}>
                <span className="mark">▸</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-card reveal">
          <div className="avatar">{card.initials}</div>
          <div className="profile-name">{card.name}</div>
          <div className="profile-role">{card.role}</div>
          <div className="status-badge">
            <span className="status-dot" />
            {card.status}
          </div>
        </div>
      </div>

      <Skills />
    </section>
  )
}

function Skills() {
  return (
    <div id="skills">
      <div className="skills-label reveal">// tech stack &amp; tools</div>
      <div className="skills-grid">
        {skillGroups.map((g) => (
          <div className={`skill-card reveal ${g.wide ? 'wide' : ''}`} key={g.title}>
            <div className="skill-head">
              <span className="skill-icon">{g.icon}</span>
              <span className="skill-title">{g.title}</span>
              {g.badge && <span className="skill-badge">{g.badge}</span>}
            </div>
            <div className="skill-tags">
              {g.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
