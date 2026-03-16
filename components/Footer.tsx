export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <style>{`
        .footer {
          background: var(--gray-900);
          padding: 56px 0 32px;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgb(255 255 255 / 0.08);
          margin-bottom: 32px;
        }
        .footer-brand {}
        .footer-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          margin-bottom: 16px;
        }
        .footer-logo-text {
          font-size: 22px;
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.04em;
        }
        .footer-logo-dot {
          width: 7px;
          height: 7px;
          background: var(--green);
          border-radius: 50%;
          margin-left: 1px;
          display: inline-block;
        }
        .footer-tagline {
          font-size: 14px;
          color: rgb(255 255 255 / 0.5);
          line-height: 1.6;
          max-width: 260px;
          margin-bottom: 24px;
        }
        .footer-social {
          display: flex;
          gap: 10px;
        }
        .footer-social-link {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgb(255 255 255 / 0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(255 255 255 / 0.5);
          text-decoration: none;
          transition: all 0.2s;
          font-size: 14px;
        }
        .footer-social-link:hover {
          background: rgb(255 255 255 / 0.12);
          color: var(--white);
          transform: translateY(-2px);
        }
        .footer-col-title {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgb(255 255 255 / 0.4);
          margin-bottom: 16px;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links a {
          text-decoration: none;
          font-size: 14px;
          color: rgb(255 255 255 / 0.6);
          transition: color 0.15s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .footer-links a:hover { color: var(--white); }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-copy {
          font-size: 13px;
          color: rgb(255 255 255 / 0.35);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .footer-heart { color: #f87171; }
        .footer-legal {
          display: flex;
          gap: 20px;
        }
        .footer-legal a {
          font-size: 13px;
          color: rgb(255 255 255 / 0.35);
          text-decoration: none;
          transition: color 0.15s;
        }
        .footer-legal a:hover { color: rgb(255 255 255 / 0.65); }
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; text-align: center; }
          .footer-legal { justify-content: center; }
        }
      `}</style>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="footer-logo" aria-label="Vincula.io inicio">
                <span className="footer-logo-text">
                  V<span style={{color:'var(--blue-light)'}}>i</span>ncula
                  <span className="footer-logo-dot" />
                  <span style={{color:'rgb(255 255 255 / 0.3)'}}>io</span>
                </span>
              </a>
              <p className="footer-tagline">
                Conectá tu tienda con tus clientes. Reviews, carrito y Google Shopping en un solo lugar.
              </p>
              <div className="footer-social">
                <a href="#" className="footer-social-link" aria-label="Twitter/X">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="footer-social-link" aria-label="LinkedIn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://wa.me/message/vincula" className="footer-social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.13.56 4.122 1.534 5.847L.053 23.5l5.799-1.46A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.851 0-3.595-.5-5.101-1.375l-.364-.218-3.443.866.893-3.354-.236-.384A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="footer-col-title">Producto</h3>
              <ul className="footer-links" role="list">
                <li><a href="#features">Características</a></li>
                <li><a href="#pricing">Precios</a></li>
                <li><a href="#how-it-works">Cómo funciona</a></li>
                <li><a href="#comparison">Comparativa</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="footer-col-title">Empresa</h3>
              <ul className="footer-links" role="list">
                <li><a href="#cta">Contacto</a></li>
                <li>
                  <a href="https://wa.me/message/vincula" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </li>
                <li><a href="#" aria-label="Términos de servicio">Términos</a></li>
                <li><a href="#" aria-label="Política de privacidad">Privacidad</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              Hecho con <span className="footer-heart">❤️</span> para el ecommerce latinoamericano · vincula.io · {year}
            </p>
            <div className="footer-legal">
              <a href="#">Términos de servicio</a>
              <a href="#">Política de privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
