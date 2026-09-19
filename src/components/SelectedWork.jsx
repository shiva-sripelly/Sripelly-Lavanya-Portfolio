import { ArrowUpRight, Atom, FlaskConical, Triangle } from 'lucide-react'
import Reveal, { SectionHeading } from './Reveal'
import { portfolio } from '../data/portfolioData'

const icons = { prism: Triangle, molecule: Atom, glassware: FlaskConical }
export default function SelectedWork() {
  return <Reveal id="work" className="paper-section work-section">
    <SectionHeading number="II" eyebrow="Selected studies" title="Work in Progress" />
    <p className="section-lede">A collection of chemistry themes shaped by curiosity, analysis, and the belief that every molecule has a story to tell.</p>
    <div className="project-grid">{portfolio.projects.map((p, i) => { const Icon = icons[p.visual]; return <article className={`project-card card-${i + 1}`} key={p.title}>
      <div className="project-visual" role="img" aria-label={`${p.title}: abstract chemistry line illustration`}><Icon strokeWidth={.8} /><span className="orb one"/><span className="orb two"/><svg viewBox="0 0 300 80" aria-hidden="true"><path d="M0 60 C45 58,54 54,75 55 S105 62,124 55 S149 11,163 52 S199 64,216 54 S240 21,251 52 S275 60,300 51" /></svg></div>
      <div className="project-meta"><span>{p.number}</span><ArrowUpRight size={20}/></div><h3>{p.title}</h3><h4>{p.subtitle}</h4><p>{p.description}</p>
    </article>})}</div>
  </Reveal>
}
