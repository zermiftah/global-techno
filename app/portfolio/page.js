'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ImgBox, { ImgBoxPC, ImgBoxMobile } from '../../components/ImgBox'
import CtaSection from '../../components/CtaSection'

const ALL_PROJECTS = [
  {
    slug: 'smart-hotel-web',
    title: 'Smart Hotel System — Web App',
    category: ['Web', 'SaaS'],
    mockup: 'pc',
    client: 'Hospitality',
    tech: ['ReactJS', 'TailwindCSS', 'Zustand', 'TanStack', 'Go', 'PostgreSQL', 'OpenCV', 'AWS', 'Docker'],
    img: '/assets/hotel1.png',
    desc: 'Centralized hotel operations dashboard with task assignment, staff shift scheduling, season calendar, department coordination, and operational reporting. Real-time data sync with optimized state management.',
    highlights: ['Real-time Dashboard', 'Role-based Access', 'Department Coordination', 'AWS Cloud', 'Season Calendar'],
  },
  {
    slug: 'smart-hotel-mobile',
    title: 'Smart Hotel System — Mobile App',
    category: ['Mobile'],
    mockup: 'mobile',
    client: 'Hospitality',
    tech: ['React Native', 'TailwindCSS', 'Firebase', 'OpenCV'],
    img: '/assets/hotelmobile.png',
    desc: 'Mobile app for hotel staff with Clock-In/Clock-Out via Face Recognition and GPS location verification, Firebase Auth, FCM push notifications, task management, and leave request submission.',
    highlights: ['Face Recognition', 'GPS Verification', 'Push Notifications', 'iOS & Android', 'Cross-platform'],
  },
  {
    slug: 'fems-dashboard',
    title: 'FEMS Dashboard',
    category: ['Web', 'IoT'],
    mockup: 'pc',
    client: 'Industrial',
    tech: ['React.js', 'Express.js', 'Electron.js', 'Node-RED'],
    img: '/assets/fems.png',
    desc: 'Multi-platform energy monitoring dashboard (Web, Desktop) for real-time electrical panel metrics KWH, KVA, APM, and Voltage Line-to-Line. Centralized oversight across all factories and individual rooms within each plant.',
    highlights: ['Real-time Monitoring', 'Multi-platform', 'Factory Overview', 'Energy Management', 'Industrial IoT'],
  },
  {
    slug: 'telkomsel-poin',
    title: 'Telkomsel Poin',
    category: ['Mobile', 'Telecommunication'],
    mockup: 'mobile',
    client: 'Telkomsel',
    tech: ['React Native', 'NestJS', 'MongoDB', 'Redis', 'Kafka'],
    img: '/assets/telkompoin.jpg',
    desc: 'Maintained and enhanced the Telkomsel Poin reward management application for millions of subscribers — improving system functionality, performance, and user experience through scalable microservices.',
    highlights: ['Millions of Users', 'Kafka Streaming', 'Redis Caching', 'Microservices', 'Reward Engine'],
  },
  {
    slug: 'telkomsel-mnv',
    title: 'Telkomsel MNV (CMS)',
    category: ['Web', 'SaaS', 'CMS'],
    mockup: 'pc',
    client: 'Telkomsel Enterprise',
    tech: ['Laravel', 'Lumen', 'PostgreSQL'],
    img: '/assets/telkommnv.jpg',
    desc: 'TAP-MNV digital security CMS safeguarding enterprise data against social engineering, phishing, and scam threats — enabling secure, passwordless application access for enterprise clients.',
    highlights: ['Digital Security', 'Anti-Phishing', 'CAPTCHA Integration', 'Enterprise Auth', 'CMS'],
  },
  {
    slug: 'bale-btn',
    title: 'Bale by BTN',
    category: ['Mobile', 'Finance'],
    mockup: 'mobile',
    client: 'Bank BTN',
    tech: ['React Native', 'Node.js', 'MySQL', 'MongoDB'],
    img: '/assets/bale2.jpg',
    desc: 'All-in-one banking super app covering payment & transfer, lifestyle features, BTN ecosystem integration, and property services. Managed the Bale Community module with Node.js and dual-database strategy.',
    highlights: ['Banking SuperApp', 'Community Module', 'Dual Database', 'BTN Ecosystem', 'Lifestyle Features'],
  },
  {
    slug: 'xpedius',
    title: 'Xpedius Project',
    category: ['Web', 'AI'],
    mockup: 'pc',
    client: 'Healthcare',
    tech: ['AngularJS', 'Node.js', 'Google Dialogflow'],
    img: '/assets/xpedius.png',
    desc: 'Web CMS for doctors to generate detailed microscope reports through voice commands powered by Google Dialogflow AI speech-to-text — dramatically reducing documentation time in clinical settings.',
    highlights: ['AI Voice-to-Text', 'Google Dialogflow', 'Medical Reporting', 'Checklist Library', 'Full-stack'],
  },
  {
    slug: 'cerdas-learning',
    title: 'Cerdas Learning System',
    category: ['Web', 'SaaS'],
    mockup: 'pc',
    client: 'Education',
    tech: ['Vue.js', 'Vuetify'],
    img: '/assets/cerdas.png',
    desc: 'Comprehensive educational CMS with quizzes, teacher/class/school/student/parent management, course management, and file handling — serving multiple educational institutions.',
    highlights: ['Multi-role Management', 'Quiz & Course Engine', 'School Admin', 'File Management', 'Multi-institution'],
  },
  {
    slug: 'dkt-ehealth',
    title: 'DKT E-Health',
    category: ['Web', 'CMS'],
    mockup: 'pc',
    client: 'Healthcare',
    tech: ['Vue.js', 'Vuetify'],
    img: '/assets/dkt.png',
    desc: 'Healthcare CMS tailored for midwives — managing medicine purchases, training modules, events, and news updates. Features a Notification Blast system targeting multiple user segments.',
    highlights: ['Notification Blast', 'Training Modules', 'Event Management', 'Medicine Catalog', 'Healthcare CMS'],
  },
  {
    slug: 'histore',
    title: 'HiStore',
    category: ['Mobile'],
    mockup: 'mobile',
    client: 'HIPO',
    tech: ['Lumen (PHP)'],
    img: '/assets/histore.png',
    desc: 'Mobile e-commerce application for HIPO featuring category-based product selection, courier-based shipping integration, and integrated news updates to streamline digital shopping operations.',
    highlights: ['E-commerce Backend', 'Category Catalog', 'Courier Integration', 'News Feed API', 'Digital Shopping'],
  },
  {
    slug: 'jingga-survey',
    title: 'Jingga Teknologi Survey',
    category: ['Web', 'CMS'],
    mockup: 'pc',
    client: 'Insurance',
    tech: ['Laravel (PHP)'],
    img: '/assets/jingga.png',
    desc: 'Car insurance claim survey CMS with third-party insurance provider integration and Zoom Meet video call functionality to ensure secure, fraud-free claim verification processes.',
    highlights: ['Insurance Integration', 'Zoom Video Call', 'Fraud Prevention', 'Survey Management', 'Full-stack'],
  },
  {
    slug: 'geeknesia',
    title: 'Geeknesia IoT Platform',
    category: ['Web', 'IoT'],
    mockup: 'pc',
    client: 'PT IoT Inovasi Indonesia',
    tech: ['Laravel (PHP)'],
    img: '/assets/geeknesia.png',
    desc: 'IoT platform enabling Makers to connect hardware with cloud services for real-time data transmission and device control via API integrations and custom dashboard creation.',
    highlights: ['15,000+ Users', '2,800+ Projects', 'Hardware-Cloud Bridge', 'API Integrations', 'IoT Dashboard'],
  },
]

// Tags strictly match category values used above
const ALL_TAGS = ['All', 'Web', 'Mobile', 'SaaS', 'AI', 'CMS']

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('All')

  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); obs.unobserve(el.target) } }),
      { threshold: 0.08 }
    )
    setTimeout(() => document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el)), 100)
    return () => obs.disconnect()
  }, [activeTab])

  const filtered = activeTab === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category.includes(activeTab))

  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--ink)', paddingTop: 120, paddingBottom: 72, paddingLeft: 56, paddingRight: 56, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 2px 2px,rgba(255,255,255,0.03) 1px,transparent 0)', backgroundSize: '44px 44px' }} />
        <div style={{ position: 'absolute', top: '50%', right: '5%', transform: 'translateY(-50%)', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(158,32,32,0.15) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 700, position: 'relative' }}>
          <div className="section-label reveal" style={{ marginBottom: 16, color: 'rgba(255,255,255,0.35)' }}>Our Work</div>
          <h1 className="reveal d1" style={{ fontFamily: 'Fraunces,serif', fontWeight: 700, fontSize: 'clamp(32px,4.5vw,58px)', color: 'white', lineHeight: 1.08, marginBottom: 20 }}>
            12 Projects.<br /><em style={{ fontStyle: 'italic', color: 'var(--red-mid)' }}>Real Impact.</em>
          </h1>
          <p className="reveal d2" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 16, lineHeight: 1.8, maxWidth: 520 }}>
            From enterprise telecom and banking to healthcare, education, hotel and IoT — here is what we have shipped.
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section style={{ background: 'var(--cream)', padding: '72px 56px' }}>
        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {ALL_TAGS.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: '8px 18px', borderRadius: 100, fontSize: 12, fontWeight: 600,
                border: '1.5px solid', cursor: 'pointer', transition: 'all 0.18s',
                borderColor: activeTab === t ? 'var(--red-mid)' : 'var(--border)',
                background: activeTab === t ? 'var(--red-mid)' : 'white',
                color: activeTab === t ? 'white' : 'var(--ink-soft)',
              }}>
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="porto-g">
          {filtered.map((p) => (
            <div key={p.slug} className="card porto-card" style={{ overflow: 'hidden' }}>

              {/* Mockup area */}
              <div style={{
                background: '#f0ece8',
                padding: p.mockup === 'mobile' ? '28px 0 8px' : '24px 24px 0',
                position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                minHeight: 200,
              }}>
                {/* Category chips */}
                <div style={{ position: 'absolute', top: 10, left: 12, display: 'flex', gap: 5, flexWrap: 'wrap', zIndex: 10 }}>
                  {p.category.slice(0, 2).map(t => (
                    <span key={t} className="chip chip-ink" style={{ fontSize: 10, padding: '3px 9px' }}>{t}</span>
                  ))}
                </div>

                {p.mockup === 'mobile' && (
                  <ImgBoxMobile src={p.img} alt={p.title} width={130} theme="dark" />
                )}
                {p.mockup === 'pc' && (
                  <ImgBoxPC src={p.img} alt={p.title} width="90%" theme="dark" />
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '20px 22px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, gap: 8 }}>
                  <h3 style={{ fontFamily: 'Fraunces,serif', fontWeight: 700, fontSize: 16, color: 'var(--ink)', lineHeight: 1.3 }}>{p.title}</h3>
                  <span style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 600, whiteSpace: 'nowrap', marginTop: 2, flexShrink: 0 }}>{p.client}</span>
                </div>
                <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14 }}>
                  {p.highlights.slice(0, 3).map(h => (
                    <span key={h} className="chip chip-warm" style={{ fontSize: 10, padding: '3px 9px' }}>{h}</span>
                  ))}
                </div>

                {/* Tech stack */}
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 7 }}>Stack</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {p.tech.slice(0, 4).map(t => (
                      <span key={t} style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--red-mid)', background: 'var(--red-light)', borderRadius: 5, padding: '2px 7px' }}>{t}</span>
                    ))}
                    {p.tech.length > 4 && (
                      <span style={{ fontSize: 10, color: 'var(--muted)', background: 'var(--warm)', borderRadius: 5, padding: '2px 7px' }}>+{p.tech.length - 4}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--muted)', fontSize: 14 }}>
            No projects found for this category.
          </div>
        )}
      </section>

      <CtaSection
        title="Your project could be next"
        subtitle="We have built for telecom giants, banks, hospitals, and startups. Whatever you need, we have likely built something like it."
      />

      <style>{`
        .porto-g{}
        .porto-card {
          animation: cardFadeIn 0.35s ease both;
        }
        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media(max-width:1100px){.porto-g{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:768px){.porto-g{grid-template-columns:1fr!important}section{padding-left:24px!important;padding-right:24px!important}}
      `}</style>
    </>
  )
}