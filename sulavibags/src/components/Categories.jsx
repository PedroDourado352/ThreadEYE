const categories = [
  {
    name: 'Casual',
    count: '48 peças',
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Festa & Gala',
    count: '32 peças',
    img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Couro Legítimo',
    count: '27 peças',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Mini & Clutch',
    count: '41 peças',
    img: 'https://images.unsplash.com/photo-1575032617751-6ddec2089882?auto=format&fit=crop&w=600&q=80',
  },
]

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

export default function Categories() {
  return (
    <section className="categories" id="colecoes">
      <div className="container">
        <div className="categories-header">
          <div className="section-badge">✦ Categorias</div>
          <h2 className="section-title">Explore por estilo</h2>
          <p className="section-subtitle">
            De bolsas casuais a peças de festa — encontre a que combina com cada momento da sua vida.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map(cat => (
            <a href="#" key={cat.name} className="cat-card">
              <img className="cat-img" src={cat.img} alt={cat.name} loading="lazy" />
              <div className="cat-overlay" />
              <div className="cat-arrow"><ArrowIcon /></div>
              <div className="cat-info">
                <div className="cat-name">{cat.name}</div>
                <div className="cat-count">{cat.count}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
