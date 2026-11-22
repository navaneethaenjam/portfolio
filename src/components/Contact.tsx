import { useState } from "react"
import { sectionCopy, site } from "../content"
import { useReveal } from "../hooks/useReveal"
import "./Contact.css"

export function Contact() {
  const ref = useReveal<HTMLDivElement>()
  const copy = sectionCopy.contact
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container reveal" ref={ref}>
        <div className="section-head">
          <h2 id="contact-title">{copy.title}</h2>
          <p>{copy.subtitle}</p>
        </div>

        <div className="contact__grid">
          <article className="contact-card">
            <i className="contact-card__icon fas fa-envelope" aria-hidden="true" />
            <h3>{copy.emailTitle}</h3>
            <p className="contact-card__email">{site.email}</p>
            <button type="button" className="btn btn-primary" onClick={copyEmail}>
              {copied ? "Copied!" : copy.emailAction}
            </button>
          </article>

          <article className="contact-card">
            <i className="contact-card__icon fab fa-linkedin" aria-hidden="true" />
            <h3>{copy.linkedinTitle}</h3>
            <p>{copy.linkedinBody}</p>
            <a className="btn btn-primary" href={site.linkedin} target="_blank" rel="noreferrer">
              {copy.linkedinAction}
            </a>
          </article>

          <article className="contact-card">
            <i className="contact-card__icon fab fa-github" aria-hidden="true" />
            <h3>{copy.githubTitle}</h3>
            <p>{copy.githubBody}</p>
            <a className="btn btn-primary" href={site.github} target="_blank" rel="noreferrer">
              {copy.githubAction}
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
