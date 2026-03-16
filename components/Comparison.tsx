export default function Comparison() {
  const rows = [
    { feature: 'En español', vincula: true, judge: false, yotpo: false },
    { feature: 'Soporte por WhatsApp', vincula: true, judge: false, yotpo: false },
    { feature: 'Ecommerce de desarrollo propio', vincula: true, judge: false, yotpo: false },
    { feature: 'Tiendanube / Jumpseller', vincula: true, judge: false, yotpo: false },
    { feature: 'Pago en moneda local', vincula: true, judge: false, yotpo: false },
    { feature: 'Recuperador de carrito', vincula: true, judge: false, yotpo: 'partial' },
    { feature: 'Google Merchant Sync', vincula: true, judge: false, yotpo: false },
    { feature: 'Precio base', vincula: '$15/mes', judge: '$15/mes', yotpo: '$15/mes+' },
  ]

  type CellValue = boolean | string | 'partial'

  const Check = ({ highlight }: { highlight?: boolean }) => (
    <span className={`comp-icon comp-check${highlight ? ' comp-check-hl' : ''}`}>
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M2.5 6.5l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )

  const Cross = () => (
    <span className="comp-icon comp-cross">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M3.5 3.5l6 6M9.5 3.5l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </span>
  )

  const renderCell = (val: CellValue, highlight = false) => {
    if (val === true) return <Check highlight={highlight} />
    if (val === false) return <Cross />
    if (val === 'partial') return <span className="comp-partial">Solo en plan caro</span>
    return <span className={`comp-price-cell${highlight ? ' comp-price-hl' : ''}`}>{val}</span>
  }

  return (
    <>
      <style>{`
        .comparison { background: var(--white); }

        .comp-container {
          margin-top: 56px;
          border-radius: 20px;
          border: 1px solid var(--gray-200);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        /* Header row */
        .comp-header {
          display: grid;
          grid-template-columns: 2fr 1.2fr 1fr 1fr;
          background: var(--gray-50);
          border-bottom: 1px solid var(--gray-200);
        }
        .comp-header-cell {
          padding: 18px 20px;
          font-size: 13px;
          font-weight: 600;
          color: var(--gray-400);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .comp-header-cell.is-vincula {
          background: var(--blue);
          color: var(--white);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2px;
        }
        .comp-header-cell.is-vincula::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--green);
        }
        .comp-col-name {
          font-size: 15px;
          font-weight: 800;
          letter-spacing: -0.02em;
          text-transform: none;
          color: var(--white);
        }
        .comp-col-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(255,255,255,0.15);
          border-radius: 100px;
          padding: 2px 8px;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.85);
          margin-top: 2px;
          width: fit-content;
        }

        /* Data rows */
        .comp-row {
          display: grid;
          grid-template-columns: 2fr 1.2fr 1fr 1fr;
          border-bottom: 1px solid var(--gray-100);
          transition: background 0.15s;
        }
        .comp-row:last-child { border-bottom: none; }
        .comp-row:hover .comp-cell { background: var(--gray-50); }
        .comp-row:hover .comp-cell.is-vincula { background: #1d58e8; }

        .comp-cell {
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
        }
        .comp-cell:first-child { justify-content: flex-start; }
        .comp-cell.is-vincula {
          background: rgb(37 99 235 / 0.04);
          border-left: 1px solid rgb(37 99 235 / 0.12);
          border-right: 1px solid rgb(37 99 235 / 0.12);
        }

        .comp-feature-name {
          font-size: 14px;
          color: var(--gray-700);
          font-weight: 500;
        }

        /* Icons */
        .comp-icon {
          width: 28px; height: 28px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .comp-check {
          background: #ecfdf5;
          color: var(--green);
        }
        .comp-check-hl {
          background: rgba(16,185,129,0.15);
          color: #34d399;
        }
        .comp-cross {
          background: var(--gray-100);
          color: var(--gray-300);
        }
        .comp-partial {
          font-size: 11px;
          font-weight: 600;
          background: #fef3c7;
          color: #92400e;
          border-radius: 100px;
          padding: 3px 10px;
          white-space: nowrap;
        }
        .comp-price-cell {
          font-size: 13px;
          font-weight: 600;
          color: var(--gray-500);
        }
        .comp-price-hl {
          font-size: 14px;
          font-weight: 700;
          color: #34d399;
        }

        .comp-note {
          text-align: center;
          margin-top: 28px;
          font-size: 14px;
          color: var(--gray-400);
        }
        .comp-note a {
          color: var(--blue);
          font-weight: 600;
          text-decoration: none;
        }
        .comp-note a:hover { text-decoration: underline; }

        @media (max-width: 640px) {
          .comp-container { overflow-x: auto; }
          .comp-header, .comp-row {
            min-width: 520px;
          }
          .comp-header-cell, .comp-cell { padding: 14px 14px; }
          .comp-feature-name { font-size: 13px; }
        }
      `}</style>

      <section className="section comparison" id="comparison">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Comparativa
            </span>
            <h2 className="section-title" style={{marginBottom:'16px'}}>
              ¿Por qué Vincula y no las alternativas?
            </h2>
            <p className="section-subtitle" style={{margin:'0 auto'}}>
              La única solución con soporte real en español y compatibilidad con ecommerce de desarrollo propio.
            </p>
          </div>

          <div className="comp-container reveal">
            {/* Header */}
            <div className="comp-header">
              <div className="comp-header-cell">Característica</div>
              <div className="comp-header-cell is-vincula">
                <span className="comp-col-name">Vincula.io</span>
                <span className="comp-col-badge">⚡ Recomendado</span>
              </div>
              <div className="comp-header-cell" style={{textAlign:'center'}}>Judge.me</div>
              <div className="comp-header-cell" style={{textAlign:'center'}}>Yotpo</div>
            </div>

            {/* Rows */}
            {rows.map(row => (
              <div key={row.feature} className="comp-row">
                <div className="comp-cell">
                  <span className="comp-feature-name">{row.feature}</span>
                </div>
                <div className="comp-cell is-vincula">
                  {renderCell(row.vincula, true)}
                </div>
                <div className="comp-cell">{renderCell(row.judge)}</div>
                <div className="comp-cell">{renderCell(row.yotpo)}</div>
              </div>
            ))}
          </div>

          <p className="comp-note reveal">
            ¿Quieres ver una demo en tu tienda?{' '}
            <a href="#cta">Escríbenos y lo hacemos en 15 minutos.</a>
          </p>
        </div>
      </section>
    </>
  )
}
