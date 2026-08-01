import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

function NotFound() {
  usePageMeta('Pagina non trovata', 'La pagina che cerchi non esiste.')

  return (
    <section className="section" style={{ paddingTop: '80px', textAlign: 'center' }}>
      <div className="stats-card" style={{ maxWidth: '440px', margin: '0 auto' }}>
        <div className="stats-titlebar">
          <div className="dot"></div><div className="dot"></div><div className="dot"></div>
          <span className="stats-filename">error --404</span>
        </div>
        <div className="about-body" style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 700, color: 'var(--text)' }}>
            Pagina non trovata
          </p>
          <p>Il file che cerchi non esiste, o è stato spostato.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '12px', display: 'inline-block' }}>
            ← Torna alla home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound