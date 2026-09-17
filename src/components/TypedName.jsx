import { useEffect, useState } from 'react'

// Types the given text out character by character, pauses, deletes it, then
// types it again — a continuous typewriter loop, like it's being retyped
// into the code editor shown lower in the hero.
export function TypedName({ text, typeSpeed = 110, deleteSpeed = 55, holdMs = 2200, restartDelayMs = 500 }) {
  const [count, setCount] = useState(0)
  const [phase, setPhase] = useState('typing') // typing | holding | deleting | waiting

  useEffect(() => {
    let timeoutId

    if (phase === 'typing') {
      if (count < text.length) {
        timeoutId = setTimeout(() => setCount((c) => c + 1), typeSpeed)
      } else {
        timeoutId = setTimeout(() => setPhase('deleting'), holdMs)
      }
    } else if (phase === 'deleting') {
      if (count > 0) {
        timeoutId = setTimeout(() => setCount((c) => c - 1), deleteSpeed)
      } else {
        timeoutId = setTimeout(() => setPhase('typing'), restartDelayMs)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [count, phase, text, typeSpeed, deleteSpeed, holdMs, restartDelayMs])

  return (
    <span className="typed-name" aria-hidden="true">
      {text.slice(0, count)}
      <span className="typed-name__cursor" />
    </span>
  )
}
