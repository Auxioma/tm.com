/** Bouton lecture rond (vidéos des cartes) */
export default function PlayButton({ size = 34, className = '', style }) {
  return (
    <span className={`play-btn ${className}`} style={{ width: size, height: size, ...style }} aria-label="Lire la vidéo" role="button">
      <svg viewBox="0 0 24 24" width={size * 0.42} height={size * 0.42}><path d="M7 4.5v15l12.5-7.5z" fill="#fff" /></svg>
    </span>
  )
}
