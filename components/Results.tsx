export default function Results() {
  return (
    <>
      <style>{`
        .results {
          background: var(--gray-900);
          position: relative;
          overflow: hidden;
        }
        .results::before {
          content: '';
          position: absolute;
          top: -150px; left: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgb(37 99 235 / 0.2) 0%, transparent 70%);
          pointer-events: none;
        }
        .results::after {
          content: '';
          position: absolute;
          bottom: -100px; right: -100px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgb(16 185 129 / 0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .results-inner { position: relative; z-index: 1; }
        .results-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 20px;
        }
        .results-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .results-title span {
          color: var(--green-light);
        }
        .results-subtitle {
          font-size: 17px;
          color: rgba(255,255,255,0.55);
          max-width: 560px;
          line-height: 1.65;
          margin-bottom: 56px;
        }
        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .result-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 28px;
          transition: all 0.3s;
        }
        .result-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.18);
          transform: translateY(-3px);
        }
        .result-icon {
          font-size: 28px;
          margin-bottom: 16px;
          display: block;
        }
        .result-card-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .result-card-body {
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          line-height: 1.65;
          margin-bottom: 20px;
        }
        .result-highlight {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-left: 3px solid var(--green);
          border-radius: 0 10px 10px 0;
          padding: 12px 14px;
        }
        .result-highlight-value {
          font-size: 22px;
          font-weight: 800;
          color: var(--green-light);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .result-highlight-label {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          margin-top: 3px;
        }
        /* Bottom math row */
        .results-math {
          margin-top: 40px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .math-item {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 120px;
        }
        .math-value {
          font-size: 28px;
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .math-label {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          margin-top: 4px;
        }
        .math-separator {
          font-size: 28px;
          color: rgba(255,255,255,0.15);
          font-weight: 300;
        }
        .math-result .math-value {
          color: var(--green-light);
        }
        .math-note {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          flex: 2;
          line-height: 1.5;
          min-width: 200px;
        }
        @media (max-width: 768px) {
          .results-grid { grid-template-columns: 1fr; }
          .results-math { flex-direction: column; align-items: flex-start; }
          .math-separator { display: none; }
        }
        @media (min-width: 601px) and (max-width: 968px) {
          .results-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <section className="section results" id="results">
        <div className="container">
          <div className="results-inner">
            <div className="reveal">
              <span className="results-eyebrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 9l3-3 2 2 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Por qué importan los reviews
              </span>
              <h2 className="results-title">
                Las tiendas con reviews<br />
                <span>convierten más.</span>
              </h2>
              <p className="results-subtitle">
                La prueba social es el factor que más influye en la decisión de compra.
                Vincula te ayuda a construirla de forma automática, sin esfuerzo.
              </p>
            </div>

            <div className="results-grid">
              <div className="result-card reveal reveal-delay-1">
                <span className="result-icon">🛒</span>
                <h3 className="result-card-title">Más confianza, más ventas</h3>
                <p className="result-card-body">
                  El visitante que llega a tu tienda por primera vez no te conoce.
                  Ver reviews reales de otros compradores es lo que convierte la duda en compra.
                </p>
                <div className="result-highlight">
                  <div className="result-highlight-value">+30%</div>
                  <div className="result-highlight-label">tasa de conversión con reviews activos</div>
                </div>
              </div>

              <div className="result-card reveal reveal-delay-2">
                <span className="result-icon">🔍</span>
                <h3 className="result-card-title">Estrellas en Google, más clicks</h3>
                <p className="result-card-body">
                  Con rich snippets activos, tus productos aparecen con rating de estrellas
                  en los resultados de búsqueda. Más visibilidad, sin pagar más publicidad.
                </p>
                <div className="result-highlight">
                  <div className="result-highlight-value">+18%</div>
                  <div className="result-highlight-label">más clicks desde resultados orgánicos</div>
                </div>
              </div>

              <div className="result-card reveal reveal-delay-3">
                <span className="result-icon">⚡</span>
                <h3 className="result-card-title">Reviews que llegan solos</h3>
                <p className="result-card-body">
                  Cada compra dispara el proceso automáticamente. Email, recordatorio,
                  publicación. Tú no haces nada. Los reviews se acumulan mientras trabajás
                  en tu negocio.
                </p>
                <div className="result-highlight">
                  <div className="result-highlight-value">0</div>
                  <div className="result-highlight-label">intervención manual requerida</div>
                </div>
              </div>
            </div>

            {/* Math row */}
            <div className="results-math reveal">
              <div className="math-item">
                <span className="math-value">1,000</span>
                <span className="math-label">visitas/mes a tu tienda</span>
              </div>
              <span className="math-separator">×</span>
              <div className="math-item">
                <span className="math-value">+30%</span>
                <span className="math-label">más conversión con reviews</span>
              </div>
              <span className="math-separator">=</span>
              <div className="math-item math-result">
                <span className="math-value">+300 ventas</span>
                <span className="math-label">adicionales con el mismo tráfico</span>
              </div>
              <p className="math-note">
                Reviews activos no requieren más inversión en publicidad.
                El tráfico que ya tenés convierte mejor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
