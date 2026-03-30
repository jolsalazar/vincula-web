export default function Features() {
  return (
    <>
      <style>{`
        .features { background: var(--gray-50); }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
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
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr; max-width: 480px; margin-left: auto; margin-right: auto; }
        }
        @media (min-width: 601px) and (max-width: 768px) {
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
              Todo lo que necesitas para<br />activar el poder de las reviews
            </h2>
            <p className="section-subtitle" style={{margin:'0 auto'}}>
              Un sistema completo que recolecta, muestra y aprovecha las reseñas de tus clientes.
              Simple de instalar, automático de usar.
            </p>
          </div>

          <div className="features-grid">
            {/* Card 1: Recolección */}
            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-icon-wrap" style={{background:'#fef3c7'}}>
                <span>✉️</span>
              </div>
              <span className="feature-tag" style={{background:'#fef3c7', color:'#92400e'}}>Recolección</span>
              <h3 className="feature-title">Reviews automáticos post-compra</h3>
              <p className="feature-desc">
                Cuando alguien compra en tu tienda, Ouivi le envía un email pidiendo su opinión.
                Sin intervención manual, sin recordarlo tú.
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
                  Recordatorio si no respondió
                </li>
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Formulario simple y rápido de completar
                </li>
              </ul>
              <a href="#pricing" className="feature-link" style={{color:'#d97706'}}>
                Ver planes →
              </a>
            </div>

            {/* Card 2: Widget */}
            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-icon-wrap" style={{background:'#dbeafe'}}>
                <span>⭐</span>
              </div>
              <span className="feature-tag" style={{background:'#dbeafe', color:'#1e40af'}}>Widget</span>
              <h3 className="feature-title">Reviews visibles en tu tienda</h3>
              <p className="feature-desc">
                Muestra las reseñas directamente en tu página de producto con un widget embebible
                que se adapta al diseño de tu tienda.
              </p>
              <ul className="feature-bullets">
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Widget personalizable a tu marca
                </li>
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Responsive, rápido y sin afectar performance
                </li>
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Rating promedio y distribución de estrellas
                </li>
              </ul>
              <a href="#pricing" className="feature-link" style={{color:'var(--blue)'}}>
                Ver planes →
              </a>
            </div>

            {/* Card 3: SEO */}
            <div className="feature-card reveal reveal-delay-3">
              <div className="feature-icon-wrap" style={{background:'#d1fae5'}}>
                <span>🔍</span>
              </div>
              <span className="feature-tag" style={{background:'#d1fae5', color:'#065f46'}}>SEO</span>
              <h3 className="feature-title">Valoraciones visibles en Google</h3>
              <p className="feature-desc">
                Tus reviews generan rich snippets automáticamente. Tus productos aparecen con
                estrellas en los resultados de búsqueda, lo que aumenta el porcentaje de clicks.
              </p>
              <ul className="feature-bullets">
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Rich snippets para Google automáticos
                </li>
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Más clicks desde búsquedas orgánicas
                </li>
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Se genera al publicar cada review
                </li>
              </ul>
              <a href="#pricing" className="feature-link" style={{color:'var(--green-dark)'}}>
                Ver planes →
              </a>
            </div>

            {/* Card 4: Resumen IA */}
            <div className="feature-card reveal reveal-delay-4">
              <div className="feature-icon-wrap" style={{background:'#f3e8ff'}}>
                <span>✨</span>
              </div>
              <span className="feature-tag" style={{background:'#f3e8ff', color:'#6b21a8'}}>IA</span>
              <h3 className="feature-title">Resumen inteligente de opiniones</h3>
              <p className="feature-desc">
                La IA analiza todos los comentarios de un producto y genera un resumen claro
                con los puntos fuertes y débiles. Tus compradores entienden la opinión general
                de un vistazo, igual que en Mercado Libre.
              </p>
              <ul className="feature-bullets">
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Resumen generado a partir de reviews reales
                </li>
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Destaca pros y contras mencionados por clientes
                </li>
                <li>
                  <span className="bullet-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Se actualiza automáticamente con cada nuevo review
                </li>
              </ul>
              <a href="#pricing" className="feature-link" style={{color:'#7c3aed'}}>
                Ver planes →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
