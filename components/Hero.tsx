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
          top: -200px; right: -200px;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgb(37 99 235 / 0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero::after {
          content: '';
          position: absolute;
          bottom: -100px; left: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgb(16 185 129 / 0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .hero-content { position: relative; z-index: 1; }
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
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--green);
          flex-shrink: 0;
          animation: pulse-badge 2s ease-in-out infinite;
        }
        @keyframes pulse-badge {
          0%,100% { box-shadow: 0 0 0 0 rgb(16 185 129 / 0.4); }
          50% { box-shadow: 0 0 0 5px rgb(16 185 129 / 0); }
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
          margin-bottom: 36px;
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
          width: 3px; height: 3px;
          border-radius: 50%;
          background: var(--gray-300);
          flex-shrink: 0;
        }
        .hero-stats {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          margin-top: 36px;
          padding-top: 28px;
          border-top: 1px solid var(--gray-100);
        }
        .hero-stat-item {
          display: flex;
          flex-direction: column;
        }
        .hero-stat-value {
          font-size: 22px;
          font-weight: 800;
          color: var(--gray-900);
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 12px;
          color: var(--gray-400);
          margin-top: 3px;
          font-weight: 500;
        }
        /* Dashboard mockup */
        .hero-visual { position: relative; z-index: 1; }
        .dashboard-card {
          background: var(--white);
          border-radius: 20px;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--gray-100);
          overflow: hidden;
        }
        .dashboard-titlebar {
          background: var(--gray-50);
          border-bottom: 1px solid var(--gray-100);
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .titlebar-dot { width: 11px; height: 11px; border-radius: 50%; }
        .titlebar-url {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: 6px;
          padding: 4px 12px;
          font-size: 11px;
          color: var(--gray-400);
          margin-left: 8px;
          flex: 1;
          max-width: 200px;
        }
        .dashboard-body { padding: 20px; }
        .dash-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .dash-header-title { font-size: 15px; font-weight: 700; color: var(--gray-900); }
        .dash-header-date {
          font-size: 11px; color: var(--gray-400);
          background: var(--gray-100); padding: 3px 8px; border-radius: 6px;
        }
        /* Rating summary */
        .dash-rating-summary {
          background: var(--gray-50);
          border: 1px solid var(--gray-100);
          border-radius: 14px;
          padding: 16px;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .dash-rating-big {
          text-align: center;
          flex-shrink: 0;
        }
        .dash-rating-number {
          font-size: 36px;
          font-weight: 900;
          color: var(--gray-900);
          line-height: 1;
          letter-spacing: -0.04em;
        }
        .dash-rating-stars {
          display: flex;
          gap: 2px;
          justify-content: center;
          margin-top: 4px;
        }
        .dash-rating-total {
          font-size: 10px;
          color: var(--gray-400);
          margin-top: 2px;
          font-weight: 500;
        }
        .dash-rating-bars {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .dash-bar-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 9px;
          color: var(--gray-400);
        }
        .dash-bar-track {
          flex: 1;
          height: 4px;
          background: var(--gray-200);
          border-radius: 2px;
          overflow: hidden;
        }
        .dash-bar-fill {
          height: 100%;
          background: #fbbf24;
          border-radius: 2px;
        }
        /* Stats row */
        .dash-stats-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 14px;
        }
        .dash-stat {
          background: var(--gray-50);
          border: 1px solid var(--gray-100);
          border-radius: 12px;
          padding: 12px;
        }
        .dash-stat-label { font-size: 10px; color: var(--gray-400); font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
        .dash-stat-value { font-size: 20px; font-weight: 800; color: var(--gray-900); line-height: 1; }
        .dash-stat-change { font-size: 10px; font-weight: 600; margin-top: 2px; }
        .dash-stat-change.up { color: var(--green); }
        .dash-reviews { display: flex; flex-direction: column; gap: 8px; }
        .dash-review-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px; background: var(--white);
          border: 1px solid var(--gray-100); border-radius: 10px;
        }
        .review-avatar {
          width: 28px; height: 28px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700; color: var(--white); flex-shrink: 0;
        }
        .review-info { flex: 1; min-width: 0; }
        .review-name { font-size: 11px; font-weight: 600; color: var(--gray-800); }
        .review-text { font-size: 10px; color: var(--gray-400); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .review-stars { display: flex; gap: 1px; flex-shrink: 0; }
        .star-icon { font-size: 10px; }
        .float-badge {
          position: absolute;
          background: var(--white);
          border-radius: 12px;
          padding: 10px 14px;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--gray-100);
          font-size: 12px; font-weight: 600;
          display: flex; align-items: center; gap: 8px;
          animation: float-y 4s ease-in-out infinite;
        }
        .float-badge-1 { top: -16px; right: -24px; animation-delay: 0s; }
        .float-badge-2 { bottom: 40px; left: -32px; animation-delay: 2s; }
        @keyframes float-y {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @media (max-width: 968px) {
          .hero { padding: 120px 0 64px; }
          .hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .hero-visual { order: -1; max-width: 480px; margin: 0 auto; }
          .float-badge { display: none; }
          .hero-stats { gap: 20px; }
        }
        @media (max-width: 480px) {
          .hero-actions { flex-direction: column; }
          .hero-actions .btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-grid">
            {/* Content */}
            <div className="hero-content reveal">
              <div className="hero-badge">
                <span className="dot" />
                Reviews automáticos para tu tienda
              </div>

              <h1 className="hero-title">
                Convierte cada compra<br />
                en una reseña que<br />
                <span className="highlight">genera confianza.</span>
              </h1>

              <p className="hero-subtitle">
                Vincula recolecta reviews reales de tus clientes, los muestra en tu tienda
                y los usa para mejorar tu visibilidad en Google. Automático, desde el primer día.
              </p>

              <div className="hero-actions">
                <a href="#cta" className="btn btn-primary btn-lg">
                  Solicitar acceso
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#how-it-works" className="btn btn-outline btn-lg">
                  Ver cómo funciona
                </a>
              </div>

              <div className="hero-trust">
                <span>Setup en 5 minutos</span>
                <span className="hero-trust-dot" />
                <span>Sin desarrolladores</span>
                <span className="hero-trust-dot" />
                <span>Soporte en español</span>
              </div>

              <div className="hero-stats">
                <div className="hero-stat-item">
                  <span className="hero-stat-value">+2,400</span>
                  <span className="hero-stat-label">reviews recolectados</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-value">4.8/5</span>
                  <span className="hero-stat-label">rating promedio</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-value">+30%</span>
                  <span className="hero-stat-label">más conversión</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-value">3 min</span>
                  <span className="hero-stat-label">instalación promedio</span>
                </div>
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
                    <span className="titlebar-url">app.vincula.io/reviews</span>
                  </div>
                  <div className="dashboard-body">
                    <div className="dash-header">
                      <span className="dash-header-title">Reviews</span>
                      <span className="dash-header-date">Mar 2025</span>
                    </div>

                    {/* Rating summary */}
                    <div className="dash-rating-summary">
                      <div className="dash-rating-big">
                        <div className="dash-rating-number">4.8</div>
                        <div className="dash-rating-stars">
                          {[1,2,3,4,5].map(i => (
                            <span key={i} style={{fontSize:'12px'}}>⭐</span>
                          ))}
                        </div>
                        <div className="dash-rating-total">284 reviews</div>
                      </div>
                      <div className="dash-rating-bars">
                        {[{stars:5,pct:78},{stars:4,pct:14},{stars:3,pct:5},{stars:2,pct:2},{stars:1,pct:1}].map(r => (
                          <div key={r.stars} className="dash-bar-row">
                            <span style={{minWidth:'6px'}}>{r.stars}</span>
                            <div className="dash-bar-track">
                              <div className="dash-bar-fill" style={{width:`${r.pct}%`}} />
                            </div>
                            <span style={{minWidth:'22px'}}>{r.pct}%</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="dash-stats-row">
                      <div className="dash-stat">
                        <div className="dash-stat-label">Este mes</div>
                        <div className="dash-stat-value">47</div>
                        <div className="dash-stat-change up">↑ 18% reviews</div>
                      </div>
                      <div className="dash-stat">
                        <div className="dash-stat-label">Tasa respuesta</div>
                        <div className="dash-stat-value">34%</div>
                        <div className="dash-stat-change up">↑ emails enviados</div>
                      </div>
                    </div>

                    {/* Recent reviews */}
                    <div className="dash-reviews">
                      {[
                        {name:'María G.', text:'"Excelente calidad, llegó rápido"', stars:5, color:'#2563EB', initial:'MG'},
                        {name:'Carlos M.', text:'"Justo lo que buscaba, muy bueno"', stars:5, color:'#7c3aed', initial:'CM'},
                        {name:'Ana P.', text:'"Buen producto, recomiendo"', stars:4, color:'#0891b2', initial:'AP'},
                      ].map(r => (
                        <div key={r.name} className="dash-review-item">
                          <div className="review-avatar" style={{background: r.color}}>{r.initial}</div>
                          <div className="review-info">
                            <div className="review-name">{r.name}</div>
                            <div className="review-text">{r.text}</div>
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

                <div className="float-badge float-badge-1">
                  <span style={{fontSize:'18px'}}>⭐</span>
                  <div>
                    <div style={{fontSize:'11px',color:'var(--gray-500)'}}>Nuevo review</div>
                    <div style={{color:'var(--blue)'}}>5 estrellas</div>
                  </div>
                </div>
                <div className="float-badge float-badge-2">
                  <span style={{fontSize:'18px'}}>📈</span>
                  <div>
                    <div style={{fontSize:'11px',color:'var(--gray-500)'}}>Conversión</div>
                    <div style={{color:'var(--green)',fontWeight:700}}>+18% este mes</div>
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
