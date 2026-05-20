const testimonials = [
  {
    name: 'Mariana Costa',
    location: 'São Paulo, SP',
    avatar: 'https://i.pravatar.cc/100?img=47',
    stars: 5,
    text: 'Recebi a Bolsa Ametista e fiquei completamente apaixonada! O acabamento é impecável e o couro tem um cheiro incrível. Com certeza comprarei mais peças.',
  },
  {
    name: 'Ana Luiza Ferreira',
    location: 'Rio de Janeiro, RJ',
    avatar: 'https://i.pravatar.cc/100?img=45',
    stars: 5,
    text: 'A melhor compra que fiz esse ano. A embalagem já é um presente por si só. Uso a Clutch Violeta em todos os eventos e sempre recebo elogios. Recomendo de olhos fechados!',
    featured: true,
  },
  {
    name: 'Juliana Mendes',
    location: 'Curitiba, PR',
    avatar: 'https://i.pravatar.cc/100?img=44',
    stars: 5,
    text: 'Atendimento incrível e entrega super rápida. A qualidade supera em muito o preço. A Tote Lavanda é perfeita para o trabalho — espaçosa e elegante.',
  },
]

function Stars({ count }) {
  return (
    <div className="testi-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < count ? '#f59e0b' : 'rgba(255,255,255,0.3)' }}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="depoimentos">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-badge">✦ Depoimentos</div>
          <h2 className="section-title">O que nossas clientes dizem</h2>
          <p className="section-subtitle">
            Mais de 2.000 mulheres já descobriram o prazer de carregar uma SulaviBag.
          </p>
        </div>

        <div className="testi-grid">
          {testimonials.map(t => (
            <div key={t.name} className={`testi-card${t.featured ? ' featured' : ''}`}>
              <span className="testi-quote">"</span>
              <Stars count={t.stars} />
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <img className="testi-avatar" src={t.avatar} alt={t.name} />
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-loc">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
