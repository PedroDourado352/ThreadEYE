export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="container hero-inner">
        {/* Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-dot" />
            Nova Coleção 2025
          </div>

          <h1 className="hero-title">
            Carregue sua{' '}
            <span className="hero-title-grad">história</span>{' '}
            com elegância
          </h1>

          <p className="hero-sub">
            Bolsas artesanais que unem sofisticação e funcionalidade.
            Cada peça é uma obra de arte criada para mulheres que valorizam o detalhe.
          </p>

          <div className="hero-actions">
            <a href="#colecoes" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              Explorar Coleção
            </a>
            <a href="#sobre" className="btn-ghost">Nossa História</a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="stat-value">2k+</div>
              <div className="stat-label">Clientes felizes</div>
            </div>
            <div>
              <div className="stat-value">150+</div>
              <div className="stat-label">Modelos exclusivos</div>
            </div>
            <div>
              <div className="stat-value">4.9★</div>
              <div className="stat-label">Avaliação média</div>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="hero-visual">
          <div className="hero-img-bg" />

          <img
            className="hero-main-img"
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
            alt="Bolsa Sulavi destaque"
          />

          {/* Floating card 1 — entrega */}
          <div className="hero-card hero-card-1">
            <div className="hero-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <div>
              <div className="hero-card-title">Entrega Grátis</div>
              <div className="hero-card-sub">Acima de R$ 299</div>
            </div>
          </div>

          {/* Floating card 2 — avaliação */}
          <div className="hero-card hero-card-2">
            <div className="hero-stars">★★★★★</div>
            <div className="hero-rating-val">4.9 / 5.0</div>
            <div className="hero-card-sub" style={{marginTop:'0.2rem'}}>+2.000 avaliações</div>
          </div>
        </div>
      </div>
    </section>
  )
}
