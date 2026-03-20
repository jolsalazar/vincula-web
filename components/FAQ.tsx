const faqs = [
  {
    q: '¿Qué necesito para empezar con Vincula?',
    a: 'El setup tiene dos partes. Primero, instalas el widget: pegas un script en el <head> de tu tienda y el widget de reviews queda visible de inmediato. Segundo, conectas tu tienda para que Vincula reciba notificaciones de cada compra y pueda enviar los emails automáticamente. Ese segundo paso lo hacemos juntos en el onboarding — no toma más de una sesión.',
  },
  {
    q: '¿Cómo sabe Vincula cuándo ocurre una compra?',
    a: 'A través de una integración con tu plataforma. En Shopify, WooCommerce, Tiendanube o Jumpseller: configuramos un webhook en los ajustes de tu tienda, sin tocar código. En tiendas de desarrollo propio: tu equipo técnico hace una llamada a nuestra API cuando una orden se completa. Documentamos este paso detalladamente y lo acompañamos en el onboarding.',
  },
  {
    q: '¿Funciona con tiendas de desarrollo propio?',
    a: 'Sí. El widget se instala igual que en cualquier otra plataforma. La diferencia es la integración de órdenes: necesitarás que alguien en tu equipo técnico agregue una llamada a nuestra API cuando se confirma una compra. Es una integración simple y bien documentada, pero requiere acceso al código de tu backend.',
  },
  {
    q: '¿Cómo se muestran los reviews en mi tienda?',
    a: 'Con un widget embebible que colocas en tu página de producto. Muestra el rating promedio, la distribución de estrellas y los últimos reviews. Es personalizable en colores y fuentes para que se integre al diseño de tu tienda, y no afecta la velocidad de carga.',
  },
  {
    q: '¿Los reviews aparecen en Google?',
    a: 'Vincula genera automáticamente el marcado JSON-LD necesario para que Google pueda interpretar las valoraciones de tus productos. Esto permite que tus páginas aparezcan con estrellas en los resultados de búsqueda. Ten en cuenta que Google requiere un mínimo de reviews y puede tardar algunas semanas en mostrarlos — no es inmediato.',
  },
  {
    q: '¿Cómo se cobra?',
    a: 'Cobramos por PayPal en dólares. Sin contrato de permanencia, cancela cuando quieras sin penalidades. En el plan anual ahorras un 20% respecto al precio mensual.',
  },
  {
    q: '¿Tienen soporte en español?',
    a: 'Soporte por WhatsApp en español, de lunes a viernes en horario laboral. Respondemos lo antes posible — en horas pico puede demorar más, pero siempre respondemos el mismo día.',
  },
  {
    q: '¿Cómo es el proceso de onboarding?',
    a: 'El acceso es por solicitud. Una vez aprobado, te contactamos para hacer el setup juntos: instalación del widget, integración de órdenes y configuración de los emails. Dedicamos tiempo real a cada tienda para que todo quede funcionando correctamente. Los primeros clientes tienen precio especial garantizado.',
  },
]

export default function FAQ() {
  return (
    <>
      <style>{`
        .faq { background: var(--gray-50); }
        .faq-list {
          max-width: 720px;
          margin: 56px auto 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .faq-details {
          background: var(--white);
          border: 1.5px solid var(--gray-200);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
          list-style: none;
        }
        .faq-details[open] {
          border-color: var(--blue-light);
          box-shadow: 0 0 0 4px rgb(37 99 235 / 0.06);
        }
        .faq-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 24px;
          cursor: pointer;
          list-style: none;
          transition: background 0.15s;
          user-select: none;
          -webkit-user-select: none;
        }
        .faq-summary::-webkit-details-marker { display: none; }
        .faq-summary::marker { display: none; }
        .faq-summary:hover { background: var(--gray-50); }
        .faq-question {
          font-size: 15px;
          font-weight: 600;
          color: var(--gray-900);
          line-height: 1.4;
          flex: 1;
        }
        .faq-chevron {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: var(--gray-100);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--gray-500);
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .faq-details[open] .faq-chevron {
          background: var(--blue-50);
          color: var(--blue);
          transform: rotate(180deg);
        }
        .faq-body {
          padding: 16px 24px 20px;
          font-size: 15px;
          color: var(--gray-500);
          line-height: 1.7;
          border-top: 1px solid var(--gray-100);
        }
        .faq-cta {
          text-align: center;
          margin-top: 48px;
        }
        .faq-cta p {
          font-size: 16px;
          color: var(--gray-600);
          margin-bottom: 16px;
        }
        .faq-cta strong { color: var(--gray-900); }
        @media (max-width: 768px) {
          .faq-question { font-size: 14px; }
          .faq-summary { padding: 16px 18px; }
          .faq-body { padding: 12px 18px 16px; }
        }
      `}</style>

      <section className="section faq" id="faq">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5.5 5.5a1.5 1.5 0 013 .5c0 1-1.5 1.5-1.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="7" cy="10.5" r=".75" fill="currentColor"/>
              </svg>
              Preguntas frecuentes
            </span>
            <h2 className="section-title" style={{marginBottom:'16px'}}>
              Respondemos tus dudas
            </h2>
            <p className="section-subtitle" style={{margin:'0 auto'}}>
              Si no encuentras lo que buscas, escríbenos por WhatsApp.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className={`faq-details reveal${i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : ''}`}
              >
                <summary className="faq-summary">
                  <span className="faq-question">{faq.q}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </summary>
                <div className="faq-body">{faq.a}</div>
              </details>
            ))}
          </div>

          <div className="faq-cta reveal">
            <p>¿Tienes más preguntas? <strong>Hablemos.</strong></p>
            <a
              href="https://wa.me/message/vincula"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.13.56 4.122 1.534 5.847L.053 23.5l5.799-1.46A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.851 0-3.595-.5-5.101-1.375l-.364-.218-3.443.866.893-3.354-.236-.384A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
