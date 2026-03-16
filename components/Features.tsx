export default function Features() {
  return (
    <>
      <style>{`
        .features { background: var(--gray-50); }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 56px;
        }
        .feature-card {
          background: var(--white);
          border-radius: 20px;
          padding: 32px;
          border: 1px solid var(--gray-100);
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
        }
        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(135deg, transparent 0%, rgb(37 99 235 / 0.03) 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .feature-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
          border-color: var(--blue-100);
        }
        .feature-card:hover::before { opacity: 1; }
        .feature-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 20px;
          position: relative;
        }
        .feature-icon-wrap::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 16px;
          opacity: 0.2;
        }
        .feature-tag {
          display: inline-flex;
          padding: 4px 10px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .feature-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .feature-desc {
          font-size: 15px;
          color: var(--gray-500);
          line-height: 1.65;
          margin-bottom: 24px;
        }
        .feature-bullets {
          display: flex;
          flex-direction: column;
          gap: 8px;
          list-style: none;
        }
        .feature-bullets li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--gray-600);
        }
        .feature-bullets li::before {
          content: '';
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 10px;
        }
        .bullet-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ecfdf5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .feature-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          margin-top: 20px;
          transition: gap 0.2s;
        }
        .feature-link:hover { gap: 10px; }
        @media (max-width: 968px) {
          .features-grid { grid-template-columns: 1fr; max-width: 480px; margin-left: auto; margin-right: auto; }
        }
        @media (min-width: 601px) and (max-width: 968px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); max-width: none; }
        }
      `}</style>

      <section className="section features" id="features">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9l-3 2 .5-3.5L2 5l3.5-.5L7 1z" fill="currentColor"/>
              </svg>
              Características
            </span>
            <h2 className="section-title" style={{marginBottom:'16px'}}>
              Todo lo que tu tienda necesita<br />para vender más
            </h2>
            <p className="section-subtitle" style={{margin:'0 auto'}}>
              Tres herramientas en una plataforma. Instalación simple, resultados desde el primer día.
            </p>
          </div>

          <div className="features-grid">
            {/* Card 1 */}
            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-icon-wrap" style={{background:'#fef3c7'}}>
                <span>⭐</span>
              </div>
              <span className="feature-tag" style={{background:'#fef3c7', color:'#92400e'}}>Reviews</span>
              <h3 className="feature-title">Reviews automáticos</h3>
              <p className="feature-desc">
                Pedí reviews post-compra automáticamente. Mostralos con rich snippets para Google y aumentá tu credibilidad.
              </p>
              <ul className="feature-bullets">
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Email automático post-compra
                </li>
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Rich snippets para Google SEO
                </li>
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Widget embebible personalizable
                </li>
              </ul>
              <a href="#pricing" className="feature-link" style={{color:'#d97706'}}>
                Ver planes →
              </a>
            </div>

            {/* Card 2 */}
            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-icon-wrap" style={{background:'#dbeafe'}}>
                <span>🛒</span>
              </div>
              <span className="feature-tag" style={{background:'#dbeafe', color:'#1e40af'}}>Carrito</span>
              <h3 className="feature-title">Recuperador de carrito</h3>
              <p className="feature-desc">
                El 70% de los carritos se abandonan. Recuperalos con emails automáticos y convertí visitas en ventas.
              </p>
              <ul className="feature-bullets">
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Secuencia de emails automáticos
                </li>
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Timing optimizado para conversión
                </li>
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Reportes en tiempo real
                </li>
              </ul>
              <a href="#pricing" className="feature-link" style={{color:'var(--blue)'}}>
                Ver planes →
              </a>
            </div>

            {/* Card 3 */}
            <div className="feature-card reveal reveal-delay-3">
              <div className="feature-icon-wrap" style={{background:'#d1fae5'}}>
                <span>🛍️</span>
              </div>
              <span className="feature-tag" style={{background:'#d1fae5', color:'#065f46'}}>Google Shopping</span>
              <h3 className="feature-title">Google Merchant Sync</h3>
              <p className="feature-desc">
                Sincronizá tu catálogo con Google Shopping automáticamente. Más visibilidad, más tráfico orgánico gratuito.
              </p>
              <ul className="feature-bullets">
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Sync de catálogo automático
                </li>
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Feed XML/JSON actualizado
                </li>
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Tráfico orgánico desde Google
                </li>
              </ul>
              <a href="#pricing" className="feature-link" style={{color:'var(--green-dark)'}}>
                Ver planes →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
