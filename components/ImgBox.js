'use client'
import { useState } from 'react'

const ShimmerStyle = () => (
  <style>{`
    @keyframes ib-shimmer {
      0%   { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `}</style>
)

// ─────────────────────────────────────────────
// DEFAULT — Basic ImgBox (cover, shimmer)
// ─────────────────────────────────────────────
export default function ImgBox({
  src, alt,
  width = '100%', height = 240,
  radius = 12, className = '', style = {},
  fit = 'cover',
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  if (src && !error) {
    return (
      <div className={className} style={{
        width, height, borderRadius: radius, overflow: 'hidden',
        position: 'relative', background: '#e8e4df', flexShrink: 0, ...style,
      }}>
        <ShimmerStyle />
        {/* Shimmer overlay — fades out on load */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg,#e8e3de 0%,#f5f0ec 45%,#e8e3de 100%)',
          backgroundSize: '200% 100%',
          animation: 'ib-shimmer 1.5s ease-in-out infinite',
          opacity: loaded ? 0 : 1,
          transition: 'opacity 0.4s ease',
          zIndex: 2,
        }} />
        <img
          src={src} alt={alt} loading="lazy" decoding="async"
          onLoad={() => setLoaded(true)} onError={() => setError(true)}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: fit, objectPosition: 'center',
            display: 'block',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.4s ease',
            zIndex: 1,
          }}
        />
      </div>
    )
  }

  return (
    <div className={`img-placeholder ${className}`}
      style={{ width, height, borderRadius: radius, background: '#e8e4df', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, ...style }}>
      <PlaceholderSVG />
      <span style={{ fontSize: 11, color: '#aaa', fontWeight: 500, textAlign: 'center', padding: '0 16px' }}>
        {alt || 'Add image to /public/assets/'}
      </span>
    </div>
  )
}

// ─────────────────────────────────────────────
// NAMED EXPORT 1 — Soft Border Floating Card
// ─────────────────────────────────────────────
export function ImgBoxBorder({
  src, alt,
  width = '100%', height = 280,
  radius = 16, className = '', style = {},
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className={className} style={{
      width, height, borderRadius: radius, overflow: 'hidden',
      position: 'relative', background: '#f0ece8',
      border: '1.5px solid rgba(26,20,16,0.09)',
      boxShadow: '0 2px 0 rgba(26,20,16,0.04), 0 8px 32px rgba(26,20,16,0.08), 0 24px 64px rgba(26,20,16,0.05)',
      ...style,
    }}>
      <ShimmerStyle />
      {/* Inner top highlight */}
      <div style={{ position: 'absolute', inset: 0, borderRadius: radius, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)', zIndex: 3, pointerEvents: 'none' }} />
      {/* Shimmer overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg,#e8e3de 0%,#f5f0ec 45%,#e8e3de 100%)',
        backgroundSize: '200% 100%',
        animation: 'ib-shimmer 1.5s ease-in-out infinite',
        opacity: loaded || error ? 0 : 1,
        transition: 'opacity 0.4s ease',
        zIndex: 2,
      }} />
      {src && !error ? (
        <img
          src={src} alt={alt} loading="lazy" decoding="async"
          onLoad={() => setLoaded(true)} onError={() => setError(true)}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            display: 'block',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.4s ease',
            zIndex: 1,
          }}
        />
      ) : error ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 8 }}>
          <PlaceholderSVG />
          <span style={{ fontSize: 11, color: '#aaa', textAlign: 'center', padding: '0 16px' }}>{alt}</span>
        </div>
      ) : null}
    </div>
  )
}

// ─────────────────────────────────────────────
// NAMED EXPORT 2 — PC / iMac Monitor Mockup
// ─────────────────────────────────────────────
export function ImgBoxPC({
  src, alt,
  width = '100%',
  className = '', style = {},
  theme = 'dark',  // 'dark' | 'light'
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const d         = theme === 'dark'
  const bez       = d ? '#1a1410'               : '#d1cdc9'
  const bezI      = d ? '#111'                  : '#bbb'
  const screenBg  = d ? '#0a0a0a'               : '#e8e4df'
  const standC    = d ? '#222'                  : '#c0bbb7'
  const baseC     = d ? '#2a2520'               : '#b8b3af'
  const barBg     = d ? '#1e1916'               : '#f0ece8'
  const urlBg     = d ? 'rgba(255,255,255,0.06)': 'rgba(0,0,0,0.07)'
  const divider   = d ? 'rgba(255,255,255,0.06)': 'rgba(0,0,0,0.08)'
  const monShadow = d
    ? '0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)'
    : '0 32px 64px rgba(26,20,16,0.18), 0 0 0 1px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)'

  return (
    <div className={className} style={{ width, position: 'relative', ...style }}>
      <ShimmerStyle />

      {/* Monitor bezel */}
      <div style={{
        background: `linear-gradient(160deg,${bez} 0%,${bezI} 100%)`,
        borderRadius: 16, padding: '10px 10px 22px', boxShadow: monShadow,
      }}>
        {/* Camera dot */}
        <div style={{
          width: 6, height: 6, borderRadius: '50%',
          background: d ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.15)',
          margin: '0 auto 8px',
        }} />

        {/* Screen outer */}
        <div style={{
          background: screenBg, borderRadius: 8, overflow: 'hidden',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)',
        }}>
          {/* Browser bar */}
          <div style={{
            background: barBg, padding: '7px 10px',
            display: 'flex', alignItems: 'center', gap: 5,
            borderBottom: `1px solid ${divider}`,
          }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                <div key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{ flex: 1, height: 14, borderRadius: 4, marginLeft: 6, background: urlBg, maxWidth: 200 }} />
          </div>

          {/* Image area — fixed aspect ratio container, shimmer + image overlap correctly */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: screenBg }}>

            {/* Shimmer — absolute overlay, fades out when image loads */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg,#e0dbd5 0%,#f0ece8 45%,#e0dbd5 100%)',
              backgroundSize: '200% 100%',
              animation: 'ib-shimmer 1.5s ease-in-out infinite',
              opacity: loaded || error ? 0 : 1,
              transition: 'opacity 0.5s ease',
              zIndex: 2,
            }} />

            {/* Image — eager + ref handles already-cached images */}
            {src && (
              <img
                src={src} alt={alt}
                loading="eager"
                ref={el => { if (el?.complete && el?.naturalWidth > 0) setLoaded(true) }}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'fill',
                  display: 'block',
                  opacity: loaded ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                  zIndex: 1,
                }}
              />
            )}

            {/* Error fallback */}
            {error && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                <PlaceholderSVG />
              </div>
            )}

            {/* Screen glare */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none',
              background: 'linear-gradient(135deg,rgba(255,255,255,0.05) 0%,transparent 45%)',
            }} />
          </div>
        </div>
      </div>

      {/* Stand neck */}
      <div style={{
        width: 28, height: 28, margin: '0 auto',
        background: `linear-gradient(180deg,${standC},${baseC})`,
        clipPath: 'polygon(30% 0%,70% 0%,80% 100%,20% 100%)',
      }} />
      {/* Stand base */}
      <div style={{
        width: '45%', height: 10, margin: '0 auto',
        background: `linear-gradient(180deg,${baseC},${d ? '#1a1410' : '#aaa'})`,
        borderRadius: '0 0 8px 8px',
        boxShadow: d ? '0 4px 12px rgba(0,0,0,0.4)' : '0 4px 12px rgba(0,0,0,0.12)',
      }} />
    </div>
  )
}


// ─────────────────────────────────────────────
// NAMED EXPORT 3 — Mobile / Smartphone Mockup
// ─────────────────────────────────────────────
export function ImgBoxMobile({
  src, alt,
  width = 220,
  className = '', style = {},
  theme = 'dark',
  align = 'center',
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const d        = theme === 'dark'
  const bezColor = d ? '#1a1410' : '#d1cdc9'
  const bezI     = d ? '#181410' : '#c8c4c0'
  const screenBg = d ? '#0a0a0a' : '#f0ece8'
  const btnColor = d ? '#2a2520' : '#c0bbb7'
  const monShadow = d
    ? '0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.1)'
    : '0 24px 48px rgba(26,20,16,0.2), 0 0 0 1px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6)'

  return (
    <div className={className} style={{
      width, margin: align === 'center' ? '0 auto' : align === 'right' ? '0 0 0 auto' : '0',
      position: 'relative', paddingTop: 16, ...style,
    }}>
      <ShimmerStyle />

      {/* Phone outer shell */}
      <div style={{
        background: `linear-gradient(160deg,${bezColor} 0%,${bezI} 100%)`,
        borderRadius: 36, padding: '12px 8px', boxShadow: monShadow, position: 'relative',
      }}>
        {/* Side buttons */}
        <div style={{ position: 'absolute', left: -3, top: 80, width: 3, height: 28, background: btnColor, borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -3, top: 116, width: 3, height: 44, background: btnColor, borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -3, top: 168, width: 3, height: 44, background: btnColor, borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', right: -3, top: 120, width: 3, height: 56, background: btnColor, borderRadius: '0 2px 2px 0' }} />

        {/* Screen */}
        <div style={{
          background: screenBg, borderRadius: 28, overflow: 'hidden',
          position: 'relative', boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.15)',
        }}>
          {/* Simple notch — no clock/signal */}
          <div style={{
            background: d ? '#0e0c0a' : '#f8f5f2',
            padding: '10px 0 8px',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}>
            <div style={{
              width: 64, height: 16, background: d ? '#000' : '#1a1410', borderRadius: 12,
            }} />
          </div>

          {/* Image area — portrait ratio 9:19.5 */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '9/17', background: screenBg }}>
            {/* Shimmer overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg,#e0dbd5 0%,#f0ece8 45%,#e0dbd5 100%)',
              backgroundSize: '200% 100%',
              animation: 'ib-shimmer 1.5s ease-in-out infinite',
              opacity: loaded || error ? 0 : 1,
              transition: 'opacity 0.5s ease', zIndex: 2,
            }} />
            {src && (
              <img
                src={src} alt={alt} loading="eager"
                ref={el => { if (el?.complete && el?.naturalWidth > 0) setLoaded(true) }}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'top center',
                  display: 'block',
                  opacity: loaded ? 1 : 0,
                  transition: 'opacity 0.5s ease', zIndex: 1,
                }}
              />
            )}
            {error && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                <PlaceholderSVG />
              </div>
            )}
            {/* Glare */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none',
              background: 'linear-gradient(135deg,rgba(255,255,255,0.06) 0%,transparent 40%)',
            }} />
          </div>

          {/* Home indicator */}
          <div style={{
            background: d ? '#0e0c0a' : '#f8f5f2',
            padding: '8px 0 10px', display: 'flex', justifyContent: 'center',
          }}>
            <div style={{ width: 80, height: 4, background: d ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.2)', borderRadius: 4 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Internal helper
// ─────────────────────────────────────────────
function PlaceholderSVG() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#ddd" />
      <path d="M6 24L11 17L15 21L20 14L26 24H6Z" fill="#aaa" fillOpacity="0.4" />
      <circle cx="22" cy="11" r="3" fill="#aaa" fillOpacity="0.4" />
    </svg>
  )
}