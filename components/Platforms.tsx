export default function Platforms() {
  const platforms = [
    { name: 'Tiendanube', color: '#2E5BFF', bg: '#EEF2FF', abbr: 'TN' },
    { name: 'Jumpseller', color: '#FF5A36', bg: '#FFF0ED', abbr: 'JS' },
    { name: 'WooCommerce', color: '#7F54B3', bg: '#F5F0FF', abbr: 'WC' },
    { name: 'Shopify', color: '#96BF48', bg: '#F1F8E9', abbr: 'SH' },
    { name: 'MercadoShops', color: '#FFE600', bg: '#FFFDE7', textColor: '#665C00', abbr: 'MS' },
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
          gap: 28px;
        }
        .platforms-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .platforms-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          align-items: center;
        }
        .platform-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border-radius: 100px;
          border: 1.5px solid transparent;
          transition: all 0.2s;
          cursor: default;
          font-size: 14px;
          font-weight: 600;
        }
        .platform-pill:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .platform-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--white);
          flex-shrink: 0;
        }
        .platforms-note {
          font-size: 13px;
          color: var(--gray-400);
          text-align: center;
        }
        .platforms-note span {
          color: var(--green);
          font-weight: 600;
        }
      `}</style>

      <section className="platforms">
        <div className="container">
          <div className="platforms-inner">
            <p className="platforms-label">Compatible con tus plataformas favoritas</p>
            <div className="platforms-list">
              {platforms.map(p => (
                <div
                  key={p.name}
                  className="platform-pill reveal"
                  style={{
                    background: p.bg,
                    borderColor: p.color + '30',
                    color: p.textColor || p.color,
                  }}
                >
                  <span
                    className="platform-icon"
                    style={{ background: p.color, color: p.textColor ? p.textColor : 'white' }}
                  >
                    {p.abbr}
                  </span>
                  {p.name}
                </div>
              ))}
            </div>
            <p className="platforms-note">
              ¿Usás otra plataforma? <span>Escribinos</span> y lo evaluamos juntos.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
