import { site } from "../content"
import "./Hero.css"

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="container hero__inner">
        <h1 id="hero-name" className="hero__name hero-enter">
          {site.hello} {site.name}
        </h1>
        <p className="hero__tagline hero-enter-delay">{site.tagline}</p>
        <div className="hero__actions hero-enter-delay-2">
          <a className="btn btn-primary" href={site.resumePath} download>
            Download Resume {"\u2193"}
          </a>
        </div>
      </div>
    </section>
  )
}
