import { Link } from 'react-router-dom';
import { Settings, Heart, Award, Clock, ArrowRight, ShieldCheck, Zap, Sparkles, Globe, Cpu, Users, Linkedin, Twitter, Github, Instagram, Code2, TrendingUp, Share2, Camera, CheckCircle2, Mail } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Settings, value: '100+', label: 'Projects Handcrafted', desc: 'Delivered across 15+ countries with 100% custom code and zero templates.' },
    { icon: Heart, value: '50+', label: 'Enterprise & Startup Clients', desc: 'From fast-scaling Y-Combinator startups to global luxury retail brands.' },
    { icon: Award, value: '5+', label: 'Years of Craftsmanship', desc: 'Dedicated to Awwwards-quality web design and cutting-edge engineering.' },
    { icon: Clock, value: '24/7', label: 'Dedicated Proactive Support', desc: 'Real-time security monitoring, continuous updates, and zero downtime.' },
  ];

  const workflowGallery = [
    {
      step: '01 / DEEP-FOCUS ENGINEERING',
      title: 'Writing Custom Code From Scratch',
      image: '/studio-workflow-coding.png',
      desc: 'Our senior developers collaborating in our studio workspace. We write modern React, Next.js, and TypeScript code without relying on bloated page builders or pre-made themes.',
      tag: '100% Bespoke Codebase'
    },
    {
      step: '02 / UI/UX DESIGN SYSTEMS',
      title: 'Interactive Prototyping & Wireframing',
      image: '/studio-workflow-design.png',
      desc: 'Our creative UI/UX team reviewing design tokens and micro-animations on 4K monitors. You experience the exact look and feel of your product before engineering begins.',
      tag: 'Figma Design Tokens'
    },
    {
      step: '03 / RIGOROUS SPEED & QA TESTING',
      title: 'Sub-Second Performance Audits',
      image: '/studio-workflow-speed-qa.png',
      desc: 'Running multi-device browser compatibility audits and server response optimizations. We subject every build to intense stress testing to guarantee a 99/100 Lighthouse speed score.',
      tag: '99/100 Speed Guarantee'
    }
  ];

  const teamMembers = [
    {
      name: 'Sameer Shaik',
      role: 'Founder & Senior Software Engineer',
      tag: 'ENGINEERING LEAD',
      icon: Code2,
      bio: 'Leading full-stack system architecture, React/Next.js high-performance engineering, and client technical strategy. Dedicated to building custom codebases with zero bloatware.',
      socials: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'Taufique Ahmad',
      role: 'Backend Developer',
      tag: 'BACKEND DEV',
      icon: Cpu,
      bio: 'Architecting robust, high-security server infrastructures, scalable database systems, and lightning-fast APIs to power enterprise web applications.',
      socials: { linkedin: 'https://www.linkedin.com/in/taufique-ahmad-b31665413?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: '#' }
    },
    {
      name: 'Sifat Hossen Shuvo',
      role: 'Frontend Developer & Marketing Manager',
      tag: 'FRONTEND & GROWTH',
      icon: TrendingUp,
      bio: 'Bridging pixel-perfect interactive React UI development with data-driven digital marketing and growth strategies to maximize customer conversion and ROI.',
      socials: { linkedin: 'https://www.linkedin.com/in/mr-shuvo-a1a53241b/', email: 'sifathossensuvo@gmail.com', github: '#' }
    },
    {
      name: 'Sophia Vance',
      role: 'Head of Digital Marketing & Growth',
      tag: 'MARKETING LEAD',
      icon: Sparkles,
      bio: 'Driving e-commerce conversion rate optimization, data-backed customer acquisition, and technical SEO dominance to skyrocket client online revenue.',
      socials: { linkedin: '#', twitter: '#' }
    }
  ];

  const principles = [
    {
      num: '01',
      title: 'Zero Shortcuts or Page Builders',
      desc: 'We never use generic page builders like WordPress, Wix, or Squarespace. Why? Because pre-made themes are bloated with thousands of lines of unused JavaScript, making your site slow, insecure, and impossible to customize at scale. We code every pixel from scratch in modern React and Next.js.'
    },
    {
      num: '02',
      title: 'Obsession with Speed & Performance',
      desc: 'In digital business, every 100 milliseconds of latency costs you 1% in conversion revenue. We architect lightweight, server-side rendered applications that load instantly in under 0.8 seconds. Our codebases consistently score 99/100 on Google Lighthouse.'
    },
    {
      num: '03',
      title: 'Radical Transparency & Senior Talent',
      desc: 'When you work with WebStudio, you talk directly with senior software engineers and creative directors—never account managers or middlemen. We provide daily live staging links, open GitHub repositories, and our certified 10-Day Delivery Guarantee.'
    }
  ];

  return (
    <div className="page-about" style={{ background: '#0D0D0D', minHeight: '100vh', paddingTop: '140px', paddingBottom: '120px', color: '#FFFFFF' }}>
      <div className="container">
        
        {/* Top Header Banner */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px', maxWidth: '880px', margin: '0 auto 80px auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', background: 'rgba(200, 155, 102, 0.1)', border: '1px solid rgba(200, 155, 102, 0.3)', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            <Sparkles size={13} />
            <span>ABOUT WEBSTUDIO & OUR PHILOSOPHY</span>
          </div>
          
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            We don't use templates.<br />
            We build <span style={{ color: 'var(--color-accent)' }}>from scratch.</span>
          </h1>

          <p style={{ fontSize: '18px', color: '#AAAAAA', lineHeight: 1.7, maxWidth: '720px' }}>
            We founded WebStudio with a singular rebellion against generic page builders, bloated WordPress themes, and cookie-cutter templates. We believe that an elite business deserves an elite digital foundation.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '100px' }}>
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                style={{
                  background: '#141414',
                  padding: '36px 28px',
                  borderRadius: '20px',
                  border: '1px solid #222222',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(200, 155, 102, 0.12)', border: '1px solid rgba(200, 155, 102, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                    <Icon size={22} />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#666666', letterSpacing: '0.1em' }}>VERIFIED</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-accent)', marginTop: '4px' }}>
                    {stat.label}
                  </div>
                </div>
                <p style={{ fontSize: '14px', color: '#888888', lineHeight: 1.5, margin: 0 }}>
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Agency Story Section */}
        <div style={{ background: '#141414', border: '1px solid #242424', borderRadius: '24px', padding: 'clamp(36px, 5vw, 64px)', marginBottom: '100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              OUR ORIGIN STORY
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, margin: 0 }}>
              The rebellion against slow, generic websites.
            </h2>
            <p style={{ fontSize: '16px', color: '#CCCCCC', lineHeight: 1.7, margin: 0 }}>
              In 2020, we noticed a disturbing trend in the web development industry: agencies charging tens of thousands of dollars only to install a generic $50 WordPress theme, install 30 slow plugins, and hand over a sluggish, unsecure website.
            </p>
            <p style={{ fontSize: '16px', color: '#AAAAAA', lineHeight: 1.7, margin: 0 }}>
              We decided to do the exact opposite. We assembled a dedicated team of senior software engineers and Awwwards-winning UI designers to craft 100% custom codebases. Every line of code is written specifically for your business model.
            </p>
          </div>

          {/* Global Studio Box */}
          <div style={{ background: '#0D0D0D', borderRadius: '20px', padding: '36px', border: '1px solid #282828', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <Globe size={32} color="var(--color-accent)" />
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-heading)' }}>Hyderabad Studio Workspace</h3>
                <span style={{ fontSize: '13px', color: '#888888' }}>Hyderabad, Telangana — India</span>
              </div>
            </div>
            <p style={{ fontSize: '15px', color: '#999999', lineHeight: 1.6, margin: 0 }}>
              Our distributed engineering model allows us to attract top 1% global engineering talent while maintaining continuous 24-hour development cycles across time zones.
            </p>
            <div style={{ display: 'flex', gap: '16px', paddingTop: '10px', borderTop: '1px solid #1E1E1E' }}>
              <div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF' }}>15+</div>
                <div style={{ fontSize: '12px', color: '#888888' }}>Countries Served</div>
              </div>
              <div style={{ width: '1px', background: '#222' }} />
              <div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF' }}>99/100</div>
                <div style={{ fontSize: '12px', color: '#888888' }}>Avg Speed Score</div>
              </div>
              <div style={{ width: '1px', background: '#222' }} />
              <div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF' }}>0</div>
                <div style={{ fontSize: '12px', color: '#888888' }}>Templates Used</div>
              </div>
            </div>
          </div>
        </div>

        {/* BEHIND THE SCENES — HOW WE WORK PHOTO GALLERY SECTION */}
        <div style={{ marginBottom: '100px', paddingTop: '20px', borderTop: '1px solid #1E1E1E' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px', marginBottom: '56px', paddingTop: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Camera size={15} />
              <span>BEHIND THE SCENES — STUDIO WORKFLOW</span>
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
              How we work: Precision engineering in <span style={{ color: 'var(--color-accent)' }}>every pixel.</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#AAAAAA', maxWidth: '680px', lineHeight: 1.6, margin: 0 }}>
              Take a look inside our studio workspaces. We replace chaotic agency workflows with structured engineering sprints, collaborative UI/UX prototyping, and rigorous peer code reviews.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {workflowGallery.map((item) => (
              <div
                key={item.step}
                style={{
                  background: '#141414',
                  borderRadius: '24px',
                  border: '1px solid #242424',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.5)'
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
                {/* Image Container */}
                <div style={{ height: '280px', position: 'relative', overflow: 'hidden', background: '#0A0A0A', borderBottom: '1px solid #222222' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                  />

                  {/* Top Badge */}
                  <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(13, 13, 13, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(200, 155, 102, 0.4)', padding: '6px 14px', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, color: '#FFFFFF' }}>
                    <CheckCircle2 size={13} color="var(--color-accent)" />
                    <span>{item.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.1em' }}>
                      {item.step}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#FFFFFF', margin: 0, letterSpacing: '-0.01em' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: '#999999', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MEET OUR LEADERSHIP & TEAM SECTION */}
        <div style={{ marginBottom: '100px', paddingTop: '20px', borderTop: '1px solid #1E1E1E' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px', marginBottom: '56px', paddingTop: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Users size={15} />
              <span>STUDIO LEADERSHIP & SPECIALISTS</span>
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
              Meet the minds behind <span style={{ color: 'var(--color-accent)' }}>the code.</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#AAAAAA', maxWidth: '640px', lineHeight: 1.6, margin: 0 }}>
              When you work with WebStudio, you communicate directly with senior software developers, marketing strategists, and creative leads—never account managers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {teamMembers.map((member, idx) => {
              const RoleIcon = member.icon;
              const isFounder = idx === 0;
              return (
                <div
                  key={member.name}
                  style={{
                    background: isFounder ? 'linear-gradient(145deg, #1A1A1A 0%, #141414 100%)' : '#141414',
                    borderRadius: '24px',
                    border: isFounder ? '1px solid var(--color-accent)' : '1px solid #242424',
                    padding: '36px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '24px',
                    boxShadow: isFounder ? '0 20px 50px rgba(200, 155, 102, 0.15)' : '0 10px 30px rgba(0,0,0,0.5)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = isFounder ? 'var(--color-accent)' : '#404040';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = isFounder ? 'var(--color-accent)' : '#242424';
                  }}
                >
                  {isFounder && (
                    <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--color-accent)', color: '#111111', fontSize: '10px', fontWeight: 800, padding: '6px 16px', borderBottomLeftRadius: '16px', letterSpacing: '0.1em' }}>
                      STUDIO FOUNDER
                    </div>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        background: isFounder ? 'var(--color-accent)' : '#222222',
                        color: isFounder ? '#111111' : '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '22px',
                        fontWeight: 800,
                        boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                      }}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>

                      <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-accent)', background: 'rgba(200, 155, 102, 0.12)', border: '1px solid rgba(200, 155, 102, 0.3)', padding: '6px 12px', borderRadius: '20px', letterSpacing: '0.08em' }}>
                        {member.tag}
                      </span>
                    </div>

                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                        {member.name}
                      </h3>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-accent)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <RoleIcon size={16} />
                        <span>{member.role}</span>
                      </div>
                    </div>

                    <p style={{ fontSize: '15px', color: '#AAAAAA', lineHeight: 1.6, margin: 0 }}>
                      {member.bio}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', borderTop: '1px solid #222222' }}>
                    <a href={member.socials.linkedin || '#'} aria-label={`${member.name} LinkedIn`} style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CCCCCC', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.background = 'rgba(200, 155, 102, 0.15)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#CCCCCC'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}>
                      <Linkedin size={16} />
                    </a>
                    <a href={member.socials.twitter || '#'} aria-label={`${member.name} Twitter`} style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CCCCCC', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.background = 'rgba(200, 155, 102, 0.15)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#CCCCCC'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}>
                      <Twitter size={16} />
                    </a>
                    {member.socials.github && (
                      <a href={member.socials.github} aria-label={`${member.name} GitHub`} style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CCCCCC', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.background = 'rgba(200, 155, 102, 0.15)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#CCCCCC'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}>
                        <Github size={16} />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a href={member.socials.instagram} aria-label={`${member.name} Instagram`} style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CCCCCC', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.background = 'rgba(200, 155, 102, 0.15)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#CCCCCC'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}>
                        <Instagram size={16} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Core Engineering Principles */}
        <div>
          <p style={{ fontSize: '12px', fontWeight: 700, color: '#888888', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '32px' }}>
            OUR CORE ENGINEERING PRINCIPLES
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px' }}>
            {principles.map((val) => (
              <div key={val.num} style={{ background: '#141414', padding: '40px', borderRadius: '24px', border: '1px solid #222222', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.1em' }}>
                  {val.num} / PRINCIPLE
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-heading)', margin: 0 }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#999999', lineHeight: 1.7, margin: 0 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: '100px', padding: '56px', background: '#141414', border: '1px solid #282828', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            Ready to build your digital foundation with us?
          </h2>
          <p style={{ fontSize: '17px', color: '#AAAAAA', maxWidth: '600px', lineHeight: 1.6 }}>
            Schedule a 1-on-1 discovery call with our senior engineers and creative directors today.
          </p>
          <Link
            to="/contact"
            style={{ background: 'var(--color-btn-cream)', color: '#111111', padding: '16px 36px', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '16px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}
          >
            <span>Start Your Project Inquiry</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
}
