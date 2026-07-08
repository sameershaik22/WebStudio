import { useNavigate } from 'react-router-dom';
import { Layout, ShoppingCart, Code2, Palette, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export default function WhoWeAre() {
  const navigate = useNavigate();

  const cards = [
    { icon: Layout, title: 'Custom Website Development', desc: 'High-performance, bespoke websites engineered from scratch with zero templates or shortcuts. Engineered for maximum conversion and brand authority.', tag: 'WEB DEVELOPMENT' },
    { icon: ShoppingCart, title: 'E-Commerce Platforms', desc: 'Conversion-focused online stores with seamless checkouts, lightning speed, and scalable architectures designed to skyrocket your revenue.', tag: 'ONLINE RETAIL' },
    { icon: Code2, title: 'Web Applications & SaaS', desc: 'Complex, scalable cloud platforms, custom portals, and interactive dashboards built with modern React, Node.js, and API integrations.', tag: 'CLOUD SOLUTIONS' },
    { icon: Palette, title: 'UI/UX & Brand Identity', desc: 'Award-winning user interface design, interactive prototyping, and comprehensive design systems that build immediate trust with your visitors.', tag: 'DESIGN SYSTEMS' },
    { icon: Zap, title: 'SEO & Speed Optimization', desc: 'Technical SEO audits, 99/100 Google Lighthouse speed scores, and instant page rendering that dominate search rankings and user retention.', tag: 'PERFORMANCE' },
    { icon: ShieldCheck, title: '24/7 Dedicated Support', desc: 'Enterprise-grade security monitoring, continuous software updates, and proactive technical maintenance so your business never stops running.', tag: 'MAINTENANCE' },
  ];

  return (
    <section className="section" id="services" aria-label="What we do and services" style={{ background: '#F8F6F0', padding: '120px 0', borderTop: '1px solid #EAE6DF', borderBottom: '1px solid #EAE6DF' }}>
      <div className="container">
        
        {/* Top Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '72px' }}>
          <div>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#888888', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
              WHAT WE DO & OUR SERVICES
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4.2vw, 52px)', fontWeight: 800, color: '#111111', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              We build digital experiences<br />
              that help businesses <span style={{ color: 'var(--color-accent)' }}>grow.</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
            <p style={{ fontSize: '17px', color: '#666666', lineHeight: 1.6, maxWidth: '480px', margin: 0 }}>
              From clean websites to powerful web applications and e-commerce stores, we craft end-to-end digital solutions that are fast, modern, and built entirely from scratch.
            </p>
            <button
              onClick={() => navigate('/services')}
              style={{ background: '#111111', color: '#FFFFFF', padding: '12px 24px', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s ease', fontFamily: 'var(--font-heading)' }}
            >
              <span>View All Services & Specs</span>
              <ArrowRight size={16} color="var(--color-accent)" />
            </button>
          </div>
        </div>

        {/* 6-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                onClick={() => navigate('/services')}
                style={{
                  background: '#FFFFFF',
                  padding: '40px 32px',
                  borderRadius: '20px',
                  border: '1px solid #EAE6DF',
                  boxShadow: '0 4px 25px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '32px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = '#D8D0C5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 25px rgba(0,0,0,0.03)';
                  e.currentTarget.style.borderColor = '#EAE6DF';
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: '#111111', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 16px rgba(0,0,0,0.15)' }}>
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.1em', background: '#F5F2EB', padding: '6px 12px', borderRadius: '20px' }}>
                      {card.tag}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 700, color: '#111111', letterSpacing: '-0.01em', marginTop: '6px' }}>
                    {card.title}
                  </h3>

                  <p style={{ fontSize: '15px', color: '#666666', lineHeight: 1.6 }}>
                    {card.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700, color: '#111111', paddingTop: '20px', borderTop: '1px solid #F4F1EB' }}>
                  <span>Explore Specs & Deliverables</span>
                  <ArrowRight size={16} color="var(--color-accent)" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
