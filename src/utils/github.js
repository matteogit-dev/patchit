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