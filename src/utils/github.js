export async function fetchDownloadsFromStaticFile() {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}downloads.json`)
    if (!res.ok) return null
    const data = await res.json()
    return data.downloadsByTag
  } catch {
    return null
  }
}

export async function fetchStarCount() {
  try {
    const res = await fetch('https://api.github.com/repos/matteogit-dev/patchit')
    if (!res.ok) return null
    const data = await res.json()
    return data.stargazers_count
  } catch {
    return null
  }
}