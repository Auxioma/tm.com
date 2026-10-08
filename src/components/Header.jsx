import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from './Logo'
import './Header.css'

const LINKS = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/domaines', label: 'Nos domaines' },
  { to: '/comment-ca-fonctionne', label: 'Comment ça fonctionne ?' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/recrutement', label: 'Recrutement' },
  { to: '/contact', label: 'Contact' },
]

/** showContact : certaines maquettes n'affichent pas le lien Contact */
export default function Header({ showContact = true, shortLabels = false, homeActive = false }) {
  const [open, setOpen] = useState(false)
  let links = showContact ? LINKS : LINKS.filter(l => l.to !== '/contact')
  if (shortLabels) links = links.map(l => ({ ...l, label: l.label.replace(' ?', '') }))
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className={`main-nav${open ? ' open' : ''}`}>
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive || (homeActive && l.to === '/') ? 'active' : '')}>{l.label}</NavLink>
          ))}
        </nav>
        <Link to="/compte-professionnel" className="btn btn-blue account-btn">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="7.5" r="4.5" /><path d="M3.5 22c0-4.7 3.8-8 8.5-8s8.5 3.3 8.5 8z" />
          </svg>
          Mon compte
        </Link>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(o => !o)}><span /><span /><span /></button>
      </div>
    </header>
  )
}
