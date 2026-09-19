import { ArrowDownRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import heroImage from '../assets/chemistry-hero.png'
import { portfolio } from '../data/portfolioData'

export default function Hero() {
  const reduced = useReducedMotion()
  return <section id="home" className="hero">
    <div className="hero-copy">
      <p className="eyebrow">Science <i /> Light <i /> Possibility</p>
      <h1><span>{portfolio.firstName}</span><span>{portfolio.lastName}</span></h1>
      <p className="hero-intro">{portfolio.intro}</p>
      <button className="text-link" onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}>Explore the research <ArrowDownRight size={18} /></button>
    </div>
    <motion.div className="hero-art" animate={reduced ? {} : { y: [0, -6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
      <img src={heroImage} alt="Glass molecular model beside a prism, botanical chemistry drawing, and spectroscopy curve" />
      <div className="art-note">λ <span>Light reveals<br />what matter holds</span></div>
    </motion.div>
    <aside className="hero-aside"><span>Manifesto 01</span><p>{portfolio.tagline}</p><div>{portfolio.keywords.map(k => <small key={k}>{k}</small>)}</div></aside>
    <div className="scroll-cue"><span /> Scroll to discover</div>
  </section>
}
