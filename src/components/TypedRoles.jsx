import { useEffect, useState } from 'react'

// Types each phrase, holds, deletes, moves to the next one.
export default function TypedRoles({ words, typeSpeed = 55, deleteSpeed = 28, hold = 1800 }) {
  const [i, setI] = useState(0)
  const [n, setN] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    let t
    if (!del && n < word.length) t = setTimeout(() => setN(n + 1), typeSpeed)
    else if (!del) t = setTimeout(() => setDel(true), hold)
    else if (n > 0) t = setTimeout(() => setN(n - 1), deleteSpeed)
    else { setDel(false); setI(i + 1) }
    return () => clearTimeout(t)
  }, [n, del, i, words, typeSpeed, deleteSpeed, hold])

  return (
    <span className="typed">
      {words[i % words.length].slice(0, n)}
      <span className="typed__cursor" aria-hidden="true" />
    </span>
  )
}
