const image = (number) => `/assets/img%20(${number}).jpeg`

export const storeArtworks = [
  { slug: 'architecture-of-memory', image: image(63), title: 'Architecture of Memory', category: 'Works on Paper', medium: 'Ink and mixed media', size: 'Original studio work', format: 'Portrait', year: 'Archive work', status: 'sold', alt: 'Architectural symbolic painting in brown, black and white', description: 'Architectural fragments, patterned surfaces and symbolic forms are assembled as a record of place, memory and change.' },
  { slug: 'the-blue-witness', image: image(47), title: 'The Blue Witness', category: 'Paintings', medium: 'Acrylic and mixed media', size: 'Original studio work', format: 'Portrait', year: 'Contemporary work', status: 'available', alt: 'Blue figurative portrait with an elaborate floral headdress', description: 'A contemplative figure emerges through a layered vocabulary of blue pigment, botanical ornament and composite detail.' },
  { slug: 'a-body-of-symbols', image: image(37), title: 'A Body of Symbols', category: 'Paintings', medium: 'Acrylic on canvas', size: 'Original studio work', format: 'Portrait', year: 'Archive work', status: 'sold', alt: 'Symbolic figure painting with ornamental patterns and geometric forms', description: 'The human body becomes a field of signs where decorative traditions meet contemporary social experience.' },
  { slug: 'botanical-memory', image: image(35), title: 'Botanical Memory', category: 'Works on Paper', medium: 'Ink and pigment on paper', size: 'Original studio work', format: 'Portrait', year: 'Archive work', status: 'sold', alt: 'Earth-toned botanical figure study with ornamental line work', description: 'Organic lines and earth-toned pigment build an intimate study of growth, inheritance and remembered landscapes.' },
  { slug: 'the-inner-current', image: image(52), title: 'The Inner Current', category: 'Mixed Media', medium: 'Mixed media on paper', size: 'Original studio work', format: 'Portrait', year: 'Contemporary work', status: 'available', alt: 'Flowing figurative artwork composed with decorative organic forms', description: 'Flowing decorative forms move through the figure like an internal landscape, balancing rhythm with stillness.' },
  { slug: 'ornamental-passage', image: image(64), title: 'Ornamental Passage', category: 'Mixed Media', medium: 'Acrylic and mixed media', size: 'Original studio work', format: 'Portrait', year: 'Contemporary work', status: 'available', alt: 'Detailed ornamental composition with a central symbolic figure', description: 'Dense ornament creates a passage between traditional visual language and the experience of the present.' },
]

export const categoryPages = {
  paintings: {
    title: 'Paintings',
    eyebrow: 'Research-led painting',
    intro: 'Layered figures, ornament and memory are assembled into a contemporary visual language grounded in Sri Lankan traditions.',
    hero: image(42),
    works: [
      { image: image(59), title: 'Interior Current', medium: 'Acrylic on canvas' },
      { image: image(54), title: 'The Folded Body', medium: 'Mixed media' },
      { image: image(47), title: 'Small Mythology', medium: 'Acrylic and pigment' },
      { image: image(42), title: 'Reclining Form', medium: 'Mixed media on paper' },
      { image: image(21), title: 'Earth Archive', medium: 'Pigment and ink' },
      { image: image(52), title: 'Blue Ceremony', medium: 'Acrylic on canvas' },
      { image: image(37), title: 'Cartography of Self', medium: 'Mixed media' },
      { image: image(47), title: 'The Blue Witness', medium: 'Acrylic and mixed media' },
      { image: image(48), title: 'Ornamental Vessel', medium: 'Acrylic on paper' },
    ],
  },
  drawings: {
    title: 'Drawings',
    eyebrow: 'Line, study & notation',
    intro: 'Drawings reveal the architecture behind the paintings—close observations developed through line, repetition and symbolic form.',
    hero: image(61),
    works: [
      { image: image(39), title: 'Organic Structure', medium: 'Graphite and ink' },
      { image: image(40), title: 'Contained Forms', medium: 'Pen on paper' },
      { image: image(41), title: 'The Observer', medium: 'Graphite study' },
      { image: image(60), title: 'Seat of Memory', medium: 'Pen and ink' },
      { image: image(63), title: 'Textured Torso', medium: 'Graphite and ink' },
      { image: image(64), title: 'Symmetry Study', medium: 'Pen on paper' },
      { image: image(64), title: 'Symmetry Study', medium: 'Pen on paper' },
      { image: image(40), title: 'Contained Forms', medium: 'Pen on paper' },
      { image: image(63), title: 'Textured Torso', medium: 'Graphite and ink' },



    ],
  },
  commercial: {
    title: 'Commercial',
    eyebrow: 'Creative collaboration',
    intro: 'Commissioned concepts translate the artist’s visual language into exhibitions, installations, editorial projects and public-facing environments.',
    hero: image(8),
    works: [
      { image: image(18), title: 'Digital Exhibition Feature', medium: 'Editorial presentation' },
      { image: image(25), title: 'Gallery Presentation', medium: 'Exhibition installation' },
      { image: image(26), title: 'Artwork in Context', medium: 'Interior art placement' },
      { image: image(30), title: 'Curated Gallery Wall', medium: 'Exhibition design' },
      { image: image(31), title: 'Public Viewing', medium: 'Gallery programme' },
      { image: image(32), title: 'Encounter with the Work', medium: 'Exhibition documentation' },
      { image: image(33), title: 'Framed Study', medium: 'Gallery presentation' },
      { image: image(38), title: 'Blue Portrait Installation', medium: 'Curated display' },
      { image: image(36), title: 'Publication Feature', medium: 'Editorial design' },
    ],
  },
  sculptures: {
    title: 'Sculptures',
    eyebrow: 'Form in space',
    intro: 'Constructed objects and spatial studies extend composite form beyond the page, bringing volume, shadow and physical presence into the practice.',
    hero: image(14),
    works: [
      { image: image(28), title: 'Small Composite Animal', medium: 'Sculptural study' },
      { image: image(30), title: 'Circular Figure', medium: 'Mixed-media installation' },
      { image: image(31), title: 'Objects in Dialogue', medium: 'Gallery installation' },
      { image: image(32), title: 'Figure and Shadow', medium: 'Spatial presentation' },
      { image: image(33), title: 'Relief in Context', medium: 'Framed relief study' },
      { image: image(33), title: 'Relief in Context', medium: 'Framed relief study' },
      { image: image(33), title: 'Relief in Context', medium: 'Framed relief study' },
      { image: image(33), title: 'Relief in Context', medium: 'Framed relief study' },
      { image: image(33), title: 'Relief in Context', medium: 'Framed relief study' },

    ],
  },
}

export const practicePages = {
  'set-design': {
    title: 'Set Design',
    eyebrow: 'Space built for the camera',
    intro: 'Prasad develops scenic environments that connect narrative, movement, material and light. His set-design practice has formed part of his professional work at Sri Lanka Rupavahini Corporation since 2006.',
    hero: image(65),
    services: ['Scenic concepts', 'Spatial composition', 'Material direction', 'Broadcast environments'],
    works: [
      { image: image(1), title: 'Monumental Landscape', detail: 'Concept environment' },
      { image: image(2), title: 'Decorative Nature Stage', detail: 'Broadcast set' },
      { image: image(3), title: 'Organic Architecture', detail: 'Interior environment' },
      { image: image(5), title: 'Illuminated Performance Set', detail: 'Studio production' },
      { image: image(6), title: 'Night Stage Environment', detail: 'Lighting and scenic design' },
      { image: image(65), title: 'Ceremonial Broadcast Stage', detail: 'Television production' },
    ],
  },
  'art-direction': {
    title: 'Art Direction',
    eyebrow: 'A complete visual language',
    intro: 'Art direction brings every visible decision into one coherent world—from palette and objects to lighting, costume relationships and the final composition within the frame.',
    hero: image(66),
    services: ['Visual development', 'Colour & atmosphere', 'Production detail', 'Creative leadership'],
    works: [
      { image: image(4), title: 'Rainbow Broadcast', detail: 'Visual direction' },
      { image: image(44), title: 'Production Development', detail: 'Screen and stage studies' },
      { image: image(46), title: 'Blue Stage Composition', detail: 'Broadcast art direction' },
      { image: image(49), title: 'Contemporary Studio Interior', detail: 'Television environment' },
      { image: image(66), title: 'Conversation Set', detail: 'Studio art direction' },
      { image: '/assets/exhibition-view-banner.png', title: 'Exhibition Environment', detail: 'Spatial visual direction' },
    ],
  },
}
