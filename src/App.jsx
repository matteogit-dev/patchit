import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { games } from './data/games'
import Home from './pages/Home'
import Traduzioni from './pages/Traduzioni'
import ChiSiamo from './pages/ChiSiamo'
import GameDetail from './pages/GameDetail'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [showResults, setShowResults] = useState(false)

  const searchResults = searchQuery.trim()
    ? games.filter(g => g.title.toLowerCase().includes(searchQuery.trim().toLowerCase())).slice(0, 5)
    : []

  function goToGame(id) {
    setSearchQuery('')
    setShowResults(false)
    navigate(`/gioco/${id}`)
  }
  return (
    <>
<header>
  <Link to="/" className="logo"><span className="cursor"></span>PatchIT</Link>

  <div className="header-search">
    <input
      type="text"
      placeholder="Cerca un gioco..."
      value={searchQuery}
      onChange={e => { setSearchQuery(e.target.value); setShowResults(true) }}
      onFocus={() => setShowResults(true)}
      onBlur={() => setTimeout(() => setShowResults(false), 150)}
      className="search-input header-search-input"
    />
    {showResults && searchQuery.trim() && (
      <div className="header-search-dropdown">
        {searchResults.length > 0 ? (
          searchResults.map(g => (
            <div key={g.id} className="header-search-item" onMouseDown={() => goToGame(g.id)}>
              {g.title}
            </div>
          ))
        ) : (
          <div className="header-search-item header-search-empty">Nessun risultato</div>
        )}
      </div>
    )}
  </div>

  <nav>
    <Link to="/traduzioni">Traduzioni</Link>
    <Link to="/chi-siamo">Chi sono</Link>
  </nav>
</header>

      <div key={location.pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/traduzioni" element={<Traduzioni />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/gioco/:id" element={<GameDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="logo"><span className="cursor"></span>PatchIT</div>
            <p>Patch di traduzione amatoriale gratuite per videogiochi PC senza localizzazione ufficiale.</p>
          </div>
        
          <div className="footer-links">
            <span className="footer-heading">Naviga</span>
            <Link to="/traduzioni">Traduzioni</Link>
            <Link to="/chi-siamo">Chi sono</Link>
          </div>
        
          <div className="footer-links">
            <span className="footer-heading">Progetto</span>
            <a href="https://github.com/matteogit-dev/patchit" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span>PatchIT — progetto amatoriale, nessuna affiliazione con gli sviluppatori</span>
          <span>made with LocalizeIT</span>
        </div>
      </footer>
    </>
  )
}

export default App