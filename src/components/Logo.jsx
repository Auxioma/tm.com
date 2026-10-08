import { Link } from 'react-router-dom'

export function Pin({ size = 24, dark = '#0d2a6b', light = '#4fa3f3', hole = '#fff', className }) {
  return (
    <svg className={className} width={size} height={size * 1.36} viewBox="0 0 25 34" aria-hidden="true">
      <defs>
        <linearGradient id={`pinl-${light}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={light} />
          <stop offset="1" stopColor={light} stopOpacity=".85" />
        </linearGradient>
      </defs>
      <path d="M12.5 0C5.6 0 0 5.5 0 12.3 0 21.2 12.5 34 12.5 34S25 21.2 25 12.3C25 5.5 19.4 0 12.5 0z" fill={`url(#pinl-${light})`} />
      <path d="M12.5 0C5.6 0 0 5.5 0 12.3 0 21.2 12.5 34 12.5 34 9 25 7.2 18 7.8 12.6 8.3 7.8 11 3.2 16.5.6 15.2.2 13.9 0 12.5 0z" fill={dark} />
      <circle cx="12.5" cy="12.2" r="5.1" fill={hole} />
    </svg>
  )
}

/** Logo TrouveMoi.com — variant "header" (fond blanc) ou "footer" (fond marine) */
export default function Logo({ variant = 'header' }) {
  const footer = variant === 'footer'
  return (
    <Link to="/" className={`logo logo-${variant}`} aria-label="TrouveMoi.com – accueil">
      <Pin
        className="logo-pin"
        size={footer ? 24 : 22}
        dark={footer ? '#4fa3f3' : '#0d2a6b'}
        light={footer ? '#63b3f5' : '#4fa3f3'}
        hole={footer ? '#081d31' : '#fff'}
      />
      <span className="logo-txt">
        <span className="logo-name">
          {footer ? <>Trouve<b>Moi.com</b></> : <>TrouveMoi<b>.com</b></>}
        </span>
        <span className="logo-tag">La solution à chaque projet ou recherche</span>
      </span>
    </Link>
  )
}
