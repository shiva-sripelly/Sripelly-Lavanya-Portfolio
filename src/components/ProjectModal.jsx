import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { portfolio } from '../data/portfolioData'

export default function ProjectModal({ open, onClose }) {
  const dialog = useRef(null)
  useEffect(() => {
    if (!open) return
    const previous = document.activeElement
    dialog.current?.focus()
    const key = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') { const nodes = [...dialog.current.querySelectorAll('button,[href],[tabindex]:not([tabindex="-1"])')]; if (!nodes.length) return; const [first] = nodes, last = nodes.at(-1); if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() } }
    }
    document.addEventListener('keydown', key); document.body.classList.add('modal-open')
    return () => { document.removeEventListener('keydown', key); document.body.classList.remove('modal-open'); previous?.focus() }
  }, [open, onClose])
  if (!open) return null
  return <div className="modal-backdrop" role="presentation" onMouseDown={e => e.target === e.currentTarget && onClose()}><div className="modal" ref={dialog} role="dialog" aria-modal="true" aria-labelledby="modal-title" tabIndex="-1"><button className="modal-close" onClick={onClose} aria-label="Close project details"><X /></button><p className="eyebrow">An expanded study</p><h2 id="modal-title">Project Lumière</h2><div className="modal-grid">{Object.entries(portfolio.project.detail).map(([title, text]) => <section key={title}><h3>{title}</h3><p>{text}</p></section>)}</div></div></div>
}
