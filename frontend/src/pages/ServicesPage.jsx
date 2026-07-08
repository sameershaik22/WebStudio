import { Link, useNavigate } from 'react-router-dom';
import { Layout, ShoppingCart, Code2, Palette, Zap, ShieldCheck, ArrowRight, CheckCircle2, Sparkles, Clock, Layers, Globe } from 'lucide-react';

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      num: '01',
      icon: Layout,
      title: 'Custom Website Development',
      image: '/project-constructline.png',
      desc: 'We engineer high-performance, bespoke corporate websites from scratch. No WordPress, no Wix, and no pre-made templates. We code in modern React, Next.js, and clean CSS to ensure your site is blazing fast, ultra-secure, and tailored 100% around your brand identity.',
      deliverables: [
        '100% Bespoke Code & Architecture',
        'Zero Bloatware or Page Builders',
        '99/100 Google Lighthouse Speed Guarantee',
        'Mobile-First Responsive UI & Custom CMS'
      ],
      stack: ['React', 'Next.js', 'TypeScript', 'Tailwind / Vanilla CSS', 'Node.js'],
      time: '7 - 10 Days Guaranteed',
      tag: 'FLAGSHIP SERVICE'
    },
    {
      num: '02',
      icon: ShoppingCart,
      title: 'E-Commerce Shopping Platforms',
      image: '/project-urbanboutique.png',
      desc: 'Turn casual browsers into loyal buyers with high-converting online stores. We engineer frictionless shopping experiences, custom product configurators, 1-click checkouts, and seamless payment gateway integrations (Stripe, PayPal, Apple Pay).',
      deliverables: [
        'Custom Product Catalog & Advanced Filters',
        'Frictionless 1-Click Stripe Checkout Flow',
        'Automated Inventory & Email Notification Alerts',
        'Abandoned Cart Email Recovery Engine'
      ],
      stack: ['Shopify Headless', 'Next.js Commerce', 'Stripe API', 'PostgreSQL', 'Redis'],
      time: '10 Days Guaranteed',
      tag: 'HIGH CONVERSION'
    },
    {
      num: '03',
      icon: Code2,
      title: 'Web Applications & SaaS Platforms',
      image: '/project-startupx.png',
      desc: 'Complex cloud platforms, custom client portals, AI dashboards, and scalable B2B/B2C SaaS applications. We architect secure backend databases, real-time API integrations, and intuitive user interfaces built for enterprise scale and reliability.',
      deliverables: [
        'Custom Cloud Dashboard & Real-Time Analytics',
        'Real-Time API Integrations & WebSockets',
        'Role-Based Authentication (OAuth / JWT / SAML)',
        'Automated Tiered Billing & Subscription Engine'
      ],
      stack: ['React / Vue', 'Node.js / Express', 'PostgreSQL / MongoDB', 'Docker / AWS', 'GraphQL'],
      time: '10 - 14 Days',
      tag: 'ENTERPRISE SCALE'
    },
    {
      num: '04',
      icon: Palette,
      title: 'UI/UX & Brand Identity Systems',
      image: '/studio-workflow-design.png',
      desc: 'Award-winning digital aesthetics. We conduct deep user research, interactive wireframing, high-fidelity Figma prototypes, and complete design systems that build immediate trust and premium authority with your customers.',
      deliverables: [
        'High-Fidelity Interactive Figma Wireframes',
        'Comprehensive Design Token System (Colors & Typography)',
        'User Journey & Conversion Rate Optimization',
        'Custom Micro-Animation & Motion Guidelines'
      ],
      stack: ['Figma', 'Adobe Creative Suite', 'Framer Motion', 'GSAP Animation', 'Design Tokens'],
      time: '3 - 5 Days',
      tag: 'AWARD-WINNING UI'
    },
    {
      num: '05',
      icon: Zap,
      title: 'SEO & Speed Optimization',
      image: '/studio-workflow-speed-qa.png',
      desc: 'Dominating search engine rankings requires flawless technical foundations. We audit and optimize existing codebases to achieve sub-second load times, Core Web Vitals compliance, and top Google search ranking visibility.',
      deliverables: [
        'Complete Technical SEO Audit & Code Fixes',
        '99/100 Google Lighthouse Speed Certification',
        'Image & Asset Compression Pipeline',
        'Structured Data & Local Schema Markup'
      ],
      stack: ['Lighthouse CI', 'Next.js SSR', 'Cloudflare CDN', 'Web Vitals API', 'Webpack / Vite'],
      time: '2 - 4 Days',
      tag: 'SUB-SECOND SPEED'
    },
    {
      num: '06',
      icon: ShieldCheck,
      title: '24/7 Ongoing Support & Maintenance',
      image: '/studio-workflow-coding.png',
      desc: 'Your business never sleeps, and neither does your software. We provide proactive security monitoring, daily automated backups, server uptime guarantees, and instant technical troubleshooting by senior software engineers.',
      deliverables: [
        '24/7 Real-Time Uptime & Security Monitoring',
        'Daily Automated Offsite Cloud Backups',
        'Monthly Performance & SEO Health Reports',
        'Priority 2-Hour SLA Technical Support'
      ],
      stack: ['Datadog', 'AWS CloudWatch', 'Sentry Error Tracking', 'GitHub Actions', 'Cloudflare Armor'],
      time: 'Ongoing Monthly SLA',
      tag: 'ZERO DOWNTIME'
    },
  ];

  return (
    <div className="page-services" style={{ background: '#0D0D0D', minHeight: '100vh', paddingTop: '140px', paddingBottom: '120px', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      
      {/* Subtle Luxury Golden Ambient Glows */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1000px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(200, 155, 102, 0.1) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top Header Banner */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px', maxWidth: '900px', margin: '0 auto 80px auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', background: 'rgba(200, 155, 102, 0.1)', border: '1px solid rgba(200, 155, 102, 0.35)', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase', boxShadow: '0 4px 20px rgba(200, 155, 102, 0.15)' }}>
            <Sparkles size={13} />
            <span>OUR ENGINEERING CAPABILITIES & SERVICES</span>
          </div>
          
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#FFFFFF' }}>
            Custom digital solutions built for <span style={{ color: 'var(--color-accent)' }}>maximum ROI.</span>
          </h1>

          <p style={{ fontSize: '18px', color: '#AAAAAA', lineHeight: 1.7, maxWidth: '720px' }}>
            We don't do cookie-cutter templates or bloated page builders. Explore our 6 core engineering capabilities designed to scale your brand, dominate search engines, and convert visitors into lifelong clients.
          </p>
        </div>

        {/* 6-Service Luxury Dark Bento Matrix with Image Headers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px', marginBottom: '120px' }}>
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.num}
                style={{
                  background: '#141414',
                  borderRadius: '28px',
                  border: '1px solid #242424',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.boxShadow = '0 25px 80px rgba(200, 155, 102, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#242424';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.6)';
                }}
              >
                {/* Top Visual Image Banner */}
                <div style={{ height: '240px', position: 'relative', overflow: 'hidden', background: '#0A0A0A', borderBottom: '1px solid #222222' }}>
                  <img
                    src={srv.image}
                    alt={srv.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                  />

                  {/* Top Badges Overlay */}
                  <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(13, 13, 13, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(200, 155, 102, 0.4)', padding: '6px 14px', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.08em' }}>
                    <span>{srv.num} / SERVICE</span>
                  </div>

                  <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'var(--color-accent)', color: '#111111', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em' }}>
                    <span>{srv.tag}</span>
                  </div>
                </div>

                {/* Service Content Body */}
                <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '24px', flex: 1, justifyContent: 'space-between' }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    
                    {/* Title & Timeline Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(200, 155, 102, 0.12)', border: '1px solid rgba(200, 155, 102, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                          <Icon size={22} />
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#FFFFFF', margin: 0, lineHeight: 1.2 }}>
                          {srv.title}
                        </h3>
                      </div>
                    </div>

                    {/* Timeline Tag */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#27C93F', background: 'rgba(39, 201, 63, 0.1)', padding: '6px 14px', borderRadius: '8px', width: 'fit-content' }}>
                      <Clock size={14} />
                      <span>Turnaround: {srv.time}</span>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '15px', color: '#AAAAAA', lineHeight: 1.7, margin: 0 }}>
                      {srv.desc}
                    </p>

                    {/* Key Deliverables Checklist Box */}
                    <div style={{ marginTop: '8px', background: '#0D0D0D', borderRadius: '16px', padding: '20px', border: '1px solid #222222', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        KEY DELIVERABLES & GUARANTEES
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {srv.deliverables.map((del) => (
                          <div key={del} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#E0E0E0', fontWeight: 500 }}>
                            <CheckCircle2 size={15} color="#27C93F" style={{ flexShrink: 0 }} />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Core Technologies Badges */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#666666', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        TECHNOLOGIES & TOOLS
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {srv.stack.map((tech) => (
                          <span key={tech} style={{ fontSize: '12px', fontWeight: 600, color: '#CCCCCC', background: '#1E1E1E', border: '1px solid #2E2E2E', padding: '4px 12px', borderRadius: '6px' }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action Button */}
                  <div style={{ paddingTop: '20px', borderTop: '1px solid #222222' }}>
                    <button
                      onClick={() => navigate('/contact')}
                      style={{
                        width: '100%',
                        background: 'rgba(200, 155, 102, 0.12)',
                        border: '1px solid rgba(200, 155, 102, 0.35)',
                        color: 'var(--color-accent)',
                        padding: '14px 24px',
                        borderRadius: 'var(--radius-full)',
                        fontWeight: 700,
                        fontSize: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontFamily: 'var(--font-heading)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--color-btn-cream)';
                        e.currentTarget.style.color = '#111111';
                        e.currentTarget.style.borderColor = 'var(--color-btn-cream)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(200, 155, 102, 0.12)';
                        e.currentTarget.style.color = 'var(--color-accent)';
                        e.currentTarget.style.borderColor = 'rgba(200, 155, 102, 0.35)';
                      }}
                    >
                      <span>Request This Build Today</span>
                      <ArrowRight size={17} />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom High-Impact CTA Banner */}
        <div style={{
          padding: 'clamp(48px, 6vw, 80px)',
          background: 'linear-gradient(145deg, #1A1A1A 0%, #111111 100%)',
          border: '1px solid var(--color-accent)',
          borderRadius: '32px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          boxShadow: '0 30px 90px rgba(200, 155, 102, 0.2)'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', background: 'rgba(200, 155, 102, 0.15)', border: '1px solid rgba(200, 155, 102, 0.4)', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            <Sparkles size={13} />
            <span>READY TO SCALE YOUR BUSINESS?</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.15 }}>
            Need a custom digital foundation?<br />
            Let's build it in <span style={{ color: 'var(--color-accent)' }}>10 days guaranteed.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#AAAAAA', maxWidth: '640px', lineHeight: 1.6, margin: 0 }}>
            Schedule a 1-on-1 discovery call with our senior software engineers and creative directors today.
          </p>

          <button
            onClick={() => navigate('/contact')}
            style={{
              background: 'var(--color-btn-cream)',
              color: '#111111',
              padding: '20px 48px',
              borderRadius: 'var(--radius-full)',
              fontWeight: 800,
              fontSize: '18px',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '12px',
              boxShadow: '0 15px 40px rgba(200, 155, 102, 0.4)',
              transition: 'all 0.2s ease',
              fontFamily: 'var(--font-heading)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#DFCDB7';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-btn-cream)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Start Your Project Inquiry</span>
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </div>
  );
}
