import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Logo from './Logo'
import './Footer.css'

const L = (label, to = '#') => ({ label, to })
const DECOUVRIR = [L('Accueil', '/'), L('Nos domaines', '/domaines'), L('Comment ça fonctionne ?', '/comment-ca-fonctionne'), L('À propos', '/a-propos'), L('Recrutement', '/recrutement')]
const DECOUVRIR_CONTACT = [...DECOUVRIR, L('Contact', '/contact')]
const PROS = { title: 'Professionnels', links: [L('Créer mon compte', '/compte-professionnel'), L('Nos offres', '/offres'), L('Devenir partenaire'), L('Espace professionnel')] }
const INFOS = { title: 'Informations', links: [L('Contact', '/contact'), L('FAQ', '/contact'), L('Mentions légales', '/mentions-legales'), L('CGU / CGV', '/mentions-legales'), L('Politique de confidentialité', '/mentions-legales'), L('Cookies', '/mentions-legales')] }

/** Colonnes du footer : elles varient légèrement selon le contexte de la page (cf. maquettes). */
export const FOOTER_VARIANTS = {
  default: [{ title: 'Découvrir', links: DECOUVRIR }, PROS, INFOS],
  domaines: [{ title: 'Découvrir', links: DECOUVRIR.map(l => l.label === 'Comment ça fonctionne ?' ? L('Comment ça fonctionne', l.to) : l) }, PROS, INFOS],
  artisan: [
    { title: 'Découvrir', links: DECOUVRIR },
    { title: 'Artisan', links: [L('Rechercher un artisan', '/artisan'), L('Déposer une demande de devis', '/artisan'), L('Création de compte', '/compte-professionnel'), L('Nos conseils')] },
    INFOS,
  ],
  compte: [
    { title: 'Découvrir', links: DECOUVRIR },
    { title: 'Compte pro', links: [L('Créer mon compte', '/compte-professionnel'), L('Gérer mon profil'), L('Nos conseils'), L('Devenir partenaire')] },
    INFOS,
  ],
  contact: [
    { title: 'Découvrir', links: DECOUVRIR_CONTACT },
    PROS,
    { title: 'Informations', links: INFOS.links.slice(1) },
  ],
  legal: [
    { title: 'Découvrir', links: DECOUVRIR_CONTACT },
    { title: 'Informations légales', links: [L('Mentions légales', '/mentions-legales'), L('CGU', '/mentions-legales'), L('Politique de confidentialité', '/mentions-legales'), L('Politique cookies', '/mentions-legales'), L('Conditions de vente', '/mentions-legales'), L('Mentions RGPD', '/mentions-legales')] },
    { title: 'Aide', links: [L('FAQ', '/contact'), L('Nos conseils'), L('Espace professionnel'), L('Devenir partenaire')] },
  ],
}

const SOCIALS = [
  { icon: faInstagram, label: 'Instagram' },
  { icon: faFacebook, label: 'Facebook' },
  { icon: faLinkedin, label: 'LinkedIn' },
  { icon: faTiktok, label: 'TikTok' },
  { icon: faYoutube, label: 'YouTube' },
]

export default function Footer({ variant = 'default' }) {
  const cols = FOOTER_VARIANTS[variant] || FOOTER_VARIANTS.default
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo variant="footer" />
          <p className="footer-desc">Une plateforme qui connecte les professionnels<br />et les particuliers, partout en France.</p>
          <div className="footer-socials">
            {SOCIALS.map(s => (
              <a key={s.label} href="#" aria-label={s.label}><FontAwesomeIcon icon={s.icon} /></a>
            ))}
          </div>
        </div>
        {cols.map((c, i) => (
          <div key={c.title} className={`footer-col footer-col-${i + 1}`}>
            <h4>{c.title}</h4>
            <ul>{c.links.map(l => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}</ul>
          </div>
        ))}
        <div className="footer-france">
          <img src="/img/footer-france.png" alt="Carte de France" width="94" height="100" />
          <p>Une plateforme<br />au service de tous,<br />partout en France.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>© 2026 TrouveMoi.com – Tous droits réservés.</span>
          <span>La solution à chaque projet ou recherche.</span>
        </div>
      </div>
    </footer>
  )
}
