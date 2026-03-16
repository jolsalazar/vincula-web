'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '¿Cómo instalo Vincula en mi tienda?',
    a: 'Una línea de código, igual que Google Analytics. Copia el snippet que te damos al registrarte y pégalo en el <head> de tu tienda. Sin programación, sin desarrolladores. Si tienes dudas, te ayudamos por WhatsApp.',
  },
  {
    q: '¿Funciona con ecommerce de desarrollo propio?',
    a: 'Sí, y es uno de los principales casos de uso. Si tienes una tienda desarrollada a medida (Node.js, Laravel, Django, o cualquier otra tecnología), solo pegas el snippet en tu HTML y listo. No dependes de ningún plugin ni plataforma específica.',
  },
  {
    q: '¿Puedo usar solo reviews sin los addons?',
    a: 'Sí, los addons son 100% opcionales. El plan base incluye todo el sistema de reviews. Puedes agregar el recuperador de carrito y Google Merchant Sync en cualquier momento, solo cuando lo necesites.',
  },
  {
    q: '¿Cómo se cobra?',
    a: 'Cobramos por PayPal en dólares. Sin contrato de permanencia, cancela cuando quieras sin penalidades. En el plan anual ahorras un 20% respecto al precio mensual.',
  },
  {
    q: '¿Tienen soporte en español?',
    a: 'Soporte por WhatsApp en español, de lunes a viernes. En los planes Growth y Agency tienes soporte prioritario con respuesta en menos de 2 horas.',
  },
  {
    q: '¿Hay período de prueba?',
    a: 'Estamos en beta privada. Contáctanos para solicitar acceso anticipado y ser de los primeros en usar Vincula. Los primeros usuarios tienen precio especial garantizado de por vida.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

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
        .faq-item {
          background: var(--white);
          border: 1.5px solid var(--gray-200);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .faq-item.is-open {
          border-color: var(--blue-light);
          box-shadow: 0 0 0 4px rgb(37 99 235 / 0.06);
        }
        .faq-trigger {
          width: 100%;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 24px;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s;
        }
        .faq-trigger:hover { background: var(--gray-50); }
        .faq-question {
          font-size: 15px;
          font-weight: 600;
          color: var(--gray-900);
          line-height: 1.4;
        }
        .faq-icon {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: var(--gray-100);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          color: var(--gray-500);
        }
        .faq-item.is-open .faq-icon {
          background: var(--blue-50);
          color: var(--blue);
          transform: rotate(180deg);
        }
        .faq-answer-wrap {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .faq-answer {
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
          .faq-trigger { padding: 16px 18px; }
          .faq-answer { padding: 12px 18px 16px; }
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
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div
                  key={i}
                  className={`faq-item reveal${i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : ''}${isOpen ? ' is-open' : ''}`}
                >
                  <button
                    className="faq-trigger"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question">{faq.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  <div
                    className="faq-answer-wrap"
                    style={{ maxHeight: isOpen ? '400px' : '0' }}
                  >
                    <div className="faq-answer">{faq.a}</div>
                  </div>
                </div>
              )
            })}
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
