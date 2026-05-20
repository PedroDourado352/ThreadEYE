export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <div className="about-grid">
          {/* Content */}
          <div>
            <div className="section-badge">✦ Nossa História</div>
            <h2 className="about-title">
              Feitas com <span className="about-accent">amor</span> e{' '}
              <span className="about-accent">precisão</span>
            </h2>
            <p className="about-text">
              A SulaviBags nasceu do sonho de criar bolsas que vão além da moda —
              que contem histórias. Cada peça é cuidadosamente desenvolvida por
              artesãs brasileiras, com materiais selecionados e atenção obsessiva
              ao detalhe.
            </p>
            <p className="about-text" style={{ marginBottom: '2rem' }}>
              Acreditamos que uma boa bolsa não é apenas um acessório: é uma
              extensão da sua personalidade, uma companheira fiel do dia a dia.
            </p>

            <div className="about-pillars">
              <div className="pillar">
                <div className="pillar-icon">🌿</div>
                <div className="pillar-title">Sustentável</div>
                <div className="pillar-text">Materiais eco-friendly e processos responsáveis</div>
              </div>
              <div className="pillar">
                <div className="pillar-icon">✋</div>
                <div className="pillar-title">Artesanal</div>
                <div className="pillar-text">Costuradas à mão por artesãs brasileiras</div>
              </div>
              <div className="pillar">
                <div className="pillar-icon">💜</div>
                <div className="pillar-title">Exclusiva</div>
                <div className="pillar-text">Designs únicos que não encontrará em outro lugar</div>
              </div>
              <div className="pillar">
                <div className="pillar-icon">🏆</div>
                <div className="pillar-title">Qualidade</div>
                <div className="pillar-text">Garantia de 12 meses em todos os produtos</div>
              </div>
            </div>

            <a href="#colecoes" className="btn-primary">
              Conhecer a Coleção
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          {/* Image */}
          <div className="about-img-wrap">
            <img
              className="about-img"
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
              alt="Artesã SulaviBags"
            />
            <div className="about-img-overlay" />
            <div className="about-float">
              <div className="about-float-num">+5 anos</div>
              <div className="about-float-label">de tradição artesanal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
