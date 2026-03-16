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
                Resultados reales
              </span>
              <h2 className="results-title">
                ¿Cuánto dinero estás<br />
                <span>dejando sobre la mesa?</span>
              </h2>
              <p className="results-subtitle">
                Tu tienda ya tiene el tráfico. Vincula convierte ese tráfico en ventas que hoy se están yendo.
              </p>
            </div>

            <div className="results-grid">
              <div className="result-card reveal reveal-delay-1">
                <span className="result-icon">🛒</span>
                <h3 className="result-card-title">El carrito abandonado ya casi era tuyo</h3>
                <p className="result-card-body">
                  Un cliente que llega al carrito ya eligió tu producto. Solo necesita el empujón correcto en el momento exacto.
                </p>
                <div className="result-highlight">
                  <div className="result-highlight-value">+$890/mes</div>
                  <div className="result-highlight-label">promedio recuperado por tienda en beta</div>
                </div>
              </div>

              <div className="result-card reveal reveal-delay-2">
                <span className="result-icon">⭐</span>
                <h3 className="result-card-title">Los reviews generan ventas mientras dormís</h3>
                <p className="result-card-body">
                  Las tiendas con más de 50 reviews convierten un 30% más que las que no tienen ninguno. La confianza se construye automáticamente.
                </p>
                <div className="result-highlight">
                  <div className="result-highlight-value">+30%</div>
                  <div className="result-highlight-label">tasa de conversión con reviews activos</div>
                </div>
              </div>

              <div className="result-card reveal reveal-delay-3">
                <span className="result-icon">🛍️</span>
                <h3 className="result-card-title">Google Shopping: tráfico sin pagar publicidad</h3>
                <p className="result-card-body">
                  Tus productos aparecen en Google cuando alguien los busca. Sin costo por clic, sin campañas, sin agencias.
                </p>
                <div className="result-highlight">
                  <div className="result-highlight-value">Gratis</div>
                  <div className="result-highlight-label">tráfico orgánico desde Google Shopping</div>
                </div>
              </div>
            </div>

            {/* Math row */}
            <div className="results-math reveal">
              <div className="math-item">
                <span className="math-value">$5,000</span>
                <span className="math-label">ventas mensuales actuales</span>
              </div>
              <span className="math-separator">×</span>
              <div className="math-item">
                <span className="math-value">15%</span>
                <span className="math-label">de carritos recuperados</span>
              </div>
              <span className="math-separator">=</span>
              <div className="math-item math-result">
                <span className="math-value">+$750/mes</span>
                <span className="math-label">ingresos adicionales</span>
              </div>
              <p className="math-note">
                Con un plan de $35/mes, el recuperador de carrito se paga solo en las primeras 24 horas de uso.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
