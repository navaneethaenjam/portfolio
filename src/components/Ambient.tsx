import { useEffect, useRef } from "react"
import "./Ambient.css"

export function Ambient() {
  const spotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const spot = spotRef.current
    if (!spot) return

    let frame = 0
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 3
    let currentX = targetX
    let currentY = targetY

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
    }

    const tick = () => {
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12
      spot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    frame = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__orb ambient__orb--a" />
      <div className="ambient__orb ambient__orb--b" />
      <div className="ambient__orb ambient__orb--c" />
      <div className="ambient__grid" />
      <div className="ambient__noise" />
      <div className="ambient__spot" ref={spotRef} />
    </div>
  )
}
