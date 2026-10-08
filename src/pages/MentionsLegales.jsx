import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileLines, faShieldHalved, faLock, faCookieBite, faScaleBalanced, faEnvelope, faBuilding, faUser,
  faServer, faCheck, faArrowRight, faCommentDots, faCartShopping, faFileContract,
} from '@fortawesome/free-solid-svg-icons'
import Page from '../components/Page'
import './MentionsLegales.css'

const PAGES = [
  { id: 'mentions', label: 'Mentions légales', side: 'Mentions légales', icon: faFileLines },
  { id: 'cgu', label: 'CGU', side: <>Conditions Générales<br />d’Utilisation (CGU)</>, icon: faShieldHalved, check: true },
  { id: 'confidentialite', label: 'Politique de confidentialité', side: 'Politique de confidentialité', icon: faLock },
  { id: 'cookies', label: 'Politique cookies', side: 'Politique cookies', icon: faCookieBite },
  { id: 'vente', label: 'Conditions de vente', side: 'Conditions de vente', icon: faScaleBalanced },
  { id: 'rgpd', label: 'Mentions RGPD', side: 'Mentions RGPD', icon: faEnvelope },
]
const AUTRES = [
  { t: <>Conditions Générales<br />d’Utilisation (CGU)</>, d: ['Règles d’utilisation de la plateforme', 'pour les particuliers et', 'les professionnels.'], icon: faShieldHalved, check: true, id: 'cgu' },
  { t: <>Politique de<br />confidentialité</>, d: ['Comment nous collectons,', 'utilisons et protégeons', 'vos données personnelles.'], icon: faLock, id: 'confidentialite' },
  { t: 'Politique cookies', d: ['Informations sur l’utilisation', 'des cookies et vos choix', 'de paramétrage.'], icon: faCookieBite, id: 'cookies', single: true },
  { t: 'Conditions de vente', d: ['Conditions applicables', 'aux services et options', 'professionnelles.'], icon: faCartShopping, id: 'vente', single: true },
  { t: 'Mentions RGPD', d: ['Vos droits en matière', 'de protection des données', 'personnelles.'], icon: faFileContract, id: 'rgpd', single: true },
]

function ShieldCheck({ className }) {
  return (
    <span className={`ml-shield ${className || ''}`}>
      <FontAwesomeIcon icon={faShieldHalved} /><FontAwesomeIcon icon={faCheck} className="ml-shield-check" />
    </span>
  )
}

export default function MentionsLegales() {
  const [active, setActive] = useState('mentions')
  const go = id => { setActive(id); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  return (
    <Page footer="legal" showContact homeActive>
      <section className="hero ml-hero" style={{ backgroundImage: 'url(/img/legal-hero.jpg)' }}>
        <div className="container">
          <p className="hero-eyebrow ml-eyebrow">Informations légales</p>
          <h1 className="hero-title ml-title">Transparence et<br /><em>confiance avant tout</em></h1>
          <p className="hero-text ml-text">Retrouvez ici toutes les informations légales et réglementaires<br />de TrouveMoi.com. Une plateforme transparente, sécurisée<br />et conforme aux exigences en vigueur.</p>
          <p className="hand ml-hand" style={{ '--hw': '96px', '--hm': '8px 0 0 20px' }}>Une plateforme<br />&nbsp;sérieuse, sûre<br />&nbsp;et conforme !</p>
        </div>
      </section>

      <nav className="ml-tabs-wrap">
        <div className="container ml-tabs m-grid2">
          {PAGES.map(p => (
            <button key={p.id} className={`ml-tab ml-tab-${p.id}${active === p.id ? ' active' : ''}`} onClick={() => setActive(p.id)}>
              {p.check ? <ShieldCheck /> : <FontAwesomeIcon icon={p.icon} />}
              <span>{p.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <section className="ml-main">
        <div className="container ml-main-inner m-stack">
          <aside className="ml-side">
            <ul className="ml-side-nav">
              {PAGES.map(p => (
                <li key={p.id}>
                  <button className={active === p.id ? 'active' : ''} onClick={() => setActive(p.id)}>
                    {p.check ? <ShieldCheck /> : <FontAwesomeIcon icon={p.icon} />}<span>{p.side}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="ml-help">
              <h4><FontAwesomeIcon icon={faCommentDots} className="ml-help-ico" /> Besoin d’une information ?</h4>
              <p>Notre équipe est à votre disposition<br />pour toute question concernant<br />nos informations légales.</p>
              <Link to="/contact" className="btn btn-blue ml-help-btn">Nous contacter <FontAwesomeIcon icon={faArrowRight} /></Link>
            </div>
          </aside>

          <div className="ml-content">
            <p className="eyebrow">Mentions légales</p>
            <h2 className="h2 ml-h2">Informations légales de <em>TrouveMoi.com</em></h2>
            <p className="ml-intro">Conformément à la législation en vigueur, vous trouverez ci-dessous les informations relatives<br />à l’éditeur du site TrouveMoi.com.</p>
            <dl className="ml-rows">
              <div className="ml-row ml-r1">
                <dt><FontAwesomeIcon icon={faBuilding} />Éditeur du site</dt>
                <dd><b>TrouveMoi</b><br />SASU au capital de 1 000 €<br />Siège social : 76440 Forges-les-Eaux, France<br />SIREN : 123 456 789<br />TVA intracommunautaire : FR12 123 456 789</dd>
              </div>
              <div className="ml-row ml-r2">
                <dt><FontAwesomeIcon icon={faUser} />Directeur de la publication</dt>
                <dd><b>Loïc Omont</b><br />Contact : <a href="mailto:contact@trouvemoi.com">contact@trouvemoi.com</a></dd>
              </div>
              <div className="ml-row ml-r3">
                <dt><FontAwesomeIcon icon={faServer} />Hébergeur</dt>
                <dd><b>OVHcloud</b><br />2 rue Kellermann<br />59100 Roubaix, France<br /><a href="https://www.ovhcloud.com" target="_blank" rel="noreferrer">www.ovhcloud.com</a></dd>
              </div>
              <div className="ml-row ml-r4">
                <dt><FontAwesomeIcon icon={faEnvelope} />Contact</dt>
                <dd>Email : <a href="mailto:contact@trouvemoi.com">contact@trouvemoi.com</a><br />Téléphone : <a href="tel:0244847710">02 44 84 77 10</a></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="ml-conf">
        <div className="container ml-conf-inner m-stack">
          <div className="ml-conf-card card"><ShieldCheck className="ml-conf-ico" /><div><h4>Conformité légale</h4><p>Un site conforme aux réglementations<br />françaises et européennes.</p></div></div>
          <div className="ml-conf-card card"><FontAwesomeIcon icon={faLock} className="ml-conf-ico" /><div><h4>Protection des données</h4><p>Vos données sont protégées<br />et utilisées en toute transparence.</p></div></div>
          <div className="ml-conf-card card"><FontAwesomeIcon icon={faFileLines} className="ml-conf-ico" /><div><h4>Informations claires</h4><p>Des conditions d’utilisation<br />accessibles et compréhensibles.</p></div></div>
        </div>
      </section>

      <section className="ml-autres">
        <div className="container">
          <h2 className="h2 center ml-autres-h2">Nos autres informations légales</h2>
          <p className="center ml-autres-sub">Accédez aux différentes pages d’informations détaillées.</p>
          <div className="ml-autres-grid m-grid2">
            {AUTRES.map(a => (
              <div key={a.id} className={`ml-autre card${a.single ? ' single' : ''}`}>
                {a.check ? <ShieldCheck className="ml-autre-ico" /> : <FontAwesomeIcon icon={a.icon} className="ml-autre-ico" />}
                <h3>{a.t}</h3>
                <p>{a.d.map((l, i) => <span key={i}>{l}<br /></span>)}</p>
                <button className="btn ml-consult" onClick={() => go(a.id)}>Consulter <FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            ))}
          </div>

          <div className="ml-cta">
            <img src="/img/legal-cta.jpg" alt="" />
            <div className="ml-cta-txt">
              <h2>Une plateforme fiable et transparente</h2>
              <p>Chez TrouveMoi.com, nous nous engageons à respecter la réglementation<br />en vigueur et à vous fournir des informations claires et accessibles.</p>
              <Link to="/contact" className="btn btn-blue ml-cta-btn">Nous contacter <FontAwesomeIcon icon={faArrowRight} /></Link>
            </div>
            <img src="/img/legal-balance.png" alt="" className="ml-balance m-hide" />
          </div>
        </div>
      </section>
    </Page>
  )
}
