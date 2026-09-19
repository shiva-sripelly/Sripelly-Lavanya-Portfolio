import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Reveal, { SectionHeading } from './Reveal'
import ProjectModal from './ProjectModal'
import { portfolio } from '../data/portfolioData'

export default function ProjectLumiere() {
  const [open, setOpen] = useState(false)
  return <><Reveal id="lumiere" className="lumiere-section">
    <div className="lumiere-copy"><SectionHeading number="IV" eyebrow="Featured project" title="Project Lumière" light /><h3>{portfolio.project.subtitle}</h3><p>{portfolio.project.description}</p><button className="outline-button" onClick={() => setOpen(true)}>Explore Project Lumière <ArrowRight size={18}/></button></div>
    <div className="prism-scene" role="img" aria-label="A beam of light enters a prism and separates into a spectral curve"><span className="beam"/><span className="prism"/><span className="spectrum"/><svg viewBox="0 0 500 160" aria-hidden="true"><path d="M0 132 C55 130 70 125 110 128 S165 140 199 127 S226 21 244 121 S293 139 318 124 S354 52 369 123 S425 136 500 122" /></svg><div className="molecule-lines"><i/><i/><i/><i/></div></div>
    <div className="theme-words">{portfolio.project.words.map(w => <span key={w}>{w}</span>)}</div>
  </Reveal><ProjectModal open={open} onClose={() => setOpen(false)} /></>
}
