'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          padding: 16px 0;
        }
        .navbar.scrolled {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 0 rgb(0 0 0 / 0.08), 0 4px 16px 0 rgb(0 0 0 / 0.06);
          padding: 12px 0;
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          gap: 2px;
        }
        .nav-logo-text {
          font-size: 20px;
          font-weight: 800;
          color: var(--gray-900);
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .nav-logo-dot {
          width: 7px;
          height: 7px;
          background: var(--green);
          border-radius: 50%;
          display: inline-block;
          margin-left: 1px;
          box-shadow: 0 0 0 2px rgb(16 185 129 / 0.25);
          animation: pulse-dot 2.5s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 2px rgb(16 185 129 / 0.25); }
          50% { box-shadow: 0 0 0 5px rgb(16 185 129 / 0.12); }
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
          list-style: none;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--gray-600);
          font-size: 14px;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .nav-links a:hover {
          color: var(--gray-900);
          background: var(--gray-100);
        }
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          border: none;
          background: none;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .hamburger:hover { background: var(--gray-100); }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--gray-700);
          border-radius: 2px;
          transition: all 0.3s;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--white);
          z-index: 999;
          padding: 80px 24px 40px;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          display: block;
          text-decoration: none;
          color: var(--gray-800);
          font-size: 20px;
          font-weight: 600;
          padding: 14px 16px;
          border-radius: 12px;
          transition: background 0.2s;
        }
        .mobile-menu a:hover { background: var(--gray-50); }
        .mobile-menu .btn {
          margin-top: 16px;
          width: 100%;
          font-size: 16px;
        }
        @media (max-width: 768px) {
          .nav-links, .nav-cta .btn-outline { display: none; }
          .hamburger { display: flex; }
          .nav-cta .btn-primary { display: none; }
        }
      `}</style>

      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <a href="#" className="nav-logo" aria-label="Vincula.io inicio">
              <span className="nav-logo-text">
                V<span style={{color:'var(--blue)'}}>i</span>ncula
                <span className="nav-logo-dot" aria-hidden="true" />
                <span style={{color:'var(--gray-400)'}}>io</span>
              </span>
            </a>

            <ul className="nav-links" role="list">
              <li><a href="#features">Características</a></li>
              <li><a href="#pricing">Precios</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>

            <div className="nav-cta">
              <a href="#cta" className="btn btn-outline btn-sm">Iniciar sesión</a>
              <a href="#cta" className="btn btn-primary btn-sm">Empezar gratis</a>
              <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menú"
                aria-expanded={menuOpen}
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-label="Navegación móvil">
        <a href="#features" onClick={() => setMenuOpen(false)}>Características</a>
        <a href="#pricing" onClick={() => setMenuOpen(false)}>Precios</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        <a href="#cta" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Empezar gratis →</a>
      </div>
    </>
  )
}
