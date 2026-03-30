export default function Platforms() {
  const coming = [
    { name: 'Tiendanube', color: '#2E5BFF', abbr: 'TN' },
    { name: 'WooCommerce', color: '#7F54B3', abbr: 'WC' },
    { name: 'Shopify', color: '#96BF48', abbr: 'SH' },
    { name: 'Jumpseller', color: '#FF5A36', abbr: 'JS' },
  ]

  return (
    <>
      <style>{`
        .platforms {
          padding: 48px 0;
          background: var(--white);
          border-top: 1px solid var(--gray-100);
          border-bottom: 1px solid var(--gray-100);
        }
        .platforms-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .platforms-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .platforms-current {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border-radius: 100px;
          background: #eff6ff;
          border: 1.5px solid #2563EB30;
          color: #2563EB;
          font-size: 15px;
          font-weight: 700;
        }
        .platform-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          color: var(--white);
          background: #2563EB;
          flex-shrink: 0;
        }
        .platforms-coming-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .platforms-coming-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }
        .platforms-coming-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }
        .platform-pill-coming {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          border-radius: 100px;
          border: 1.5px dashed var(--gray-200);
          background: var(--gray-50);
          color: var(--gray-400);
          font-size: 13px;
          font-weight: 500;
        }
        .platform-icon-sm {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 800;
          color: var(--white);
          opacity: 0.5;
          flex-shrink: 0;
        }
        .coming-soon-tag {
          font-size: 10px;
          font-weight: 600;
          background: var(--gray-100);
          color: var(--gray-400);
          border-radius: 100px;
          padding: 2px 8px;
          margin-left: 2px;
        }
      `}</style>

      <section className="platforms">
        <div className="container">
          <div className="platforms-inner">
            <p className="platforms-label">Plataforma compatible</p>

            <div className="platforms-current reveal">
              <span className="platform-icon">&lt;/&gt;</span>
              Ecommerce de desarrollo propio
            </div>

            <div className="platforms-coming-wrap reveal">
              <span className="platforms-coming-label">Próximamente</span>
              <div className="platforms-coming-list">
                {coming.map(p => (
                  <div key={p.name} className="platform-pill-coming">
                    <span className="platform-icon-sm" style={{ background: p.color }}>{p.abbr}</span>
                    {p.name}
                    <span className="coming-soon-tag">pronto</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
