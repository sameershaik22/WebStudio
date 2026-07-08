import { Link, useNavigate } from 'react-router-dom';
import { Search, PenTool, CheckCircle2, Code2, Rocket, ShieldCheck, ArrowRight, Sparkles, Clock, Users, Zap, Award } from 'lucide-react';

export default function ProcessPage() {
  const navigate = useNavigate();

  const steps = [
    {
      num: '01',
      title: 'Client Discovery & Requirements Telling',
      time: 'Day 01',
      icon: Search,
      image: '/process-step-discovery.png',
      desc: 'We start by sitting down with you on Day 1 for a dedicated discovery session. You tell us your exact vision, target audience, business goals, and revenue bottlenecks. Our senior engineers listen deeply, map out your digital requirements, and define a bulletproof 10-day architectural roadmap without guesswork.',
      deliverables: [
        'Live 1-on-1 Discovery & Strategy Meeting',
        'Comprehensive Technical Requirement Specification',
        'Competitor UI/UX & SEO Benchmark Report',
        '10-Day Sprint & Milestone Roadmap'
      ],
      tag: 'WE LISTEN & STRATEGIZE'
    },
    {
      num: '02',
      title: 'Creating the Design in Figma',
      time: 'Days 02 - 04',
      icon: PenTool,
      image: '/studio-workflow-design.png',
      desc: 'Before writing a single line of backend code, our creative UI/UX team translates your requirements within 72 hours into high-fidelity, interactive Figma wireframes and design tokens. We design custom typography, color palettes, and micro-animations tailored specifically around your brand identity.',
      deliverables: [
        'High-Fidelity Interactive Figma Wireframes',
        'Complete Design Token System (Colors, Spacing, Fonts)',
        'Mobile, Tablet, and Desktop Responsive Layouts',
        'Interactive Prototype Built for Real-Time Testing'
      ],
      tag: 'CRAFTING THE UI/UX'
    },
    {
      num: '03',
      title: 'Client Review & Figma Approval',
      time: 'Day 05',
      icon: CheckCircle2,
      image: '/process-step-approval.png',
      desc: 'By Day 5, we present the interactive Figma prototype to you for a comprehensive review. You test the exact look, feel, and navigation of your website across desktop and mobile. We iterate based on your feedback until you give us your enthusiastic 100% approval sign-off to begin engineering.',
      deliverables: [
        'Live Interactive Prototype Presentation Call',
        'Collaborative Feedback & Design Iteration Sprints',
        'Final UI/UX & Visual Aesthetics Sign-Off',
        'Locking in Frontend Technical Specifications'
      ],
      tag: '100% CLIENT APPROVAL'
    },
    {
      num: '04',
      title: 'Bespoke Full-Stack Engineering',
      time: 'Days 06 - 09',
      icon: Code2,
      image: '/studio-workflow-coding.png',
      desc: 'Once approved, our senior software engineers code your website from scratch over 4 intensive days using modern React, Next.js, Node.js, and clean CSS. No WordPress, no Wix, and no pre-made themes. You receive daily live staging links so you can watch your codebase come to life in real time.',
      deliverables: [
        '100% Bespoke Frontend & Backend Codebase',
        'Daily Live Staging Preview Links for Client Tracking',
        'Secure Database, API, & Stripe Payment Integration',
        'Custom CMS & Admin Dashboard Setup'
      ],
      tag: 'ZERO TEMPLATES USED'
    },
    {
      num: '05',
      title: 'Speed QA & Triumphant Cloud Launch',
      time: 'Day 10 Guaranteed',
      icon: Rocket,
      image: '/process-step-launch.png',
      desc: 'On Day 10, we conduct intense multi-device browser testing and optimize server response times to achieve a certified 99/100 Google Lighthouse speed score. Then, we execute a zero-downtime launch to enterprise cloud infrastructure, celebrating your brand new digital presence in exactly 10 days!',
      deliverables: [
        'Google Lighthouse 99/100 Speed Certification',
        'Multi-Browser & Cross-Device QA Sign-Off',
        'Zero-Downtime Enterprise Cloud Production Launch',
        '10-Day Turnaround Guarantee & 24/7 SLA Support'
      ],
      tag: 'DEPLOYED IN 10 DAYS'
    },
  ];

  return (
    <div className="page-process" style={{ background: '#0D0D0D', minHeight: '100vh', paddingTop: '140px', paddingBottom: '120px', color: '#FFFFFF' }}>
      <div className="container">
        
        {/* Top Header Banner */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px', maxWidth: '900px', margin: '0 auto 100px auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', background: 'rgba(200, 155, 102, 0.1)', border: '1px solid rgba(200, 155, 102, 0.3)', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            <Sparkles size={13} />
            <span>HOW WE BUILD YOUR WEBSITE</span>
          </div>
          
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            From your requirements<br />
            to <span style={{ color: 'var(--color-accent)' }}>cloud production.</span>
          </h1>

          <p style={{ fontSize: '18px', color: '#AAAAAA', lineHeight: 1.6, maxWidth: '720px' }}>
            We replace industry uncertainty with a transparent, collaborative 5-step human journey. Explore how we listen to your needs, craft custom Figma prototypes, and engineer your website from scratch.
          </p>
        </div>

        {/* 5-Step Alternating Zig-Zag Editorial Storytelling Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '120px', marginBottom: '140px' }}>
          {steps.map((stp, index) => {
            const Icon = stp.icon;
            const isEven = index % 2 === 1; // Alternating layout: left image vs right image!

            return (
              <div
                key={stp.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                  gap: '64px',
                  alignItems: 'center',
                  background: '#141414',
                  borderRadius: '32px',
                  border: '1px solid #242424',
                  padding: 'clamp(32px, 5vw, 64px)',
                  boxShadow: '0 25px 70px rgba(0,0,0,0.6)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Image Side (Alternates Left / Right on Desktop) */}
                <div style={{
                  order: isEven ? 2 : 1,
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#0A0A0A',
                  border: '1px solid #282828',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
                  height: '100%',
                  minHeight: '380px'
                }}>
                  <img
                    src={stp.image}
                    alt={stp.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                  />

                  {/* Top Badge Overlay */}
                  <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(13, 13, 13, 0.92)', backdropFilter: 'blur(12px)', border: '1px solid rgba(200, 155, 102, 0.45)', padding: '8px 18px', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.7)' }}>
                    <Icon size={15} color="var(--color-accent)" />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>{stp.tag}</span>
                  </div>

                  <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'rgba(13, 13, 13, 0.85)', backdropFilter: 'blur(10px)', padding: '6px 14px', borderRadius: '8px', fontSize: '11px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {stp.time}
                  </div>
                </div>

                {/* Text Storytelling Side */}
                <div style={{ order: isEven ? 1 : 2, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--color-accent)', color: '#111111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, boxShadow: '0 10px 25px rgba(200, 155, 102, 0.3)' }}>
                      {stp.num}
                    </div>
                    <div>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        PHASE {stp.num} — {stp.time}
                      </span>
                      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.2 }}>
                        {stp.title}
                      </h2>
                    </div>
                  </div>

                  <p style={{ fontSize: '17px', color: '#CCCCCC', lineHeight: 1.7, margin: 0 }}>
                    {stp.desc}
                  </p>

                  {/* Deliverables Checklist Box */}
                  <div style={{ marginTop: '8px', background: '#0D0D0D', borderRadius: '20px', padding: '28px', border: '1px solid #222222', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <h3 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--color-accent)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} />
                      <span>Phase {stp.num} Key Milestones & Deliverables</span>
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '6px' }}>
                      {stp.deliverables.map((del) => (
                        <div key={del} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: '#E0E0E0', fontWeight: 500 }}>
                          <span style={{ color: '#27C93F', fontWeight: 800, fontSize: '16px', lineHeight: 1 }}>✓</span>
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM HIGH-IMPACT CONTACT US CTA BANNER */}
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
          boxShadow: '0 30px 90px rgba(200, 155, 102, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(200, 155, 102, 0.15) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', background: 'rgba(200, 155, 102, 0.15)', border: '1px solid rgba(200, 155, 102, 0.4)', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            <Sparkles size={13} />
            <span>READY TO BUILD YOUR WEBSITE?</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.15 }}>
            Let's start Phase 01: Tell us your<br />
            project requirements <span style={{ color: 'var(--color-accent)' }}>today.</span>
          </h2>

          <p style={{ fontSize: '18px', color: '#AAAAAA', maxWidth: '640px', lineHeight: 1.6, margin: 0 }}>
            Our senior software engineers and UI/UX designers are ready to listen to your vision and build a custom, high-speed digital experience from scratch.
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
            <span>Go To Contact Us Page & Start Inquiry</span>
            <ArrowRight size={20} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px', fontSize: '13px', color: '#888888', fontWeight: 600 }}>
            <span>✓ Direct 2-Hour Response SLA</span>
            <span>✓ Zero Templates Used</span>
            <span>✓ 100% Custom Code Guarantee</span>
          </div>
        </div>

      </div>
    </div>
  );
}
