'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0f0c0a', padding: '64px 56px 32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <img src="/assets/logo.png" alt="GlobalTechno" style={{ height: 78, width: 'auto', objectFit: 'contain' }} />
            <div style={{ fontFamily: 'Fraunces,serif', fontWeight: 600, fontSize: 17, color: 'white', lineHeight: 1.1 }}>
              Global<span style={{ color: 'var(--red-mid)' }}>Techno</span></div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, lineHeight: 1.75, maxWidth: 280, marginBottom: 20 }}>
            PT Penghubung Teknologi Global — turning bold ideas into powerful digital products.
          </p>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', lineHeight: 1.9 }}>
            <div>📍 Jl. Pasir Jati Lama No. 18/19 Blok A</div>
            <div>Kec. Cilengkrang, Kab. Bandung 40616</div>
            <div style={{ marginTop: 8 }}>📞 +62 821 1862 1064</div>
            <div>✉ globaltechno.innovation@gmail.com</div>
          </div>
        </div>

        {[
          { title: 'Services', links: [['Web Development', '/services'], ['Mobile App', '/services'], ['Custom Software', '/services'], ['UX/UI Design', '/services'], ['QA & Testing', '/services'], ['Consulting', '/services']] },
          { title: 'Portfolio', links: [['Smart Hotel System', '/portfolio'], ['Telkomsel Poin', '/portfolio'], ['Bale by BTN', '/portfolio'], ['Xpedius', '/portfolio'], ['Cerdas Learning', '/portfolio'], ['All Projects', '/portfolio']] },
          { title: 'Company', links: [['About Us', '/about'], ['Our Process', '/about'], ['Portfolio', '/portfolio'], ['Contact', '/contact'], ['Careers', '#']] },
        ].map(col => (
          <div key={col.title}>
            <div style={{ fontFamily: 'Fraunces,serif', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>{col.title}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>© {new Date().getFullYear()} PT Penghubung Teknologi Global. All rights reserved.</span>
      </div>

      <style>{`
        .footer-link { color: rgba(255,255,255,0.3); font-size: 13px; text-decoration: none; transition: color 0.2s; }
        .footer-link:hover { color: white; }
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } footer { padding: 40px 24px 24px !important; } }
      `}</style>
    </footer>
  )
}