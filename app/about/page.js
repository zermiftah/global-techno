'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import CtaSection from '../../components/CtaSection'

const VALUES = [
  { icon: '◎', title: 'Precision First', desc: 'We obsess over every detail — clean code, pixel-perfect UI, and rock-solid testing.' },
  { icon: '⚡', title: 'Speed & Quality', desc: 'Agile delivery without cutting corners. We ship fast and ship right, every sprint.' },
  { icon: '◈', title: 'True Partnership', desc: 'We embed into your team. Your goals become our goals.' },
  { icon: '✦', title: 'Global Standards', desc: 'Enterprise-grade practices — built from Bandung, for the world.' },
  { icon: '⌬', title: 'Excellence Always', desc: "We don't meet expectations — we exceed them, every single project." },
  { icon: '♡', title: 'We Actually Care', desc: 'Honest timelines, transparent communication, and genuine post-launch support.' },
]
const TEAM = [
  { name: 'Full Name', role: 'CEO & Co-Founder', img: '/assets/team/member-1.png' },
  { name: 'Full Name', role: 'CTO & Lead Architect', img: '/assets/team/member-2.png' },
  { name: 'Full Name', role: 'Head of Design', img: '/assets/team/member-3.png' },
  { name: 'Full Name', role: 'Lead Mobile Developer', img: '/assets/team/member-4.png' },
]
const STACK = [
  { cat: 'Frontend', items: ['React / Next.js','Vue.js / Nuxt','React Native','Angular','TailwindCSS','TypeScript'] },
  { cat: 'Backend', items: ['Node.js / Express','Go (Golang)','Laravel / Lumen','NestJS','REST & GraphQL'] },
  { cat: 'Database', items: ['PostgreSQL','MySQL','MongoDB','Redis','Firebase Firestore'] },
  { cat: 'Infrastructure', items: ['AWS (EC2, S3, RDS)','Docker / K8s','CI/CD Pipelines','Kafka','Linux Servers'] },
]
const TIMELINE = [
  { year:'2018', title:'Founded', desc:'Started as a lean team of passionate developers in Bandung, West Java.' },
  { year:'2019', title:'First Enterprise', desc:'Landed our first enterprise client — education sector CMS with Vue.js and Vuetify.' },
  { year:'2020', title:'IoT & E-Commerce', desc:'Shipped IoT platform for Geeknesia and HiStore e-commerce for HIPO.' },
  { year:'2021', title:'Telecom & Banking', desc:'Partnered with Telkomsel (MNV, Poin) and Bank BTN (Bale SuperApp).' },
  { year:'2022', title:'Healthcare Projects', desc:'Delivered Xpedius medical AI CMS and DKT E-Health for midwives.' },
  { year:'2024', title:'Smart Hotel Ecosystem', desc:'Completed our most complex project — a full hotel management web + mobile ecosystem with face recognition and cloud infrastructure.' },
]

export default function AboutPage() {
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
      <section style={{background:'var(--cream)',paddingTop:120,paddingBottom:80,paddingLeft:56,paddingRight:56,position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:-80,right:-60,width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(158,32,32,0.06) 0%,transparent 65%)',pointerEvents:'none'}} />
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'center',maxWidth:'100%'}} className="hero-g">
          <div>
            <div className="section-label reveal" style={{marginBottom:16}}>Who We Are</div>
            <h1 className="reveal d1" style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:'clamp(32px,4.5vw,58px)',color:'var(--ink)',lineHeight:1.08,marginBottom:20}}>
              We Build Software That Powers <em style={{fontStyle:'italic',color:'var(--red-mid)'}}>Real Businesses</em>
            </h1>
            <p className="reveal d2" style={{color:'var(--muted)',fontSize:15.5,lineHeight:1.8,marginBottom:16,maxWidth:520}}>
              PT Penghubung Teknologi Global (Global Techno) is a technology company based in Indonesia specializing in custom software development, mobile apps, and digital product strategy.
            </p>
            <p className="reveal d3" style={{color:'var(--muted)',fontSize:15,lineHeight:1.8,maxWidth:520,marginBottom:28}}>
              The name says it all  <strong style={{color:'var(--red-mid)'}}>Penghubung</strong> means "connector." We bridge the gap between your business goals and the right technology.
            </p>
            <div className="reveal d4" style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <Link href="/contact" className="btn-primary">Work With Us →</Link>
              <Link href="/portfolio" className="btn-outline">See Our Work</Link>
            </div>
          </div>
          <div className="reveal-right" style={{display:'flex',flexDirection:'column',gap:14}}>
            {/* Top row: two stat cards */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
              {[['7+','Years Building'],['12+','Projects Shipped']].map(([v,l]) => (
                <div key={l} style={{background:'var(--ink)',borderRadius:18,padding:'22px 20px',display:'flex',flexDirection:'column',gap:4}}>
                  <span style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:34,background:'linear-gradient(135deg,#fff 30%,rgba(158,32,32,0.7))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{v}</span>
                  <span style={{fontSize:11,color:'rgba(255,255,255,0.35)',fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase'}}>{l}</span>
                </div>
              ))}
            </div>

            {/* Identity card */}
            <div style={{background:'white',borderRadius:18,padding:'22px 24px',border:'1px solid var(--border)',display:'flex',flexDirection:'column',gap:14}}>
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <div style={{width:36,height:36,borderRadius:10,background:'var(--red-soft)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:16}}>◎</div>
                <div>
                  <div style={{fontSize:12,fontWeight:700,color:'var(--ink)'}}>PT Penghubung Teknologi Global</div>
                  <div style={{fontSize:11,color:'var(--muted)'}}> Est. 2018</div>
                </div>
              </div>
              <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                {['Web App','Mobile App','SaaS','IoT','AI/ML','CMS'].map(tag => (
                  <span key={tag} style={{fontSize:10,fontWeight:600,padding:'4px 10px',borderRadius:100,background:'var(--cream)',border:'1px solid var(--border)',color:'var(--ink-soft)'}}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Bottom row: two mini cards */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
              <div style={{background:'var(--red-mid)',borderRadius:18,padding:'20px',display:'flex',flexDirection:'column',gap:6}}>
                <span style={{fontSize:22}}>🏢</span>
                <span style={{fontSize:11,fontWeight:700,color:'white',lineHeight:1.4}}>Enterprise &amp; Startup Clients</span>
                <span style={{fontSize:10,color:'rgba(255,255,255,0.55)'}}>Telkomsel · BTN · HIPO</span>
              </div>
              <div style={{background:'var(--cream)',borderRadius:18,padding:'20px',border:'1px solid var(--border)',display:'flex',flexDirection:'column',gap:6}}>
                <span style={{fontSize:22}}>⚡</span>
                <span style={{fontSize:11,fontWeight:700,color:'var(--ink)',lineHeight:1.4}}>Multi-platform Delivery</span>
                <span style={{fontSize:10,color:'var(--muted)'}}>Web · Mobile · Desktop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{background:'white',padding:'60px 56px',borderTop:'1px solid var(--border)'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:24}} className="stats-g">
          {[['10+','Projects Delivered'],['10+','Enterprise Clients'],['7+','Years in Market'],['100%','Client Satisfaction']].map(([v,l],i) => (
            <div key={i} className={`reveal d${i+1}`} style={{textAlign:'center',padding:'28px 16px',borderRadius:20,background:'var(--cream)',border:'1px solid var(--border)'}}>
              <div style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:40,background:'linear-gradient(135deg,var(--red-mid),var(--red))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{v}</div>
              <div style={{fontSize:13,color:'var(--muted)',fontWeight:500,marginTop:4}}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section style={{background:'var(--ink)',padding:'80px 56px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle at 2px 2px,rgba(255,255,255,0.025) 1px,transparent 0)',backgroundSize:'44px 44px'}} />
        <div style={{maxWidth:720,margin:'0 auto',textAlign:'center',position:'relative'}}>
          <div className="section-label reveal" style={{justifyContent:'center',color:'rgba(255,255,255,0.3)',marginBottom:16}}>Our Mission</div>
          <h2 className="reveal d1" style={{fontFamily:'Fraunces,serif',fontWeight:600,fontSize:'clamp(22px,3vw,38px)',color:'white',lineHeight:1.4,marginBottom:20}}>
            "Connect businesses to technology that genuinely <em style={{fontStyle:'italic',color:'var(--red-mid)'}}>moves the needle.</em>"
          </h2>
          <p className="reveal d2" style={{color:'rgba(255,255,255,0.4)',fontSize:15,lineHeight:1.8}}>
            We believe great software should solve real problems, deliver measurable results, and be a pleasure to use.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section style={{background:'var(--cream)',padding:'80px 56px'}}>
        <div style={{textAlign:'center',marginBottom:48}}>
          <div className="section-label reveal" style={{justifyContent:'center',marginBottom:12}}>What Drives Us</div>
          <h2 className="reveal d1" style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:'clamp(26px,3vw,42px)',color:'var(--ink)',lineHeight:1.1}}>Our Core Values</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}} className="vals-g">
          {VALUES.map((v,i) => (
            <div key={i} className={`card reveal d${(i%3)+1}`} style={{padding:'28px 26px'}}>
              <div style={{width:44,height:44,background:'var(--red-soft)',borderRadius:11,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,marginBottom:14,color:'var(--red-mid)'}}>{v.icon}</div>
              <h4 style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:17,color:'var(--ink)',marginBottom:9}}>{v.title}</h4>
              <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.75}}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{background:'var(--cream)',padding:'80px 56px'}}>
        <div style={{textAlign:'center',marginBottom:48}}>
          <div className="section-label reveal" style={{justifyContent:'center',marginBottom:12}}>Our Journey</div>
          <h2 className="reveal d1" style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:'clamp(26px,3vw,42px)',color:'var(--ink)',lineHeight:1.1}}>Built Step by Step</h2>
        </div>
        <div style={{maxWidth:640,margin:'0 auto',position:'relative'}}>
          <div style={{position:'absolute',left:52,top:0,bottom:0,width:1,background:'var(--border)'}} />
          {TIMELINE.map((t,i) => (
            <div key={i} className={`reveal d${(i%4)+1}`} style={{display:'flex',gap:20,alignItems:'flex-start',marginBottom:20}}>
              <div style={{width:40,textAlign:'right',flexShrink:0}}><span style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:13,color:'var(--red-mid)'}}>{t.year}</span></div>
              <div style={{width:24,height:24,borderRadius:'50%',background:'var(--red-mid)',border:'3px solid var(--red-soft)',flexShrink:0,marginTop:1,position:'relative',zIndex:1}} />
              <div style={{background:'white',borderRadius:14,padding:'16px 20px',flex:1,border:'1px solid var(--border)'}}>
                <div style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:15,color:'var(--ink)',marginBottom:5}}>{t.title}</div>
                <div style={{fontSize:13,color:'var(--muted)',lineHeight:1.65}}>{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{background:'white',padding:'80px 56px'}}>
        <div style={{textAlign:'center',marginBottom:44}}>
          <div className="section-label reveal" style={{justifyContent:'center',marginBottom:12}}>Tech Expertise</div>
          <h2 className="reveal d1" style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:'clamp(26px,3vw,42px)',color:'var(--ink)',lineHeight:1.1}}>Our Technology Stack</h2>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}} className="stk-g">
          {STACK.map((s,i) => (
            <div key={i} className={`reveal d${i+1}`} style={{background:'var(--cream)',borderRadius:18,padding:'24px',border:'1px solid var(--border)'}}>
              <div style={{fontSize:10,fontWeight:800,letterSpacing:'0.18em',color:'var(--red-mid)',textTransform:'uppercase',marginBottom:14}}>{s.cat}</div>
              <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:8}}>
                {s.items.map(item => (
                  <li key={item} style={{display:'flex',alignItems:'center',gap:8,fontSize:13,color:'var(--ink-soft)'}}>
                    <span style={{width:5,height:5,borderRadius:'50%',background:'var(--red-mid)',flexShrink:0}} />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CtaSection title="Want to work with us?" subtitle="We'd love to hear about your project. No pitch decks needed — just a conversation." />

      <style>{`
        .hero-g,.stats-g,.vals-g,.team-g,.stk-g{}
        @media(max-width:900px){.hero-g{grid-template-columns:1fr!important}.stats-g{grid-template-columns:repeat(2,1fr)!important}.team-g{grid-template-columns:repeat(2,1fr)!important}.stk-g{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:768px){.vals-g{grid-template-columns:1fr!important}section{padding-left:24px!important;padding-right:24px!important}}
        @media(max-width:600px){.stats-g{grid-template-columns:1fr!important}.stk-g{grid-template-columns:1fr!important}}
      `}</style>
    </>
  )
}