const REPO = 'matteogit-dev/patchit'

export async function fetchReleaseDownloads(tag) {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/tags/${tag}`)
    if (!res.ok) return null
    const data = await res.json()
    return data.assets.reduce((sum, asset) => sum + asset.download_count, 0)
  } catch {
    return null
  }
}

// Somma i download di più tag specifici (uno per versione nel changelog),
// invece di affidarsi alla lista completa /releases che può risultare disallineata
// poco dopo la pubblicazione di una nuova release.
export async function fetchGameDownloadsByTags(tags) {
  try {
    const results = await Promise.all(tags.map(tag => fetchReleaseDownloads(tag)))
    const validResults = results.filter(r => r !== null)
    if (validResults.length === 0) return null
    return validResults.reduce((sum, count) => sum + count, 0)
  } catch {
    return null
  }

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
}