import Reveal, { SectionHeading } from './Reveal'
import { portfolio } from '../data/portfolioData'

export default function Expertise() {
  return <Reveal id="expertise" className="paper-section expertise-section">
    <SectionHeading number="III" eyebrow="Tools of inquiry" title="Core Expertise" />
    <div className="expertise-layout"><p className="expertise-quote">“At the intersection of structure, light, and careful observation.”</p><div className="skill-list">{portfolio.skills.map((s, i) => <div key={s}><span>{String(i + 1).padStart(2, '0')}</span>{s}</div>)}</div></div>
  </Reveal>
}
