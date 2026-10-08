import {
  faScrewdriverWrench, faHandshake, faSpa, faHouse, faCartShopping, faLeaf, faHeartPulse,
  faScaleBalanced, faBriefcase, faCar, faGem, faSeedling, faMusic, faUserGroup, faCalendarDays,
} from '@fortawesome/free-solid-svg-icons'

/** Les univers TrouveMoi.com — couleurs échantillonnées sur les maquettes */
export const DOMAINES = [
  { id: 'artisan', title: 'Artisan', color: '#f7652b', icon: faScrewdriverWrench, dx: -5, to: '/artisan', text: ['Trouvez des artisans qualifiés', 'près de chez vous pour tous', 'vos travaux et projets.'] },
  { id: 'prestataire', title: 'Prestataire', color: '#0a74f5', icon: faHandshake, dx: 19, text: ['Des services et missions', 'pour répondre à tous', 'vos besoins.'] },
  { id: 'plaisirs', title: 'Plaisirs & Loisirs', color: '#f5157e', icon: faSpa, dx: -6, text: ['Activités, sorties, événements', 'et expériences uniques', 'près de chez vous.'] },
  { id: 'immobilier', title: 'Immobilier', color: '#43a92e', icon: faHouse, dx: 19, text: ['Hébergement, location', 'et projets immobiliers', 'en toute confiance.'] },
  { id: 'commercants', title: 'Commerçants', color: '#7320f3', icon: faCartShopping, dx: 22, text: ['Découvrez les commerces', 'locaux et leurs produits', 'près de chez vous.'] },
  { id: 'produits-locaux', title: 'Produits Locaux', color: '#3a9a47', icon: faLeaf, dx: 31, text: ['Producteurs, circuits courts', 'et savoir-faire de nos régions.'] },
  { id: 'medical', title: 'Médical', color: '#f7254f', icon: faHeartPulse, dx: 7, text: ['Professionnels de santé,', 'bien-être et laboratoires', 'près de chez vous.'] },
  { id: 'justice', title: 'Justice', color: '#0660c2', icon: faScaleBalanced, dx: 4, text: ['Avocats, conseils et services', 'juridiques pour vous', 'accompagner.'] },
  { id: 'b2b', title: 'B2B', color: '#fbb304', icon: faBriefcase, dx: -1, text: ['Entreprises, partenaires', 'et opportunités professionnelles.'] },
  { id: 'automobile', title: 'Automobile', color: '#7620f5', icon: faCar, dx: 20, text: ['Achat, vente et location', 'de véhicules entre particuliers', 'et professionnels.'] },
  { id: 'collectionneurs', title: 'Collectionneurs', color: '#86482a', icon: faGem, dx: 18, text: ['Objets rares, passion', 'et bonnes affaires.'] },
  { id: 'agriculture', title: 'Agriculture', color: '#45b00a', icon: faSeedling, dx: 14, text: ['Exploitation, matériel', 'et services pour le monde agricole.'] },
  { id: 'artistique', title: 'Artistique & Culturel', color: '#6d1ff0', icon: faMusic, dx: 26, small: true, text: ['Musique, danse, sport et arts', 'pour partager votre passion.'] },
  { id: 'rencontres', title: 'Rencontres', color: '#f42084', icon: faUserGroup, dx: 12, text: ['Faites de nouvelles rencontres', 'et partagez vos centres d’intérêt.'] },
  { id: 'marches', title: 'Marchés & Festivals', color: '#07b3c2', icon: faCalendarDays, dx: 31, small: true, text: ['Retrouvez les marchés, foires', 'et festivals près de chez vous.'] },
]
