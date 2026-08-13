import { copyFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { categoryPages, storeArtworks } from '../src/data/portfolioContent.js'

const distDirectory = fileURLToPath(new URL('../dist/', import.meta.url))
const sourceIndex = fileURLToPath(new URL('../dist/index.html', import.meta.url))

const routes = new Set([
  'about',
  'contact',
  'store',
  'set-design',
  'art-direction',
  ...Object.keys(categoryPages).map((category) => `category/${category}`),
  ...storeArtworks.map((artwork) => `store/${artwork.slug}`),
])

await Promise.all(
  [...routes].map(async (route) => {
    const routeDirectory = `${distDirectory}${route}`
    await mkdir(routeDirectory, { recursive: true })
    await copyFile(sourceIndex, `${routeDirectory}/index.html`)
  }),
)

console.log(`Created ${routes.size} static route fallbacks for Nginx hosting.`)
