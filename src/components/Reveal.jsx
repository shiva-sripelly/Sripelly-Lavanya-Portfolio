import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, className = '', id }) {
  const reduced = useReducedMotion()
  return <motion.section id={id} className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .65, ease: [.2, .7, .2, 1] }}>{children}</motion.section>
}

export function SectionHeading({ number, eyebrow, title, light = false }) {
  return <header className={`section-heading ${light ? 'light' : ''}`}><span>{number}</span><div><p>{eyebrow}</p><h2>{title}</h2></div></header>
}
