export function formatRelativeDate(dateStr) {
  const date = new Date(dateStr)
  const now = new Date()
  const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'oggi'
  if (diffDays === 1) return 'ieri'
  if (diffDays < 7) return `${diffDays} giorni fa`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} settiman${Math.floor(diffDays / 7) === 1 ? 'a' : 'e'} fa`
  return date.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
}