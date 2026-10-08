import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass, faLocationDot, faCheck, faHouse, faTrowelBricks, faBolt, faFaucetDrip, faDoorClosed,
  faPaintRoller, faHouseChimney, faTemperatureHalf, faSeedling, faHouseChimneyCrack, faRecycle,
  faStar, faStarHalfStroke, faCertificate, faArrowRight, faFileLines, faStopwatch, faShieldHalved,
  faUserShield, faClock, faHandshake, faUserGear,
} from '@fortawesome/free-solid-svg-icons'
import Page from '../components/Page'
import './Artisan.css'

const METIERS = [
  { l: <>Tous les<br />artisans</>, icon: faHouse },
  { l: 'Maçonnerie', icon: faTrowelBricks },
  { l: 'Électricité', icon: faBolt },
  { l: 'Plomberie', icon: faFaucetDrip },
  { l: 'Menuiserie', icon: faDoorClosed },
  { l: 'Peinture', icon: faPaintRoller },
  { l: 'Couverture', icon: faHouseChimney },
  { l: 'Chauffage', icon: faTemperatureHalf },
  { l: <>Jardin &amp;<br />Paysage</>, icon: faSeedling, green: true },
  { l: 'Rénovation', icon: faHouseChimneyCrack },
  { l: 'Autres métiers', icon: faRecycle },
]
const ARTISANS = [
  { m: 'Plombier', n: '4,8', a: 128, v: 'Rouen (76)', img: 'art-plombier', s: 4.5 },
  { m: 'Électricien', n: '4,7', a: 96, v: 'Forges-les-Eaux (76)', img: 'art-electricien', s: 4.5 },
  { m: 'Maçon', n: '4,9', a: 74, v: 'Neufchâtel-en-Bray (76)', img: 'art-macon', s: 4.5 },
  { m: 'Peintre', n: '4,6', a: 52, v: 'Dieppe (76)', img: 'art-peintre', s: 4.5 },
  { m: 'Menuisier', n: '4,8', a: 71, v: 'Le Havre (76)', img: 'art-menuisier', s: 4.5 },
  { m: 'Couvreur', n: '4,7', a: 63, v: 'Yvetot (76)', img: 'art-couvreur', s: 4.5 },
]
const POURQUOI = [
  { t: 'Des profils vérifiés', d: ['Des artisans qualifiés', 'et de confiance.'], shield: true },
  { t: 'Des avis authentiques', d: ['Des retours réels', 'de particuliers.'], icon: faStar, c: '#fa7a1a' },
  { t: 'Un gain de temps', d: ['Trouvez rapidement', 'le bon professionnel.'], icon: faClock, c: '#1a6cf0' },
  { t: 'Un accompagnement', d: ['De la recherche au devis,', 'tout est simplifié.'], icon: faHandshake, c: '#1a6cf0' },
]

function Stars({ value }) {
  return (
    <span className="art-stars">
      {[1, 2, 3, 4, 5].map(i => <FontAwesomeIcon key={i} icon={value >= i ? faStar : faStarHalfStroke} />)}
    </span>
  )
}

export default function Artisan() {
  const [active, setActive] = useState(0)
  return (
    <Page footer="artisan" homeActive>
      <section className="hero art-hero" style={{ backgroundImage: 'url(/img/artisan-hero.jpg)' }}>
        <div className="container">
          <span className="art-badge">Artisan</span>
          <h1 className="hero-title art-title">Trouvez un <em>Artisan</em><br />près de chez vous !</h1>
          <p className="hero-text art-text">Des professionnels qualifiés pour tous vos travaux,<br />avec des avis vérifiés et des devis en quelques clics.</p>
          <form className="art-search" onSubmit={e => e.preventDefault()}>
            <label className="art-s1">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="art-s-ico" />
              <input placeholder="Quel service recherches-vous ?" aria-label="Service recherché" />
              <small>(Ex : plombier, électricien, maçon...)</small>
            </label>
            <label className="art-s2">
              <FontAwesomeIcon icon={faLocationDot} className="art-s-ico" />
              <input placeholder="Votre ville ou code postal" aria-label="Ville ou code postal" />
              <small>(Ex : 75000)</small>
            </label>
            <button className="btn btn-orange" type="submit">Rechercher</button>
          </form>
          <ul className="art-checks m-stack">
            {['Des professionnels vérifiés', 'Des avis clients authentiques', 'Des devis rapides et gratuits', 'Des artisans près de chez vous'].map(t => (
              <li key={t}><span className="icon-circle"><FontAwesomeIcon icon={faCheck} /></span>{t}</li>
            ))}
          </ul>
          <p className="hand art-hand" style={{ '--hw': '92px', '--hm': '10px 0 0 12px' }}>Des artisans<br />&nbsp;de confiance<br />&nbsp;pour tous vos<br />&nbsp;projets !</p>
        </div>
      </section>

      <section className="art-cats-wrap">
        <div className="container art-cats m-grid2">
          {METIERS.map((m, i) => (
            <button key={i} className={`art-cat${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
              <FontAwesomeIcon icon={m.icon} className={m.green ? 'green' : ''} />
              <span>{m.l}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="art-main">
        <div className="container art-main-inner m-stack">
          <div className="art-list">
            <h2 className="h2 art-h2">Des <span className="or">Artisans</span> près de chez vous</h2>
            <p className="art-lead">Découvrez une sélection de professionnels qualifiés, notés par leurs clients.</p>
            <a href="#" className="art-all">Voir tous les artisans <FontAwesomeIcon icon={faArrowRight} /></a>
            <div className="art-grid m-grid2">
              {ARTISANS.map(a => (
                <article className="art-card card" key={a.m}>
                  <img src={`/img/${a.img}.jpg`} alt={a.m} />
                  <h3>{a.m} <FontAwesomeIcon icon={faCertificate} className="art-verif" /><FontAwesomeIcon icon={faCheck} className="art-verif-check" /></h3>
                  <p className="art-rate"><Stars value={a.s} /><b>{a.n}</b> <span>({a.a} avis)</span></p>
                  <p className="art-loc"><FontAwesomeIcon icon={faLocationDot} /> {a.v}</p>
                  <a href="#" className="btn art-profil">Voir le profil</a>
                </article>
              ))}
            </div>
          </div>

          <aside className="art-side">
            <h3>Artisans autour de vous</h3>
            <a href="#" className="art-carte">Voir sur la carte <FontAwesomeIcon icon={faArrowRight} /></a>
            <img className="art-map" src="/img/artisan-map.jpg" alt="Carte des artisans autour de vous" />
            <h3 className="art-devis-h">Demandez un devis gratuitement</h3>
            <p className="art-devis-p">Comparez plusieurs artisans et trouvez la meilleure solution<br />pour votre projet.</p>
            <a href="#" className="btn btn-orange art-devis-btn"><FontAwesomeIcon icon={faFileLines} /> Déposer une demande de devis <FontAwesomeIcon icon={faArrowRight} /></a>
            <div className="art-feat art-f1"><FontAwesomeIcon icon={faStopwatch} /><div><b>Rapide</b><br />Recevez plusieurs devis<br />en peu de temps</div></div>
            <div className="art-feat art-f2"><FontAwesomeIcon icon={faShieldHalved} /><div><b>Gratuit</b><br />Sans engagement</div></div>
            <div className="art-feat art-f3"><FontAwesomeIcon icon={faUserShield} /><div><b>Artisans vérifiés</b><br />Des professionnels de confiance</div></div>
          </aside>
        </div>
      </section>

      <section className="art-why">
        <div className="container">
          <h2 className="h2 center art-why-h2">Pourquoi choisir un <span className="or">Artisan</span> sur TrouveMoi.com ?</h2>
          <div className="art-why-grid m-stack">
            {POURQUOI.map(p => (
              <div className="art-why-card card" key={p.t}>
                <span className="art-why-ico">
                  {p.shield
                    ? <span className="fa-layers"><FontAwesomeIcon icon={faShieldHalved} style={{ color: '#1a6cf0' }} className="shield" /><FontAwesomeIcon icon={faCheck} className="shield-check" /></span>
                    : <FontAwesomeIcon icon={p.icon} style={{ color: p.c }} />}
                </span>
                <div><h4>{p.t}</h4><p>{p.d[0]}<br />{p.d[1]}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="art-cta" style={{ backgroundImage: 'url(/img/artisan-cta.jpg)' }}>
        <div className="container">
          <p className="hand art-hand2" style={{ '--hw': '100px', '--hm': '8px 0 0 50px' }}>Vous êtes artisan ?<br />Rejoignez gratuitement<br />TrouveMoi.com !</p>
          <div className="art-cta-card card">
            <h2>Développez votre activité</h2>
            <ul>
              {['Gagnez en visibilité dans votre région', 'Recevez des demandes de devis', 'Présentez vos réalisations et vos avis clients', 'Touchez de nouveaux particuliers'].map(t => (
                <li key={t}><span className="icon-circle"><FontAwesomeIcon icon={faCheck} /></span>{t}</li>
              ))}
            </ul>
            <Link to="/compte-professionnel" className="btn btn-orange art-cta-btn"><FontAwesomeIcon icon={faUserGear} /> Créer mon compte Artisan <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
