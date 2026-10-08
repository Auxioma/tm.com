import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserPlus, faArrowRight, faCheck, faStore, faUsers, faSignal, faEnvelope, faGear, faHeadset,
  faFileLines, faImage, faCircleCheck, faStar, faList, faFileContract, faLocationDot, faPhone,
  faChevronLeft, faChevronRight, faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons'
import Page from '../components/Page'
import Faq from '../components/Faq'
import './ComptePro.css'

const AVANTAGES = [
  { t: 'Une page dédiée', d: 'à votre activité', icon: faStore, c: '#1a6cf0' },
  { t: 'Des clients', d: 'près de chez vous', icon: faUsers, c: '#fa6a1a' },
  { t: 'Plus de visibilité', d: 'sur internet', icon: faSignal, c: '#3fae2a' },
  { t: 'Des demandes', d: 'de devis qualifiées', icon: faEnvelope, c: '#f3186f', circle: true },
  { t: 'Des outils simples', d: 'à utiliser', icon: faGear, c: '#7a22f0' },
  { t: 'Un accompagnement', d: 'personnalisé', icon: faHeadset, c: '#1a6cf0' },
]
const STEPS = [
  { t: 'Créez votre compte', d: ['Renseignez vos informations', 'de base en quelques clics.'], icon: faFileLines },
  { t: 'Complétez votre profil', d: ['Présentez votre activité,', 'vos services et vos réalisations.'], icon: faStore },
  { t: 'Ajoutez vos médias', d: ['Photos, vidéos, documents...', 'Mettez en valeur votre savoir-faire.'], icon: faImage },
  { t: <>Commencez à recevoir<br />des demandes</>, d: ['Votre profil est en ligne,', 'vous êtes visible dans votre région.'], icon: faCircleCheck },
]
const FEATURES = [
  { t: 'Photos et vidéos', d: 'Illustrez vos réalisations', icon: faImage, c: '#3fae2a' },
  { t: 'Avis clients', d: 'Renforcez votre crédibilité', icon: faStar, c: '#f3186f' },
  { t: 'Description de vos services', d: 'Détaillez votre activité', icon: faList, c: '#fa6a1a' },
  { t: 'Documents et certifications', d: 'Ajoutez vos qualifications', icon: faFileContract, c: '#7a22f0' },
  { t: 'Zone d’intervention', d: 'Indiquez vos villes et régions', icon: faLocationDot, c: '#1a6cf0' },
  { t: 'Contact facilité', d: 'Soyez joignable en un clic', icon: faPhone, c: '#fa6a1a' },
]
const FAQ = [
  { q: 'L’inscription est-elle gratuite ?', a: 'Oui, la création de votre compte professionnel est gratuite pour débuter.' },
  { q: 'Combien de temps faut-il pour créer mon compte ?', a: 'Quelques minutes suffisent pour créer votre compte et publier votre profil.' },
  { q: 'Puis-je modifier mon profil plus tard ?', a: 'Oui, vous pouvez modifier votre profil à tout moment depuis votre espace professionnel.' },
  { q: 'Comment recevoir des demandes de devis ?', a: 'Les particuliers vous contactent directement depuis votre page professionnelle.' },
  { q: 'Puis-je apparaître dans plusieurs domaines ?', a: 'Oui, selon votre formule, vous pouvez être visible dans plusieurs domaines.' },
]

export default function ComptePro() {
  const [slide, setSlide] = useState(0)
  return (
    <Page footer="compte" homeActive>
      <section className="hero cp-hero" style={{ backgroundImage: 'url(/img/compte-hero.jpg)' }}>
        <div className="container">
          <p className="hero-eyebrow cp-eyebrow">Créez votre compte professionnel</p>
          <h1 className="hero-title cp-title">Développez votre<br />activité avec<br /><em>TrouveMoi.com</em></h1>
          <p className="hero-text cp-text">Rejoignez une plateforme nationale pour gagner en<br />visibilité, recevoir des demandes de devis et trouver<br />de nouveaux clients près de chez vous.</p>
          <a href="#inscription" className="btn btn-orange cp-btn"><FontAwesomeIcon icon={faUserPlus} /> Créer mon compte professionnel <FontAwesomeIcon icon={faArrowRight} /></a>
          <p className="cp-small">Inscription simple, rapide et gratuite pour débuter.</p>
          <ul className="cp-benefits">
            {['Une page professionnelle complète', 'Recevez des demandes de devis', 'Gagnez en visibilité dans votre région', 'Un accompagnement à chaque étape'].map(t => (
              <li key={t}><span className="icon-circle"><FontAwesomeIcon icon={faCheck} /></span>{t}</li>
            ))}
          </ul>
          <p className="hand cp-hand" style={{ '--hw': '120px', '--hm': '8px 0 0 30px' }}>Plus de clients,<br />plus d’opportunités,<br />&nbsp;près de chez vous !</p>
        </div>
      </section>

      <section className="cp-adv">
        <div className="container cp-adv-grid m-grid2">
          {AVANTAGES.map(a => (
            <div className="cp-adv-card card" key={a.t}>
              {a.circle
                ? <span className="icon-circle cp-adv-circle" style={{ background: a.c }}><FontAwesomeIcon icon={a.icon} /></span>
                : <FontAwesomeIcon icon={a.icon} className="cp-adv-ico" style={{ color: a.c }} />}
              <h3>{a.t}</h3>
              <p>{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cp-steps-sec" id="inscription">
        <div className="container">
          <p className="eyebrow center">Création de compte</p>
          <h2 className="h2 center cp-h2">Une inscription <em>simple et rapide</em></h2>
          <p className="lead center cp-lead">En quelques minutes, créez votre compte professionnel et commencez à développer votre activité.</p>
          <div className="cp-steps m-stack">
            <div className="cp-line m-hide" />
            {[274, 521, 769].map(x => <FontAwesomeIcon key={x} icon={faArrowRightLong} className="cp-line-arrow m-hide" style={{ left: x }} />)}
            {STEPS.map((s, i) => (
              <div className={`cp-step cp-step-${i + 1}`} key={i}>
                <span className="cp-num">{i + 1}</span>
                <FontAwesomeIcon icon={s.icon} className="cp-step-ico" />
                <h4>{s.t}</h4>
                <p>{s.d[0]}<br />{s.d[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-profil">
        <div className="container cp-profil-inner m-stack">
          <img src="/img/compte-laptop.jpg" alt="Aperçu d'un profil professionnel TrouveMoi.com" className="cp-laptop" />
          <div className="cp-profil-txt">
            <p className="eyebrow">Un profil professionnel complet</p>
            <h2 className="h2">Mettez en valeur <em>votre savoir-faire</em></h2>
            <p className="cp-p">Présentez votre entreprise, vos services, vos réalisations, vos avis clients<br />et vos informations de contact. Votre profil est optimisé pour être facilement<br />trouvé par les particuliers et les professionnels près de chez vous.</p>
            <div className="cp-feats m-grid2">
              {FEATURES.map(f => (
                <div className="cp-feat" key={f.t}>
                  <span className="icon-circle" style={{ background: f.c }}><FontAwesomeIcon icon={f.icon} /></span>
                  <div><h4>{f.t}</h4><p>{f.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cp-trust">
        <div className="container cp-trust-inner m-stack">
          <div className="cp-testi">
            <h2 className="h2">Ils nous font confiance</h2>
            <button className="cp-arrow cp-prev" aria-label="Précédent" onClick={() => setSlide((slide + 3) % 4)}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <img src="/img/compte-avatar.jpg" alt="Thomas L." className="cp-avatar" />
            <div className="cp-quote">
              <p>« Grâce à TrouveMoi.com, j’ai pu développer<br />mon activité et trouver de nouveaux clients<br />dans ma région. La création du profil est très simple<br />et l’accompagnement est au top ! »</p>
              <b>Thomas L.</b>
              <span>Artisan - Seine-Maritime</span>
              <span className="cp-stars">{[1, 2, 3, 4, 5].map(i => <FontAwesomeIcon key={i} icon={faStar} />)}</span>
            </div>
            <button className="cp-arrow cp-next" aria-label="Suivant" onClick={() => setSlide((slide + 1) % 4)}><FontAwesomeIcon icon={faChevronRight} /></button>
            <div className="cp-dots">{[0, 1, 2, 3].map(i => <span key={i} className={i === slide ? 'on' : ''} onClick={() => setSlide(i)} />)}</div>
          </div>
          <div className="cp-faq-col">
            <p className="eyebrow">Questions fréquentes</p>
            <h2 className="h2">Tout ce que vous devez savoir</h2>
            <Faq items={FAQ} className="cp-faq" />
          </div>
        </div>
      </section>

      <section className="cp-cta-wrap">
        <div className="container">
          <div className="cp-cta" style={{ backgroundImage: 'url(/img/compte-cta.jpg)' }}>
            <h2>Rejoignez dès maintenant<br />les milliers de professionnels<br />sur <em>TrouveMoi.com</em></h2>
            <p>Gagnez en visibilité, trouvez de nouveaux clients<br />et développez votre activité durablement.</p>
            <a href="#inscription" className="btn btn-orange cp-cta-btn"><FontAwesomeIcon icon={faUserPlus} /> Créer mon compte professionnel <FontAwesomeIcon icon={faArrowRight} /></a>
            <small>C’est simple, rapide et gratuit pour commencer !</small>
          </div>
        </div>
      </section>
    </Page>
  )
}
