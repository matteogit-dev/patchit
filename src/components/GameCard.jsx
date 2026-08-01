import { Link } from 'react-router-dom'
import { formatRelativeDate } from '../utils/date'

export function StatusTag({ status }) {
  const label = status === 'complete' ? 'COMPLETA' : 'IN CORSO'
  return <div className={`status-tag ${status}`}>{label}</div>
}

export function GameCard({ game, isNew = false }) {
  const progressClass = game.progress === 100 ? 'complete' : game.progress > 30 ? 'progress' : 'early'
  return (
    <Link to={`/gioco/${game.id}`} className="card">
      <div className="card-cover">
        {game.coverImage ? (
          <img src={`${import.meta.env.BASE_URL}${game.coverImage}`} alt={game.title} className="cover-img" />
        ) : (
          <span className="glyph">{game.code}</span>
        )}
        <StatusTag status={game.status} />
        {isNew && <div className="new-badge">NUOVA</div>}
      </div>
      <div className="card-body">
        <h3>{game.title}</h3>
        <div className="card-meta">{game.version} — aggiornata {formatRelativeDate(game.updatedDate)}</div>
        <div className="progress-track">
          <div className={`progress-fill ${progressClass}`} style={{ width: `${game.progress}%` }} />
        </div>
        <div className="progress-label">
          <span>{game.progress}%</span>
          <span>{game.stringsTranslated} stringhe</span>
        </div>
      </div>
    </Link>
  )
}