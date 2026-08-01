import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Traduzioni from './pages/Traduzioni'
import ChiSiamo from './pages/ChiSiamo'
import GameDetail from './pages/GameDetail'
import './App.css'

function App() {
  return (
    <>
      <header>
        <Link to="/" className="logo"><span className="cursor"></span>PatchIT</Link>
        <nav>
          <Link to="/traduzioni">Traduzioni</Link>
          <Link to="/chi-siamo">Chi siamo</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/traduzioni" element={<Traduzioni />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/gioco/:id" element={<GameDetail />} />
      </Routes>

      <footer>
        <span>PatchIT — progetto amatoriale, nessuna affiliazione con gli sviluppatori</span>
        <span>made with LocalizeIT</span>
      </footer>
    </>
  )
}

export default App