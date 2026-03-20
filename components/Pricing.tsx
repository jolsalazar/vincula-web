'use client'

import { useState } from 'react'

type Plan = {
  name: string
  monthlyPrice: number
  annualPrice: number
  description: string
  features: { text: string; included: boolean }[]
  cta: string
  popular?: boolean
  color: string
  accentColor: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    monthlyPrice: 15,
    annualPrice: 12,
    description: 'Reviews automáticos para una tienda. Ideal para empezar.',
    color: '#f8faff',
    accentColor: 'var(--blue)',
    cta: 'Solicitar acceso',
    features: [
      { text: '1 tienda', included: true },
      { text: 'Hasta 200 reviews/mes', included: true },
      { text: 'Widget embebible', included: true },
      { text: 'Email post-compra', included: true },
      { text: 'Dashboard de métricas', included: true },
      { text: 'Soporte prioritario', included: false },
    ],
  },
  {
    name: 'Growth',
    monthlyPrice: 35,
    annualPrice: 28,
    description: 'Reviews ilimitados para hasta 3 tiendas. El más elegido.',
    popular: true,
    color: 'var(--blue)',
    accentColor: '#fff',
    cta: 'Solicitar acceso',
    features: [
      { text: '3 tiendas', included: true },
      { text: 'Reviews ilimitados', included: true },
      { text: 'Widget embebible', included: true },
      { text: 'Email post-compra', included: true },
      { text: 'Dashboard de métricas', included: true },
      { text: 'Soporte prioritario', included: true },
    ],
  },
  {
    name: 'Agency',
    monthlyPrice: 79,
    annualPrice: 63,
    description: 'Para agencias que gestionan múltiples clientes.',
    color: '#f8faff',
    accentColor: 'var(--blue)',
    cta: 'Solicitar acceso',
    features: [
      { text: '10 tiendas', included: true },
      { text: 'Reviews ilimitados', included: true },
      { text: 'White label', included: true },
      { text: 'Email post-compra', included: true },
      { text: 'Dashboard de métricas', included: true },
      { text: 'Soporte dedicado', included: true },
    ],
  },
]

const addons = [
  {
    icon: '🛒',
    name: 'Recuperador de carrito',
    price: '+$19/mes',
    description: 'Emails automáticos, hasta 5.000/mes',
    color: '#dbeafe',
    textColor: 'var(--blue)',
  },
  {
    icon: '🛍️',
    name: 'Google Merchant Sync',
    price: '+$15/mes',
    description: 'Sincronización automática del feed',
    color: '#d1fae5',
    textColor: 'var(--green-dark)',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <>
      <style>{`
        .pricing { background: var(--gray-50); }
        .pricing-toggle-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin: 40px 0 56px;
        }
        .toggle-label {
          font-size: 14px;
          font-weight: 500;
          color: var(--gray-500);
          transition: color 0.2s;
        }
        .toggle-label.active { color: var(--gray-900); font-weight: 600; }
        .toggle-switch {
          width: 52px;
          height: 28px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          position: relative;
          transition: background 0.3s;
          outline: none;
        }
        .toggle-switch:focus-visible {
          box-shadow: 0 0 0 3px rgb(37 99 235 / 0.3);
        }
        .toggle-thumb {
          position: absolute;
          top: 3px;
          width: 22px;
          height: 22px;
          background: var(--white);
          border-radius: 50%;
          transition: left 0.3s cubic-bezier(0.4,0,0.2,1);
          box-shadow: var(--shadow-sm);
        }
        .annual-badge {
          background: #ecfdf5;
          color: var(--green-dark);
          border: 1px solid #d1fae5;
          border-radius: 100px;
          padding: 3px 10px;
          font-size: 12px;
          font-weight: 600;
        }
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: stretch;
        }
        .plan-card {
          border-radius: 24px;
          padding: 32px;
          border: 1.5px solid transparent;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          display: flex;
          flex-direction: column;
        }
        .plan-card:not(.plan-popular) {
          background: var(--white);
          border-color: var(--gray-200);
        }
        .plan-card:not(.plan-popular):hover {
          border-color: var(--blue-light);
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .plan-popular {
          background: var(--blue);
          border-color: var(--blue);
          box-shadow: 0 20px 40px rgb(37 99 235 / 0.3);
          transform: scale(1.02);
        }
        .plan-popular:hover {
          box-shadow: 0 28px 50px rgb(37 99 235 / 0.4);
          transform: scale(1.03) translateY(-4px);
        }
        .popular-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--green);
          color: var(--white);
          border-radius: 100px;
          padding: 5px 16px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgb(16 185 129 / 0.4);
        }
        .plan-name {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }
        .plan-desc {
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 24px;
          opacity: 0.75;
        }
        .plan-price-block {
          margin-bottom: 28px;
        }
        .plan-price-row {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        .plan-currency {
          font-size: 20px;
          font-weight: 600;
          margin-top: 4px;
        }
        .plan-price {
          font-size: 48px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
        }
        .plan-period {
          font-size: 14px;
          opacity: 0.6;
          margin-left: 2px;
        }
        .plan-price-old {
          font-size: 13px;
          text-decoration: line-through;
          opacity: 0.4;
          margin-top: 2px;
          min-height: 18px;
        }
        .plan-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
          flex: 1;
        }
        .plan-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
        }
        .plan-feature-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .plan-cta {
          width: 100%;
          justify-content: center;
          padding: 14px;
          font-size: 15px;
        }
        /* Addons */
        .addons-section {
          margin-top: 64px;
          text-align: center;
        }
        .addons-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }
        .addons-subtitle {
          font-size: 14px;
          color: var(--gray-500);
          margin-bottom: 28px;
        }
        .addons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 700px;
          margin: 0 auto;
        }
        .addon-card {
          background: var(--white);
          border: 1.5px solid var(--gray-200);
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          text-align: left;
          transition: all 0.2s;
        }
        .addon-card:hover {
          border-color: var(--blue-light);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .addon-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }
        .addon-info { flex: 1; }
        .addon-name {
          font-size: 15px;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 2px;
        }
        .addon-desc {
          font-size: 12px;
          color: var(--gray-500);
        }
        .addon-price {
          font-size: 16px;
          font-weight: 800;
          color: var(--blue);
          white-space: nowrap;
        }
        @media (max-width: 968px) {
          .plans-grid { grid-template-columns: 1fr; max-width: 380px; margin: 0 auto; }
          .plan-popular { transform: none; }
          .plan-popular:hover { transform: translateY(-4px); }
          .addons-grid { grid-template-columns: 1fr; max-width: 380px; }
        }
        @media (min-width: 601px) and (max-width: 968px) {
          .plans-grid { grid-template-columns: repeat(2, 1fr); max-width: none; }
        }
      `}</style>

      <section className="section pricing" id="pricing">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-label">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L8.5 5.5H13L9.5 8L10.5 13L7 10.5L3.5 13L4.5 8L1 5.5H5.5L7 1Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
              </svg>
              Precios
            </span>
            <h2 className="section-title" style={{marginBottom:'16px'}}>
              Precios simples, sin sorpresas
            </h2>
            <p className="section-subtitle" style={{margin:'0 auto'}}>
              Todos los planes incluyen el sistema completo de reviews. Sin contratos ni letra chica.
            </p>
          </div>

          {/* Toggle */}
          <div className="pricing-toggle-wrap reveal">
            <span className={`toggle-label${!annual ? ' active' : ''}`}>Mensual</span>
            <button
              className="toggle-switch"
              onClick={() => setAnnual(a => !a)}
              aria-label={annual ? 'Cambiar a mensual' : 'Cambiar a anual'}
              style={{background: annual ? 'var(--blue)' : 'var(--gray-300)'}}
            >
              <span className="toggle-thumb" style={{left: annual ? '27px' : '3px'}} />
            </button>
            <span className={`toggle-label${annual ? ' active' : ''}`}>Anual</span>
            <span className="annual-badge">-20%</span>
          </div>

          {/* Plans */}
          <div className="plans-grid reveal">
            {plans.map(plan => {
              const price = annual ? plan.annualPrice : plan.monthlyPrice
              const oldPrice = annual ? plan.monthlyPrice : null
              const isPopular = plan.popular
              const textColor = isPopular ? 'rgba(255,255,255,0.9)' : 'var(--gray-600)'
              const titleColor = isPopular ? '#fff' : 'var(--gray-900)'

              return (
                <div key={plan.name} className={`plan-card${isPopular ? ' plan-popular' : ''}`}>
                  {isPopular && <span className="popular-badge">⚡ Más popular</span>}

                  <div className="plan-name" style={{color: isPopular ? 'rgba(255,255,255,0.7)' : 'var(--gray-400)'}}>{plan.name}</div>
                  <p className="plan-desc" style={{color: textColor}}>{plan.description}</p>

                  <div className="plan-price-block">
                    <div className="plan-price-row">
                      <span className="plan-currency" style={{color: titleColor}}>$</span>
                      <span className="plan-price" style={{color: titleColor}}>{price}</span>
                      <span className="plan-period" style={{color: isPopular ? 'rgba(255,255,255,0.6)' : 'var(--gray-400)'}}>/mes</span>
                    </div>
                    <div className="plan-price-old" style={{color: isPopular ? 'rgba(255,255,255,0.5)' : 'var(--gray-400)'}}>
                      {annual && oldPrice ? `$${oldPrice}/mes sin descuento` : '\u00A0'}
                    </div>
                  </div>

                  <ul className="plan-features">
                    {plan.features.map(f => (
                      <li key={f.text} className="plan-feature">
                        <span
                          className="plan-feature-icon"
                          style={{
                            background: f.included
                              ? isPopular ? 'rgba(255,255,255,0.15)' : '#ecfdf5'
                              : isPopular ? 'rgba(255,255,255,0.08)' : 'var(--gray-100)'
                          }}
                        >
                          {f.included
                            ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M2 5l2 2 4-4" stroke={isPopular ? '#fff' : '#10B981'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            : <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M3 3l4 4M7 3l-4 4" stroke={isPopular ? 'rgba(255,255,255,0.4)' : '#d1d5db'} strokeWidth="1.5" strokeLinecap="round"/>
                              </svg>
                          }
                        </span>
                        <span style={{
                          color: f.included ? titleColor : (isPopular ? 'rgba(255,255,255,0.35)' : 'var(--gray-300)'),
                          textDecoration: f.included ? 'none' : 'line-through'
                        }}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#cta"
                    className={`btn plan-cta${isPopular ? '' : ' btn-primary'}`}
                    style={isPopular ? {
                      background: '#fff',
                      color: 'var(--blue)',
                      fontWeight: 700,
                    } : {}}
                  >
                    {plan.cta}
                  </a>
                </div>
              )
            })}
          </div>

          {/* Addons */}
          <div className="addons-section reveal">
            <h3 className="addons-title">Funciones adicionales opcionales</h3>
            <p className="addons-subtitle">Agrega estas funciones a cualquier plan si las necesitas. No son parte del producto principal.</p>
            <div className="addons-grid">
              {addons.map(addon => (
                <div key={addon.name} className="addon-card">
                  <div className="addon-icon-wrap" style={{background: addon.color}}>
                    {addon.icon}
                  </div>
                  <div className="addon-info">
                    <div className="addon-name">{addon.name}</div>
                    <div className="addon-desc">{addon.description}</div>
                  </div>
                  <div className="addon-price" style={{color: addon.textColor}}>{addon.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
