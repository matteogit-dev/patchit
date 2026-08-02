import { Link } from 'react-router-dom'
import { formatRelativeDate } from '../utils/date'

const STATUS_LABELS = {
  complete: 'COMPLETA',
  progress: 'IN CORSO',
  paused: 'IN PAUSA',
  planned: 'PIANIFICATA',
}

export function StatusTag({ status }) {
  return <div className={`status-tag ${status}`}>{STATUS_LABELS[status] || status}</div>
}

export function GameCard({ game }) {
  const progressClass = game.progress === 100 ? 'complete' : game.progress > 30 ? 'progress' : 'early'
  const showProgressBar = game.status !== 'planned'

  return (
    <Link to={`/gioco/${game.id}`} className="card">
      <div className="card-cover">
        {game.coverImage ? (
          <img src={`${import.meta.env.BASE_URL}${game.coverImage}`} alt={game.title} className="cover-img" />
        ) : (
          <span className="glyph">{game.code}</span>
        )}
        <StatusTag status={game.status} />
      </div>
      <div className="card-body">
        <h3>{game.title}</h3>
      <div className="card-meta">
        {game.status === 'planned' && 'In lista, non ancora iniziata'}
        {game.status === 'paused' && 'Lavori sospesi temporaneamente'}
        {(game.status === 'complete' || game.status === 'progress') && (
          <>{game.version} {game.updatedDate ? `— aggiornata ${formatRelativeDate(game.updatedDate)}` : '— in lavorazione'}</>
        )}
      </div>
        {showProgressBar && (
          <>
            <div className="progress-track">
              <div className={`progress-fill ${progressClass}`} style={{ width: `${game.progress}%` }} />
            </div>
            <div className="progress-label">
              <span>{game.progress}%</span>
              <span>{game.stringsTranslated} stringhe</span>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}