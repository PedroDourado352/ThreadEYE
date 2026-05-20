import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = ['Início', 'Coleções', 'Sobre', 'Contato']

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#" className="navbar-logo">
            <span className="navbar-logo-name">SulaviBags</span>
            <span className="navbar-logo-tag">Moda &amp; Elegância</span>
          </a>

          <ul className="navbar-links">
            {links.map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace('ç','c').replace('õ','o')}`} className="navbar-link">{l}</a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button className="navbar-icon-btn" aria-label="Buscar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
            <button className="navbar-icon-btn" aria-label="Carrinho">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <span className="cart-badge">2</span>
            </button>
            <a href="#colecoes" className="navbar-shop">Ver Coleção</a>
            <button
              className={`navbar-hamburger${open ? ' open' : ''}`}
              aria-label="Menu"
              onClick={() => setOpen(v => !v)}
            >
              <span className="h-line" />
              <span className="h-line" />
              <span className="h-line" />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase().replace('ç','c').replace('õ','o')}`}
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            {l}
          </a>
        ))}
        <a href="#colecoes" className="btn-primary" onClick={() => setOpen(false)}>
          Ver Coleção
        </a>
      </div>
    </>
  )
}
