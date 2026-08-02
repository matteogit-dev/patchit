import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Traduzioni from './pages/Traduzioni'
import ChiSiamo from './pages/ChiSiamo'
import GameDetail from './pages/GameDetail'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const location = useLocation()
  return (
    <>
      <header>
        <Link to="/" className="logo"><span className="cursor"></span>PatchIT</Link>
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