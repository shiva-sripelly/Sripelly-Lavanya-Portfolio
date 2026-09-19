import { ArrowDownRight } from 'lucide-react'
import Reveal, { SectionHeading } from './Reveal'
import { portfolio } from '../data/portfolioData'

export default function ResearchIndex() {
  return <Reveal id="research" className="paper-section research-section">
    <SectionHeading number="I" eyebrow="A field guide to" title="Research Index" />
    <div className="index-list">{portfolio.researchIndex.map(([n, label, target]) => <button key={n} onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })}><span>{n}</span><strong>{label}</strong><ArrowDownRight /></button>)}</div>
  </Reveal>
}
