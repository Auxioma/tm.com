import { useState } from 'react'

/** Accordéon FAQ — les réponses sont repliées par défaut comme sur les maquettes */
export default function Faq({ items, className = '', openFirst = false }) {
  const [open, setOpen] = useState(openFirst ? 0 : -1)
  return (
    <div className={`faq ${className}`}>
      {items.map((it, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
          <button type="button" className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{it.q}</span>
            <span className="plus">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <div className="faq-a">{it.a}</div>}
        </div>
      ))}
    </div>
  )
}
