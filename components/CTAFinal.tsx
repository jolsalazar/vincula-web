'use client'

import { useState } from 'react'

export default function CTAFinal() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <>
      <style>{`
        .cta-final {
          background: linear-gradient(135deg, #1e40af 0%, #2563EB 40%, #1d4ed8 70%, #312e81 100%);
          position: relative;
          overflow: hidden;
        }
        .cta-final::before {
          content: '';
          position: absolute;
          top: -100px;
          left: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgb(99 102 241 / 0.3) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-final::after {
          content: '';
          position: absolute;
          bottom: -150px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgb(16 185 129 / 0.2) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: 620px;
          margin: 0 auto;
          text-align: center;
        }
        .cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.9);
          border-radius: 100px;
          padding: 7px 16px;
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 28px;
          backdrop-filter: blur(10px);
        }
        .cta-title {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 900;
          color: var(--white);
          line-height: 1.1;
          letter-spacing: -0.035em;
          margin-bottom: 20px;
        }
        .cta-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,0.75);
          line-height: 1.65;
          margin-bottom: 44px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }
        .cta-form {
          display: flex;
          gap: 10px;
          max-width: 480px;
          margin: 0 auto 28px;
        }
        .cta-input {
          flex: 1;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.25);
          border-radius: 14px;
          padding: 14px 20px;
          font-size: 15px;
          color: var(--white);
          outline: none;
          transition: all 0.2s;
          font-family: inherit;
          backdrop-filter: blur(10px);
        }
        .cta-input::placeholder { color: rgba(255,255,255,0.45); }
        .cta-input:focus {
          border-color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.15);
          box-shadow: 0 0 0 4px rgba(255,255,255,0.1);
        }
        .cta-btn {
          background: var(--white);
          color: var(--blue);
          font-weight: 700;
          padding: 14px 24px;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 15px;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .cta-btn:hover {
          background: var(--blue-50);
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .cta-btn:active { transform: none; }
        .cta-micro {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .cta-micro-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 13px;
          color: rgba(255,255,255,0.6);
        }
        .cta-micro-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
        }
        /* Success state */
        .cta-success {
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.25);
          border-radius: 20px;
          padding: 28px 32px;
          max-width: 480px;
          margin: 0 auto;
          backdrop-filter: blur(10px);
        }
        .cta-success-icon {
          font-size: 40px;
          margin-bottom: 12px;
        }
        .cta-success-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 8px;
        }
        .cta-success-text {
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
        }
        /* Floating logos */
        .cta-logos {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .cta-logo-chip {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          backdrop-filter: blur(10px);
        }
        @media (max-width: 540px) {
          .cta-form { flex-direction: column; }
          .cta-btn { width: 100%; }
          .cta-input { text-align: center; }
        }
      `}</style>

      <section className="section cta-final" id="cta">
        <div className="container">
          <div className="cta-inner reveal">
            <div className="cta-eyebrow">
              <span style={{fontSize:'16px'}}>🚀</span>
              Acceso anticipado · Beta privada
            </div>

            <h2 className="cta-title">
              Empieza hoy y<br />vende más mañana
            </h2>

            <p className="cta-subtitle">
              Únete a los primeros ecommerces que están usando Vincula para vender más.
            </p>

            <div className="cta-logos">
              {['Desarrollo propio', 'WooCommerce', 'Tiendanube', 'Shopify'].map(p => (
                <span key={p} className="cta-logo-chip">{p}</span>
              ))}
            </div>

            {submitted ? (
              <div className="cta-success">
                <div className="cta-success-icon">🎉</div>
                <div className="cta-success-title">¡Genial! Recibimos tu solicitud</div>
                <p className="cta-success-text">
                  Te contactamos a <strong style={{color:'#fff'}}>{email}</strong> en las próximas 24 horas con tu acceso anticipado.
                </p>
              </div>
            ) : (
              <form className="cta-form" onSubmit={handleSubmit} noValidate>
                <input
                  type="email"
                  className="cta-input"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  aria-label="Email"
                />
                <button type="submit" className="cta-btn">
                  Quiero acceso →
                </button>
              </form>
            )}

            {!submitted && (
              <div className="cta-micro">
                <span className="cta-micro-item">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l2.5 2.5 5.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Cancela cuando quieras
                </span>
                <span className="cta-micro-dot" />
                <span className="cta-micro-item">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l2.5 2.5 5.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Soporte en español
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
