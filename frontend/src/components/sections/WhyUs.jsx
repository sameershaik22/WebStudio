import { useNavigate } from 'react-router-dom';
import { Settings, Heart, Award, Clock, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function WhyUs() {
  const navigate = useNavigate();

  const stats = [
    { icon: Settings, value: '100+', label: 'Projects Handcrafted', desc: 'Delivered across 15+ countries with 100% custom code and zero templates.' },
    { icon: ShieldCheck, value: '$600+', label: 'Reasonable Budgets', desc: 'Handcrafted custom websites starting at accessible prices with zero agency bloat.' },
    { icon: Heart, value: '50+', label: 'Enterprise Clients', desc: 'From fast-scaling startups to global industry leaders and luxury brands.' },
    { icon: Clock, value: '24/7', label: 'Dedicated Support', desc: 'Real-time security monitoring, continuous software updates, and proactive maintenance.' },
  ];

  const values = [
    { num: '01', title: 'Zero Shortcuts or Templates', desc: 'We never use generic page builders like WordPress or Wix. Every pixel and database query is handcrafted specifically for your business model.' },
    { num: '02', title: 'Obsession with Performance', desc: 'We engineer lightweight architectures that render instantly in 0.8 seconds, dominating Google search rankings and customer retention.' },
    { num: '03', title: 'Built Within YOUR Budget', desc: 'We engineer world-class custom websites tailored exactly to your financial scope — starting from just $600 up to $5,000. No bloated retainers or surprise invoices.' },
    { num: '04', title: 'Radical Transparency', desc: 'Direct communication with senior engineers, live development previews, and honest timelines. No middlemen or outsourced code.' }
  ];

  return (
    <section className="section" id="about" aria-label="About us and why choose us" style={{ background: '#0D0D0D', padding: '120px 0', borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A', position: 'relative' }}>
      
      <div style={{ position: 'absolute', top: '20%', right: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(200, 155, 102, 0.06) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none', zIndex: 1 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top Header & Agency Story */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'flex-start', marginBottom: '80px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: '#888888', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
              <Sparkles size={14} color="var(--color-accent)" />
              <span>ABOUT US & OUR PHILOSOPHY</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              We don't use templates.<br />
              We build <span style={{ color: 'var(--color-accent)' }}>from scratch.</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '10px' }}>
            <p style={{ fontSize: '18px', color: '#CCCCCC', lineHeight: 1.7, fontWeight: 400, margin: 0 }}>
              We founded WebStudio with a singular rebellion against generic page builders, bloated WordPress themes, and cookie-cutter templates. We believe that an ambitious business deserves an elite digital foundation.
            </p>
            <p style={{ fontSize: '16px', color: '#888888', lineHeight: 1.6, margin: 0 }}>
              Every line of code, every UI animation, and every cloud architecture is researched, designed, and handcrafted from scratch by senior engineers to elevate your brand authority and drive measurable revenue growth.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', paddingTop: '10px' }}>
              <button
                onClick={() => navigate('/about')}
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#FFFFFF', padding: '14px 28px', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '15px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'all 0.2s ease', fontFamily: 'var(--font-heading)' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              >
                <span>Read Full Origin Story</span>
                <ArrowRight size={16} color="var(--color-accent)" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                style={{ background: 'var(--color-btn-cream)', color: '#111111', padding: '14px 28px', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '15px', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'all 0.2s ease', fontFamily: 'var(--font-heading)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#DFCDB7'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-btn-cream)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <span>Partner With Us</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                style={{ background: '#141414', padding: '36px 28px', borderRadius: '20px', border: '1px solid #222222', display: 'flex', flexDirection: 'column', gap: '16px', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = '#383838'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.6)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#222222'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(200, 155, 102, 0.12)', border: '1px solid rgba(200, 155, 102, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                    <Icon size={22} />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#666666', letterSpacing: '0.1em' }}>VERIFIED</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.1 }}>{stat.value}</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-accent)', marginTop: '4px' }}>{stat.label}</div>
                </div>
                <p style={{ fontSize: '14px', color: '#888888', lineHeight: 1.5, margin: 0 }}>{stat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* 3 Core Values Row */}
        <div style={{ paddingTop: '64px', borderTop: '1px solid #1E1E1E' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, color: '#888888', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '32px' }}>
            OUR CORE ENGINEERING PRINCIPLES
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {values.map((val) => (
              <div key={val.num} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.1em' }}>{val.num} / PRINCIPLE</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-heading)', margin: 0 }}>{val.title}</h3>
                <p style={{ fontSize: '15px', color: '#888888', lineHeight: 1.6, margin: 0 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
