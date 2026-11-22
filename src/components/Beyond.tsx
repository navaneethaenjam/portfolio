import { beyondCoding, sectionCopy } from "../content"
import { useReveal } from "../hooks/useReveal"
import "./Beyond.css"

export function Beyond() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="section beyond" id="beyond" aria-labelledby="beyond-title">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <h2 id="beyond-title">{sectionCopy.beyond.title}</h2>
        </div>

        <div className="beyond__grid">
          {beyondCoding.map((item) => (
            <article key={item.title}>
              <i className={`beyond__icon ${item.icon}`} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
