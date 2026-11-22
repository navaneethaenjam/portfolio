import { useCallback, useEffect, useState } from "react"
import "./Tour.css"

const stops = [
  { id: "top", label: "Intro", hint: "Who I am" },
  { id: "work", label: "Projects", hint: "Featured systems" },
  { id: "achievements", label: "Highlights", hint: "Leadership & impact" },
  { id: "contact", label: "Contact", hint: "Let's connect" },
]

export function Tour() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const go = useCallback((next: number) => {
    setOpen(true)
    setIndex(Math.max(0, Math.min(stops.length - 1, next)))
  }, [])

  useEffect(() => {
    if (!open) return
    const target = document.getElementById(stops[index]?.id)
    target?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [index, open])

  return (
    <div className={`tour ${open ? "is-open" : ""}`}>
      {!open ? (
        <button type="button" className="tour__launch" onClick={() => go(0)}>
          <span className="tour__pulse" aria-hidden="true" />
          Take a tour
        </button>
      ) : (
        <div className="tour__panel" role="dialog" aria-label="Portfolio tour">
          <div>
            <p className="tour__step">
              {index + 1} / {stops.length}
            </p>
            <strong>{stops[index].label}</strong>
            <span>{stops[index].hint}</span>
          </div>
          <div className="tour__controls">
            <button type="button" onClick={() => go(index - 1)} disabled={index === 0}>
              Back
            </button>
            {index < stops.length - 1 ? (
              <button type="button" className="tour__next" onClick={() => go(index + 1)}>
                Next
              </button>
            ) : (
              <button type="button" className="tour__next" onClick={() => setOpen(false)}>
                Done
              </button>
            )}
            <button
              type="button"
              className="tour__close"
              onClick={() => setOpen(false)}
              aria-label="Close tour"
            >
              {"\u2715"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
