import { useEffect, useId, useRef, useState } from "react"
import { projects, sectionCopy, type Project } from "../content"
import { useReveal } from "../hooks/useReveal"
import "./Work.css"

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)

    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [onClose])

  return (
    <div className="work-modal" role="presentation" onClick={onClose}>
      <div
        className={`work-modal__panel theme-${project.theme}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="work-modal__close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ✕
        </button>

        <h3 id={titleId}>{project.title}</h3>

        <div className="work-modal__stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <p className="work-modal__blurb">{project.blurb}</p>

        <ul>
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {(project.liveUrl || project.repoUrl) && (
          <div className="work-modal__actions">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt" aria-hidden="true" /> Live
              </a>
            ) : null}
            {project.repoUrl ? (
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                <i className="fab fa-github" aria-hidden="true" /> Code
              </a>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: () => void
}) {
  const cardRef = useRef<HTMLElement>(null)

  const onMove = (event: React.PointerEvent<HTMLElement>) => {
    const card = cardRef.current
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const rect = card.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    card.style.setProperty("--rx", `${(0.5 - y) * 8}deg`)
    card.style.setProperty("--ry", `${(x - 0.5) * 8}deg`)
    card.style.setProperty("--px", `${x * 100}%`)
    card.style.setProperty("--py", `${y * 100}%`)
  }

  const onLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty("--rx", "0deg")
    card.style.setProperty("--ry", "0deg")
  }

  return (
    <article
      ref={cardRef}
      className={`work-card theme-${project.theme}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onOpen()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${project.title}`}
    >
      <div className="work-card__sheen" aria-hidden="true" />
      <h3>{project.title}</h3>
      <div className="work-card__stack">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      {(project.liveUrl || project.repoUrl) && (
        <div className="work-card__actions">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              <i className="fas fa-external-link-alt" aria-hidden="true" /> Live
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              <i className="fab fa-github" aria-hidden="true" /> Code
            </a>
          ) : null}
        </div>
      )}
    </article>
  )
}

export function Work() {
  const ref = useReveal<HTMLDivElement>()
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = projects.find((project) => project.id === activeId) ?? null

  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <h2 id="work-title">{sectionCopy.work.title}</h2>
          {sectionCopy.work.subtitle ? <p>{sectionCopy.work.subtitle}</p> : null}
        </div>

        <div className="work__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setActiveId(project.id)}
            />
          ))}
        </div>
      </div>

      {active ? <ProjectModal project={active} onClose={() => setActiveId(null)} /> : null}
    </section>
  )
}
