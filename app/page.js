'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ImgBox, { ImgBoxBorder, ImgBoxPC, ImgBoxMobile } from '../components/ImgBox'

const CLIENTS = ['TELKOMSEL', 'BANK BTN', 'HIPO', 'DKT E-HEALTH', 'XPEDIUS', 'CERDAS EDU', 'GEEKNESIA', 'JINGGA TEKNOLOGI']

const SERVICES_HOME = [
  { icon: '✦', title: 'UX/UI Design', href: '/services/ux-ui-design', desc: 'User-centered interfaces that delight and convert.' },
  { icon: '<>', title: 'Web Development', href: '/services/web-development', desc: 'Fast, modern web apps with scalable architecture.' },
  { icon: '◉', title: 'Mobile App Dev', href: '/services/mobile-app', desc: 'Cross-platform iOS & Android with real-time sync.' },
  { icon: '◈', title: 'Custom Software', href: '/services/custom-software', desc: 'Enterprise platforms built to your exact requirements.' },
  { icon: '⌬', title: 'QA & Testing', href: '/services/qa-testing', desc: 'Automated testing that ships stable, secure software.' },
  { icon: '⊞', title: 'Consulting', href: '/services/software-consulting', desc: 'Architecture strategy and digital transformation.' },
]

const PORTFOLIO_HOME = [
  {
    title: 'Smart Hotel System',
    mockup: 'pc',
    tags: ['Web', 'Mobile'],
    color: '#1a1410',
    img: '/assets/portfolio/smart-hotel-web.png',
    desc: 'Full hotel ops ecosystem with real-time dashboard, face recognition attendance, and mobile app.',
  },
  {
    title: 'Telkomsel Poin',
    mockup: 'mobile',
    tags: ['Mobile', 'Telecommunication'],
    color: '#9e2020',
    img: '/assets/telkompoin.jpg',
    desc: 'Reward platform for millions of subscribers — NestJS microservices with Kafka streaming.',
  },
  {
    title: 'Bale by BTN',
    mockup: 'mobile',
    tags: ['Mobile', 'Finance'],
    color: '#1e3a5f',
    img: '/assets/bale2.jpg',
    desc: 'All-in-one banking super app: payments, lifestyle, and BTN community module.',
  },
  {
    title: 'FEMS',
    mockup: 'pc',
    tags: ['Web', 'IoT'],
    color: '#2c4a2a',
    img: '/assets/fems.png',
    desc: 'Real-time electrical panel metrics KWH, KVA, APM, and Voltage Line-to-Line. Centralized oversight across all factories and individual rooms within each plant.',
  },
]

const STATS = [
  { value: '20+', label: 'Experts' },
  { value: '7+', label: 'Years Experience' },
  { value: '5+', label: 'Industries Served' },
  { value: '10+', label: 'Delivered Projects' },
]

const PROCESS = [
  { n: '01', title: 'Plan', items: ['Requirements', 'Roadmap', 'Consultation'], bg: '#faf8f5', color: 'var(--ink)' },
  { n: '02', title: 'Design & Feedback', items: ['Mock-up', 'Prototyping', 'Feedback', 'Iterate'], bg: '#f5f0eb', color: 'var(--ink)' },
  { n: '03', title: 'Documentation', items: ['System Docs', 'API Docs'], bg: 'var(--red-mid)', color: 'white', light: true },
  { n: '04', title: 'Development', items: ['Code', 'Integration', 'Sprint Review'], bg: '#e8e0d8', color: 'var(--ink)' },
  { n: '05', title: 'Test & Deploy', items: ['Testing', 'QA', 'Deployment'], bg: '#faf8f5', color: 'var(--ink)' },
  { n: '06', title: 'Review', items: ['Review', 'Find Fault'], bg: 'var(--ink)', color: 'white', light: true },
]

export default function HomePage() {
  const [splashDone, setSplashDone] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setSplashDone(true), 2800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (!splashDone) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    setTimeout(() => {
      document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => observer.observe(el))
    }, 100)
    return () => observer.disconnect()
  }, [splashDone])

  return (
    <>
      {/* SPLASH */}
      <div id="splash" className={splashDone ? 'hide' : ''}>
        <div className="splash-logo" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 48, height: 48, background: 'var(--red-mid)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: 800, fontSize: 18, fontFamily: 'Plus Jakarta Sans,sans-serif' }}>GT</span>
          </div>
          <div>
            <div style={{ color: 'white', fontFamily: 'Fraunces,serif', fontWeight: 600, fontSize: 24, lineHeight: 1 }}>GlobalTechno</div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 4 }}>PT Penghubung Teknologi Global</div>
          </div>
        </div>
        <div className="splash-bar" />
        <div className="splash-sub"> Indonesia</div>
        <div className="splash-dots">
          <div className="splash-dot" /><div className="splash-dot" /><div className="splash-dot" />
        </div>
      </div>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', background: 'var(--cream)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', paddingTop: 80 }}>
        <div style={{ position: 'absolute', top: -120, right: -120, width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle,rgba(158,32,32,0.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)', backgroundSize: '72px 72px', opacity: 0.35, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'white', clipPath: 'ellipse(58% 100% at 50% 100%)', pointerEvents: 'none' }} />

        <div style={{ width: '100%', padding: '80px 56px 120px', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', maxWidth: '100%' }} className="hero-g">
            <div>
              <div className="section-label reveal" style={{ marginBottom: 18 }}>Software Development Studio</div>
              <h1 className="reveal d1" style={{ fontFamily: 'Fraunces,serif', fontWeight: 700, fontSize: 'clamp(36px,4.5vw,64px)', lineHeight: 1.06, color: 'var(--ink)', marginBottom: 22 }}>
                Transforming<br />your <em style={{ fontStyle: 'italic', color: 'var(--red-mid)' }}>Ideas</em> into<br />Innovative Reality
              </h1>
              <p className="reveal d2" style={{ color: 'var(--muted)', fontSize: 15.5, lineHeight: 1.8, maxWidth: 480, marginBottom: 32 }}>
                We turn your business needs into real solutions through specialized and personalized software services — web, mobile, and enterprise systems.
              </p>
              <div className="reveal d3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
                <Link href="/portfolio" className="btn-primary">See Our Work →</Link>
                <Link href="/contact" className="btn-outline">Let's Collaborate</Link>
              </div>
              <div className="reveal d4" style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
                {STATS.map((s, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: 'Fraunces,serif', fontWeight: 700, fontSize: 30, color: 'var(--ink)' }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 500, maxWidth: 90, lineHeight: 1.4, marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right" style={{ position: 'relative' }}>
              <div className="float-a" style={{ maxWidth: 500, margin: '0 auto', background: 'white', borderRadius: 24, boxShadow: '0 32px 80px rgba(26,20,16,0.11),0 0 0 1px var(--border)', overflow: 'hidden' }}>
                <div style={{ background: 'var(--ink)', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                  <span style={{ flex: 1, textAlign: 'center', fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>GlobalTechno · Project Dashboard</span>
                </div>
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 16 }}>
                    {[['10+', 'Projects', 'var(--red-mid)', 'white'], ['99%', 'Uptime', 'var(--cream)', 'var(--ink)'], ['24h', 'Support', 'var(--warm)', 'var(--ink)']].map(([v, l, bg, col]) => (
                      <div key={l} style={{ background: bg, borderRadius: 12, padding: '14px 10px', textAlign: 'center' }}>
                        <div style={{ fontFamily: 'Fraunces,serif', fontWeight: 700, fontSize: 20, color: col }}>{v}</div>
                        <div style={{ fontSize: 10, color: bg === 'var(--red-mid)' ? 'rgba(255,255,255,0.7)' : 'var(--muted)', fontWeight: 500 }}>{l}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: 'var(--cream)', borderRadius: 12, padding: '14px' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--ink-soft)', marginBottom: 10 }}>ACTIVE PROJECTS</div>
                    {[['Smart Hotel System', 78], ['Telkomsel Poin', 93], ['Bale by BTN', 61]].map(([n, p]) => (
                      <div key={n} style={{ marginBottom: 10 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--ink-soft)', marginBottom: 5 }}>
                          <span>{n}</span><span style={{ color: 'var(--red-mid)', fontWeight: 700 }}>{p}%</span>
                        </div>
                        <div style={{ height: 4, background: 'var(--border)', borderRadius: 10, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${p}%`, background: 'linear-gradient(90deg,var(--red-mid),var(--red))', borderRadius: 10 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="float-b" style={{ position: 'absolute', bottom: -12, left: -12, background: 'white', borderRadius: 14, padding: '10px 14px', boxShadow: '0 8px 28px rgba(26,20,16,0.1)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, background: 'var(--red-soft)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>✓</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 11, color: 'var(--ink)' }}>On-time delivery</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)' }}>Guaranteed every sprint</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ background: 'white', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '20px 0', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: 12, fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', textTransform: 'uppercase' }}>Trusted by Industry Leaders</div>
        <div style={{ overflow: 'hidden' }}>
          <div className="marquee-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <div key={i} className="marquee-item">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section style={{ background: 'white', padding: '88px 56px' }}>
        <div style={{ marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div className="section-label reveal" style={{ marginBottom: 12 }}>Featured Work</div>
            <h2 className="reveal d1" style={{ fontFamily: 'Fraunces,serif', fontWeight: 700, fontSize: 'clamp(26px,3vw,44px)', color: 'var(--ink)', lineHeight: 1.1 }}>Our Work</h2>
          </div>
          <Link href="/portfolio" className="btn-outline reveal" style={{ fontSize: 13 }}>See all our work →</Link>
        </div>

        {/* Featured card */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--cream)', borderRadius: 24, border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 32 }}>
          <div style={{ padding: '44px' }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
              {['Mobile', 'Web', 'SaaS', 'Design'].map((t, i) => (
                <span key={t} className={`chip ${i === 0 ? 'chip-ink' : i === 2 ? 'chip-red' : 'chip-warm'}`}>{t}</span>
              ))}
            </div>
            <h3 style={{ fontFamily: 'Fraunces,serif', fontWeight: 700, fontSize: 26, color: 'var(--ink)', marginBottom: 14 }}>Smart Hotel System</h3>
            <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>Centralized hotel operations platform, task assignment, staff scheduling, season calendar, and a mobile app with face recognition clock-in. Real-time sync across all departments.</p>
            <div style={{ background: 'white', borderRadius: 12, padding: '14px 18px', border: '1px solid var(--border)', marginBottom: 20 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 7 }}>SERVICES</div>
              <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginBottom: 12 }}>Software Consulting · UX/UI Design · Mobile App Development</div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 7 }}>TECHNOLOGIES</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {['ReactJS', 'Go', 'PostgreSQL', 'AWS', 'Docker', 'Firebase', 'OpenCV'].map(t => (
                  <span key={t} className="chip chip-warm" style={{ fontSize: 10 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px', position: 'relative', overflow: 'hidden' }}>
            <ImgBoxPC src="/assets/hotel1.png" alt="Smart Hotel System screenshot" theme="dark" width="100%" />
          </div>
        </div>

        {/* Mini grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {PORTFOLIO_HOME.slice(1).map((p, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              {p.mockup === 'mobile' ? (
                <div style={{ background: 'var(--cream)', borderRadius: '20px 20px 0 0', padding: '24px 16px 8px', display: 'flex', justifyContent: 'center', minHeight: 280 }}>
                  <ImgBoxMobile
                    src={p.img}
                    alt={`${p.title} screenshot`}
                    theme="dark"
                    width={160}
                    align="center"
                  />
                </div>
              ) : (
                <ImgBoxPC
                  src={p.img}
                  alt={`${p.title} screenshot`}
                  height={220}
                  radius="20px 20px 0 0"
                  style={{ border: 'none', boxShadow: 'none' }}
                />
              )}
              <div style={{ padding: '20px 22px 22px', flex: 1 }}>
                <div style={{ display: 'flex', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
                  {p.tags.map(t => <span key={t} className="chip chip-warm" style={{ fontSize: 10 }}>{t}</span>)}
                </div>
                <h4 style={{ fontFamily: 'Fraunces,serif', fontWeight: 700, fontSize: 16, color: 'var(--ink)', marginBottom: 8 }}>{p.title}</h4>
                <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: 'var(--ink)', padding: '88px 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 72, background: 'white', clipPath: 'ellipse(55% 100% at 50% 0%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 72, background: 'var(--cream)', clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 2px 2px,rgba(255,255,255,0.03) 1px,transparent 0)', backgroundSize: '44px 44px' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="section-label reveal" style={{ marginBottom: 12, color: 'rgba(255,255,255,0.35)' }}>What We Do</div>
              <h2 className="reveal d1" style={{ fontFamily: 'Fraunces,serif', fontWeight: 700, fontSize: 'clamp(26px,3vw,44px)', color: 'white', lineHeight: 1.1 }}>Our Services</h2>
            </div>
            <Link href="/services" className="reveal services-view-all">
              Get all services →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }} className="svc-g">
            {SERVICES_HOME.map((s, i) => (
              <Link key={i} href={s.href} className={`reveal d${i + 1} svc-card-link`}>
                <div style={{ fontSize: 22, marginBottom: 14, width: 46, height: 46, background: 'rgba(158,32,32,0.25)', borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', color: 'rgba(255,255,255,0.7)' }}>{s.icon}</div>
                <div style={{ fontFamily: 'Fraunces,serif', fontWeight: 600, fontSize: 17, color: 'white', marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US + STATS */}
      <section style={{ background: 'var(--cream)', padding: '88px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="hero-g">
          <div className="reveal-left" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 20, padding: '28px 22px', border: '1px solid var(--border)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Fraunces,serif', fontWeight: 700, fontSize: 38, background: 'linear-gradient(135deg,var(--red-mid),var(--red))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 500, marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className="reveal-right">
            <div className="section-label" style={{ marginBottom: 16 }}>Why Choose Us</div>
            <h2 style={{ fontFamily: 'Fraunces,serif', fontWeight: 700, fontSize: 'clamp(24px,2.8vw,40px)', color: 'var(--ink)', lineHeight: 1.15, marginBottom: 18 }}>
              Built from experience and <em style={{ fontStyle: 'italic', color: 'var(--red-mid)' }}>innovation</em>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 14.5, lineHeight: 1.85, marginBottom: 24 }}>Our team brings deep expertise from fintech, healthcare, hospitality, education, and telecom projects. We've shipped enterprise-grade software for Indonesia's largest companies — and we bring that same quality to every project.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Agile delivery with transparent progress', 'Enterprise security standards', 'Full-stack cross-platform capability', 'Post-launch support & SLA'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--ink-soft)' }}>
                  <span style={{ width: 18, height: 18, background: 'var(--red-soft)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: 'var(--red-mid)', flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-primary" style={{ padding: '10px 22px', fontSize: 13 }}>More about us →</Link>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section style={{ background: 'white', padding: '88px 56px' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="section-label reveal" style={{ justifyContent: 'center', marginBottom: 12 }}>Our Process</div>
          <h2 className="reveal d1" style={{ fontFamily: 'Fraunces,serif', fontWeight: 700, fontSize: 'clamp(26px,3vw,44px)', color: 'var(--ink)', lineHeight: 1.1 }}>How We Work</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 14 }} className="proc-g">
          {PROCESS.map((p, i) => (
            <div key={i} className={`arch-card reveal d${i + 1}`} style={{ background: p.bg, border: 'none' }}>
              {/* Step number */}
              <div style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800, fontSize: 12,
                color: p.light ? 'rgba(255,255,255,0.5)' : 'var(--red-mid)',
                letterSpacing: '0.08em', marginBottom: 10,
              }}>{p.n}</div>
              <div style={{ fontFamily: 'Fraunces,serif', fontWeight: 700, fontSize: 14, color: p.light ? 'white' : p.color, marginBottom: 14, lineHeight: 1.25 }}>{p.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6, width: '100%' }}>
                {p.items.map((item, j) => (
                  <li key={j} style={{
                    fontSize: 11.5, fontWeight: 500,
                    color: p.light ? 'rgba(255,255,255,0.75)' : 'var(--muted)',
                    padding: '3px 0', textAlign: 'center',
                    borderTop: j > 0 ? `1px solid ${p.light ? 'rgba(255,255,255,0.08)' : 'rgba(26,20,16,0.07)'}` : 'none',
                  }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--ink)', padding: '88px 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle,rgba(158,32,32,0.18) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div className="section-label reveal" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Let's work together</div>
          <h2 className="reveal d1" style={{ fontFamily: 'Fraunces,serif', fontWeight: 700, fontSize: 'clamp(30px,4vw,52px)', color: 'white', lineHeight: 1.1, marginBottom: 16 }}>Got a project?</h2>
          <p className="reveal d2" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>Tell us about your idea and we'll come back with a plan. Free consultation, no commitment required.</p>
          <div className="reveal d3" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '13px 30px', fontSize: 14 }}>Contact Us →</Link>
            <a href="https://wa.me/6282118621064" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 28px', borderRadius: 999, fontSize: 14, fontWeight: 500,
              background: 'transparent', color: 'rgba(255,255,255,0.85)',
              textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.22)',
              cursor: 'pointer',
            }}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .hero-g { }
        .svc-g { }
        @media (max-width: 1100px) {
          .svc-g { grid-template-columns: repeat(2,1fr) !important; }
          .proc-g { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 900px) {
          .hero-g { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .svc-g { grid-template-columns: 1fr !important; }
          .proc-g { grid-template-columns: repeat(2,1fr) !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </>
  )
}