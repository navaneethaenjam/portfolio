import { useEffect, useState } from "react"
import "./Nav.css"

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#achievements", label: "Highlights" },
  { href: "#contact", label: "Contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1))
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`)
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav id="site-nav" className={`nav__menu ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? "is-active" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
