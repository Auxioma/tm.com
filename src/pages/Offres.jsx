import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRocket, faBullseye, faUsers, faSignal, faSeedling, faCrown, faCircleCheck, faArrowRight, faStar,
  faGem, faIdCard, faCamera, faLocationDot, faFileLines, faCommentDots, faChartSimple, faRankingStar,
  faCalendarDays, faHeadset, faBullhorn, faLightbulb, faUserPen, faEye, faChartLine,
} from '@fortawesome/free-solid-svg-icons'
import Page from '../components/Page'
import Faq from '../components/Faq'
import './Offres.css'

const TOP = [
  { t: 'Une mise en ligne rapide', d: 'Pour être visible rapidement', icon: faRocket, c: '#1a6cf0' },
  { t: 'Des outils performants', d: 'Pour développer votre activité', icon: faBullseye, c: '#fa6a1a' },
  { t: 'Un accompagnement dédié', d: 'À chaque étape', icon: faUsers, c: '#1a6cf0' },
  { t: 'Des offres évolutives', d: 'Selon vos objectifs', icon: faSignal, c: '#fa6a1a' },
]
const FORMULES = [
  {
    id: 'decouverte', name: 'Découverte', icon: faSeedling, sub: ['Pour bien démarrer', 'et tester la plateforme'],
    items: ['Création de votre profil professionnel', 'Présentation de votre activité', 'Ajout de photos et vidéos', 'Position sur notre carte interactive', 'Réception de demandes de devis', 'Accès aux fonctionnalités essentielles'],
    ideal: ['Idéal pour les indépendants', 'et les petites structures'], idealIcon: faUsers,
  },
  {
    id: 'essentielle', name: 'Essentielle', icon: faChartSimple, sub: ['Pour développer votre visibilité', 'et recevoir plus de demandes'], popular: true,
    items: ['Tous les avantages de la formule Découverte', 'Mise en avant dans les résultats', 'Statistiques de votre activité', 'Messagerie avec les clients', 'Outils de gestion des demandes', 'Participation aux événements locaux', 'Accès aux fonctionnalités avancées'],
    ideal: ['Idéal pour les professionnels', 'qui veulent développer leur activité'], idealIcon: faBullseye,
  },
  {
    id: 'premium', name: 'Premium', icon: faCrown, sub: ['Pour booster votre activité', 'et maximiser vos opportunités'],
    items: ['Tous les avantages de la formule Essentielle', 'Mise en avant prioritaire', 'Visibilité renforcée sur la carte et dans les recherches', 'Accès à des outils exclusifs (agenda, promotions, etc.)', 'Support dédié et accompagnement personnalisé', 'Participation aux campagnes de communication', 'Accès anticipé aux nouvelles fonctionnalités'],
    ideal: ['Idéal pour les entreprises', 'qui veulent un maximum de visibilité'], idealIcon: faGem,
  },
]
// [libellé, icône, Découverte, Essentielle, Premium]
const COMPARATIF = [
  ['Profil professionnel', faIdCard, 1, 1, 1],
  ['Photos et vidéos', faCamera, 1, 1, 1],
  ['Position sur la carte', faLocationDot, 1, 1, 1],
  ['Réception de demandes de devis', faFileLines, 1, 1, 1],
  ['Messagerie avec les clients', faCommentDots, 0, 1, 1],
  ['Statistiques de votre activité', faChartSimple, 0, 1, 1],
  ['Mise en avant dans les résultats', faRankingStar, 0, 1, 1],
  ['Outils de gestion (agenda, promotions...)', faCalendarDays, 0, 1, 1],
  ['Support dédié', faHeadset, 0, 0, 1],
  ['Participation aux campagnes', faBullhorn, 0, 0, 1],
]
const FAQ = [
  { q: 'Puis-je changer de formule plus tard ?', a: 'Oui, vous pouvez faire évoluer votre formule à tout moment depuis votre espace professionnel.' },
  { q: 'Comment recevoir des demandes de devis ?', a: 'Les particuliers vous contactent directement depuis votre profil, dès la formule Découverte.' },
  { q: 'Quelle formule choisir pour démarrer ?', a: 'La formule Découverte est idéale pour tester la plateforme ; notre équipe peut vous conseiller.' },
  { q: 'Y a-t-il un engagement ?', a: 'Nos formules sont sans engagement de longue durée.' },
  { q: 'Quels sont les moyens de paiement ?', a: 'Carte bancaire et prélèvement SEPA sont acceptés.' },
]

export default function Offres() {
  return (
    <Page homeActive>
      <section className="hero of-hero" style={{ backgroundImage: 'url(/img/offres-hero.jpg)' }}>
        <div className="container">
          <p className="hero-eyebrow of-eyebrow">Nos offres professionnelles</p>
          <h1 className="hero-title of-title">Une solution adaptée<br />à <em>chaque besoin</em></h1>
          <p className="hero-text of-text">Que vous soyez indépendant, artisan, commerçant<br />ou entreprise, TrouveMoi.com vous accompagne<br />avec des offres flexibles et évolutives.</p>
          <p className="hand of-hand" style={{ '--hw': '96px', '--hm': '8px 0 0 30px' }}>&nbsp;Développez<br />votre activité<br />en toute simplicité !</p>
        </div>
      </section>

      <section className="of-top">
        <div className="container of-top-inner m-grid2">
          {TOP.map(t => (
            <div key={t.t} className="of-top-item">
              <FontAwesomeIcon icon={t.icon} style={{ color: t.c }} />
              <div><h4>{t.t}</h4><p>{t.d}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="of-formules">
        <div className="container">
          <p className="eyebrow center">Nos formules</p>
          <h2 className="h2 center of-h2">Des offres pensées pour les professionnels</h2>
          <p className="lead center of-lead">Choisissez la formule qui correspond le mieux à vos besoins. Vous pourrez évoluer à tout moment.</p>
          <div className="of-cards m-stack">
            {FORMULES.map(f => (
              <article key={f.id} className={`of-card of-${f.id}`}>
                {f.popular && <span className="of-pop"><FontAwesomeIcon icon={faStar} /> La plus populaire</span>}
                <FontAwesomeIcon icon={f.icon} className="of-card-ico" />
                <h3>Formule <span>{f.name}</span></h3>
                <p className="of-sub">{f.sub[0]}<br />{f.sub[1]}</p>
                <ul>{f.items.map(it => <li key={it}><FontAwesomeIcon icon={faCircleCheck} />{it}</li>)}</ul>
                <Link to="/compte-professionnel" className="btn of-choose">Choisir cette formule <FontAwesomeIcon icon={faArrowRight} /></Link>
                <div className="of-ideal"><FontAwesomeIcon icon={f.idealIcon} /><p>{f.ideal[0]}<br />{f.ideal[1]}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="of-comp">
        <div className="container">
          <p className="eyebrow center">Comparatif des fonctionnalités</p>
          <h2 className="h2 center of-h2c">Une vue d’ensemble pour bien choisir</h2>
          <div className="of-table-wrap">
            <table className="of-table">
              <thead>
                <tr>
                  <th className="of-th-label">Fonctionnalités principales</th>
                  <th><span className="of-th of-th-d">Découverte</span></th>
                  <th><span className="of-th of-th-e">Essentielle</span></th>
                  <th><span className="of-th of-th-p">Premium</span></th>
                </tr>
              </thead>
              <tbody>
                {COMPARATIF.map(([l, ic, d, e, p]) => (
                  <tr key={l}>
                    <td className="of-td-label"><FontAwesomeIcon icon={ic} />{l}</td>
                    {[[d, 'd'], [e, 'e'], [p, 'p']].map(([v, k]) => (
                      <td key={k} className={`of-td of-td-${k}`}>{v ? <FontAwesomeIcon icon={faCircleCheck} /> : <span className="of-dash">–</span>}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="of-bottom">
        <div className="container of-bottom-inner m-stack">
          <div className="of-accomp">
            <div className="of-accomp-photo">
              <img src="/img/offres-equipe.jpg" alt="Conseillère TrouveMoi.com" />
              <p className="hand of-hand2" style={{ '--hw': '80px', '--hm': '6px 0 0 14px' }}>Une équipe<br />&nbsp;à vos côtés !</p>
            </div>
            <div className="of-accomp-txt">
              <h3>Un accompagnement personnalisé</h3>
              <p>Notre équipe vous accompagne pour vous aider<br />à choisir la meilleure formule et à optimiser votre profil<br />pour recevoir plus de demandes.</p>
              <ul>
                <li><span><FontAwesomeIcon icon={faLightbulb} /></span>Conseils personnalisés</li>
                <li><span><FontAwesomeIcon icon={faUserPen} /></span>Aide à la création de votre profil</li>
                <li><span><FontAwesomeIcon icon={faEye} /></span>Optimisation de votre visibilité</li>
                <li><span><FontAwesomeIcon icon={faChartLine} /></span>Suivi de votre progression</li>
              </ul>
              <Link to="/contact" className="btn btn-blue of-contact">Nous contacter <FontAwesomeIcon icon={faArrowRight} /></Link>
            </div>
          </div>
          <div className="of-faq-col">
            <h3>Questions fréquentes</h3>
            <Faq items={FAQ} className="of-faq" />
          </div>
        </div>
      </section>
    </Page>
  )
}
