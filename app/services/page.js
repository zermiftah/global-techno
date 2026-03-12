'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import CtaSection from '../../components/CtaSection'

/* ── SVG Icons per service ── */
const SvcIcon = ({ slug }) => {
  const icons = {
    'ux-ui-design': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
        <rect x="6" y="6" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <circle cx="17" cy="20" r="5" stroke="currentColor" strokeWidth="2.2" fill="none"/>
        <path d="M24 26l5-7 5 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 38h36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 34v4M28 34v4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
    'custom-software': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
        <path d="M14 18l-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34 18l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 10l-8 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    'mobile-app': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
        <rect x="14" y="4" width="20" height="40" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <circle cx="24" cy="39" r="1.5" fill="currentColor"/>
        <path d="M20 9h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M19 22l3 3 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'web-development': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M6 24h36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 6c-4 4-6 11-6 18s2 14 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 6c4 4 6 11 6 18s-2 14-6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'qa-testing': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
        <path d="M24 4l18 10v20L24 44 6 34V14L24 4z" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        <path d="M16 24l5 5 10-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'software-consulting': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
        <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M36 20l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  }
  return icons[slug] || null
}

const SERVICES = [
  {
    slug: 'ux-ui-design',
    title: 'UX/UI Design',
    short: 'Crafting seamless, engaging digital experiences for user satisfaction',
    description: 'We design intuitive, beautiful interfaces that delight users and drive business goals. From early research and wireframes to pixel-perfect, responsive high-fidelity designs — every screen is purposeful.',
    features: ['User Research & Personas','Wireframing & Prototyping','High-Fidelity UI Design','Design System & Component Library','Usability Testing & Iteration','Responsive & Accessible Design'],
  },
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    short: 'Software solutions tailored exactly to your needs',
    description: 'From internal tools to full enterprise platforms — we build custom software that fits your workflows, scales with your growth, and integrates with your existing systems.',
    features: ['Requirements Analysis','System Architecture Design','Backend & API Development','Database Design & Optimization','Legacy System Migration','DevOps & CI/CD Pipelines'],
  },
  {
    slug: 'mobile-app',
    title: 'Mobile App Development',
    short: 'Transform your ideas into dynamic mobile experiences',
    description: 'Cross-platform and native mobile apps that perform beautifully on iOS and Android. We handle everything from UI design to backend integration, authentication, and app store deployment.',
    features: ['React Native / Flutter','iOS & Android Native','Firebase Integration','Push Notifications (FCM)','Face Recognition & Biometrics','GPS & Location Services','App Store Deployment'],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    short: 'Crafting responsive and innovative websites and web apps',
    description: 'We build fast, SEO-optimized websites and complex web applications using modern frameworks. Clean code, maintainable architecture, and measurable performance.',
    features: ['Next.js / React / Vue.js','Progressive Web Apps (PWA)','E-commerce Platforms','CMS & Admin Dashboards','API Integrations','Performance Optimization','SEO-ready Architecture'],
  },
  {
    slug: 'qa-testing',
    title: 'QA & Testing',
    short: 'Ensuring flawless performance through rigorous QA & testing',
    description: 'Ship software you can trust. Our comprehensive testing services cover every layer — from unit tests to full end-to-end automated pipelines — ensuring quality before every release.',
    features: ['Manual & Exploratory Testing','Automated Test Suites','API & Integration Testing','Performance & Load Testing','Security & Penetration Testing','CI/CD Quality Gates','Bug Tracking & Reporting'],
  },
  {
    slug: 'software-consulting',
    title: 'Software Consulting',
    short: 'Guiding digital success with strategic consulting',
    description: 'Get expert guidance on technology choices, system architecture, and digital transformation roadmaps. We assess your current stack, identify bottlenecks, and map the path to scalability.',
    features: ['Tech Stack Assessment','System Architecture Review','Digital Transformation Strategy','Code & Security Audit','Scalability Roadmap','Team Training & Mentoring','Vendor & Tool Selection'],
  },
]

const PROCESS = [
  {
    n: '01',
    title: 'Plan',
    items: ['Requirements', 'Roadmap', 'Consultation'],
    detail: 'We kick off with a discovery session to understand your goals, constraints, and success metrics. We document requirements and align on a realistic roadmap before writing a single line of code.',
    bg: '#0d2b35',
    accent: 'rgba(255,255,255,0.55)',
    text: 'white',
  },
  {
    n: '02',
    title: 'Design & Feedback',
    items: ['Mock-up', 'Prototyping', 'Feedback', 'Iterate'],
    detail: 'Our designers produce wireframes and interactive prototypes. You review and give feedback in iterative cycles until the design perfectly matches your vision before development begins.',
    bg: '#1a5c52',
    accent: 'rgba(255,255,255,0.55)',
    text: 'white',
  },
  {
    n: '03',
    title: 'Documentation',
    items: ['System Docs', 'API Docs', 'DB Specs'],
    detail: 'Before development, we write detailed system specs, database schemas, and API contracts. This prevents ambiguity, speeds up coding, and creates a reference your team owns forever.',
    bg: '#e0a060',
    accent: 'rgba(255,255,255,0.75)',
    text: 'white',
  },
  {
    n: '04',
    title: 'Development',
    items: ['Code', 'Integration', 'Sprint Review'],
    detail: 'Agile sprints with transparent progress. We build features incrementally, integrate continuously, and do sprint reviews so you always see working software — never a black box.',
    bg: '#c5d5cc',
    accent: 'rgba(26,50,45,0.6)',
    text: '#1a2e28',
  },
  {
    n: '05',
    title: 'Test & Deploy',
    items: ['Testing', 'QA', 'Deployment'],
    detail: 'Every feature goes through automated and manual QA. We deploy to staging for your sign-off, then to production via our CI/CD pipeline with zero-downtime deploys and rollback plans.',
    bg: '#0d2b35',
    accent: 'rgba(255,255,255,0.55)',
    text: 'white',
  },
  {
    n: '06',
    title: 'Review',
    items: ['Review', 'Find Fault', 'Final Handoff'],
    detail: 'Post-launch, we run a structured review: performance metrics, bug sweep, and UX evaluation. We fix anything we find, deliver full source and documentation, and hand the keys to you.',
    bg: '#2e7a6e',
    accent: 'rgba(255,255,255,0.6)',
    text: 'white',
  },
]

export default function ServicesPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); obs.unobserve(el.target) } }),
      { threshold: 0.1 }
    )
    setTimeout(() => document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el)), 100)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* HERO */}
      <section style={{background:'var(--cream)',paddingTop:120,paddingBottom:72,paddingLeft:56,paddingRight:56,position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:-80,right:-80,width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(158,32,32,0.06) 0%,transparent 65%)',pointerEvents:'none'}} />
        <div style={{maxWidth:680}}>
          <div className="section-label reveal" style={{marginBottom:16}}>What We Offer</div>
          <h1 className="reveal d1" style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:'clamp(32px,4.5vw,58px)',color:'var(--ink)',lineHeight:1.08,marginBottom:20}}>
            Services — From individual<br />services to the <em style={{fontStyle:'italic',color:'var(--red-mid)'}}>entire suite</em>
          </h1>
          <p className="reveal d2" style={{color:'var(--muted)',fontSize:16,lineHeight:1.8,maxWidth:560}}>
            We've got all your needs covered strategy, design, engineering, and support, all under one roof.
          </p>
        </div>
      </section>

      {/* SERVICES GRID — SVG icon, no image, no read more */}
      <section style={{background:'white',padding:'80px 56px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}} className="svc-g">
          {SERVICES.map((s,i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className={`svc-card-new reveal d${(i%3)+1}`}>
              <div className="svc-icon-wrap">
                <SvcIcon slug={s.slug} />
              </div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-short">{s.short}</p>
              <ul className="svc-features">
                {s.features.map(f => (
                  <li key={f}>
                    <span className="svc-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW WE WORK — flat cards, hover reveals detail */}
      <section style={{background:'var(--cream)',padding:'80px 56px 100px'}}>
        <div style={{textAlign:'center',marginBottom:56}}>
          <div className="section-label reveal" style={{justifyContent:'center',marginBottom:12}}>Our Process</div>
          <h2 className="reveal d1" style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:'clamp(26px,3vw,42px)',color:'var(--ink)',lineHeight:1.1}}>How We Work</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:12}} className="proc-arch-g">
          {PROCESS.map((p,i) => (
            <div
              key={i}
              className={`proc-card reveal d${i+1}`}
              style={{'--bg': p.bg, '--col': p.text, '--accent': p.accent}}
            >
              <span className="proc-num">{p.n}</span>
              <span className="proc-title-txt">{p.title}</span>
              {/* Default: list items */}
              <ul className="proc-items">
                {p.items.map((it,j) => <li key={j}>{it}</li>)}
              </ul>
              {/* Hover overlay: detail text */}
              <div className="proc-overlay">
                <span className="proc-num proc-num-sm">{p.n}</span>
                <span className="proc-title-txt">{p.title}</span>
                <p className="proc-detail">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:48}}>
          <Link href="/contact" className="btn-primary">Let's Collaborate →</Link>
        </div>
      </section>

      <CtaSection />

      <style>{`
        /* ── Service cards — static, no expand animation ── */
        .svc-card-new {
          display: flex;
          flex-direction: column;
          background: var(--cream);
          border-radius: 20px;
          padding: 32px 28px 28px;
          border: 1px solid var(--border);
          text-decoration: none;
          transition: box-shadow 0.22s ease, background 0.22s ease;
        }
        .svc-card-new:hover {
          box-shadow: 0 8px 28px rgba(26,20,16,0.09);
          background: white;
        }
        .svc-icon-wrap {
          width: 60px; height: 60px;
          background: white;
          border-radius: 14px;
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--red-mid);
          margin-bottom: 18px;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .svc-card-new:hover .svc-icon-wrap {
          background: var(--red-mid);
          color: white;
          border-color: var(--red-mid);
        }
        .svc-title {
          font-family: Fraunces, serif;
          font-weight: 700;
          font-size: 17px;
          color: var(--ink);
          margin: 0 0 8px;
          line-height: 1.25;
        }
        .svc-short {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.7;
          margin: 0 0 16px;
          flex: 1;
        }
        .svc-features {
          list-style: none;
          padding: 0; margin: 0 0 16px;
          display: flex; flex-direction: column; gap: 6px;
        }
        .svc-features li {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; color: var(--ink-soft);
        }
        .svc-check {
          width: 15px; height: 15px;
          background: var(--red-soft);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 9px; color: var(--red-mid);
          flex-shrink: 0;
        }
        .svc-arrow {
          font-size: 13px;
          color: var(--red-mid);
          font-weight: 600;
          margin-top: auto;
        }

        /* ── Process cards — flat, hover shows detail overlay ── */
        .proc-card {
          position: relative;
          background: var(--bg);
          border-radius: 16px;
          padding: 28px 20px 26px;
          overflow: hidden;
          min-height: 280px;
          display: flex;
          flex-direction: column;
        }
        .proc-num {
          display: block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 26px;
          color: var(--accent);
          line-height: 1;
          margin-bottom: auto;
        }
        .proc-title-txt {
          display: block;
          font-family: Fraunces, serif;
          font-weight: 700;
          font-size: 13px;
          color: var(--col);
          margin: 12px 0 8px;
          line-height: 1.3;
        }
        .proc-items {
          list-style: none;
          padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 4px;
        }
        .proc-items li {
          font-size: 11px;
          color: var(--accent);
          line-height: 1.5;
        }
        /* Hover overlay */
        .proc-overlay {
          position: absolute;
          inset: 0;
          background: var(--bg);
          padding: 28px 20px 26px;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transition: opacity 0.25s ease;
          border-radius: 16px;
        }
        .proc-card:hover .proc-overlay {
          opacity: 1;
        }
        .proc-num-sm {
          font-size: 20px !important;
          margin-bottom: 0 !important;
        }
        .proc-detail {
          font-size: 11.5px;
          line-height: 1.8;
          color: var(--accent);
          margin: 0;
          flex: 1;
        }
        .proc-overlay .proc-title-txt {
          margin-top: 6px;
          margin-bottom: 10px;
        }

        /* responsive */
        .svc-g{}
        .proc-arch-g{}
        @media(max-width:1100px){
          .svc-g{grid-template-columns:repeat(2,1fr)!important}
          .proc-arch-g{grid-template-columns:repeat(3,1fr)!important}
        }
        @media(max-width:768px){
          .svc-g{grid-template-columns:1fr!important}
          .proc-arch-g{grid-template-columns:repeat(2,1fr)!important}
          section{padding-left:24px!important;padding-right:24px!important}
        }
        @media(max-width:480px){
          .proc-arch-g{grid-template-columns:1fr!important}
        }
      `}</style>
    </>
  )
}