// Reemplazar el contenido de cada tarjeta con testimonios reales de clientes beta
// antes de publicar. Las citas actuales son representativas del tipo de feedback
// que se espera, pero deben ser validadas o sustituidas por citas reales.

const testimonials = [
  {
    quote: 'Antes teníamos que pedirle reviews a cada cliente por separado. Con Vincula el proceso es completamente automático. Hoy tenemos reviews reales en nuestra página de producto sin esfuerzo de nuestra parte.',
    name: 'Sofía R.',
    store: 'Tienda de moda femenina',
    storeType: 'WooCommerce',
    initial: 'SR',
    color: '#2563EB',
  },
  {
    quote: 'Tenemos tienda propia en Laravel. La integración nos tomó medio día con la documentación. Desde entonces los emails salen solos y el widget muestra todo correctamente en la página de cada producto.',
    name: 'Diego M.',
    store: 'Tienda de equipamiento deportivo',
    storeType: 'Desarrollo propio',
    initial: 'DM',
    color: '#7c3aed',
  },
  {
    quote: 'Empezamos a ver reviews en Google a las pocas semanas. Es algo que llevábamos tiempo queriendo resolver y con Vincula no necesitamos configurar nada extra.',
    name: 'Carmen V.',
    store: 'Tienda de productos naturales',
    storeType: 'Tiendanube',
    initial: 'CV',
    color: '#0891b2',
  },
]

export default function Testimonials() {
  return (
    <>
      <style>{`
        .testimonials {
          background: var(--white);
          border-top: 1px solid var(--gray-100);
        }
        .testimonials-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .testimonials-beta-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fef3c7;
          border: 1px solid #fde68a;
          color: #92400e;
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 20px;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .testimonial-card {
          background: var(--gray-50);
          border: 1px solid var(--gray-100);
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .testimonial-card:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--blue-100);
        }
        .testimonial-stars {
          display: flex;
          gap: 3px;
        }
        .testimonial-quote {
          font-size: 15px;
          color: var(--gray-700);
          line-height: 1.7;
          flex: 1;
          font-style: italic;
        }
        .testimonial-quote::before {
          content: '"';
          font-size: 32px;
          color: var(--blue-100);
          font-style: normal;
          font-weight: 800;
          line-height: 0;
          vertical-align: -12px;
          margin-right: 4px;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--gray-100);
        }
        .testimonial-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: var(--white);
          flex-shrink: 0;
        }
        .testimonial-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--gray-900);
          line-height: 1.3;
        }
        .testimonial-store {
          font-size: 12px;
          color: var(--gray-400);
        }
        .testimonial-platform {
          margin-left: auto;
          font-size: 11px;
          font-weight: 600;
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: 6px;
          padding: 3px 8px;
          color: var(--gray-500);
          flex-shrink: 0;
        }
        @media (max-width: 968px) {
          .testimonials-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
        }
        @media (min-width: 601px) and (max-width: 968px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); max-width: none; }
        }
      `}</style>

      <section className="section testimonials" id="testimonials">
        <div className="container">
          <div className="testimonials-header reveal">
            <div className="testimonials-beta-badge">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M5 3v2.5l1.5 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Clientes en acceso anticipado
            </div>
            <h2 className="section-title" style={{marginBottom:'16px'}}>
              Lo que dicen quienes ya lo usan
            </h2>
            <p className="section-subtitle" style={{margin:'0 auto'}}>
              Vincula está en beta activa con un grupo reducido de tiendas.
              Estos son algunos de sus comentarios.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
                <div className="testimonial-stars">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="#fbbf24">
                      <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5l-3 2 .5-3.5L2 5l3.5-.5L7 1z"/>
                    </svg>
                  ))}
                </div>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{background: t.color}}>{t.initial}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-store">{t.store}</div>
                  </div>
                  <span className="testimonial-platform">{t.storeType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
