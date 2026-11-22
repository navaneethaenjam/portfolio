import { achievements, sectionCopy } from "../content"
import { useReveal } from "../hooks/useReveal"
import "./Achievements.css"

export function Achievements() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="section achievements" id="achievements" aria-labelledby="achievements-title">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <h2 id="achievements-title">{sectionCopy.achievements.title}</h2>
        </div>

        <div className="achievements__grid">
          {achievements.map((item) => (
            <article key={item.title}>
              <i className={`achievements__icon ${item.icon}`} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
