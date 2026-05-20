const navLinks = ['Início', 'Coleções', 'Sobre nós', 'Blog', 'Contato']
const policyLinks = ['Política de Privacidade', 'Termos de Uso', 'Trocas e Devoluções', 'FAQ']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-name">SulaviBags</div>
            <div className="footer-brand-tag">Moda & Elegância</div>
            <p className="footer-brand-desc">
              Bolsas artesanais brasileiras com acabamento premium.
              Criadas para mulheres que celebram cada detalhe.
            </p>
            <div className="footer-social">
              {/* Instagram */}
              <a href="#" className="social-btn" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" className="social-btn" aria-label="TikTok">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.54V6.79a4.85 4.85 0 01-1.01-.1z"/>
                </svg>
              </a>
              {/* Pinterest */}
              <a href="#" className="social-btn" aria-label="Pinterest">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.16 1.22-5.16s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.51-.25 1.05.52 1.9 1.55 1.9 1.86 0 3.11-2.4 3.11-5.24 0-2.16-1.46-3.78-4.1-3.78-2.99 0-4.85 2.24-4.85 4.75 0 .86.25 1.47.64 1.94.18.21.2.3.14.54-.05.18-.16.62-.2.8-.07.26-.27.35-.5.25-1.4-.57-2.05-2.11-2.05-3.83 0-2.84 2.4-6.26 7.17-6.26 3.84 0 6.38 2.79 6.38 5.79 0 3.96-2.2 6.93-5.43 6.93-1.09 0-2.12-.59-2.47-1.25l-.67 2.59c-.24.92-.72 1.84-1.1 2.56.83.26 1.71.4 2.63.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/5511999999999" className="social-btn" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer-col-title">Navegação</div>
            <ul className="footer-links">
              {navLinks.map(l => <li key={l}><a href="#" className="footer-link">{l}</a></li>)}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <div className="footer-col-title">Políticas</div>
            <ul className="footer-links">
              {policyLinks.map(l => <li key={l}><a href="#" className="footer-link">{l}</a></li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Contato</div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              (11) 99999-9999
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              contato@sulavibags.com.br
            </div>
            <div className="contact-item" style={{ alignItems: 'flex-start' }}>
              <div className="contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              São Paulo, SP — Brasil
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} SulaviBags. Todos os direitos reservados.
          </p>
          <div className="footer-payments">
            <span className="pay-badge">PIX</span>
            <span className="pay-badge">VISA</span>
            <span className="pay-badge">MASTER</span>
            <span className="pay-badge">BOLETO</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
