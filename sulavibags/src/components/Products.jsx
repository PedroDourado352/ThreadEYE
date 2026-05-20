import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Bolsa Ametista',
    category: 'Couro Legítimo',
    price: 'R$ 489,90',
    badge: 'new',
    badgeLabel: 'Novo',
    stars: 5,
    reviews: 128,
    img: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Tote Lavanda',
    category: 'Casual',
    price: 'R$ 319,90',
    original: 'R$ 399,90',
    badge: 'sale',
    badgeLabel: '-20%',
    stars: 5,
    reviews: 94,
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Clutch Violeta',
    category: 'Festa & Gala',
    price: 'R$ 249,90',
    badge: 'best',
    badgeLabel: 'Mais Vendido',
    stars: 5,
    reviews: 217,
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Mini Lilla',
    category: 'Mini & Clutch',
    price: 'R$ 189,90',
    badge: 'new',
    badgeLabel: 'Novo',
    stars: 4,
    reviews: 63,
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
  },
]

const HeartIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

function Stars({ count }) {
  return (
    <span className="prod-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < count ? '#f59e0b' : '#d1d5db' }}>★</span>
      ))}
    </span>
  )
}

export default function Products() {
  const [wished, setWished] = useState([])

  const toggle = (id) =>
    setWished(v => v.includes(id) ? v.filter(x => x !== id) : [...v, id])

  return (
    <section className="products" id="produtos">
      <div className="container">
        <div className="products-header">
          <div>
            <div className="section-badge">✦ Em Destaque</div>
            <h2 className="section-title">Peças mais amadas</h2>
          </div>
          <a href="#" className="view-all">
            Ver todas <ArrowIcon />
          </a>
        </div>

        <div className="products-grid">
          {products.map(p => (
            <div className="prod-card" key={p.id}>
              <div className="prod-img-wrap">
                <img className="prod-img" src={p.img} alt={p.name} loading="lazy" />

                {p.badge && (
                  <span className={`prod-badge badge-${p.badge}`}>{p.badgeLabel}</span>
                )}

                <button
                  className="prod-wish"
                  aria-label="Favoritar"
                  onClick={() => toggle(p.id)}
                  style={{ color: wished.includes(p.id) ? '#ef4444' : undefined }}
                >
                  <HeartIcon />
                </button>

                <button className="prod-quick">Adicionar ao Carrinho</button>
              </div>

              <div className="prod-info">
                <div className="prod-cat">{p.category}</div>
                <div className="prod-name">{p.name}</div>
                <div className="prod-price-row">
                  <span className="prod-price">{p.price}</span>
                  {p.original && <span className="prod-original">{p.original}</span>}
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Stars count={p.stars} />
                  <span className="prod-reviews">({p.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
