import './Journal.css'

const notes = [
  { type: 'Studio note', date: '04.06.2026', title: 'On colour, silence and the long way home' },
  { type: 'Press', date: '19.03.2026', title: 'A conversation with Art South Asia' },
  { type: 'Process', date: '27.01.2026', title: 'The pigments gathered after rain' },
]

export default function Journal() {
  return (
    <section className="journal section" id="journal">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Notes, stories & press</p>
        <h2>Journal</h2>
      </div>
      <div className="journal__list">
        {notes.map((note, index) => (
          <a href="#contact" className="journal__item" key={note.title} data-reveal>
            <span className="journal__index">0{index + 1}</span>
            <span className="journal__type">{note.type}</span>
            <strong>{note.title}</strong>
            <span className="journal__date">{note.date}</span>
            <span className="journal__arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
