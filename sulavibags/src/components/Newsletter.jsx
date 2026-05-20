import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSent(true)
      setEmail('')
    }
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="container">
        <div className="newsletter-box">
          <div className="nl-circle nl-circle-1" />
          <div className="nl-circle nl-circle-2" />

          <div className="nl-badge">✦ Newsletter exclusiva</div>

          <h2 className="nl-title">
            Fique por dentro das novidades
          </h2>
          <p className="nl-sub">
            Cadastre-se e receba lançamentos em primeira mão, ofertas exclusivas
            e dicas de estilo diretamente no seu e-mail.
          </p>

          {sent ? (
            <p style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', position: 'relative', zIndex: 1 }}>
              ✓ Obrigada! Você está na lista VIP 💜
            </p>
          ) : (
            <form className="nl-form" onSubmit={handleSubmit}>
              <input
                className="nl-input"
                type="email"
                required
                placeholder="Seu melhor e-mail..."
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button type="submit" className="nl-btn">Quero receber</button>
            </form>
          )}

          <p className="nl-note">Sem spam. Cancele quando quiser. 💜</p>
        </div>
      </div>
    </section>
  )
}
