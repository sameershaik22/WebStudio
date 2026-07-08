import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, Award, TrendingUp, Zap } from 'lucide-react';

export default function Showcase() {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'DesiSwad Foods',
      category: 'Gourmet E-Commerce Platform',
      image: '/project-desiswad.png',
      stat: '+240% Online Revenue',
      statIcon: TrendingUp,
      desc: 'Bespoke high-converting e-commerce platform engineered for an authentic Indian snack brand. Featuring seamless Stripe checkouts and custom packaging storytelling.',
      tags: ['E-Commerce', 'React & Node', 'Stripe Integration', 'Custom UI'],
    },
    {
      title: 'ConstructLine',
      category: 'Corporate Infrastructure Website',
      image: '/project-constructline.png',
      stat: '100% Custom Architecture',
      statIcon: Award,
      desc: 'A high-impact corporate digital identity for a leading construction and architecture enterprise. Built with Next.js and custom interactive 3D blueprints.',
      tags: ['Corporate Portal', 'Next.js', 'Zero Templates', 'High Speed'],
    },
    {
      title: 'RealNest Properties',
      category: 'Luxury Real Estate Portal',
      image: '/project-realnest.png',
      stat: '+320% Lead Conversion',
      statIcon: TrendingUp,
      desc: 'An ultra-luxury residential property discovery platform featuring interactive sunset villa galleries, instant virtual tours, and real-time agent booking.',
      tags: ['Real Estate', 'React', 'Custom API', 'Glassmorphism'],
    },
    {
      title: 'StartupX Ventures',
      category: 'AI & SaaS Cloud Platform',
      image: '/project-startupx.png',
      stat: '10x Faster Dashboard',
      statIcon: Zap,
      desc: 'An ultra-modern SaaS cloud analytics dashboard built for a fast-scaling AI startup. Engineered with real-time data visualization charts and dark mode glassmorphism.',
      tags: ['SaaS Dashboard', 'React & TypeScript', 'Real-Time API', 'Dark Mode'],
    },
  ];

  return (
    <section className="section" id="showcase" aria-label="Past projects and selected work" style={{ background: '#0D0D0D', padding: '120px 0' }}>
      <div className="container">
        
        {/* Top Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '72px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: '#888888', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
              <span>PAST PROJECTS & CASE STUDIES</span>
              <span style={{ color: 'var(--color-accent)' }}>⊙</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4.2vw, 52px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Crafted with purpose.<br />
              Built for <span style={{ color: 'var(--color-accent)' }}>real impact.</span>
            </h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: '6px' }}>
            <button
              onClick={() => navigate('/works')}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid #333333',
                color: '#FFFFFF',
                padding: '14px 28px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-heading)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#666666';
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#333333';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              <span>View All 6 Business Works</span>
              <ArrowRight size={16} color="var(--color-accent)" />
            </button>
          </div>
        </div>

        {/* 2x2 Flagship Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '36px' }}>
          {projects.map((project) => {
            const StatIcon = project.statIcon;
            return (
              <div
                key={project.title}
                onClick={() => navigate('/works')}
                style={{
                  background: '#141414',
                  borderRadius: '24px',
                  border: '1px solid #222222',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = '#383838';
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(0,0,0,0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#222222';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ height: '340px', position: 'relative', overflow: 'hidden', background: '#0A0A0A', borderBottom: '1px solid #222222' }}>
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                  />

                  <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(13, 13, 13, 0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(200, 155, 102, 0.4)', padding: '8px 16px', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.6)' }}>
                    <StatIcon size={14} color="var(--color-accent)" />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                      {project.stat}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '13px', color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        {project.category}
                      </span>
                      <ExternalLink size={16} color="#666666" />
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                      {project.title}
                    </h3>

                    <p style={{ fontSize: '15px', color: '#999999', lineHeight: 1.6 }}>
                      {project.desc}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '20px', borderTop: '1px solid #1E1E1E' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      {project.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: '12px', fontWeight: 600, color: '#CCCCCC', background: 'rgba(255,255,255,0.06)', padding: '5px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>
                      <span>View Case Study</span>
                      <ArrowRight size={15} color="var(--color-accent)" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
