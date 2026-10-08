import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faArrowRight, faCheck, faUsers } from '@fortawesome/free-solid-svg-icons'
import Page from '../components/Page'
import PlayButton from '../components/PlayButton'
import { Pin } from '../components/Logo'
import { DOMAINES } from '../data/domaines'
import './Domaines.css'

function DomainCard({ d, row }) {
  return (
    <article className={`dom-card card dom-row${row}`}>
      <div className="dom-img">
        <img src={`/img/dom-${d.id}.jpg`} alt={d.title} />
        <PlayButton size={35} className="dom-play" />
      </div>
      <span className="icon-circle dom-icon" style={{ background: d.color }}>
        <FontAwesomeIcon icon={d.icon} />
      </span>
      <h3 className={d.small ? 'small' : ''} style={{ transform: `translateX(${d.dx}px)` }}>{d.title}</h3>
      <p>{d.text.map((t, i) => <span key={i}>{t}<br /></span>)}</p>
      <Link to={d.to || '#'} className="btn dom-btn" style={{ background: d.color }}>
        Découvrir <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </article>
  )
}

export default function Domaines() {
  return (
    <Page footer="domaines" shortLabels>
      <section className="hero dom-hero" style={{ backgroundImage: 'url(/img/domaines-hero.jpg)' }}>
        <div className="container">
          <p className="hero-eyebrow dom-eyebrow">Nos domaines</p>
          <h1 className="hero-title dom-title">Découvrez tous les univers<br />de <em>TrouveMoi.com</em></h1>
          <p className="hero-text dom-text">Une plateforme complète pour connecter les professionnels<br />et les particuliers dans tous les secteurs, partout en France.</p>
          <form className="dom-search" onSubmit={e => e.preventDefault()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="dom-search-ico" />
            <input type="search" placeholder="Rechercher un domaine, une activité..." aria-label="Rechercher un domaine" />
            <button className="btn btn-blue" type="submit">Rechercher</button>
          </form>
          <p className="hand dom-hand" style={{ '--hw': '82px', '--hm': '6px 0 0 36px' }}>Des opportunités<br />&nbsp;&nbsp;dans tous les<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;secteurs !</p>
        </div>
      </section>

      <section className="dom-univers">
        <div className="container">
          <p className="eyebrow center dom-eb">Nos 10 univers</p>
          <h2 className="h2 center dom-h2">Des solutions pour <em>tous vos projets</em></h2>
          <p className="lead center dom-lead">Explorez nos différents domaines et trouvez facilement les professionnels<br />ou les opportunités qui correspondent à vos besoins.</p>
          <div className="dom-grid m-grid2">
            {DOMAINES.map((d, i) => <DomainCard key={d.id} d={d} row={Math.floor(i / 5) + 1} />)}
          </div>

          <div className="dom-adv m-stack">
            <div className="dom-adv-item">
              <span className="dom-adv-ico halo"><Pin size={50} dark="#0a62e8" light="#1a7cf7" hole="#fff" /></span>
              <div><h4>Une recherche simple<br />et rapide</h4><p>Trouvez ce dont vous avez<br />besoin en quelques clics.</p></div>
            </div>
            <div className="dom-adv-item">
              <span className="dom-adv-ico halo"><span className="icon-circle" style={{ background: '#3fae2a', width: 52, height: 52, fontSize: 26 }}><FontAwesomeIcon icon={faCheck} /></span></span>
              <div><h4>Des professionnels<br />vérifiés</h4><p>Profils fiables et informations<br />transparentes.</p></div>
            </div>
            <div className="dom-adv-item">
              <span className="dom-adv-ico halo"><span className="icon-circle" style={{ background: '#fa6a1a', width: 56, height: 56, fontSize: 24 }}><FontAwesomeIcon icon={faUsers} /></span></span>
              <div><h4>Pour les particuliers<br />et les professionnels</h4><p>Une plateforme ouverte<br />à tous.</p></div>
            </div>
            <div className="dom-adv-item">
              <span className="dom-adv-ico halo"><img src="/img/icon-france-purple.png" alt="" width="64" height="67" /></span>
              <div><h4>Partout en France</h4><p>Un réseau national<br />de professionnels<br />et d’opportunités.</p></div>
            </div>
          </div>

          <div className="dom-cta" style={{ backgroundImage: 'url(/img/domaines-cta.jpg)' }}>
            <h2>Vous êtes un professionnel ?</h2>
            <p>Rejoignez TrouveMoi.com et développez votre activité<br />dans le domaine qui vous correspond.</p>
            <Link to="/compte-professionnel" className="btn btn-white dom-cta-btn">Créer mon compte professionnel <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
