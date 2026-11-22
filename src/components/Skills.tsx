import { sectionCopy, skillGroups } from "../content"
import { useReveal } from "../hooks/useReveal"
import "./Skills.css"

export function Skills() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <h2 id="skills-title">{sectionCopy.skills.title}</h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skills__card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <i className={item.icon} aria-hidden="true" />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
