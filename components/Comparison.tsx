export default function Comparison() {
  const rows = [
    { feature: 'En español', vincula: true, judge: false, yotpo: false },
    { feature: 'Soporte por WhatsApp', vincula: true, judge: false, yotpo: false },
    { feature: 'Tiendanube / Jumpseller', vincula: true, judge: false, yotpo: false },
    { feature: 'Pago en moneda local', vincula: true, judge: false, yotpo: false },
    { feature: 'Recuperador de carrito', vincula: true, judge: false, yotpo: 'partial' },
    { feature: 'Google Merchant Sync', vincula: true, judge: false, yotpo: false },
    { feature: 'Precio base', vincula: '$15/mes', judge: '$15/mes', yotpo: '$15/mes+' },
  ]

  type CellValue = boolean | string | 'partial'

  const renderCell = (val: CellValue, highlight = false) => {
    if (val === true) return (
      <span className={`comp-check${highlight ? ' comp-check-highlight' : ''}`}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    )
    if (val === false) return (
      <span className="comp-cross">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M4 4l6 6M10 4l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
    )
    if (val === 'partial') return (
      <span className="comp-partial">caro</span>
    )
    return (
      <span className={`comp-price${highlight ? ' comp-price-highlight' : ''}`}>{val}</span>
    )
  }

  return (
    <>
      <style>{`
        .comparison { background: var(--white); }
        .comp-wrap {
          margin-top: 56px;
          overflow-x: auto;
          border-radius: 20px;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--gray-100);
        }
        .comp-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 560px;
        }
        .comp-table th, .comp-table td {
          padding: 0;
          text-align: center;
        }
        .comp-table th:first-child,
        .comp-table td:first-child {
          text-align: left;
        }
        /* Header */
        .comp-thead {
          background: var(--gray-50);
          border-bottom: 1px solid var(--gray-200);
        }
        .comp-th {
          padding: 18px 24px;
          font-size: 13px;
          font-weight: 600;
          color: var(--gray-500);
          letter-spacing: 0.03em;
        }
        .comp-th-vincula {
          padding: 18px 24px;
          background: var(--blue);
          color: var(--white) !important;
          position: relative;
        }
        .comp-th-vincula::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--green);
        }
        .comp-th-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 700;
          color: var(--white);
        }
        .comp-th-sub {
          display: block;
          font-size: 10px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          margin-top: 2px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        /* Rows */
        .comp-tr { border-bottom: 1px solid var(--gray-100); }
        .comp-tr:last-child { border-bottom: none; }
        .comp-tr:hover .comp-td { background: var(--gray-50); }
        .comp-tr:hover .comp-td-vincula { background: #1d4ed8; }
        .comp-td {
          padding: 16px 24px;
          font-size: 14px;
          color: var(--gray-600);
          font-weight: 500;
          transition: background 0.15s;
        }
        .comp-td-vincula {
          background: rgb(37 99 235 / 0.04);
          border-left: 1px solid rgb(37 99 235 / 0.1);
          border-right: 1px solid rgb(37 99 235 / 0.1);
          transition: background 0.15s;
        }
        .comp-feature-name {
          font-size: 14px;
          color: var(--gray-700);
          font-weight: 500;
        }
        /* Cell icons */
        .comp-check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ecfdf5;
          color: var(--green);
        }
        .comp-check-highlight {
          background: rgb(16 185 129 / 0.15);
          color: #6ee7b7;
        }
        .comp-cross {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--gray-100);
          color: var(--gray-300);
        }
        .comp-partial {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          background: #fef3c7;
          color: #92400e;
        }
        .comp-price {
          font-size: 13px;
          font-weight: 600;
          color: var(--gray-500);
        }
        .comp-price-highlight {
          font-size: 14px;
          font-weight: 700;
          color: #6ee7b7;
        }
        /* Bottom note */
        .comp-note {
          text-align: center;
          margin-top: 32px;
          font-size: 14px;
          color: var(--gray-400);
        }
        .comp-note a {
          color: var(--blue);
          font-weight: 600;
          text-decoration: none;
        }
        .comp-note a:hover { text-decoration: underline; }
        @media (max-width: 768px) {
          .comp-th, .comp-td { padding: 14px 16px; }
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
              Construido para el ecommerce latinoamericano, con las integraciones y el idioma que necesitás.
            </p>
          </div>

          <div className="comp-wrap reveal">
            <table className="comp-table" role="table">
              <thead>
                <tr className="comp-thead">
                  <th className="comp-th" scope="col" style={{width:'40%'}}>Característica</th>
                  <th className="comp-th comp-th-vincula" scope="col">
                    <span className="comp-th-badge">
                      <span>Vincula.io</span>
                    </span>
                    <span className="comp-th-sub">Recomendado</span>
                  </th>
                  <th className="comp-th" scope="col">Judge.me</th>
                  <th className="comp-th" scope="col">Yotpo</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(row => (
                  <tr key={row.feature} className="comp-tr">
                    <td className="comp-td">
                      <span className="comp-feature-name">{row.feature}</span>
                    </td>
                    <td className="comp-td comp-td-vincula">
                      {renderCell(row.vincula, true)}
                    </td>
                    <td className="comp-td">{renderCell(row.judge)}</td>
                    <td className="comp-td">{renderCell(row.yotpo)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="comp-note reveal">
            ¿Querés ver más detalle?{' '}
            <a href="#cta">Hablemos por WhatsApp</a> y te mostramos cómo funciona en tu tienda.
          </p>
        </div>
      </section>
    </>
  )
}
