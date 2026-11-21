import { useEffect } from 'react'

// Fixed animated backdrop: grid, glow blobs, and a soft spotlight that
// follows the cursor (desktop only).
export default function Background() {
  useEffect(() => {
    const on = (e) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', on, { passive: true })
    return () => window.removeEventListener('pointermove', on)
  }, [])
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__grid" />
      <div className="bg__blob bg__blob--1" />
      <div className="bg__blob bg__blob--2" />
      <div className="bg__blob bg__blob--3" />
      <div className="bg__spot" />
    </div>
  )
}
