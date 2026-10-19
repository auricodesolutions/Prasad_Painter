import { driveArtworks } from './driveArtworks.js'

export const archiveArtworks = [
  {
    id: 1,
    title: 'The Celestial Messenger',
    year: 'Artist archive',
    medium: 'Mixed media',
    image: '/assets/img%20(15).jpeg',
    position: 'center',
  },
  {
    id: 2,
    title: 'Architecture of Memory',
    year: 'Artist archive',
    medium: 'Mixed media',
    image: '/assets/img%20(10).jpeg',
    position: 'center',
  },
  {
    id: 3,
    title: 'Quiet Presence',
    year: 'Installation view',
    medium: 'Artwork in context',
    image: '/assets/img%20(29).jpeg',
    position: 'center',
  },
  {
    id: 4,
    title: 'Cartography of Self',
    year: 'Artist archive',
    medium: 'Mixed media',
    image: '/assets/img%20(20).jpeg',
    position: 'center',
  },
  {
    id: 5,
    title: 'The Blue Witness',
    year: 'Artist archive',
    medium: 'Mixed media',
    image: '/assets/img2.jpeg',
    position: 'center',
  },
]

// Alternate palettes so the homepage selection shows the range of the collection.
const selectedReferences = ['MRL09083', 'MRL09206', 'MRL09165', 'MRL09024', 'MRL09198']
export const artworks = selectedReferences.map((reference, index) => ({
  ...driveArtworks.find((work) => work.reference === reference),
  id: index + 1,
  position: 'center',
}))
