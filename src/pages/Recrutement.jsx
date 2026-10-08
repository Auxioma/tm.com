import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay, faUsers, faUserGroup, faRocket, faSignal, faGem, faSeedling, faBullseye, faFileLines,
  faMagnifyingGlass, faCircleCheck, faPaperPlane, faCloudArrowUp, faFileSignature, faBolt, faEye,
  faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons'
import Page from '../components/Page'
import PlayButton from '../components/PlayButton'
import { DOMAINES } from '../data/domaines'
import './Recrutement.css'

const AVANTAGES = [
  { t: 'Un projet d’envergure', d: ['Rejoignez une plateforme nationale', 'en pleine croissance.'], icon: faUserGroup, c: '#1a6cf0' },
  { t: 'Des opportunités variées', d: ['De nombreux postes dans', 'différents domaines.'], icon: faRocket, c: '#f3186f' },
  { t: 'Une évolution possible', d: ['Des perspectives d’évolution', 'au sein de l’équipe.'], icon: faSignal, c: '#3fae2a' },
  { t: 'Une équipe engagée', d: ['Travaillez dans une ambiance', 'dynamique et bienveillante.'], icon: faUsers, c: '#fa6a1a' },
]
const POURQUOI = [
  { t: 'Un projet unique', d: ['Contribuez à une plateforme', 'utile et innovante.'], icon: faGem, c: '#1a6cf0' },
  { t: 'Une équipe passionnée', d: ['Travaillez avec des personnes', 'motivées et bienveillantes.'], icon: faUsers, c: '#1a6cf0' },
  { t: 'De réelles perspectives', d: ['Évoluez et développez', 'vos compétences.'], icon: faSeedling, c: '#3fae2a' },
  { t: 'Un impact local et national', d: ['Valorisez les professionnels', 'et les savoir-faire de nos régions.'], icon: faBullseye, c: '#1a6cf0' },
]
const PROCESS = [
  { t: 'Postulez en ligne', d: ['Remplissez le formulaire', 'en quelques minutes.'], icon: faFileLines },
  { t: 'Étude de votre profil', d: ['Notre équipe analyse', 'votre candidature.'], icon: faMagnifyingGlass },
  { t: 'Entretien', d: ['Un échange pour mieux', 'vous connaître.'], icon: faUsers },
  { t: 'Bienvenue !', d: ['Rejoignez l’aventure', 'TrouveMoi.com !'], icon: faCircleCheck },
]
const METIER_DX = [2, 5, 6, 0, 16, 7, 8, 9, 16, 16]

export default function Recrutement() {
  const [cv, setCv] = useState('')
  return (
    <Page>
      <section className="hero rc-hero" style={{ backgroundImage: 'url(/img/recrutement-hero.jpg)' }}>
        <div className="container">
          <p className="hero-eyebrow rc-eyebrow">Recrutement</p>
          <h1 className="hero-title rc-title">Rejoignez l’aventure<br /><em>TrouveMoi.com</em></h1>
          <p className="hero-text rc-text">Participez à un projet innovant et dynamique,<br />et contribuez au développement d’une plateforme<br />utile pour les professionnels et les particuliers,<br />partout en France.</p>
          <button className="btn btn-white rc-b1"><FontAwesomeIcon icon={faPlay} /> Découvrez notre équipe en vidéo</button>
          <a href="#candidature" className="btn btn-blue rc-b2"><FontAwesomeIcon icon={faUsers} /> Je postule maintenant</a>
          <p className="hand rc-hand" style={{ '--hw': '74px', '--hm': '8px 0 0 30px' }}>Des talents<br />&nbsp;dans toute<br />&nbsp;&nbsp;&nbsp;la France !</p>
        </div>
      </section>

      <section className="rc-adv-wrap">
        <div className="container rc-adv m-grid2">
          {AVANTAGES.map(a => (
            <div className="rc-adv-card card" key={a.t}>
              <FontAwesomeIcon icon={a.icon} style={{ color: a.c }} className="rc-adv-ico" />
              <h3>{a.t}</h3>
              <p>{a.d[0]}<br />{a.d[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rc-metiers">
        <div className="container">
          <p className="eyebrow center">Découvrez nos métiers</p>
          <h2 className="h2 center rc-h2">Des opportunités dans tous nos domaines</h2>
          <p className="lead center rc-lead">Cliquez sur les vidéos pour découvrir les métiers et les équipes.</p>
          <div className="rc-grid m-grid2">
            {DOMAINES.slice(0, 10).map((d, i) => (
              <article className="rc-mcard card" key={d.id}>
                <div className="rc-mimg"><img src={`/img/rec-${d.id}.jpg`} alt={d.title} /><PlayButton size={34} className="rc-play" /></div>
                <span className="icon-circle rc-micon" style={{ background: d.color }}><FontAwesomeIcon icon={d.icon} /></span>
                <h3 style={{ transform: `translateX(${METIER_DX[i]}px)` }}>{d.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rc-pourquoi">
        <div className="container">
          <p className="eyebrow center">Pourquoi nous rejoindre ?</p>
          <h2 className="h2 center rc-h2b">Bien plus qu’un travail, une aventure humaine</h2>
          <div className="rc-pq m-stack">
            {POURQUOI.map(p => (
              <div className="rc-pq-card card" key={p.t}>
                <FontAwesomeIcon icon={p.icon} style={{ color: p.c }} className="rc-pq-ico" />
                <div><h4>{p.t}</h4><p>{p.d[0]}<br />{p.d[1]}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rc-process">
        <div className="container">
          <p className="eyebrow center">Notre processus de recrutement</p>
          <h2 className="h2 center rc-h2b">Simple et rapide</h2>
          <div className="rc-steps m-stack">
            <div className="rc-line m-hide" />
            {[263, 513, 776].map(x => <FontAwesomeIcon key={x} icon={faArrowRightLong} className="rc-line-arrow m-hide" style={{ left: x - 12 }} />)}
            {PROCESS.map((s, i) => (
              <div className={`rc-step rc-step-${i + 1}`} key={s.t}>
                <span className="rc-num">{i + 1}</span>
                <FontAwesomeIcon icon={s.icon} className="rc-step-ico" />
                <h4>{s.t}</h4>
                <p>{s.d[0]}<br />{s.d[1]}</p>
              </div>
            ))}
          </div>

          <div className="rc-form-block card m-stack" id="candidature">
            <div className="rc-form-photo">
              <img src="/img/recrutement-form.jpg" alt="Membre de l'équipe TrouveMoi.com" />
              <p className="hand rc-hand2" style={{ '--hw': '70px', '--hm': '6px 0 0 24px' }}>&nbsp;&nbsp;On a hâte<br />de vous rencontrer !</p>
            </div>
            <div className="rc-form-intro">
              <h2>Envoyez<br />votre candidature</h2>
              <p>Rejoignez notre équipe et participez<br />au développement de TrouveMoi.com.</p>
              <ul>
                <li><span><FontAwesomeIcon icon={faFileSignature} /></span>Postulez facilement</li>
                <li><span><FontAwesomeIcon icon={faBolt} /></span>Réponse rapide</li>
                <li><span><FontAwesomeIcon icon={faEye} /></span>Processus transparent</li>
              </ul>
            </div>
            <form className="rc-form" onSubmit={e => e.preventDefault()}>
              <div className="field rc-f1"><label>Prénom<span className="req">*</span></label><input className="input" placeholder="Votre prénom" required /></div>
              <div className="field rc-f2"><label>Nom<span className="req">*</span></label><input className="input" placeholder="Votre nom" required /></div>
              <div className="field rc-f3"><label>E-mail<span className="req">*</span></label><input className="input" type="email" placeholder="votre@email.com" required /></div>
              <div className="field rc-f1"><label>Téléphone<span className="req">*</span></label><input className="input" type="tel" placeholder="Votre téléphone" required /></div>
              <div className="field rc-f2"><label>Poste souhaité<span className="req">*</span></label>
                <select className="input" defaultValue="" required><option value="" disabled>Sélectionnez un poste</option>{DOMAINES.slice(0, 10).map(d => <option key={d.id}>{d.title}</option>)}</select></div>
              <div className="field rc-f3"><label>Département</label>
                <select className="input" defaultValue=""><option value="" disabled>Votre département</option><option>76 – Seine-Maritime</option><option>27 – Eure</option><option>14 – Calvados</option><option>75 – Paris</option></select></div>
              <div className="field rc-fmsg"><label>Votre message (facultatif)</label><textarea className="input" placeholder="Parlez-nous de vous, de votre parcours et de vos motivations..." /></div>
              <label className="rc-upload">
                <input type="file" accept=".pdf,.doc,.docx" hidden onChange={e => setCv(e.target.files[0]?.name || '')} />
                <FontAwesomeIcon icon={faCloudArrowUp} className="rc-upload-ico" />
                <span><b>{cv || 'Ajoutez votre CV'}</b><br />(PDF, DOC, DOCX – Max 5 Mo)</span>
              </label>
              <button className="btn rc-submit" type="submit"><FontAwesomeIcon icon={faPaperPlane} /> Envoyer ma candidature</button>
            </form>
          </div>
        </div>
      </section>
    </Page>
  )
}
