import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, Award, TrendingUp, Zap, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function WorksPage() {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const categories = [
    'All',
    'E-Commerce & Shopping',
    'Startups & SaaS',
    'Construction & Corporate',
    'Healthcare & Real Estate'
  ];

  const projects = [
    {
      title: 'DesiSwad Foods',
      category: 'E-Commerce & Shopping',
      type: 'Gourmet Indian Snack Brand',
      image: '/project-desiswad.png',
      stat: '+240% Online Revenue',
      statIcon: TrendingUp,
      desc: 'Bespoke high-converting e-commerce platform engineered for an authentic Indian snack brand. Featuring seamless Stripe checkouts, custom packaging storytelling, and instant mobile ordering.',
      quote: '"WebStudio transformed our local snack brand into a national e-commerce powerhouse. Sales doubled in 60 days."',
      client: 'Rajesh Kumar — Founder, DesiSwad',
      tags: ['E-Commerce', 'React & Node', 'Stripe Integration', 'Custom UI'],
    },
    {
      title: 'Urban Boutique',
      category: 'E-Commerce & Shopping',
      type: 'Luxury Fashion Retail Store',
      image: '/project-urbanboutique.png',
      stat: '+310% Mobile Conversion',
      statIcon: TrendingUp,
      desc: 'A chic, high-end fashion shopping experience built for an independent luxury retail boutique. Engineered with ultra-fast image loading, virtual lookbooks, and 1-click checkout.',
      quote: '"Our customers constantly praise how smooth and luxurious our online shopping experience feels. A true masterpiece."',
      client: 'Elena Rostova — Creative Director, Urban Boutique',
      tags: ['Fashion Retail', 'Next.js', 'Shopify Headless', 'Lookbook UI'],
    },
    {
      title: 'StartupX Ventures',
      category: 'Startups & SaaS',
      type: 'AI & Cloud Analytics Platform',
      image: '/project-startupx.png',
      stat: '10x Faster Dashboard Load',
      statIcon: Zap,
      desc: 'An ultra-modern SaaS cloud analytics platform built for a fast-scaling AI startup. Engineered with real-time data visualization charts, dark mode glassmorphism, and API integrations.',
      quote: '"When pitching to VCs, our website and dashboard blew them away. WebStudio gave us enterprise credibility from day one."',
      client: 'Marcus Vance — CEO & Co-Founder, StartupX',
      tags: ['SaaS Dashboard', 'React & TypeScript', 'Real-Time API', 'Dark Mode'],
    },
    {
      title: 'ConstructLine',
      category: 'Construction & Corporate',
      type: 'Corporate Infrastructure Enterprise',
      image: '/project-constructline.png',
      stat: '100% Custom Architecture',
      statIcon: Award,
      desc: 'A commanding corporate digital identity for a leading construction and architectural engineering enterprise. Built with Next.js and interactive 3D blueprint galleries.',
      quote: '"In the construction industry, trust is everything. Our new platform immediately positions us as the industry leader."',
      client: 'David Sterling — VP of Operations, ConstructLine',
      tags: ['Corporate Portal', 'Next.js', 'Zero Templates', 'High Speed'],
    },
    {
      title: 'RealNest Properties',
      category: 'Healthcare & Real Estate',
      type: 'Luxury Residential Real Estate Portal',
      image: '/project-realnest.png',
      stat: '+320% Lead Conversion',
      statIcon: TrendingUp,
      desc: 'An ultra-luxury residential property discovery platform featuring interactive sunset villa galleries, instant virtual tours, and real-time agent booking.',
      quote: '"Our luxury listings now sell 40% faster thanks to the immersive virtual tours and flawless mobile experience."',
      client: 'Sophia Martinez — Managing Broker, RealNest',
      tags: ['Real Estate', 'React', 'Custom Map API', 'Glassmorphism'],
    },
    {
      title: 'HealthCare Plus',
      category: 'Healthcare & Real Estate',
      type: 'Advanced Diagnostic & Medical Center',
      image: '/building-client-website.png',
      stat: '0.8s Instant Loading',
      statIcon: ShieldCheck,
      desc: 'A HIPAA-compliant patient diagnostic and appointment scheduling portal built for modern healthcare providers. Engineered for maximum speed and accessibility.',
      quote: '"Patient booking inquiries increased by 150% within the first month of launch. Flawless security and speed."',
      client: 'Dr. Aris Thorne — Medical Director, HealthCare+',
      tags: ['Healthcare Portal', 'Full-Stack Node', 'HIPAA Compliant', 'Accessible UI'],
    },
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="page-works" style={{ background: '#0D0D0D', minHeight: '100vh', paddingTop: '140px', paddingBottom: '120px', color: '#FFFFFF' }}>
      <div className="container">
        
        {/* Top Header Banner */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px', maxWidth: '880px', margin: '0 auto 64px auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', background: 'rgba(200, 155, 102, 0.1)', border: '1px solid rgba(200, 155, 102, 0.3)', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            <Sparkles size={13} />
            <span>ALL BUSINESS WORKS & PORTFOLIO</span>
          </div>
          
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Handcrafted digital experiences<br />
            across <span style={{ color: 'var(--color-accent)' }}>every industry.</span>
          </h1>

          <p style={{ fontSize: '18px', color: '#AAAAAA', lineHeight: 1.6, maxWidth: '680px' }}>
            Explore our verified portfolio of custom websites, e-commerce stores, SaaS dashboards, and corporate portals. Built from scratch with zero templates or shortcuts.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  background: filter === cat ? 'var(--color-accent)' : '#141414',
                  color: filter === cat ? '#111111' : '#CCCCCC',
                  border: filter === cat ? '1px solid var(--color-accent)' : '1px solid #282828',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-heading)'
                }}
                onMouseEnter={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.borderColor = '#666666';
                    e.currentTarget.style.background = '#1A1A1A';
                  }
                }}
                onMouseLeave={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.borderColor = '#282828';
                    e.currentTarget.style.background = '#141414';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '40px' }}>
          {filteredProjects.map((project) => {
            const StatIcon = project.statIcon;
            return (
              <div
                key={project.title}
                style={{
                  background: '#141414',
                  borderRadius: '24px',
                  border: '1px solid #242424',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = '#404040';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#242424';
                }}
              >
                {/* AI-Generated Project Image Container */}
                <div style={{ height: '360px', position: 'relative', overflow: 'hidden', background: '#0A0A0A', borderBottom: '1px solid #242424' }}>
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.type}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                  />

                  {/* Live Stat Badge */}
                  <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(13, 13, 13, 0.92)', backdropFilter: 'blur(12px)', border: '1px solid rgba(200, 155, 102, 0.45)', padding: '8px 18px', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.7)' }}>
                    <StatIcon size={15} color="var(--color-accent)" />
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>{project.stat}</span>
                  </div>

                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(13, 13, 13, 0.85)', backdropFilter: 'blur(10px)', padding: '6px 14px', borderRadius: '8px', fontSize: '11px', fontWeight: 700, color: '#CCCCCC', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {project.category}
                  </div>
                </div>

                {/* Project Details */}
                <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '24px', flex: 1, justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {project.type}
                    </span>

                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '30px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
                      {project.title}
                    </h2>

                    <p style={{ fontSize: '16px', color: '#AAAAAA', lineHeight: 1.6, margin: 0 }}>
                      {project.desc}
                    </p>

                    {/* Client Testimonial Box */}
                    <div style={{ marginTop: '8px', padding: '18px 20px', background: '#1A1A1A', borderRadius: '14px', borderLeft: '3px solid var(--color-accent)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#CCCCCC', lineHeight: 1.5, margin: 0 }}>
                        {project.quote}
                      </p>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#888888' }}>
                        — {project.client}
                      </span>
                    </div>
                  </div>

                  {/* Tech Tags & CTA */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingTop: '24px', borderTop: '1px solid #222222' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      {project.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: '12px', fontWeight: 600, color: '#CCCCCC', background: 'rgba(255,255,255,0.06)', padding: '6px 14px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => navigate('/contact')}
                      style={{ background: 'var(--color-btn-cream)', color: '#111111', padding: '10px 22px', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '13px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s ease', fontFamily: 'var(--font-heading)' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#DFCDB7'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-btn-cream)'}
                    >
                      <span>Request Similar Build</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action Box */}
        <div style={{ marginTop: '80px', padding: '56px', background: '#141414', border: '1px solid #282828', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            Have a project in mind for your business?
          </h2>
          <p style={{ fontSize: '17px', color: '#AAAAAA', maxWidth: '600px', lineHeight: 1.6 }}>
            Whether you are launching a small startup, scaling an e-commerce shopping brand, or upgrading an enterprise corporate portal, we build tailored solutions from scratch.
          </p>
          <Link
            to="/contact"
            style={{ background: 'var(--color-btn-cream)', color: '#111111', padding: '16px 36px', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '16px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '8px', boxShadow: '0 10px 30px rgba(200, 155, 102, 0.25)' }}
          >
            <span>Start Your Project Inquiry</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
}
