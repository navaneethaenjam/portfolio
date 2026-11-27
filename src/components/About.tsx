import { useState } from "react"
import { about, quickInfo, site } from "../content"
import { useReveal } from "../hooks/useReveal"
import profileImage from "../assets/profile.jpeg"
import "./About.css"

export function About() {
  const ref = useReveal<HTMLDivElement>()
  const [imgOk, setImgOk] = useState(true)

  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about__layout reveal" ref={ref}>
        <div className="about__photo">
          <div className="about__frame">
            {imgOk ? (
              <img
                src={profileImage}
                alt={site.name}
                onError={() => setImgOk(false)}
              />
            ) : (
              <span aria-hidden="true">{site.shortName}</span>
            )}
          </div>
        </div>

        <div className="about__content">
          <h2 id="about-title">{about.title}</h2>
          <p className="about__lead">{about.lead}</p>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <div className="about__quick">
            {quickInfo.map((item) => (
              <div key={item.label} className="about__quick-item">
                <i className={item.icon} aria-hidden="true" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
