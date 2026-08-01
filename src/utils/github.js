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

export async function fetchAllReleasesDownloads() {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases`)
    if (!res.ok) return null
    const data = await res.json()
    return data.reduce((sum, release) =>
      sum + release.assets.reduce((s, a) => s + a.download_count, 0), 0)
  } catch {
    return null
  }
}