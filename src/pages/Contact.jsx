import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone, faEnvelope, faCommentDots, faLocationDot, faPaperclip, faPaperPlane, faArrowRight,
  faHeadset, faHandHoldingHeart, faBuilding, faScrewdriverWrench, faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons'
import Page from '../components/Page'
import Faq from '../components/Faq'
import './Contact.css'

const BLOCS = [
  { t: 'Par téléphone', d: ['Notre équipe vous répond', 'du lundi au vendredi', 'de 9h à 18h.'], icon: faPhone, c: '#0a6cf8', btn: '02 44 84 77 10', bIcon: faPhone, href: 'tel:0244847710' },
  { t: 'Par e-mail', d: ['Une réponse sous 24h', 'ouvrées.'], icon: faEnvelope, c: '#fa6a1a', btn: 'contact@trouvemoi.com', bIcon: faEnvelopeOpenText, href: 'mailto:contact@trouvemoi.com' },
  { t: 'Chat en ligne', d: ['Posez vos questions', 'directement sur le site.'], icon: faCommentDots, c: '#43ac2f', btn: 'Démarrer le chat', bIcon: faCommentDots, href: '#' },
  { t: 'Notre adresse', d: ['TrouveMoi.com', 'France', '76440 Forges-les-Eaux'], icon: faLocationDot, c: '#f3265a', btn: 'Voir sur la carte', bIcon: faLocationDot, href: '#carte', light: true },
]
const EQUIPE = [
  { t: 'Réponse rapide', d: 'Sous 24h ouvrées', icon: faHeadset },
  { t: 'Un accompagnement personnalisé', d: 'Pour tous vos projets', icon: faHandHoldingHeart },
  { t: 'Une équipe basée en France', d: 'Proche de vous et à votre écoute', icon: faBuilding },
  { t: 'Un support technique dédié', d: 'Pour vous aider dans l’utilisation de la plateforme', icon: faScrewdriverWrench },
]
const FAQ = [
  { q: 'Comment créer un compte professionnel ?', a: 'Cliquez sur « Mon compte » puis « Créer mon compte professionnel » et laissez-vous guider.' },
  { q: 'Quels sont les avantages de TrouveMoi.com ?', a: 'Une visibilité locale et nationale, des demandes qualifiées et un accompagnement dédié.' },
  { q: 'Combien de temps pour recevoir un devis ?', a: 'Les professionnels répondent généralement sous 24 à 48 heures.' },
  { q: 'Le service est-il gratuit pour les particuliers ?', a: 'Oui, la recherche et la prise de contact sont entièrement gratuites pour les particuliers.' },
  { q: 'Puis-je apparaître dans plusieurs domaines ?', a: 'Oui, selon votre formule, votre activité peut être visible dans plusieurs domaines.' },
  { q: 'Comment contacter un professionnel ?', a: 'Depuis sa fiche, utilisez le bouton de contact ou la demande de devis.' },
]

export default function Contact() {
  const [file, setFile] = useState('')
  return (
    <Page footer="contact" showContact>
      <section className="hero ct-hero" style={{ backgroundImage: 'url(/img/contact-hero.jpg)' }}>
        <div className="container">
          <p className="hero-eyebrow ct-eyebrow">Contact</p>
          <h1 className="hero-title ct-title">Une question ?<br />Nous sommes là <em>pour vous !</em></h1>
          <p className="hero-text ct-text">Notre équipe vous accompagne et répond à toutes<br />vos questions, que vous soyez un particulier, un professionnel<br />ou un futur partenaire.</p>
          <p className="hand ct-hand" style={{ '--hw': '106px', '--hm': '8px 0 0 14px' }}>&nbsp;Une équipe<br />à votre écoute !</p>
        </div>
      </section>

      <section className="ct-blocs-wrap">
        <div className="container ct-blocs m-grid2">
          {BLOCS.map(b => (
            <div className="ct-bloc" key={b.t}>
              <span className="icon-circle" style={{ background: b.c }}><FontAwesomeIcon icon={b.icon} /></span>
              <h3>{b.t}</h3>
              <p>{b.d.map((l, i) => <span key={i}>{l}<br /></span>)}</p>
              <a href={b.href} className={`btn ct-bloc-btn${b.light ? ' light' : ''}`} style={b.light ? undefined : { background: b.c }}>
                <FontAwesomeIcon icon={b.bIcon} /> {b.btn}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="ct-form-sec">
        <div className="container ct-form-inner m-stack">
          <div className="ct-form-col">
            <p className="eyebrow">Formulaire de contact</p>
            <h2 className="h2 ct-h2">Envoyez-nous un message</h2>
            <p className="ct-sub">Remplissez le formulaire ci-dessous, notre équipe vous répondra rapidement.</p>
            <form className="ct-form" onSubmit={e => e.preventDefault()}>
              <div className="field"><label>Votre nom<span className="req">*</span></label><input className="input" placeholder="Votre nom" required /></div>
              <div className="field"><label>Votre prénom<span className="req">*</span></label><input className="input" placeholder="Votre prénom" required /></div>
              <div className="field"><label>Votre e-mail<span className="req">*</span></label><input className="input" type="email" placeholder="votre@email.com" required /></div>
              <div className="field"><label>Votre téléphone</label><input className="input" type="tel" placeholder="Votre téléphone" /></div>
              <div className="field ct-full"><label>Sujet de votre demande<span className="req">*</span></label>
                <select className="input" defaultValue="" required>
                  <option value="" disabled>Sélectionnez un sujet</option>
                  <option>Question générale</option><option>Compte professionnel</option><option>Nos offres</option><option>Problème technique</option><option>Partenariat</option>
                </select></div>
              <div className="field ct-full ct-msg"><label>Votre message<span className="req">*</span></label><textarea className="input" placeholder="Écrivez votre message ici..." required /></div>
              <label className="ct-file">
                <input type="file" hidden onChange={e => setFile(e.target.files[0]?.name || '')} />
                <FontAwesomeIcon icon={faPaperclip} className="ct-file-ico" />
                <span><b>{file || 'Ajouter un fichier (facultatif)'}</b><br />Photos, documents, devis... (PDF, DOC, JPG, PNG – Max 10 Mo)</span>
              </label>
              <button type="submit" className="btn btn-blue ct-send"><FontAwesomeIcon icon={faPaperPlane} /> Envoyer le message</button>
            </form>
          </div>
          <aside className="ct-equipe">
            <div className="ct-equipe-photo">
              <img src="/img/contact-equipe.jpg" alt="L'équipe TrouveMoi.com au téléphone" />
              <p className="hand ct-hand2" style={{ '--hw': '80px', '--hm': '6px 0 0 10px' }}>À votre service<br />&nbsp;au quotidien !</p>
            </div>
            <h3>Une équipe disponible et réactive</h3>
            <p className="ct-equipe-p">Que ce soit pour une question, une demande d’information,<br />un partenariat ou un problème technique, notre équipe<br />s’engage à vous répondre dans les meilleurs délais.</p>
            <ul>
              {EQUIPE.map(e => (
                <li key={e.t}><span className="icon-circle"><FontAwesomeIcon icon={e.icon} /></span><div><b>{e.t}</b><br />{e.d}</div></li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="ct-faqmap">
        <div className="container ct-faqmap-inner m-stack">
          <div className="ct-faq-col">
            <p className="eyebrow">Questions fréquentes</p>
            <h2 className="h2 ct-h2">Vous avez une question ?</h2>
            <p className="ct-sub">Retrouvez ici les réponses aux questions les plus courantes.</p>
            <Faq items={FAQ} className="ct-faq" />
            <a href="#" className="ct-all">Voir toutes les questions fréquentes <FontAwesomeIcon icon={faArrowRight} /></a>
          </div>
          <div className="ct-map-col" id="carte">
            <p className="eyebrow">Notre localisation</p>
            <h2 className="h2 ct-h2">Retrouvez-nous sur la carte</h2>
            <p className="ct-sub">Notre équipe est basée en France. Nous sommes disponibles par téléphone,<br />par e-mail ou via le formulaire de contact.</p>
            <img src="/img/contact-map.jpg" alt="Carte : TrouveMoi.com, 76440 Forges-les-Eaux, France" className="ct-map" />
          </div>
        </div>
      </section>

      <section className="ct-cta-wrap">
        <div className="container">
          <div className="ct-cta" style={{ backgroundImage: 'url(/img/contact-cta.jpg)' }}>
            <h2>Une question aujourd’hui<br /><em>un projet demain !</em></h2>
            <p>Contactez-nous et avançons ensemble<br />vers de nouvelles opportunités.</p>
            <a href="#" className="btn btn-orange ct-cta-btn"><FontAwesomeIcon icon={faPaperPlane} /> Nous contacter maintenant <FontAwesomeIcon icon={faArrowRight} /></a>
          </div>
        </div>
      </section>
    </Page>
  )
}
