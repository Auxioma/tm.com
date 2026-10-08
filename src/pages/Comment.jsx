import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass, faBolt, faStar, faListUl, faCommentDots, faCircleCheck, faUserPlus, faFileLines,
  faEye, faSignal, faGear, faLocationDot, faShieldHalved, faCheck, faUsers, faClock, faTableCellsLarge,
  faUser, faBuilding, faArrowRight, faPlay, faExpand,
} from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import Page from '../components/Page'
import PlayButton from '../components/PlayButton'
import './Comment.css'

const PARTICULIERS = [
  { title: 'Recherchez', icon: faMagnifyingGlass, text: ['Saisissez ce que vous cherchez', '(activité, service, lieu...)'], img: 'step-p1' },
  { title: 'Découvrez', icon: faListUl, text: ['Parcourez les résultats avec', 'photos, descriptions et avis.'], img: 'step-p2' },
  { title: 'Contactez', icon: faCommentDots, text: ['Contactez directement le', 'professionnel ou l’organisateur.'], img: 'step-p3' },
  { title: 'Réalisez votre projet', icon: faCircleCheck, text: ['Profitez du service, de l’activité', 'ou de l’opportunité.'], img: 'step-p4' },
]
const PROS = [
  { title: 'Créez votre compte', icon: faUserPlus, text: ['Inscrivez votre activité', 'en quelques minutes.'], img: 'step-r1' },
  { title: 'Complétez votre profil', icon: faFileLines, text: ['Ajoutez vos informations,', 'photos, services et zone', 'd’intervention.'], img: 'step-r2' },
  { title: 'Soyez visible', icon: faEye, text: ['Votre activité est mise en avant', 'auprès des particuliers qui', 'recherchent vos services.'], img: 'step-r3' },
  { title: 'Développez votre activité', icon: faSignal, text: ['Recevez des contacts et des', 'demandes pour de nouveaux', 'projets.'], img: 'step-r4' },
]
const AVANTAGES = [
  { t: 'Simplicité', d: ['Une utilisation facile', 'et intuitive.'], icon: faGear, circle: true },
  { t: 'Proximité', d: ['Des résultats près', 'de chez vous.'], icon: faLocationDot },
  { t: 'Confiance', d: ['Des profils vérifiés', 'et des avis.'], shield: true },
  { t: 'Accessibilité', d: ['Des opportunités pour', 'tous, particuliers et pros.'], icon: faUsers },
  { t: 'Gain de temps', d: ['Tout ce dont vous avez', 'besoin en quelques clics.'], icon: faClock, circle: true },
  { t: 'Multi-domaines', d: ['Une plateforme complète', 'pour tous vos projets.'], squares: true },
]

function Steps({ steps, variant }) {
  return (
    <div className={`cf-steps cf-steps-${variant} m-stack`}>
      {steps.map((s, i) => (
        <div key={s.title} className="cf-step-wrap">
          <article className="cf-step card">
            <span className="cf-num">{i + 1}</span>
            <FontAwesomeIcon icon={s.icon} className="cf-step-ico" />
            <h3>{s.title}</h3>
            <p>{s.text.map((t, j) => <span key={j}>{t}<br /></span>)}</p>
            <img className="cf-step-img" src={`/img/${s.img}.jpg`} alt="" />
          </article>
          {i < 3 && <FontAwesomeIcon icon={faArrowRight} className="cf-arrow m-hide" />}
        </div>
      ))}
    </div>
  )
}

export default function Comment() {
  return (
    <Page>
      <section className="hero cf-hero" style={{ backgroundImage: 'url(/img/comment-hero.jpg)' }}>
        <div className="container">
          <p className="hero-eyebrow cf-eyebrow">Comment ça fonctionne ?</p>
          <h1 className="hero-title cf-title">Simple, <em>rapide et efficace</em></h1>
          <p className="hero-text cf-text">Trouvez un professionnel, une activité ou une opportunité<br />près de chez vous, en quelques clics.</p>
          <ul className="cf-feats m-stack">
            <li><span className="icon-circle"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>Une recherche<br />simple</li>
            <li><span className="icon-circle"><FontAwesomeIcon icon={faBolt} /></span>Des résultats<br />pertinents</li>
            <li><span className="icon-circle"><FontAwesomeIcon icon={faStar} style={{ color: 'var(--tm-blue)' }} /></span>Des opportunités<br />pour tous</li>
          </ul>
          <p className="hand cf-hand" style={{ '--hw': '96px', '--hm': '4px 0 0 44px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trouvez,<br />&nbsp;&nbsp;&nbsp;contactez,<br />réalisez vos projets !</p>
        </div>
      </section>

      <section className="cf-part">
        <div className="container">
          <p className="eyebrow center">Vous êtes un particulier ?</p>
          <h2 className="h2 center cf-h2">Trouvez facilement ce dont vous avez besoin</h2>
          <p className="lead center cf-lead">Que ce soit un professionnel, une activité, un événement ou un produit local,<br />Tout est à portée de main sur TrouveMoi.com.</p>
          <Steps steps={PARTICULIERS} variant="blue" />
        </div>
      </section>

      <section className="cf-pro">
        <div className="container">
          <p className="eyebrow center cf-eb-orange">Vous êtes un professionnel ?</p>
          <h2 className="h2 center cf-h2">Développez votre activité simplement</h2>
          <p className="lead center cf-lead">Créez votre profil et soyez visible auprès de milliers de particuliers<br />dans votre région et partout en France.</p>
          <Steps steps={PROS} variant="orange" />
        </div>
      </section>

      <section className="cf-why">
        <div className="container cf-why-inner m-stack">
          <div className="cf-video">
            <img src="/img/comment-video.jpg" alt="Vidéo de présentation TrouveMoi.com" />
            <PlayButton size={56} className="cf-video-play" />
            <div className="cf-video-bar"><span /></div>
            <div className="cf-video-ctrl">
              <FontAwesomeIcon icon={faPlay} /> <span>0:00 / 1:45</span>
              <span className="cf-video-right"><FontAwesomeIcon icon={faGear} /><FontAwesomeIcon icon={faSquare} /><FontAwesomeIcon icon={faExpand} /></span>
            </div>
          </div>
          <div className="cf-adv">
            <p className="eyebrow">Tous les avantages</p>
            <h2 className="h2 cf-adv-h2">Pourquoi choisir TrouveMoi ?</h2>
            <div className="cf-adv-grid m-grid2">
              {AVANTAGES.map(a => (
                <div className="cf-adv-card" key={a.t}>
                  <span className="cf-adv-ico">
                    {a.shield ? (
                      <span className="fa-layers"><FontAwesomeIcon icon={faShieldHalved} className="shield" /><FontAwesomeIcon icon={faCheck} className="shield-check" /></span>
                    ) : a.circle ? (
                      <span className="icon-circle cf-adv-circle"><FontAwesomeIcon icon={a.icon} /></span>
                    ) : a.squares ? (
                      <svg width="28" height="28" viewBox="0 0 28 28"><rect width="12.5" height="12.5" rx="2" fill="currentColor" /><rect x="15.5" width="12.5" height="12.5" rx="2" fill="currentColor" /><rect y="15.5" width="12.5" height="12.5" rx="2" fill="currentColor" /><rect x="15.5" y="15.5" width="12.5" height="12.5" rx="2" fill="currentColor" /></svg>
                    ) : <FontAwesomeIcon icon={a.icon} />}
                  </span>
                  <div><h4>{a.t}</h4><p>{a.d[0]}<br />{a.d[1]}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cf-cta" style={{ backgroundImage: 'url(/img/comment-cta.jpg)' }}>
        <div className="container">
          <h2>Prêt à commencer ?</h2>
          <p>Rejoignez dès maintenant TrouveMoi.com<br />et profitez de toutes les opportunités !</p>
          <Link to="/domaines" className="btn btn-white cf-cta-b1"><FontAwesomeIcon icon={faUser} /> Je suis un particulier</Link>
          <Link to="/compte-professionnel" className="btn btn-blue cf-cta-b2"><FontAwesomeIcon icon={faBuilding} /> Je suis un professionnel</Link>
        </div>
      </section>
    </Page>
  )
}
