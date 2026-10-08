import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Domaines from './pages/Domaines'
import Comment from './pages/Comment'
import APropos from './pages/APropos'
import Recrutement from './pages/Recrutement'
import Artisan from './pages/Artisan'
import ComptePro from './pages/ComptePro'
import Offres from './pages/Offres'
import Contact from './pages/Contact'
import MentionsLegales from './pages/MentionsLegales'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        {/* Aucune maquette d'accueil n'est fournie : l'accueil mène à « Nos domaines ». */}
        <Route path="/" element={<Navigate to="/domaines" replace />} />
        <Route path="/domaines" element={<Domaines />} />
        <Route path="/comment-ca-fonctionne" element={<Comment />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/recrutement" element={<Recrutement />} />
        <Route path="/artisan" element={<Artisan />} />
        <Route path="/compte-professionnel" element={<ComptePro />} />
        <Route path="/offres" element={<Offres />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<Navigate to="/domaines" replace />} />
      </Routes>
    </>
  )
}
