import { useEffect, useState } from 'react'

// A fake terminal that "runs" an automation line by line, then loops.
export default function Terminal({ lines, title = 'automation.log' }) {
  const [shown, setShown] = useState(0)
  useEffect(() => {
    const t = setTimeout(
      () => setShown((s) => (s >= lines.length + 4 ? 0 : s + 1)),
      shown === 0 ? 700 : shown >= lines.length ? 1400 : 650
    )
    return () => clearTimeout(t)
  }, [shown, lines.length])

  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--r" />
        <span className="terminal__dot terminal__dot--y" />
        <span className="terminal__dot terminal__dot--g" />
        <span className="terminal__title">{title}</span>
        <span className="terminal__live"><i /> live</span>
      </div>
      <div className="terminal__body">
        {lines.slice(0, Math.min(shown, lines.length)).map((l, k) => (
          <p key={k} className={`terminal__line terminal__line--${l.type}`}>
            {l.type === 'cmd' && <span className="terminal__prompt">$</span>}
            {l.text}
          </p>
        ))}
        <p className="terminal__line terminal__line--cmd">
          <span className="terminal__prompt">$</span><span className="terminal__caret" />
        </p>
      </div>
    </div>
  )
}
