'use client'

export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          padding: 160px 0 96px;
          background: linear-gradient(180deg, var(--blue-50) 0%, var(--white) 60%);
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgb(37 99 235 / 0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero::after {
          content: '';
          position: absolute;
          bottom: -100px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgb(16 185 129 / 0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .hero-content {
          position: relative;
          z-index: 1;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--white);
          border: 1.5px solid var(--blue-100);
          border-radius: 100px;
          padding: 7px 16px;
          font-size: 13px;
          font-weight: 500;
          color: var(--blue-dark);
          margin-bottom: 28px;
          box-shadow: 0 2px 8px rgb(37 99 235 / 0.1);
        }
        .hero-badge .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
          flex-shrink: 0;
        }
        .hero-title {
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.035em;
          color: var(--gray-900);
          margin-bottom: 24px;
        }
        .hero-title .highlight {
          background: linear-gradient(135deg, var(--blue) 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-subtitle {
          font-size: 18px;
          color: var(--gray-500);
          line-height: 1.7;
          margin-bottom: 36px;
          max-width: 480px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }
        .hero-trust {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--gray-500);
          flex-wrap: wrap;
        }
        .hero-trust-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--gray-300);
          flex-shrink: 0;
        }

        /* ── Dashboard mockup ── */
        .hero-visual {
          position: relative;
          z-index: 1;
        }
        .dashboard-card {
          background: var(--white);
          border-radius: 20px;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--gray-100);
          overflow: hidden;
          position: relative;
        }
        .dashboard-titlebar {
          background: var(--gray-50);
          border-bottom: 1px solid var(--gray-100);
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .titlebar-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .titlebar-url {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: 6px;
          padding: 4px 12px;
          font-size: 11px;
          color: var(--gray-400);
          margin-left: 8px;
          flex: 1;
          max-width: 180px;
        }
        .dashboard-body {
          padding: 20px;
        }
        .dash-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .dash-header-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--gray-900);
        }
        .dash-header-date {
          font-size: 11px;
          color: var(--gray-400);
          background: var(--gray-100);
          padding: 3px 8px;
          border-radius: 6px;
        }
        .dash-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 16px;
        }
        .dash-stat {
          background: var(--gray-50);
          border: 1px solid var(--gray-100);
          border-radius: 12px;
          padding: 12px;
        }
        .dash-stat-label {
          font-size: 10px;
          color: var(--gray-400);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        .dash-stat-value {
          font-size: 20px;
          font-weight: 800;
          color: var(--gray-900);
          line-height: 1;
        }
        .dash-stat-change {
          font-size: 10px;
          font-weight: 600;
          margin-top: 2px;
        }
        .dash-stat-change.up { color: var(--green); }
        .dash-stat-change.down { color: #ef4444; }
        /* chart */
        .dash-chart {
          background: var(--gray-50);
          border: 1px solid var(--gray-100);
          border-radius: 12px;
          padding: 14px;
          margin-bottom: 12px;
        }
        .dash-chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .dash-chart-title {
          font-size: 11px;
          font-weight: 600;
          color: var(--gray-600);
        }
        .dash-chart-legend {
          display: flex;
          gap: 10px;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          color: var(--gray-400);
        }
        .legend-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        .chart-bars {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          height: 60px;
        }
        .chart-bar-group {
          display: flex;
          gap: 2px;
          flex: 1;
          align-items: flex-end;
        }
        .chart-bar {
          flex: 1;
          border-radius: 4px 4px 0 0;
          transition: opacity 0.2s;
        }
        .chart-bar:hover { opacity: 0.8; }
        .chart-labels {
          display: flex;
          gap: 6px;
          margin-top: 6px;
        }
        .chart-label {
          flex: 1;
          text-align: center;
          font-size: 9px;
          color: var(--gray-400);
        }
        /* reviews list */
        .dash-reviews {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .dash-review-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: var(--white);
          border: 1px solid var(--gray-100);
          border-radius: 10px;
        }
        .review-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          color: var(--white);
          flex-shrink: 0;
        }
        .review-info { flex: 1; min-width: 0; }
        .review-name {
          font-size: 11px;
          font-weight: 600;
          color: var(--gray-800);
        }
        .review-product {
          font-size: 10px;
          color: var(--gray-400);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .review-stars {
          display: flex;
          gap: 1px;
          flex-shrink: 0;
        }
        .star-icon { font-size: 10px; }
        /* floating badges */
        .float-badge {
          position: absolute;
          background: var(--white);
          border-radius: 12px;
          padding: 10px 14px;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--gray-100);
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: float-y 4s ease-in-out infinite;
        }
        .float-badge-1 {
          top: -16px;
          right: -24px;
          animation-delay: 0s;
        }
        .float-badge-2 {
          bottom: 40px;
          left: -32px;
          animation-delay: 2s;
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @media (max-width: 968px) {
          .hero { padding: 120px 0 64px; }
          .hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .hero-visual { order: -1; max-width: 480px; margin: 0 auto; }
          .float-badge { display: none; }
        }
        @media (max-width: 480px) {
          .hero-actions { flex-direction: column; }
          .hero-actions .btn { width: 100%; justify-content: center; }
          .dash-stats { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-grid">
            {/* Content */}
            <div className="hero-content reveal">
              <div className="hero-badge">
                <span className="dot" />
                Compatible con Tiendanube, Jumpseller y WooCommerce
              </div>

              <h1 className="hero-title">
                Convertí más en tu ecommerce{' '}
                <span className="highlight">latinoamericano</span>
              </h1>

              <p className="hero-subtitle">
                Reviews automáticos, recuperador de carrito y Google Merchant Sync en una sola herramienta.
                En español, con soporte local.
              </p>

              <div className="hero-actions">
                <a href="#cta" className="btn btn-primary btn-lg">
                  Empezar gratis
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#how-it-works" className="btn btn-outline btn-lg">
                  Ver cómo funciona
                </a>
              </div>

              <div className="hero-trust">
                <span>Sin tarjeta de crédito</span>
                <span className="hero-trust-dot" />
                <span>Setup en 5 minutos</span>
                <span className="hero-trust-dot" />
                <span>Soporte en español</span>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="hero-visual reveal reveal-delay-2">
              <div style={{position:'relative'}}>
                <div className="dashboard-card">
                  <div className="dashboard-titlebar">
                    <span className="titlebar-dot" style={{background:'#ff5f57'}} />
                    <span className="titlebar-dot" style={{background:'#febc2e'}} />
                    <span className="titlebar-dot" style={{background:'#28c840'}} />
                    <span className="titlebar-url">app.vincula.io/dashboard</span>
                  </div>
                  <div className="dashboard-body">
                    <div className="dash-header">
                      <span className="dash-header-title">Dashboard</span>
                      <span className="dash-header-date">Mar 2025</span>
                    </div>

                    {/* Stats */}
                    <div className="dash-stats">
                      <div className="dash-stat">
                        <div className="dash-stat-label">Reviews</div>
                        <div className="dash-stat-value">284</div>
                        <div className="dash-stat-change up">↑ 18%</div>
                      </div>
                      <div className="dash-stat">
                        <div className="dash-stat-label">Recuperados</div>
                        <div className="dash-stat-value">47</div>
                        <div className="dash-stat-change up">↑ 32%</div>
                      </div>
                      <div className="dash-stat">
                        <div className="dash-stat-label">$ Mes</div>
                        <div className="dash-stat-value" style={{fontSize:'17px'}}>$3.2k</div>
                        <div className="dash-stat-change up">↑ 24%</div>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="dash-chart">
                      <div className="dash-chart-header">
                        <span className="dash-chart-title">Conversiones últimas 4 semanas</span>
                        <div className="dash-chart-legend">
                          <span className="legend-item">
                            <span className="legend-dot" style={{background:'var(--blue)'}} />
                            Reviews
                          </span>
                          <span className="legend-item">
                            <span className="legend-dot" style={{background:'var(--green)'}} />
                            Carrito
                          </span>
                        </div>
                      </div>
                      <div className="chart-bars">
                        {[
                          {r:45,c:30},{r:55,c:38},{r:40,c:25},{r:70,c:50},{r:58,c:42},{r:80,c:55},{r:65,c:40},{r:90,c:65}
                        ].map((bar, i) => (
                          <div key={i} className="chart-bar-group">
                            <div className="chart-bar" style={{height:`${bar.r}%`, background:'var(--blue)', opacity:0.8}} />
                            <div className="chart-bar" style={{height:`${bar.c}%`, background:'var(--green)', opacity:0.8}} />
                          </div>
                        ))}
                      </div>
                      <div className="chart-labels">
                        {['S1','S2','S3','S4','S5','S6','S7','S8'].map(l => (
                          <span key={l} className="chart-label">{l}</span>
                        ))}
                      </div>
                    </div>

                    {/* Recent reviews */}
                    <div className="dash-reviews">
                      {[
                        {name:'María G.', product:'Zapatillas Running', stars:5, color:'#2563EB', initial:'MG'},
                        {name:'Carlos M.', product:'Remera Oversize', stars:5, color:'#7c3aed', initial:'CM'},
                        {name:'Ana P.', product:'Mochila Urbana', stars:4, color:'#0891b2', initial:'AP'},
                      ].map(r => (
                        <div key={r.name} className="dash-review-item">
                          <div className="review-avatar" style={{background: r.color}}>{r.initial}</div>
                          <div className="review-info">
                            <div className="review-name">{r.name}</div>
                            <div className="review-product">{r.product}</div>
                          </div>
                          <div className="review-stars">
                            {Array.from({length:5}).map((_,i) => (
                              <span key={i} className="star-icon">{i < r.stars ? '⭐' : '☆'}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="float-badge float-badge-1">
                  <span style={{fontSize:'18px'}}>🛒</span>
                  <div>
                    <div style={{fontSize:'11px',color:'var(--gray-500)'}}>Carrito recuperado</div>
                    <div style={{color:'var(--green)',fontWeight:700}}>+$89.00</div>
                  </div>
                </div>
                <div className="float-badge float-badge-2">
                  <span style={{fontSize:'18px'}}>⭐</span>
                  <div>
                    <div style={{fontSize:'11px',color:'var(--gray-500)'}}>Nuevo review</div>
                    <div style={{color:'var(--blue)'}}>5 estrellas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
