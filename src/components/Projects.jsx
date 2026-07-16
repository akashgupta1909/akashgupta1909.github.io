import { projects, projectsNote } from "../data";

// Motion spec #06 — project card hover: lift, accent border glow, deeper shadow,
// tags brighten (handled in CSS).
export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-head reveal">
        <h2 className="section-title">
          <span className="section-num">03.</span> Selected Work
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <article className="project-card reveal" key={p.name}>
            <div className="project-top">
              <span className="project-icon">{p.icon}</span>
            </div>
            <div className="project-name-row">
              <h3 className="project-name">{p.name}</h3>
              {p.flagship && <span className="flagship">flagship</span>}
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-metric">
              <b>{p.metric}</b> <span>{p.metricSub}</span>
            </div>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="projects-note reveal">
        <span>🔒</span>
        <span>{projectsNote}</span>
      </div>
    </section>
  );
}
