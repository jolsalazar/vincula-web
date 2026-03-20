export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: '⚡',
      title: 'Instala el widget en tu tienda',
      description: 'Pega el snippet en el <head> de tu tienda y el widget de reviews queda activo de inmediato.',
      detail: 'Un script, sin dependencias. Funciona en cualquier plataforma o desarrollo propio, sin tocar más código.',
      color: '#dbeafe',
      textColor: '#1e40af',
    },
    {
      number: '02',
      icon: '⚙️',
      title: 'Personaliza el widget y los emails',
      description: 'Desde el dashboard configuras los textos, colores, timing de los emails y cómo se muestran los reviews.',
      detail: 'Todo desde una interfaz visual. Sin tocar código, sin llamar a un desarrollador.',
      color: '#d1fae5',
      textColor: '#065f46',
    },
    {
      number: '03',
      icon: '📈',
      title: 'Tus reviews trabajan solos',
      description: 'Cada compra dispara el flujo automáticamente: email, recordatorio y publicación del review.',
      detail: 'Desde el dashboard ves en tiempo real cuántos reviews llegaron, tu rating actual y cuántos emails se enviaron.',
      color: '#ede9fe',
      textColor: '#4c1d95',
    },
  ]

  return (
    <>
      <style>{`
        .how-it-works { background: var(--white); }
        .hiw-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          margin-top: 64px;
        }
        .hiw-steps {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .hiw-step {
          display: flex;
          gap: 20px;
          padding: 28px 0;
          border-bottom: 1px solid var(--gray-100);
          cursor: default;
          transition: all 0.2s;
        }
        .hiw-step:last-child { border-bottom: none; }
        .hiw-step:hover .step-icon-wrap {
          transform: scale(1.05);
        }
        .step-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .step-number {
          font-size: 11px;
          font-weight: 700;
          color: var(--gray-400);
          letter-spacing: 0.05em;
        }
        .step-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          transition: transform 0.2s;
          flex-shrink: 0;
        }
        .step-connector {
          width: 2px;
          flex: 1;
          min-height: 20px;
          background: linear-gradient(to bottom, var(--gray-200), transparent);
          margin-top: 4px;
        }
        .step-content { flex: 1; }
        .step-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }
        .step-desc {
          font-size: 14px;
          color: var(--gray-500);
          line-height: 1.65;
          margin-bottom: 10px;
        }
        .step-detail {
          font-size: 12px;
          color: var(--gray-400);
          line-height: 1.6;
        }
        /* Code snippet */
        .hiw-visual { position: relative; }
        .code-window {
          background: #0f172a;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
        }
        .code-titlebar {
          background: #1e293b;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .code-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .code-title {
          font-size: 12px;
          color: #94a3b8;
          margin-left: 8px;
          font-family: 'SF Mono', 'Fira Code', monospace;
        }
        .code-body {
          padding: 24px;
          font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
          font-size: 13px;
          line-height: 1.8;
        }
        .code-comment { color: #475569; }
        .code-tag { color: #38bdf8; }
        .code-attr { color: #a78bfa; }
        .code-value { color: #86efac; }
        .code-string { color: #fbbf24; }
        .code-highlight {
          background: rgb(37 99 235 / 0.15);
          border-left: 3px solid var(--blue);
          margin: 0 -24px;
          padding: 4px 24px 4px 21px;
          display: block;
        }
        .code-cursor {
          display: inline-block;
          width: 2px;
          height: 14px;
          background: #38bdf8;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
          vertical-align: text-bottom;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .hiw-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 16px;
        }
        .metric-card {
          background: var(--white);
          border: 1px solid var(--gray-100);
          border-radius: 14px;
          padding: 16px;
          text-align: center;
          transition: all 0.2s;
        }
        .metric-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--blue-100);
        }
        .metric-value {
          font-size: 22px;
          font-weight: 800;
          color: var(--gray-900);
          letter-spacing: -0.03em;
        }
        .metric-label {
          font-size: 11px;
          color: var(--gray-400);
          margin-top: 2px;
          font-weight: 500;
        }
        @media (max-width: 968px) {
          .hiw-grid { grid-template-columns: 1fr; gap: 48px; }
        }
      `}</style>

      <section className="section how-it-works" id="how-it-works">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Cómo funciona
            </span>
            <h2 className="section-title" style={{marginBottom:'16px'}}>
              Instalado en minutos,<br />reviews desde el primer día
            </h2>
            <p className="section-subtitle" style={{margin:'0 auto'}}>
              Sin desarrolladores ni integraciones complicadas. El widget se instala en minutos; los emails se configuran desde el dashboard.
            </p>
          </div>

          <div className="hiw-grid">
            <div className="hiw-steps reveal">
              {steps.map((step, i) => (
                <div key={step.number} className="hiw-step">
                  <div className="step-left">
                    <span className="step-number">{step.number}</span>
                    <div className="step-icon-wrap" style={{background: step.color}}>
                      <span>{step.icon}</span>
                    </div>
                    {i < steps.length - 1 && <div className="step-connector" />}
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.description}</p>
                    <p className="step-detail">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hiw-visual reveal reveal-delay-2">
              <div className="code-window">
                <div className="code-titlebar">
                  <span className="code-dot" style={{background:'#ff5f57'}} />
                  <span className="code-dot" style={{background:'#febc2e'}} />
                  <span className="code-dot" style={{background:'#28c840'}} />
                  <span className="code-title">index.html — instalación</span>
                </div>
                <div className="code-body">
                  <span className="code-comment">{'<!-- 1. Agregá esto en el <head> de tu tienda -->'}</span>
                  {'\n\n'}
                  <span className="code-tag">{'<link'}</span>
                  {' '}
                  <span className="code-attr">rel</span>
                  <span style={{color:'#e2e8f0'}}>=</span>
                  <span className="code-value">"stylesheet"</span>
                  {'\n     '}
                  <span className="code-attr">href</span>
                  <span style={{color:'#e2e8f0'}}>=</span>
                  <span className="code-value">"https://cdn.vincula.io/widget.css"</span>
                  <span className="code-tag">{' />'}</span>
                  {'\n\n'}
                  <span className="code-highlight">
                    <span className="code-tag">{'<script'}</span>
                    {'\n  '}
                    <span className="code-attr">  src</span>
                    <span style={{color:'#e2e8f0'}}>=</span>
                    <span className="code-string">"https://cdn.vincula.io/widget.js"</span>
                    {'\n  '}
                    <span className="code-attr">  data-key</span>
                    <span style={{color:'#e2e8f0'}}>=</span>
                    <span className="code-string">"tu-api-key"</span>
                    <span className="code-tag">{'\n></script>'}</span>
                    <span className="code-cursor" />
                  </span>
                  {'\n\n'}
                  <span className="code-comment">{'<!-- El widget queda visible en tu tienda ✓ -->'}</span>
                </div>
              </div>

              <div className="hiw-metrics">
                <div className="metric-card">
                  <div className="metric-value">5 min</div>
                  <div className="metric-label">Setup promedio</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">1</div>
                  <div className="metric-label">Línea de código</div>
                </div>
                <div className="metric-card">
                  <div className="metric-value">0</div>
                  <div className="metric-label">Desarrolladores</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
