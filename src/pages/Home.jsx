import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { games } from '../data/games'
import { GameCard } from '../components/GameCard'
import { fetchGameDownloadsByTags } from '../utils/github'
import { formatRelativeDate } from '../utils/date'
import { usePageMeta } from '../hooks/usePageMeta'

function Home() {
  
  const [downloadsStatus, setDownloadsStatus] = useState('loading') // loading | success | error
  const [totalDownloads, setTotalDownloads] = useState(null)

  usePageMeta(null, 'Patch di traduzione amatoriale gratuite per videogiochi PC senza localizzazione ufficiale in italiano.')


  useEffect(() => {
    const allTags = games.flatMap(g => g.releaseTags || [])
    fetchGameDownloadsByTags(allTags).then(result => {
      if (result === null) {
        setDownloadsStatus('error')
      } else {
        setTotalDownloads(result)
        setDownloadsStatus('success')
      }
    })
  }, [])

  const completedCount = games.filter(g => g.progress === 100).length
  const totalStrings = games.reduce((sum, g) => sum + g.stringsTranslated, 0)
  const activeCount = games.filter(g => g.status === 'complete' || g.status === 'progress').length
  const gamesWithDate = games.filter(g => g.updatedDate)
  const mostRecentDate = gamesWithDate.length > 0
    ? gamesWithDate.reduce((latest, g) =>
        new Date(g.updatedDate) > new Date(latest) ? g.updatedDate : latest, gamesWithDate[0].updatedDate)
    : null

  const recentGames = [...games]
    .sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate))
    .slice(0, 3)

  const upcomingGames = games.filter(g => g.status === 'planned' || g.status === 'paused')
  return (
    <>
      <section className="hero">
        <div>
          <div className="eyebrow">{activeCount} TRADUZIONI ATTIVE</div>
          <h1>Videogiochi PC,<br />ora anche in <span className="accent">italiano</span>.</h1>
          <p>Patch di traduzione amatoriale per titoli PC senza localizzazione ufficiale. Guide passo passo e changelog per ogni progetto — gratuite, sempre.</p>
          <div className="cta-row">
            <Link to="/traduzioni" className="btn btn-primary">Sfoglia le traduzioni →</Link>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-titlebar">
            <div className="dot"></div><div className="dot"></div><div className="dot"></div>
            <span className="stats-filename"><span className="live-dot"></span>status --live</span>
          </div>
          <div className="stats-body">
            <div className="stat-row">
              <div className="stat-label"><span className="idx">01</span>traduzioni completate</div>
              <div className="stat-value">{completedCount}<span className="unit">/ {games.length}</span></div>
            </div>
            <div className="stat-row hl">
              <div className="stat-label"><span className="idx">02</span>download totali</div>
              <div className="stat-value">
              {downloadsStatus === 'loading' && '…'}
              {downloadsStatus === 'success' && totalDownloads}
              {downloadsStatus === 'error' && <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>n/d</span>}
            </div>
            </div>
            <div className="stat-row">
              <div className="stat-label"><span className="idx">03</span>stringhe tradotte</div>
              <div className="stat-value">{totalStrings.toLocaleString('it-IT')}</div>
            </div>
            <div className="stat-row">
              <div className="stat-label"><span className="idx">04</span>ultimo aggiornamento</div>
              <div className="stat-value stat-value-sub">{formatRelativeDate(mostRecentDate)}</div>
            </div>
          </div>
        </div>
      </section>

    <section className="section">
      <div className="section-head">
        <h2>Aggiornate di recente</h2>
        <Link to="/traduzioni" className="count" style={{ cursor: 'pointer' }}>vedi tutte →</Link>
      </div>
      <div className="grid">
        {recentGames.map((game, i) => (
          <GameCard key={game.id} game={game} isNew={i === 0} />
        ))}
      </div>
    </section>
      
    {upcomingGames.length > 0 && (
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>In arrivo</h2>
          <div className="count">{upcomingGames.length} in programma</div>
        </div>
        <div className="grid">
          {upcomingGames.map(game => <GameCard key={game.id} game={game} />)}
        </div>
      </section>
    )}
      
    </>
  )
}

export default Home