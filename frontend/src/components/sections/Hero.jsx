import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home" aria-label="Hero section" style={{
      background: '#0A0A0A',
      height: '100vh',
      maxHeight: '800px',
      minHeight: '620px',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px', // Compensate for nav bar
      paddingBottom: '20px'
    }}>
      
      {/* 1. RIGHT-SIDE 3D PORTAL LAYER WITH PREMIUM LEVITATION & GLASS WIDGETS */}
      <div style={{
        position: 'absolute',
        top: '5%',
        right: '2%',
        bottom: '5%',
        width: '48%',
        height: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {/* Animated Golden Aura behind the laptop */}
        <div style={{
          position: 'absolute',
          top: '25%',
          right: '15%',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(200, 155, 102, 0.25) 0%, rgba(200, 155, 102, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(45px)',
          animation: 'pulse 4s ease-in-out infinite'
        }} />

        {/* Floating 3D Portal & Laptop */}
        <img
          src="/hero-3d-portal.png"
          alt="WebStudio 3D Architectural Showcase"
          style={{
            width: '100%',
            height: '100%',
            maxHeight: '620px',
            objectFit: 'contain',
            objectPosition: 'right center',
            display: 'block',
            filter: 'drop-shadow(0 25px 60px rgba(0,0,0,0.9))',
            animation: 'floatSlow 8s ease-in-out infinite'
          }}
        />

        {/* 100% Seamless Blending Gradients into #0A0A0A */}
        {/* Soft Left Edge Melt */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '35%',
          background: 'linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.7) 35%, transparent 100%)',
          pointerEvents: 'none'
        }} />
        
        {/* Soft Top Edge Melt */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '15%',
          background: 'linear-gradient(to bottom, #0A0A0A 0%, transparent 100%)',
          pointerEvents: 'none'
        }} />

        {/* Soft Bottom Edge Melt */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '20%',
          background: 'linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.6) 50%, transparent 100%)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Subtle Luxury Golden Ambient Glows */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(200, 155, 102, 0.1) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* 2. LEFT-ALIGNED CONTENT CONTAINER (Starts from COMPLETE LEFT STARTING POINT) */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        paddingLeft: 'clamp(24px, 4.5vw, 56px)', // Aligns flush with navbar logo on far left!
        paddingRight: '24px'
      }}>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px', // Decreased gap for sleek vertical fit
          textAlign: 'left',
          maxWidth: '580px',
          margin: 0 // Zero left margin ensures complete left starting point!
        }}>
          
          {/* Eyebrow Pill Badge with Animated Glow */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            background: 'rgba(200, 155, 102, 0.12)',
            border: '1px solid rgba(200, 155, 102, 0.4)',
            borderRadius: 'var(--radius-full)',
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--color-accent)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            width: 'fit-content',
            boxShadow: '0 4px 20px rgba(200, 155, 102, 0.2)',
            animation: 'pulse 3s infinite'
          }}>
            <span>PREMIUM DIGITAL STUDIO ⚡</span>
          </div>

          {/* Decreased Text Size for Sleek Senior Developer Proportions */}
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(36px, 4vw, 54px)', // Decreased from 84px! High-end, balanced, and zero clipping
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            margin: 0
          }}>
            Custom Websites<br />
            Built for <span style={{ background: 'linear-gradient(135deg, #DFCDB7 0%, #C89B66 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', animation: 'pulse 4s ease-in-out infinite' }}>Your Business.</span>
          </h1>

          {/* Decreased Subtitle Size */}
          <p style={{
            fontSize: 'clamp(15px, 1.4vw, 17px)', // Decreased from 20px
            color: '#A0A0A0',
            lineHeight: 1.55,
            maxWidth: '480px',
            margin: 0,
            fontWeight: 400
          }}>
            We design and develop high-performance websites that are unique, scalable and built from scratch.
          </p>

          {/* Action Buttons Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '4px' }}>
            
            {/* Primary Golden Button with Glowing Pulse Animation */}
            <button
              onClick={() => navigate('/contact')}
              style={{
                background: 'var(--color-btn-cream)',
                color: '#111111',
                padding: '14px 32px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 10px 30px rgba(200, 155, 102, 0.4)',
                fontFamily: 'var(--font-heading)',
                animation: 'pulse 2.5s infinite'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#DFCDB7';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-btn-cream)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Start Your Project</span>
              <ArrowRight size={17} />
            </button>

            {/* Secondary Transparent View Our Work Button */}
            <button
              onClick={() => navigate('/works')}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#FFFFFF',
                padding: '14px 28px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-heading)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
              }}
            >
              <span>View Our Work</span>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={10} fill="#FFFFFF" color="#FFFFFF" style={{ marginLeft: '2px' }} />
              </div>
            </button>

          </div>

          {/* HIGH-TRUST BUDGET PROMOTION BAR WITH PULSING GREEN BEACON */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 16px',
            background: 'rgba(200, 155, 102, 0.08)',
            border: '1px solid rgba(200, 155, 102, 0.3)',
            borderRadius: 'var(--radius-full)',
            width: 'fit-content',
            marginTop: '8px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2ECC71', boxShadow: '0 0 12px #2ECC71', animation: 'pulse 1.5s infinite' }} />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#E0E0E0' }}>
              We Build Within <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>YOUR Budget</span> • Starting at <span style={{ color: '#FFFFFF', fontWeight: 800 }}>$600</span> • Zero Agency Bloat
            </span>
          </div>

          {/* TRUSTED BY BUSINESSES WORLDWIDE BAR */}
          <div style={{ marginTop: '26px', paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#777777', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 14px 0' }}>
              TRUSTED BY BUSINESSES WORLDWIDE
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', opacity: 0.85 }}>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#CCCCCC', fontFamily: 'var(--font-heading)' }}>DesiSwad <span style={{ fontSize: '9px', color: '#888888', fontWeight: 700 }}>FOODS</span></span>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#CCCCCC', fontFamily: 'var(--font-heading)' }}>ConstructLine</span>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#CCCCCC', fontFamily: 'var(--font-heading)' }}>HealthCare<span style={{ color: 'var(--color-accent)' }}>+</span></span>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#CCCCCC', fontFamily: 'var(--font-heading)' }}>RealNext</span>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#CCCCCC', fontFamily: 'var(--font-heading)' }}>StartupX</span>
            </div>
          </div>

        </div>

      </div>

      {/* 3. BOTTOM CENTER: SCROLL TO EXPLORE INDICATOR */}
      <div style={{
        position: 'absolute',
        bottom: '14px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        opacity: 0.7,
        transition: 'opacity 0.2s ease',
        cursor: 'pointer',
        zIndex: 3
      }}
        onClick={() => {
          const nextEl = document.getElementById('works') || document.getElementById('process');
          if (nextEl) nextEl.scrollIntoView({ behavior: 'smooth' });
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
        onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
      >
        <div style={{ width: '20px', height: '32px', borderRadius: '10px', border: '2px solid rgba(255,255,255,0.4)', display: 'flex', justifyContent: 'center', paddingTop: '5px' }}>
          <div style={{ width: '3px', height: '6px', borderRadius: '2px', background: 'var(--color-accent)', animation: 'bounce 1.5s infinite' }} />
        </div>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#888888', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          SCROLL TO EXPLORE
        </span>
      </div>

      {/* CSS Animation for Scroll Indicator */}
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(5px); }
          60% { transform: translateY(2px); }
        }
      `}</style>
    </section>
  );
}
