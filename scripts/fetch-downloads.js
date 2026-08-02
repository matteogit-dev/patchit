import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO = 'matteogit-dev/patchit'
const TOKEN = process.env.GH_TOKEN

async function fetchAllReleases() {
  const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=100`, {
    headers: { Authorization: `Bearer ${TOKEN}` }
  })
  if (!res.ok) {
    throw new Error(`Errore GitHub API: ${res.status}`)
  }
  return res.json()
}

async function main() {
  const releases = await fetchAllReleases()

  const downloadsByTag = {}
  for (const release of releases) {
    const totalForRelease = release.assets.reduce((sum, a) => sum + a.download_count, 0)
    downloadsByTag[release.tag_name] = totalForRelease
  }

  const output = {
    generatedAt: new Date().toISOString(),
    downloadsByTag,
  }

  const outputPath = path.join(__dirname, '../public/downloads.json')
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2))
  console.log(`downloads.json generato con ${Object.keys(downloadsByTag).length} release.`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})