import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { portfolio } from '../data/portfolioData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-35% 0px -55%' })
    portfolio.navigation.forEach(([, id]) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])
  const jump = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }
  return <nav className="navbar" aria-label="Primary navigation">
    <button className="wordmark" onClick={() => jump('home')} aria-label="Go to home">S<span>L</span></button>
    <div className="nav-title"><strong>{portfolio.name}</strong></div>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-menu" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    <div id="main-menu" className={`nav-links ${open ? 'open' : ''}`}>
      {portfolio.navigation.map(([label, id]) => <button key={id} className={active === id ? 'active' : ''} onClick={() => jump(id)}>{label}</button>)}
    </div>
  </nav>
}
