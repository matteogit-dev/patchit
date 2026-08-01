import './App.css'

const games = [
  { id: 'radio-commander', title: 'Radio Commander', code: 'RC', status: 'complete', version: 'v1.2', updated: '3 giorni fa', progress: 100, downloads: '1.240' },
  { id: 'frostrunner', title: 'Frostrunner', code: 'FR', status: 'progress', version: 'v0.6', updated: '1 settimana fa', progress: 62, downloads: '340' },
  { id: 'silent-vale', title: 'Silent Vale', code: 'SV', status: 'progress', version: 'v0.1', updated: 'oggi', progress: 18, downloads: '52' },
]

function StatusTag({ status }) {
  const label = status === 'complete' ? 'COMPLETA' : 'IN CORSO'
  return <div className={`status-tag ${status}`}>{label}</div>
}

function GameCard({ game }) {
  const progressClass = game.progress === 100 ? 'complete' : game.progress > 30 ? 'progress' : 'early'
  return (
    <div className="card">
      <div className="card-cover">
        <span className="glyph">{game.code}</span>
        <StatusTag status={game.status} />
      </div>
      <div className="card-body">
        <h3>{game.title}</h3>
        <div className="card-meta">{game.version} — aggiornata {game.updated}</div>
        <div className="progress-track">
          <div className={`progress-fill ${progressClass}`} style={{ width: `${game.progress}%` }} />
        </div>
        <div className="progress-label">
          <span>{game.progress}%</span>
          <span>{game.downloads} download</span>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <header>
        <div className="logo"><span className="cursor"></span>PatchIT</div>
        <nav>
          <a href="#">Traduzioni</a>
          <a href="#">Chi sono</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <div className="eyebrow">{games.length} TRADUZIONI ATTIVE</div>
          <h1>Videogiochi PC,<br />ora anche in <span className="accent">italiano</span>.</h1>
          <p>Patch di traduzione amatoriale per titoli PC senza localizzazione ufficiale. Testi e changelog per ogni progetto — gratuite, sempre.</p>
          <div className="cta-row">
            <div className="btn btn-primary">Sfoglia le traduzioni →</div>
            <div className="btn btn-ghost">Come funziona</div>
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
              <div className="stat-value">6<span className="unit">/ 14</span></div>
            </div>
            <div className="stat-row hl">
              <div className="stat-label"><span className="idx">02</span>download totali</div>
              <div className="stat-value">18.4<span className="unit">k</span></div>
            </div>
            <div className="stat-row">
              <div className="stat-label"><span className="idx">03</span>stringhe tradotte</div>
              <div className="stat-value">52.910</div>
            </div>
            <div className="stat-row">
              <div className="stat-label"><span className="idx">04</span>ultimo aggiornamento</div>
              <div className="stat-value stat-value-sub">oggi, 14:32</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Traduzioni disponibili</h2>
          <div className="count">{games.length} progetti</div>
        </div>
        <div className="grid">
          {games.map(game => <GameCard key={game.id} game={game} />)}
        </div>
      </section>

      <footer>
        <span>PatchIT — progetto amatoriale, nessuna affiliazione con gli sviluppatori</span>
      </footer>
    </>
  )
}

export default App