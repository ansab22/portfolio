import useInView from './useInView'

// Fades/slides children in the first time they scroll into view.
// `delay` (ms) staggers items; `from` = up | left | right | zoom.
export default function Reveal({ children, delay = 0, from = 'up', as: Tag = 'div', className = '', ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${from} ${inView ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
