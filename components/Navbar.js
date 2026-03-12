'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SERVICE_LINKS = [
  { href: '/services/ux-ui-design', label: 'UX/UI Design' },
  { href: '/services/software-consulting', label: 'Software Consulting' },
  { href: '/services/qa-testing', label: 'QA & Testing' },
  { href: '/services/custom-software', label: 'Custom Software Development' },
  { href: '/services/mobile-app', label: 'Mobile App Development' },
  { href: '/services/web-development', label: 'Web Development' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [svcOpen, setSvcOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const isActive = (href) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 var(--border)' : 'none',
    }}>
      <div style={{ maxWidth: '100%', padding: '0 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/assets/logo.png" alt="GlobalTechno" style={{ height: 75, width: 'auto', objectFit: 'contain' }} />
          <div style={{ fontFamily: 'Fraunces,serif', fontWeight: 600, fontSize: 17, color: 'var(--ink)', lineHeight: 1.1 }}>
            Global<span style={{ color: 'var(--red-mid)' }}>Techno</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="desktop-nav">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>

          <Link href="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>Service</Link>

          <Link href="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}>Portfolio</Link>
          <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
        </nav>

        <Link href="/contact" className="btn-primary desktop-nav" style={{ padding: '9px 22px', fontSize: 13 }}>
          Contact Us
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-only" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen
              ? <><path d="M4 4L18 18M18 4L4 18" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" /></>
              : <><path d="M3 6h16M3 11h16M3 16h16" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" /></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'white', borderTop: '1px solid var(--border)', padding: '12px 24px 20px' }}>
          {[{ href: '/', label: 'Home' }, { href: '/services', label: 'Services' }, { href: '/portfolio', label: 'Portfolio' }, { href: '/about', label: 'About Us' }, { href: '/contact', label: 'Contact' }].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '11px 0', color: pathname === l.href ? 'var(--red-mid)' : 'var(--ink-soft)', fontWeight: 500, fontSize: 15, borderBottom: '1px solid var(--border)' }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-only { display: none; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-only { display: block !important; }
        }
      `}</style>
    </header>
  )
}