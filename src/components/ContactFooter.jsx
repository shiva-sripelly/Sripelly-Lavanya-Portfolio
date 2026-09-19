import { useState } from 'react'
import { ArrowUp, Check, Copy, Mail } from 'lucide-react'
import Reveal from './Reveal'
import { portfolio } from '../data/portfolioData'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => { await navigator.clipboard.writeText(portfolio.email); setCopied(true); setTimeout(() => setCopied(false), 2200) }
  return <Reveal id="contact" className="contact-section"><p className="eyebrow">Begin a conversation</p><h2>Let’s make<br/><em>something luminous.</em></h2><p>Let’s discuss chemistry, research ideas, scientific projects, collaborations, or relevant opportunities.</p><div className="contact-actions"><a href={`mailto:${portfolio.email}`} className="contact-button"><Mail/> Get in Touch</a><button onClick={copy} className="copy-button" aria-label="Copy email address">{copied ? <Check/> : <Copy/>}{copied ? 'Email copied' : portfolio.email}</button></div><p className="sr-status" aria-live="polite">{copied ? 'Email address copied to clipboard.' : ''}</p></Reveal>
}
export function Footer() {
  return <footer><div><strong>{portfolio.name}</strong><span>Project Lumière</span></div><p>A more luminous world begins with a curious mind.</p><div><a href={`mailto:${portfolio.email}`}>{portfolio.email}</a><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp/></button></div></footer>
}
