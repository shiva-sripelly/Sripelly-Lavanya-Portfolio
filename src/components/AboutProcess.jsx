import { Beaker, BookOpen, CircleDot, FileText, Lightbulb, Microscope, ScanSearch, Waypoints } from 'lucide-react'
import Reveal, { SectionHeading } from './Reveal'
import { portfolio } from '../data/portfolioData'

const processIcons = [CircleDot, ScanSearch, BookOpen, Lightbulb, Beaker, Microscope, Waypoints, FileText]
export default function AboutProcess() {
  return <><Reveal id="about" className="paper-section about-section"><div className="about-illustration" aria-hidden="true"><div className="botanical"><span/><span/><span/><span/><i/></div><div className="formula">hν = ΔE<br/><small>energy · transition · insight</small></div></div><div className="about-copy"><SectionHeading number="V" eyebrow="The researcher" title="About Lavanya" />{portfolio.about.map(p => <p key={p}>{p}</p>)}</div></Reveal>
  <Reveal id="process" className="paper-section process-section"><SectionHeading number="VI" eyebrow="Method & mind" title="Scientific Process" /><div className="process-grid">{portfolio.process.map((step, i) => { const Icon = processIcons[i]; return <div key={step}><span>{String(i + 1).padStart(2, '0')}</span><Icon/><p>{step}</p></div>})}</div></Reveal></>
}
