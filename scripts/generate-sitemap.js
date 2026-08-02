import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE_URL = 'https://matteogit-dev.github.io/patchit'

const gamesFilePath = path.join(__dirname, '../src/data/games.js')
const gamesFileContent = fs.readFileSync(gamesFilePath, 'utf-8')

// Estrae tutti gli id dei giochi dal file, senza dover importare/eseguire codice React
const idMatches = [...gamesFileContent.matchAll(/id:\s*'([^']+)'/g)]
const gameIds = idMatches.map(m => m[1])

const staticPages = [
  { path: '', priority: '1.0' },
  { path: 'traduzioni', priority: '0.8' },
  { path: 'chi-siamo', priority: '0.5' },
]

const gamePages = gameIds.map(id => ({ path: `gioco/${id}`, priority: '0.7' }))

const allPages = [...staticPages, ...gamePages]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${BASE_URL}/${p.path}</loc>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

const outputPath = path.join(__dirname, '../public/sitemap.xml')
fs.writeFileSync(outputPath, xml)
console.log(`Sitemap generata con ${allPages.length} pagine.`)