import { driveArtworks } from './driveArtworks.js'

const image = (number) => `/assets/img%20(${number}).jpeg`
const setDesignImage = (number, extension = 'jpeg') => `/assets/SD${number}.${extension}`
const paintingWork = (number, title, medium = 'Mixed media on paper') => ({
  image: image(number),
  title,
  medium,
  alt: `${title}, ${medium.toLowerCase()} artwork by Prasad Weerasinghe`,
})
const paintingAsset = (filename, title, medium, alt) => ({
  image: `/assets/${filename}`,
  title,
  medium,
  alt,
})

export const storeArtworks = [
  { slug: 'saffron-of-scare-folding', image: '/assets/drive-artworks/MRL09075-artwork.svg', title: 'Saffron of scare folding', category: 'Paintings', medium: 'Oil on canvas', size: '92cm x 121cm', format: 'Portrait', year: '2026', price: 'LKR 240,000', status: 'available', alt: 'Architectural oil painting in saffron, terracotta and gold against a dark background', description: 'An architectural composition of layered towers, patterned surfaces and sweeping forms in saffron and warm earth colours.' },
  { slug: 'architecture-of-memory', image: image(63), title: 'Architecture of Memory', category: 'Drawings', medium: 'Ink and mixed media', size: 'Original studio work', format: 'Portrait', year: 'Archive work', status: 'sold', alt: 'Architectural symbolic painting in brown, black and white', description: 'Architectural fragments, patterned surfaces and symbolic forms are assembled as a record of place, memory and change.' },
  { slug: 'the-blue-witness', image: image(47), title: 'The Blue Witness', category: 'Paintings', medium: 'Acrylic and mixed media', size: 'Original studio work', format: 'Portrait', year: 'Contemporary work', status: 'available', alt: 'Blue figurative portrait with an elaborate floral headdress', description: 'A contemplative figure emerges through a layered vocabulary of blue pigment, botanical ornament and composite detail.' },
  { slug: 'a-body-of-symbols', image: image(37), title: 'A Body of Symbols', category: 'Paintings', medium: 'Acrylic on canvas', size: 'Original studio work', format: 'Portrait', year: 'Archive work', status: 'sold', alt: 'Symbolic figure painting with ornamental patterns and geometric forms', description: 'The human body becomes a field of signs where decorative traditions meet contemporary social experience.' },
  { slug: 'botanical-memory', image: image(35), title: 'Botanical Memory', category: 'Drawings', medium: 'Ink and pigment on paper', size: 'Original studio work', format: 'Portrait', year: 'Archive work', status: 'sold', alt: 'Earth-toned botanical figure study with ornamental line work', description: 'Organic lines and earth-toned pigment build an intimate study of growth, inheritance and remembered landscapes.' },
  { slug: 'the-inner-current', image: image(52), title: 'The Inner Current', category: 'Paintings', medium: 'Mixed media on paper', size: 'Original studio work', format: 'Portrait', year: 'Contemporary work', status: 'available', alt: 'Flowing figurative artwork composed with decorative organic forms', description: 'Flowing decorative forms move through the figure like an internal landscape, balancing rhythm with stillness.' },
  { slug: 'ornamental-passage', image: image(64), title: 'Ornamental Passage', category: 'Commercial', medium: 'Acrylic and mixed media', size: 'Original studio work', format: 'Portrait', year: 'Contemporary work', status: 'available', alt: 'Detailed ornamental composition with a central symbolic figure', description: 'Dense ornament creates a passage between traditional visual language and the experience of the present.' },
  { slug: 'field-of-becoming', image: image(58), title: 'Field of Becoming', category: 'Commercial', medium: 'Ink and pigment on paper', size: 'Original studio work', format: 'Landscape', year: 'Archive work', status: 'sold', alt: 'Earth-toned reclining composite figure with geometric and organic patterns', description: 'A reclining composite form gathers fragments of body, foliage and geometry into an intimate field of transformation.' },
  { slug: 'vessel-of-night', image: image(59), title: 'Vessel of Night', category: 'Paintings', medium: 'Acrylic and mixed media', size: 'Original studio work', format: 'Portrait', year: 'Contemporary work', status: 'available', alt: 'Blue symbolic vessel surrounded by flowers and forms against a dark background', description: 'A luminous vessel holds a figure within a nocturnal field where botanical symbols surface through layered darkness.' },
  { slug: 'seat-of-silence', image: image(60), title: 'Seat of Silence', category: 'Drawings', medium: 'Ink on paper', size: 'Original studio work', format: 'Square', year: 'Archive work', status: 'sold', alt: 'Black chair centred within radiating circular ink patterns', description: 'A solitary chair anchors a meticulous field of repeated marks, turning an everyday object into a meditation on presence and absence.' },
  { slug: 'ornamental-study', image: image(61), title: 'Ornamental Study', category: 'Drawings', medium: 'Pen and ink on paper', size: 'Original studio work', format: 'Square', year: 'Contemporary work', status: 'available', alt: 'Black and white ornamental drawing with layered organic patterns and circular forms', description: 'Line, repetition and negative space build a compact study of movement, ornament and visual rhythm.' },
]

export const categoryPages = {
  paintings: {
    title: 'Paintings',
    eyebrow: 'Research-led painting',
    intro: 'Layered figures, ornament and memory are assembled into a contemporary visual language grounded in Sri Lankan traditions.',
    hero: '/assets/hero-blue-currents.svg',
    heroAlt: 'Blue Currents, a bright blue painting with layered organic patterns and symbolic forms by Prasad Weerasinghe',
    albums: [
            {
        slug: 'line-surface-geometry',
        title: 'Line, Surface & Geometry',
        description: 'Repeated marks, architectural rhythms and patterned surfaces become structures for contemplation.',
        works: [
          paintingAsset('paintings1.jpg', 'Composite Figure 4', 'Pen on board', 'Standing composite female figure surrounded by radiating repeated key-like marks'),
          paintingAsset('Paintings2.jpg', 'Composite Figure 13', 'Pen on board', 'Office chair with a human arm enclosed by dense circular repeated line work'),
          paintingAsset('paintings4.jpg', 'Composite Figure 5', 'Pen on board', 'Large human face constructed from hundreds of small organic ink marks'),
          paintingAsset('paintings5.jpg', 'Composite Figure 7', 'Pen on board', 'Group of standing human figures with transformed botanical and animal heads'),
          paintingAsset('paintings6.jpg', 'Composite Figure 18', 'Acrylic and mixed media', 'Meditating figure beneath sweeping ornamental forms in warm earth colours'),
          paintingAsset('paintings7.jpg', 'Composite Figure 20', 'Acrylic and mixed media', 'Profile figure joined with a bird, flowers and patterned vessel on a dark ground'),
          paintingAsset('paintings8.jpg', 'Composite Figure 23', 'Ink on paper', 'Dense black and white composite scene of figures, plants and patterned organic forms'),
          paintingAsset('paintings9.jpg', 'Composite Figure 15', 'Pen on board', 'Standing figure transformed by flowing ribbon forms and circular patterned lines'),
          paintingAsset('paintings10.jpg', 'Composite Figure 24', 'Acrylic and mixed media', 'Blue standing figure among ornamental plants, birds and painted vessels'),
          paintingAsset('paintings11.jpg', 'Composite Figure 26', 'Pen on board', 'Muscular crossed-arm figure with a stylised bird-like head and ornamental halo'),
        ],
      },
        {
        slug: 'portraits',
        title: 'Portraits',
        description: 'Two intimate portraits exploring identity through natural observation and richly constructed symbolic form.',
        works: [
          paintingAsset('paintings14.jpg', 'Blue Reverie', 'Acrylic and mixed media', 'Blue profile portrait merging with birds, flowers and geometric patterns'),
          paintingAsset('paintings13.jpg', 'Portrait Study', 'Oil on canvas', 'Realistic painted portrait of a young woman with blue eyes'),
        ],
      },
           {
        slug: 'composite-figures',
        title: 'Composite Figures',
        description: 'The body becomes an archive of memory, identity and transformation through layered human forms.',
        works: [storeArtworks[0]],
      },

      {
        slug: 'myth-ritual-memory',
        title: 'Myth, Ritual & Memory',
        description: 'Traditional symbols and remembered narratives are reassembled as contemporary visual stories.',
        works: [],
      },

      {
        slug: 'botanical-organic-forms',
        title: 'Botanical & Organic Forms',
        description: 'Leaves, flowers and fluid structures trace the relationship between the human body and the natural world.',
        works: [],
      },

      {
        slug: 'independent-works',
        title: 'Other Images',
        description: 'Studio context, exhibitions, installations, documentation and individual images that sit outside the themed painting albums.',
        works: [],
      },
    ],
  },
  drawings: {
    title: 'Drawings',
    eyebrow: 'Line, study & notation',
    intro: 'Drawings reveal the architecture behind the paintings—close observations developed through line, repetition and symbolic form.',
    hero: image(61),
    heroAlt: 'Detailed black and white organic drawing composed from repeated lines and symbolic forms',
    albums: [
      {
        slug: 'figurative-studies',
        title: 'Figurative Studies',
        description: 'Studies of posture, anatomy and identity developed through intricate marks and transformed human forms.',
        works: [
          paintingWork(41, 'The Observer', 'Graphite study'),
          paintingAsset('paintings1.jpg', 'Composite Figure 4', 'Pen on board', 'Standing composite female figure surrounded by radiating repeated marks'),
          paintingAsset('paintings4.jpg', 'Composite Figure 5', 'Pen on board', 'Human torso constructed from hundreds of tightly repeated ink marks'),
          paintingAsset('paintings5.jpg', 'Composite Figure 7', 'Pen on board', 'Group of standing human figures with transformed botanical and animal heads'),
          paintingAsset('paintings9.jpg', 'Composite Figure 15', 'Pen on board', 'Standing figure transformed by flowing ribbon forms and circular patterned lines'),
        ],
      },
      {
        slug: 'organic-line-nature',
        title: 'Organic Line & Nature',
        description: 'Botanical rhythms, animal forms and flowing structures grow through layered fields of line.',
        works: [
          paintingWork(39, 'Organic Structure', 'Graphite and ink'),
          paintingWork(61, 'Living Lines', 'Pen and ink'),
          paintingWork(35, 'Botanical Memory', 'Ink and pigment'),
          paintingWork(53, 'Growing Silence', 'Ink and acrylic'),
          paintingWork(21, 'Reclining Organic Form', 'Ink and pigment on paper'),
        ],
      },
      {
        slug: 'symbol-myth-ritual',
        title: 'Symbol, Myth & Ritual',
        description: 'Archetypal figures and ceremonial signs turn drawing into a language of myth, memory and belief.',
        works: [
          paintingWork(64, 'Symmetry Study', 'Pen on paper'),
          paintingAsset('paintings8.jpg', 'Composite Figure 23', 'Ink on paper', 'Dense composite drawing of figures, plants and patterned organic forms'),
          paintingWork(9, 'Ancestral Form', 'Ink and pigment'),
          paintingWork(28, 'Ceremonial Figure', 'Ink and mixed media'),
          paintingWork(34, 'Architecture of Memory', 'Ink on paper'),
        ],
      },
      {
        slug: 'objects-memory',
        title: 'Objects & Memory',
        description: 'Chairs, vessels and familiar objects become quiet carriers of presence, absence and remembered experience.',
        works: [
          paintingWork(60, 'Seat of Memory', 'Pen and ink'),
          paintingWork(40, 'Contained Forms', 'Pen on paper'),
          paintingWork(13, 'Geometric Vessel', 'Ink and pigment'),
          paintingWork(14, 'Figure with Patterned Field', 'Ink and mixed media'),
          paintingWork(12, 'Small Narrative Study', 'Ink and pigment'),
        ],
      },
    ],
  },
  commercial: {
    title: 'Commercial',
    eyebrow: 'Creative collaboration',
    intro: 'Commissioned concepts translate the artist’s visual language into exhibitions, installations, editorial projects and public-facing environments.',
    hero: '/assets/hero-crimson-landscape.svg',
    heroAlt: 'Crimson Landscape, a richly patterned artwork by Prasad Weerasinghe',
    works: driveArtworks.filter((work) => [
      'MRL09202', 'MRL09215', 'MRL09210', 'MRL09157', 'MRL09186', 'MRL09173',
    ].includes(work.reference)),
  },
  sculptures: {
    title: 'Sculptures',
    eyebrow: 'Form in space',
    intro: 'Constructed objects and spatial studies extend composite form beyond the page, bringing volume, shadow and physical presence into the practice.',
    hero: null,
    works: [],
  },
}

// Redistribute the pattern studies across the four drawing themes.
const drawingAlbums = categoryPages.drawings.albums
const drawingAlbum = (slug) => drawingAlbums.find((album) => album.slug === slug)
drawingAlbum('figurative-studies').works.push(paintingWork(63, 'Textured Torso', 'Graphite and ink'))
drawingAlbum('organic-line-nature').works.push(
  paintingWork(42, 'Ornamental Current', 'Ink and pigment'),
  paintingWork(7, 'Spiral Field', 'Pen and mixed media'),
  paintingWork(24, 'Patterned Growth', 'Ink and acrylic'),
)
drawingAlbum('objects-memory').works.push(paintingWork(15, 'Circular Study', 'Ink and pigment'))

// Exclude the seven images removed from the drawing collection.
const removedDrawingImages = new Set([9, 28, 34, 63, 42, 7, 24].map(image))
for (const album of drawingAlbums) {
  album.works = album.works.filter((work) => !removedDrawingImages.has(work.image))
}

categoryPages.paintings.albums.unshift({
  slug: 'studio-collection',
  title: 'Studio Collection',
  description: 'Explore the artist\'s latest collection of artwork photographs from the studio.',
  works: driveArtworks.filter((work) => work.reference !== 'MRL09092'),
})

const paintingAlbumReferences = {
  'myth-ritual-memory': ['MRL09075', 'MRL09029', 'MRL09192', 'MRL09198'],
  'botanical-organic-forms': ['MRL09039', 'MRL09024', 'MRL09195', 'MRL09176'],
  'independent-works': ['MRL09154', 'MRL09167', 'MRL09206', 'MRL09219'],
}
for (const album of categoryPages.paintings.albums) {
  const references = paintingAlbumReferences[album.slug]
  if (references) album.works = references.map((reference) => driveArtworks.find((work) => work.reference === reference)).filter(Boolean)
}
categoryPages.paintings.albums.find((album) => album.slug === 'independent-works').description =
  'Individual paintings exploring portraiture, colour and imagined worlds beyond the themed albums.'
// Use the clear Drive photograph for Saffron and keep at most twelve works per album.
for (const category of Object.values(categoryPages)) {
  for (const album of category.albums || []) {
    const seen = new Set()
    album.works = album.works.map((work) => work.reference === 'MRL09075' ? storeArtworks[0] : work)
      .filter((work) => {
        if (seen.has(work.image)) return false
        seen.add(work.image)
        return true
      }).slice(0, 12)
  }
}
storeArtworks.splice(1, 0, ...driveArtworks.filter((work) => work.reference !== 'MRL09075'))

// Share gallery works with the detail-page catalogue without duplicating images.
for (const category of Object.values(categoryPages)) {
  for (const work of [...(category.works || []), ...(category.albums || []).flatMap((album) => album.works)]) {
    const existing = storeArtworks.find((item) => item.image === work.image)
    if (existing) { work.slug = existing.slug; continue }
    work.slug = work.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    const baseSlug = work.slug
    let suffix = 2
    while (storeArtworks.some((item) => item.slug === work.slug)) work.slug = `${baseSlug}-${suffix++}`
    storeArtworks.push({ ...work, category: category.title, size: 'Original studio work', format: 'Original artwork', year: 'Artist archive', status: 'archive', description: work.alt || work.title })
  }
}

// Keep archive detail links while presenting only unique paintings in the store.
export const detailArtworks = [...storeArtworks]
const saffron = storeArtworks.find((work) => work.slug === 'saffron-of-scare-folding')
storeArtworks.splice(0, storeArtworks.length, saffron, ...driveArtworks.filter((work) => work.reference !== 'MRL09075'))

export const practicePages = {
  'set-design': {
    title: 'Set Design',
    eyebrow: 'Space built for the camera',
    intro: 'Prasad develops scenic environments that connect narrative, movement, material and light. His set-design practice has formed part of his professional work at Sri Lanka Rupavahini Corporation since 2006.',
    hero: setDesignImage(23, 'jpg'),
    heroAlt: 'Contemporary turquoise and white living room set with patterned walls, sectional seating and sculptural lighting',
    services: ['Scenic concepts', 'Spatial composition', 'Material direction', 'Broadcast environments'],
    works: [
      { image: setDesignImage(5), title: 'Presidential Election Studio', detail: 'National broadcast environment', alt: 'Wide presidential election television set with suspended signage, cameras and red illuminated platforms' },
      { image: setDesignImage(12), title: 'Ornamental Runway', detail: 'Presentation stage design', alt: 'Dark presentation stage with a reflective runway, star lights and ornate blue digital screens' },
      { image: setDesignImage(14), title: 'Today Studio', detail: 'Daytime television interior', alt: 'Bright daytime television studio with curved white seating, colourful cushions and a sunset wall' },
      { image: setDesignImage(18), title: 'Winter Light Installation', detail: 'Seasonal broadcast environment', alt: 'Winter-themed television installation with illuminated red columns, glowing lamps and a white bridge' },
      { image: setDesignImage(19), title: 'Village Homestead', detail: 'Rural concept environment', alt: 'Traditional thatched village house set surrounded by tropical plants, pottery and a rustic fence' },
      { image: setDesignImage(22, 'jpg'), title: 'Warm Conversation Studio', detail: 'Interior set concept', alt: 'Rendered conversation studio with three armchairs, warm timber finishes and illuminated leaf motifs' },
      { image: setDesignImage(23, 'jpg'), title: 'Turquoise Living Studio', detail: 'Contemporary interior concept', alt: 'Rendered turquoise and white living room set with patterned walls, sectional seating and sculptural lighting' },
      { image: setDesignImage(24, 'jpg'), title: 'Monumental Garden', detail: 'Landscape concept environment', alt: 'Concept garden with circular stone arches, monumental pillars, mountain scenery and planted terraces' },
      { image: setDesignImage(25, 'jpg'), title: 'Graphic Living Studio', detail: 'Contemporary interior concept', alt: 'Rendered turquoise living room set with white seating, patterned cushions and decorative wall panels' },
      { image: setDesignImage(26, 'jpg'), title: 'Colour Block Interior', detail: 'Studio room concept', alt: 'Rendered living room set with turquoise walls, vivid cushions, artwork and graphic black-and-white details' },
      { image: setDesignImage(27, 'jpg'), title: 'Future Lounge', detail: 'Television studio concept', alt: 'Rendered television lounge with a bright green curved sofa, red floor and illuminated geometric wall structures' },
      { image: setDesignImage(28, 'jpg'), title: 'Christmas Choir Tableau', detail: 'Seasonal scenic concept', alt: 'Christmas stage concept with a children’s choir, glowing candles, blue trees, angels and artificial snow' },
      { image: setDesignImage(29, 'jpg'), title: 'Children’s Story Portal', detail: 'Graphic scenic concept', alt: 'Colourful children’s programme portal illustrated with cartoon characters, tropical leaves and a blank central stage opening' },
      { image: setDesignImage(30, 'JPG'), title: 'Rainbow Choir Production', detail: 'Children’s broadcast set', alt: 'Children and musicians performing on a cloud-covered television stage beneath a rainbow and suspended clouds' },
      { image: setDesignImage(31, 'JPG'), title: 'Winter Nativity Environment', detail: 'Seasonal studio production', alt: 'Winter television set with artificial snow, frosted trees, mountain scenery and a rustic nativity shelter' },
      { image: setDesignImage(32, 'jpg'), title: 'Heritage Music Salon', detail: 'Cultural programme set', alt: 'Traditional music programme set with seated performers, stone pillars, clay vessels and a white stupa backdrop' },
      { image: setDesignImage(33, 'jpg'), title: 'Fantasy Nature Stage', detail: 'Outdoor scenic installation', alt: 'Colourful fantasy nature stage with painted plants, curling decorative forms, trees and hanging clouds' },
      { image: setDesignImage(34, 'jpg'), title: 'Village Story Environment', detail: 'Location set production', alt: 'Night-time rural set with a thatched mud house, tropical plants and a presenter dressed in red' },
      { image: setDesignImage(35, 'JPG'), title: 'Sunset Conversation Studio', detail: 'Daytime television set', alt: 'Television discussion set with three guests, curved white seating, colourful cushions and a sunset window backdrop' },
    ],
  },
  'art-direction': {
    title: 'Art Direction',
    eyebrow: 'A complete visual language',
    intro: 'Art direction brings every visible decision into one coherent world—from palette and objects to lighting, costume relationships and the final composition within the frame.',
    hero: image(4),
    services: ['Visual development', 'Colour & atmosphere', 'Production detail', 'Creative leadership'],
    works: [
      // { image: image(4), title: 'Rainbow Broadcast', detail: 'Visual direction' },
      // { image: image(46), title: 'Blue Stage Composition', detail: 'Broadcast art direction' },
      // { image: image(49), title: 'Contemporary Studio Interior', detail: 'Television environment' },
      // { image: image(66), title: 'Conversation Set', detail: 'Studio art direction' },
    ],
  },
}
