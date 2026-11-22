import { site } from "../content"
import "./Footer.css"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
