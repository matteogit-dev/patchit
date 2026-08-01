import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { games } from '../data/games'
import { fetchReleaseDownloads } from '../utils/github'
import { formatRelativeDate } from '../utils/date'
import { compareVersions } from '../utils/version'

function GameDetail() {
  const { id } = useParams()
  const game = games.find(g => g.id === id)
  const [downloadCount, setDownloadCount] = useState(null)

  useEffect(() => {
    if (game?.releaseTag) {
      fetchReleaseDownloads(game.releaseTag).then(setDownloadCount)
    }
  }, [game])

  if (!game) {
    return (
      <section className="section">
        <p>Traduzione non trovata.</p>
        <Link to="/" className="btn btn-ghost">← Torna alla home</Link>
      </section>
    )
  }

  const progressClass = game.progress === 100 ? 'complete' : game.progress > 30 ? 'progress' : 'early'

  return (
    <section className="section">
      <Link to="/" className="btn btn-ghost" style={{ marginBottom: '32px', display: 'inline-block' }}>
        ← Tutte le traduzioni
      </Link>

      <div className="detail-header">
        <div className="card-cover detail-cover">
          {game.coverImage ? (
            <img src={`${import.meta.env.BASE_URL}${game.coverImage}`} alt={game.title} className="cover-img" />
          ) : (
            <span className="glyph">{game.code}</span>
          )}
        </div>
        <div>
          <h1 className="detail-title">{game.title}</h1>
          <div className="card-meta">{game.version} — aggiornata {formatRelativeDate(game.updatedDate)}</div>
          <div className="progress-track" style={{ marginTop: '16px', width: '280px' }}>
            <div className={`progress-fill ${progressClass}`} style={{ width: `${game.progress}%` }} />
          </div>
          <div className="progress-label" style={{ width: '280px' }}>
            <span>{game.progress}% completato</span>
            <span>{downloadCount !== null ? `${downloadCount} download` : (game.releaseTag ? '… download' : '')}</span>
          </div>

          <div className="cta-row" style={{ marginTop: '20px' }}>
            {game.downloadUrl ? (
              <a href={game.downloadUrl} className="btn btn-primary">⬇ Scarica patch (.zip)</a>
            ) : (
              <div className="btn btn-ghost" style={{ cursor: 'not-allowed', opacity: 0.6 }}>Download non ancora disponibile</div>
            )}

            {game.steamUrl && (
              <a href={game.steamUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                🎮 Vedi su Steam
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="detail-body">
        <h2>Descrizione</h2>
        <p className="detail-text">{game.description}</p>

{game.instructions.length > 0 && (
          <>
            <h2>Come installare</h2>
            <ol className="instructions">
              {game.instructions.map((step, i) => <li key={i}>{step}</li>)}
            </ol>
          </>
        )}

        {game.changelog.length > 0 && (
          <>
            <hr className="section-divider" />
            <h2>Changelog</h2>
            <ul className="changelog">
              {[...game.changelog]
                .sort((a, b) => compareVersions(b.version, a.version))
                .map((entry, i) => (
                  <li key={i}>
                    <span className="changelog-version">{entry.version}</span>
                    {entry.note} <span style={{ opacity: 0.6 }}>— {formatRelativeDate(entry.date)}</span>
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}

export default GameDetail