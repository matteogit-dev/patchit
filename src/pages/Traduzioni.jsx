import { useState, useMemo } from 'react'
import { games } from '../data/games'
import { GameCard } from '../components/GameCard'
import { compareVersions } from '../utils/version'
import { usePageMeta } from '../hooks/usePageMeta'

function Traduzioni() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  usePageMeta('Tutte le traduzioni', 'Sfoglia tutte le traduzioni amatoriali disponibili per videogiochi PC.')

  const filteredGames = useMemo(() => {
    let result = [...games]

    if (search.trim()) {
      result = result.filter(g =>
        g.title.toLowerCase().includes(search.trim().toLowerCase())
      )
    }

    if (statusFilter !== 'all') {
      result = result.filter(g => g.status === statusFilter)
    }

    switch (sortBy) {
      case 'recent':
        result.sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate))
        break
      case 'alphabetical':
        result.sort((a, b) => a.title.localeCompare(b.title, 'it'))
        break
      case 'progress':
        result.sort((a, b) => b.progress - a.progress)
        break
    }

    return result
  }, [search, statusFilter, sortBy])

  return (
    <section className="section" style={{ paddingTop: '48px' }}>
      <div className="section-head">
        <h2>Tutte le traduzioni</h2>
        <div className="count">{filteredGames.length} / {games.length} progetti</div>
      </div>

      <div className="filters-bar">
        <input
          type="text"
          placeholder="Cerca un gioco..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />

      <div className="filter-pills">
        {[
          { value: 'all', label: 'Tutte' },
          { value: 'complete', label: 'Complete' },
          { value: 'progress', label: 'In corso' },
          { value: 'paused', label: 'In pausa' },
          { value: 'planned', label: 'Pianificate' },
        ].map(({ value, label }) => (
          <button
            key={value}
            className={`pill ${statusFilter === value ? 'active' : ''}`}
            onClick={() => setStatusFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>

        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="recent">Più recenti</option>
          <option value="alphabetical">Alfabetico (A-Z)</option>
          <option value="progress">% completamento</option>
        </select>
      </div>

      {filteredGames.length > 0 ? (
        <div className="grid">
          {filteredGames.map(game => <GameCard key={game.id} game={game} />)}
        </div>
      ) : (
        <div className="empty-state">
          Nessuna traduzione trovata con questi filtri.
        </div>
      )}
    </section>
  )
}

export default Traduzioni