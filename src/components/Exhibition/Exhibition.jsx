import './Exhibition.css'

export default function Exhibition() {
  return (
    <section className="exhibition" id="exhibitions">
      <div className="exhibition__image" data-reveal><img src="/assets/img3.jpeg" alt="Ornamental painting with flowing botanical forms and geometric mountains" loading="lazy" /><span>Featured work · 03</span></div>
      <div className="exhibition__copy">
        <p className="eyebrow" data-reveal>Current exhibition</p>
        <p className="exhibition__dates">14 Aug — 21 Sep 2026</p>
        <h2>The Weight<br />of <em>Light</em></h2>
        <p>A new body of paintings considering the emotional geography of home and the memories carried through changing landscapes.</p>
        <div className="exhibition__details"><span>Barefoot Gallery</span><span>Colombo, Sri Lanka</span></div>
        <a className="text-link" href="#contact">Exhibition details <span>↗</span></a>
      </div>
    </section>
  )
}
