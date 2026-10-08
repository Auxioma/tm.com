import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay, faUsers, faBullseye, faRocket, faStar, faLocationDot, faLayerGroup, faChartSimple,
  faHandshake, faHeart, faGem, faSeedling, faArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import Page from '../components/Page'
import './APropos.css'

const MISSION = [
  { t: 'Connecter', c: '#0a6cf0', icon: faUsers, d: ['Mettre en relation', 'directement les', 'particuliers et les', 'professionnels'] },
  { t: 'Simplifier', c: '#43ac2f', icon: faBullseye, d: ['Une recherche rapide', 'et intuitive pour', 'gagner du temps'] },
  { t: 'Soutenir', c: '#f3265a', icon: faRocket, d: ['Les entreprises locales', 'et les initiatives', 'dans toutes les régions'] },
  { t: <>Créer des<br />opportunités</>, c: '#fa7a1a', icon: faStar, d: ['Pour tous, partout', 'en France'] },
]
const CHIFFRES = [
  { t: <>De nombreux<br />professionnels</>, d: ['dans tous les secteurs'], icon: <FontAwesomeIcon icon={faUsers} className="ap-ch-big" style={{ color: '#1a74f0' }} /> },
  { t: 'Partout en France', d: ['une présence nationale', 'et locale'], icon: <span className="icon-circle ap-ch-circle" style={{ background: '#43ac2f' }}><FontAwesomeIcon icon={faLocationDot} /></span> },
  { t: 'Des domaines variés', d: ['pour tous les projets', 'et toutes les envies'], icon: <FontAwesomeIcon icon={faLayerGroup} className="ap-ch-big" style={{ color: '#7a2ff0' }} /> },
  { t: <>Une plateforme<br />en évolution constante</>, d: ['grâce à vos retours'], icon: <span className="icon-circle ap-ch-circle" style={{ background: '#fa6a1a' }}><FontAwesomeIcon icon={faChartSimple} /></span> },
]
const VALEURS = [
  { t: 'Confiance', d: ['Des profils vérifiés', 'et des échanges sécurisés.'], icon: faHandshake, c: '#1a6cf0', img: 'valeur-confiance' },
  { t: 'Proximité', d: ['Une mise en avant', 'des talents et des entreprises', 'de nos régions.'], icon: faHeart, c: '#f5265c', img: 'valeur-proximite' },
  { t: 'Qualité', d: ['Une plateforme claire,', 'fiable et facile à utiliser.'], icon: faGem, c: '#1a6cf0', img: 'valeur-qualite' },
  { t: 'Engagement', d: ['Soutenir l’économie locale,', 'les initiatives et le savoir-faire', 'français.'], icon: faSeedling, c: '#3fa63a', img: 'valeur-engagement' },
]

export default function APropos() {
  return (
    <Page>
      <section className="hero ap-hero" style={{ backgroundImage: 'url(/img/apropos-hero.jpg)' }}>
        <div className="container">
          <p className="hero-eyebrow ap-eyebrow">À propos de TrouveMoi.com</p>
          <h1 className="hero-title ap-title">Une plateforme née<br />d’une <em>conviction</em></h1>
          <p className="hero-text ap-text">Connecter simplement les professionnels<br />et les particuliers, partout en France,<br />pour donner vie à tous les projets.</p>
          <button className="btn btn-blue ap-video-btn"><FontAwesomeIcon icon={faPlay} /> Découvrez notre histoire en vidéo</button>
          <p className="hand ap-hand" style={{ '--hw': '112px', '--hm': '12px 0 0 2px' }}>&nbsp;Ensemble,<br />&nbsp;développons<br />de nouvelles<br />opportunités !</p>
        </div>
      </section>

      <section className="ap-mission-wrap">
        <div className="container">
          <div className="ap-mission m-stack">
            <div className="ap-mission-txt">
              <p className="eyebrow">Notre mission</p>
              <h2 className="h2">Faciliter les rencontres<br />qui font avancer <em>vos projets</em></h2>
              <p className="ap-p">TrouveMoi.com a été créé pour offrir une solution simple,<br />moderne et humaine, permettant de trouver rapidement<br />un professionnel, une activité, un événement ou un service<br />près de chez soi.</p>
            </div>
            <div className="ap-mission-vals m-grid2">
              {MISSION.map((m, i) => (
                <div className="ap-mv" key={i}>
                  <span className="icon-circle" style={{ background: m.c }}><FontAwesomeIcon icon={m.icon} /></span>
                  <h3>{m.t}</h3>
                  <p>{m.d.map((l, j) => <span key={j}>{l}<br /></span>)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="ap-histoire m-stack">
            <div className="ap-histoire-txt">
              <p className="eyebrow">Notre histoire</p>
              <h2 className="h2">Un projet né du terrain</h2>
              <p className="ap-p">TrouveMoi.com est né d’une expérience de terrain et d’un<br />constat simple : il est parfois difficile de trouver rapidement<br />un professionnel de confiance ou une activité adaptée à ses<br />besoins.</p>
              <p className="ap-p">Notre ambition est de créer un annuaire intelligent, moderne<br />et accessible à tous, qui valorise les professionnels, les savoir-faire<br />locaux et les opportunités dans tous les secteurs.</p>
              <p className="ap-p">Aujourd’hui, TrouveMoi.com continue d’évoluer grâce à une<br />équipe engagée et à une communauté grandissante de<br />professionnels et de particuliers.</p>
            </div>
            <div className="ap-histoire-img">
              <img src="/img/apropos-histoire.jpg" alt="Un membre de l'équipe TrouveMoi.com face au paysage" />
              <p className="hand ap-hand2" style={{ '--hw': '96px', '--hm': '10px 0 0 60px' }}>Une idée simple :<br />rapprocher les gens<br />et leurs projets !</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ap-chiffres">
        <div className="container">
          <p className="eyebrow center">TrouveMoi.com en quelques chiffres</p>
          <h2 className="h2 center ap-h2s">Une communauté qui grandit chaque jour</h2>
          <div className="ap-ch-grid m-stack">
            {CHIFFRES.map((c, i) => (
              <div className="ap-ch card" key={i}>
                <span className="ap-ch-ico">{c.icon}</span>
                <div><h4>{c.t}</h4><p>{c.d.map((l, j) => <span key={j}>{l}<br /></span>)}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-valeurs">
        <div className="container">
          <p className="eyebrow center">Nos valeurs</p>
          <h2 className="h2 center ap-h2s">Ce qui nous anime au quotidien</h2>
          <div className="ap-val-grid m-grid2">
            {VALEURS.map(v => (
              <div className="ap-val card" key={v.t}>
                <FontAwesomeIcon icon={v.icon} className="ap-val-ico" style={{ color: v.c }} />
                <h4>{v.t}</h4>
                <p>{v.d.map((l, j) => <span key={j}>{l}<br /></span>)}</p>
                <img src={`/img/${v.img}.jpg`} alt="" />
              </div>
            ))}
          </div>

          <div className="ap-cta" style={{ backgroundImage: 'url(/img/apropos-cta.jpg)' }}>
            <h2>Ensemble, construisons<br />un réseau plus fort !</h2>
            <p>Que vous soyez un particulier ou un professionnel,<br />rejoignez l’aventure TrouveMoi.com et participez<br />à une communauté dynamique et bienveillante.</p>
            <Link to="/compte-professionnel" className="btn btn-white ap-cta-btn">Rejoindre TrouveMoi.com <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
