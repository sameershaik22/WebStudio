import { useNavigate } from 'react-router-dom';
import { Search, PenTool, Code2, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Process() {
  const navigate = useNavigate();

  const steps = [
    {
      num: '01',
      title: 'Discovery & Strategic Roadmap',
      time: 'Day 01',
      icon: Search,
      desc: 'We start by sitting down with you on Day 1 to dive deep into your business model, target audience, and revenue bottlenecks. We define technical requirements and build a bulletproof 10-day architectural roadmap.',
      deliverables: ['Technical Architecture Document', 'Competitor UI/UX Benchmark', '10-Day Sprint Schedule'],
    },
    {
      num: '02',
      title: 'UI/UX Design & Prototyping',
      time: 'Days 02 - 04',
      icon: PenTool,
      desc: 'Before writing a single line of backend code, our designers translate your requirements within 72 hours into high-fidelity, interactive Figma wireframes and prototypes.',
      deliverables: ['High-Fidelity Figma Wireframes', 'Design Token System', 'Responsive Mobile Layouts'],
    },
    {
      num: '03',
      title: 'Bespoke Full-Stack Engineering',
      time: 'Days 05 - 08',
      icon: Code2,
      desc: 'Our senior developers build your application over 4 intensive coding days using modern React, Next.js, Node.js, and custom APIs. Zero bloatware, zero page builders. Daily staging preview links provided.',
      deliverables: ['100% Custom Codebase', 'Daily Live Staging Previews', 'Database & API Integration'],
    },
    {
      num: '04',
      title: 'Rigorous QA & Speed Optimization',
      time: 'Day 09',
      icon: ShieldCheck,
      desc: 'We subject your codebase to extreme stress testing, multi-device browser compatibility checks, and security scans. We optimize image rendering to guarantee a 99/100 Lighthouse speed score.',
      deliverables: ['99/100 Google Lighthouse Score', 'Multi-Browser QA Sign-Off', 'Security Vulnerability Check'],
    },
    {
      num: '05',
      title: 'Global Launch in 10 Days Guaranteed',
      time: 'Day 10 Guaranteed',
      icon: Rocket,
      desc: 'On Day 10, we execute a zero-downtime deployment to enterprise cloud infrastructure (AWS/Cloudflare). Post-launch, we provide continuous 24/7 security monitoring, backups, and SLA support.',
      deliverables: ['Zero-Downtime Cloud Deployment', '10-Day Turnaround Guarantee', '24/7 Security Monitoring'],
    },
  ];

  return (
    <section className="section" id="process" aria-label="Our engineering process" style={{ background: '#F8F6F0', padding: '120px 0', borderTop: '1px solid #EAE6DF', borderBottom: '1px solid #EAE6DF' }}>
      <div className="container">
        
        {/* Top Header Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
          <div>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#888888', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
              OUR ENGINEERING PROCESS
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 4.2vw, 52px)', fontWeight: 800, color: '#111111', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              A predictable, transparent<br />
              <span style={{ color: 'var(--color-accent)' }}>5-step roadmap.</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
            <p style={{ fontSize: '17px', color: '#666666', lineHeight: 1.6, maxWidth: '480px', margin: 0 }}>
              We replace industry uncertainty and delays with structured engineering sprints, live staging previews, and guaranteed timelines.
            </p>
            <button
              onClick={() => navigate('/process')}
              style={{ background: '#111111', color: '#FFFFFF', padding: '12px 24px', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s ease', fontFamily: 'var(--font-heading)' }}
            >
              <span>Explore Detailed Phase Breakdown</span>
              <ArrowRight size={16} color="var(--color-accent)" />
            </button>
          </div>
        </div>

        {/* 5-Step Roadmap Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', position: 'relative' }}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                onClick={() => navigate('/process')}
                style={{
                  background: '#FFFFFF',
                  padding: '36px 28px',
                  borderRadius: '20px',
                  border: '1px solid #EAE6DF',
                  boxShadow: '0 4px 25px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '24px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: '#111111',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
                    }}>
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.1em', background: '#F5F2EB', padding: '6px 12px', borderRadius: '20px' }}>
                      {step.time}
                    </span>
                  </div>

                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.1em' }}>
                      PHASE {step.num}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 700, color: '#111111', letterSpacing: '-0.01em', marginTop: '4px', marginBottom: '10px' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: '#666666', lineHeight: 1.6, margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div style={{ paddingTop: '18px', borderTop: '1px solid #F4F1EB', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#888888', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    KEY DELIVERABLE
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#111111' }}>
                    <span style={{ color: '#27C93F', fontWeight: 800 }}>✓</span>
                    <span>{step.deliverables[0]}</span>
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
