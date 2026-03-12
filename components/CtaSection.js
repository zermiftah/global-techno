'use client'
import Link from 'next/link'

export default function CtaSection({ title = "Got a project?", subtitle = "Tell us about your idea and we'll come back with a plan. Free consultation, no commitment." }) {
  return (
    <section style={{background:'var(--ink)',padding:'88px 56px',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:560,height:560,borderRadius:'50%',background:'radial-gradient(circle, rgba(158,32,32,0.18) 0%, transparent 70%)',pointerEvents:'none'}} />
      <div style={{maxWidth:640,margin:'0 auto',textAlign:'center',position:'relative'}}>
        <div className="section-label reveal" style={{justifyContent:'center',color:'rgba(255,255,255,0.35)',marginBottom:16}}>
          Let's work together
        </div>
        <h2 className="reveal d1" style={{fontFamily:'Fraunces,serif',fontWeight:700,fontSize:'clamp(30px,4vw,52px)',color:'white',lineHeight:1.1,marginBottom:16}}>{title}</h2>
        <p className="reveal d2" style={{color:'rgba(255,255,255,0.4)',fontSize:15,lineHeight:1.8,marginBottom:36}}>{subtitle}</p>
        <div className="reveal d3" style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <Link href="/contact" className="btn-primary" style={{padding:'13px 30px',fontSize:14}}>Contact Us →</Link>
          <a href="https://wa.me/6282118621064" target="_blank" rel="noopener noreferrer" className="cta-wa-btn">
            💬 WhatsApp
          </a>
        </div>
      </div>
      <style>{`
        .cta-wa-btn {
          padding: 12px 26px;
          border: 1.5px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.65);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
          font-family: Plus Jakarta Sans, sans-serif;
          text-decoration: none;
        }
        .cta-wa-btn:hover {
          border-color: rgba(255,255,255,0.4);
          color: white;
          background: rgba(255,255,255,0.05);
        }
        @media (max-width: 768px) { section { padding-left: 24px !important; padding-right: 24px !important; } }
      `}</style>
    </section>
  )
}