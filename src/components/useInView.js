import { useEffect, useRef, useState } from 'react'

// Returns [ref, inView] — inView flips to true the first time the element
// scrolls into view (and stays true).
export default function useInView(options = { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') { setInView(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect() }
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, inView]
}
