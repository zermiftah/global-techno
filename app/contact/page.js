'use client'
import { useEffect, useState } from 'react'
import ImgBox from '../../components/ImgBox'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ firstName:'', lastName:'', company:'', email:'', phone:'', service:'', message:'', agree:false })

  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); obs.unobserve(el.target) } }),
      { threshold: 0.1 }
    )
    setTimeout(() => document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el)), 100)
    return () => obs.disconnect()
  }, [])

  const set = (k, v) => setForm(f => ({...f, [k]: v}))

  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <>
      {/* HERO */}
      <section style={{background:'var(--cream)',paddingTop:120,paddingBottom:72,paddingLeft:56,paddingRight:56,position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:-80,right:-60,width:440,height:440,borderRadius:'50%',background:'radial-gradient(circle,rgba(158,32,32,0.06) 0%,transparent 65%)',pointerEvents:'none'}} />
        <div style={{maxWidth:640}}>
          <div className="section-label reveal" style={{marginBottom:16}}>Get in Touch</div>
          <h1 className="reveal d1" style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:'clamp(32px,4.5vw,58px)',color:'var(--ink)',lineHeight:1.08,marginBottom:20}}>
            Let's build something <em style={{fontStyle:'italic',color:'var(--red-mid)'}}>great together</em>
          </h1>
          <p className="reveal d2" style={{color:'var(--muted)',fontSize:16,lineHeight:1.8,maxWidth:520}}>
            Reach out to us and start turning your ideas into reality. Free consultation, no strings attached.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{background:'white',padding:'72px 56px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr',gap:56,alignItems:'start',maxWidth:'100%'}} className="contact-g">
          
          {/* FORM */}
          <div>
            <div style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:24,color:'var(--ink)',marginBottom:8}}>Fill in the form and let's start<br />turning your ideas into reality</div>
            <p style={{fontSize:14,color:'var(--muted)',marginBottom:28,lineHeight:1.7}}>We respond within 24 hours during working days.</p>

            {sent ? (
              <div style={{textAlign:'center',padding:'48px 24px',background:'var(--cream)',borderRadius:20,border:'1px solid var(--border)'}}>
                <div style={{width:60,height:60,background:'var(--red-soft)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px',fontSize:24}}>✓</div>
                <div style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:22,color:'var(--ink)',marginBottom:8}}>Message Sent!</div>
                <p style={{color:'var(--muted)',fontSize:14}}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:16}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
                  <div>
                    <label className="form-label">First name *</label>
                    <input className="form-input" type="text" required placeholder="John" value={form.firstName} onChange={e=>set('firstName',e.target.value)} />
                  </div>
                  <div>
                    <label className="form-label">Last name *</label>
                    <input className="form-input" type="text" required placeholder="Doe" value={form.lastName} onChange={e=>set('lastName',e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="form-label">Company name (optional)</label>
                  <input className="form-input" type="text" placeholder="Your company" value={form.company} onChange={e=>set('company',e.target.value)} />
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
                  <div>
                    <label className="form-label">Work email *</label>
                    <input className="form-input" type="email" required placeholder="john@company.com" value={form.email} onChange={e=>set('email',e.target.value)} />
                  </div>
                  <div>
                    <label className="form-label">Phone number (optional)</label>
                    <input className="form-input" type="tel" placeholder="+62 8xx xxxx xxxx" value={form.phone} onChange={e=>set('phone',e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="form-label">Service needed</label>
                  <select className="form-input" value={form.service} onChange={e=>set('service',e.target.value)} style={{cursor:'pointer'}}>
                    <option value="">Select a service...</option>
                    {['UX/UI Design','Software Consulting','QA & Testing','Custom Software Development','Mobile App Development','Web Development','Multiple Services'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">Tell us about your project (optional)</label>
                  <textarea className="form-input" rows={5} placeholder="Describe your project, goals, budget, and timeline..." value={form.message} onChange={e=>set('message',e.target.value)} style={{resize:'vertical'}} />
                </div>
                <div style={{display:'flex',alignItems:'flex-start',gap:10}}>
                  <input type="checkbox" id="agree" required checked={form.agree} onChange={e=>set('agree',e.target.checked)} style={{marginTop:2,accentColor:'var(--red-mid)',width:14,height:14,flexShrink:0}} />
                  <label htmlFor="agree" style={{fontSize:12,color:'var(--muted)',lineHeight:1.6}}>
                    By sending this form I confirm that I have read and accept the Privacy Policy
                  </label>
                </div>
                <button type="submit" className="btn-primary" style={{alignSelf:'flex-start',padding:'13px 32px',fontSize:14}}>
                  Send Request →
                </button>
              </form>
            )}
          </div>

          {/* SIDEBAR */}
          <div style={{display:'flex',flexDirection:'column',gap:20}}>
            {/* Map / Office image */}
            <ImgBox src="/assets/about/office.png" alt="Our office in Bandung" width="100%" height={220} radius={16} />

            {/* Contact info */}
            <div style={{background:'var(--ink)',borderRadius:20,padding:'28px 24px',color:'white'}}>
              <div style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:18,marginBottom:20}}>Contact Information</div>
              {[
                { icon:'📍', label:'Address', val:'Jl. Pasir Jati Lama No. 18/19 Blok A, Kompleks Jati Endah Regency, Kec. Cilengkrang, Kel. Pasir Jati, Kab. Bandung, Jawa Barat 40616' },
                { icon:'📞', label:'Phone / WA', val:'+62 821 1862 1064' },
                { icon:'✉', label:'Email', val:'globaltechno.innovation@gmail.com' },
                { icon:'🕐', label:'Office Hours', val:'Mon – Fri: 09.00 – 17.00 WIB' },
              ].map(c => (
                <div key={c.label} style={{display:'flex',gap:12,marginBottom:16,alignItems:'flex-start'}}>
                  <div style={{width:34,height:34,background:'rgba(255,255,255,0.07)',borderRadius:9,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,flexShrink:0}}>{c.icon}</div>
                  <div>
                    <div style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',color:'rgba(255,255,255,0.35)',textTransform:'uppercase',marginBottom:3}}>{c.label}</div>
                    <div style={{fontSize:12,color:'rgba(255,255,255,0.7)',lineHeight:1.6}}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a href="https://wa.me/6282118621064" target="_blank" rel="noopener noreferrer"
              className="contact-wa-btn">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>

            {/* What to expect */}
            <div style={{background:'var(--cream)',borderRadius:16,padding:'22px',border:'1px solid var(--border)'}}>
              <div style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:15,color:'var(--ink)',marginBottom:14}}>What to Expect</div>
              {['Response within 24 hours','Free initial consultation','No commitment required','Detailed project estimate','Flexible engagement models'].map(item => (
                <div key={item} style={{display:'flex',alignItems:'center',gap:8,fontSize:12,color:'var(--ink-soft)',marginBottom:8}}>
                  <span style={{width:16,height:16,background:'var(--red-soft)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,color:'var(--red-mid)',flexShrink:0}}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-g{}
        @media(max-width:900px){.contact-g{grid-template-columns:1fr!important}}
        @media(max-width:768px){section{padding-left:24px!important;padding-right:24px!important}}
      `}</style>
    </>
  )
}
