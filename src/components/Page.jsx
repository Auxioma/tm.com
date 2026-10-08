import Header from './Header'
import Footer from './Footer'

/** Gabarit commun : header + contenu + footer (variante de colonnes selon la page) */
export default function Page({ children, footer = 'default', showContact = false, shortLabels = false, homeActive = false, className = '' }) {
  return (
    <>
      <Header showContact={showContact} shortLabels={shortLabels} homeActive={homeActive} />
      <main className={className}>{children}</main>
      <Footer variant={footer} />
    </>
  )
}
