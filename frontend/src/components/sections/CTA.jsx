import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, MessageSquare, Send, MessageCircle } from 'lucide-react';

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState('Custom Website');
  const [budget, setBudget] = useState('$1,500 - $3,000');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const projectTypes = ['Custom Website', 'E-Commerce Store', 'Web Application', 'UI/UX Design'];
  const budgetRanges = ['$600 - $1,500', '$1,500 - $3,000', '$3,000 - $5,000'];

  return (
    <section id="contact-section" style={{ background: '#0D0D0D', padding: '100px 0', borderTop: '1px solid #1C1C1C', position: 'relative', overflow: 'hidden' }}>
      
      {/* Subtle background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(200, 155, 102, 0.05) 0%, rgba(0,0,0,0) 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '60px', alignItems: 'flex-start' }}>
          
          {/* Left Column: Direct Studio Access */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(200, 155, 102, 0.1)', border: '1px solid rgba(200, 155, 102, 0.3)', borderRadius: 'var(--radius-full)', fontSize: '11px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase', width: 'fit-content' }}>
              <span>START A CONVERSATION</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0 }}>
              Let's Build Something <span style={{ color: 'var(--color-accent)' }}>Extraordinary</span> Together
            </h2>

            <p style={{ fontSize: '18px', color: '#CCCCCC', lineHeight: 1.6 }}>
              Ready to elevate your brand with a handcrafted website or web application? Schedule a discovery call with our senior engineers or submit your project inquiry below.
            </p>

            {/* Direct Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '10px' }}>
              <a href="mailto:hello@webstudio.com" style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '20px', background: '#141414', borderRadius: '16px', border: '1px solid #222222', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.background = '#1A1A1A'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222222'; e.currentTarget.style.background = '#141414'; }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(200, 155, 102, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#888888', fontWeight: 600 }}>DIRECT EMAIL (2HR RESPONSE)</div>
                  <div style={{ fontSize: '17px', color: '#FFFFFF', fontWeight: 700, fontFamily: 'var(--font-heading)', marginTop: '2px' }}>hello@webstudio.com</div>
                </div>
              </a>

              <a href="tel:+919347223876" style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '20px', background: '#141414', borderRadius: '16px', border: '1px solid #222222', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.background = '#1A1A1A'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222222'; e.currentTarget.style.background = '#141414'; }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(200, 155, 102, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#888888', fontWeight: 600 }}>DIRECT PHONE CALL</div>
                  <div style={{ fontSize: '17px', color: '#FFFFFF', fontWeight: 700, fontFamily: 'var(--font-heading)', marginTop: '2px' }}>+91 9347223876</div>
                </div>
              </a>

              <a href="https://wa.me/919347223876" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '20px', background: 'rgba(46, 204, 113, 0.08)', borderRadius: '16px', border: '1px solid rgba(46, 204, 113, 0.3)', textDecoration: 'none', transition: 'all 0.2s ease', boxShadow: '0 4px 20px rgba(46, 204, 113, 0.15)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2ECC71'; e.currentTarget.style.background = 'rgba(46, 204, 113, 0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(46, 204, 113, 0.3)'; e.currentTarget.style.background = 'rgba(46, 204, 113, 0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(46, 204, 113, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2ECC71' }}>
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#2ECC71', fontWeight: 700, letterSpacing: '0.05em' }}>INSTANT WHATSAPP CHAT ⚡</div>
                  <div style={{ fontSize: '17px', color: '#FFFFFF', fontWeight: 700, fontFamily: 'var(--font-heading)', marginTop: '2px' }}>+91 9347223876</div>
                </div>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '20px', background: '#141414', borderRadius: '16px', border: '1px solid #222222' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(200, 155, 102, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#888888', fontWeight: 600 }}>STUDIO HEADQUARTERS</div>
                  <div style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: 700, fontFamily: 'var(--font-heading)', marginTop: '2px' }}>Hyderabad, Telangana — India</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div style={{
            background: '#141414',
            border: '1px solid #282828',
            borderRadius: '24px',
            padding: 'clamp(28px, 4vw, 44px)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.8)'
          }}>
            {submitted ? (
              <div style={{ padding: '40px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(39, 201, 63, 0.15)', border: '1px solid rgba(39, 201, 63, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#27C93F' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                  Inquiry Received!
                </h3>
                <p style={{ fontSize: '16px', color: '#AAAAAA', lineHeight: 1.6, maxWidth: '400px' }}>
                  Thank you for reaching out. Our senior engineering team is reviewing your project requirements and will contact you within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ background: 'var(--color-btn-cream)', color: '#111111', padding: '12px 28px', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '14px', border: 'none', cursor: 'pointer', marginTop: '10px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)', marginBottom: '4px' }}>
                  Start Your Project Inquiry
                </h3>

                {/* Name & Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#CCCCCC' }}>Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      style={{ background: '#0D0D0D', border: '1px solid #282828', borderRadius: '12px', padding: '14px 16px', color: '#FFFFFF', fontSize: '15px', outline: 'none' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#CCCCCC' }}>Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="john@company.com"
                      style={{ background: '#0D0D0D', border: '1px solid #282828', borderRadius: '12px', padding: '14px 16px', color: '#FFFFFF', fontSize: '15px', outline: 'none' }}
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#CCCCCC' }}>Company / Brand Name</label>
                  <input
                    type="text"
                    placeholder="Acme Corporation"
                    style={{ background: '#0D0D0D', border: '1px solid #282828', borderRadius: '12px', padding: '14px 16px', color: '#FFFFFF', fontSize: '15px', outline: 'none' }}
                  />
                </div>

                {/* Project Type Selector */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#CCCCCC' }}>Project Type</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setProjectType(type)}
                        style={{
                          background: projectType === type ? 'var(--color-accent)' : '#0D0D0D',
                          color: projectType === type ? '#111111' : '#AAAAAA',
                          border: projectType === type ? '1px solid var(--color-accent)' : '1px solid #282828',
                          padding: '10px 16px',
                          borderRadius: '8px',
                          fontSize: '13px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range Selector with Guarantee Badge */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#CCCCCC' }}>Estimated Budget</label>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', background: 'rgba(39, 174, 96, 0.12)', border: '1px solid rgba(39, 174, 96, 0.35)', borderRadius: '6px', fontSize: '11px', fontWeight: 700, color: '#2ECC71' }}>
                      <span>🛡️ Budget Guarantee: Handcrafted within your scope (Starting $600)</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {budgetRanges.map((range) => (
                      <button
                        type="button"
                        key={range}
                        onClick={() => setBudget(range)}
                        style={{
                          background: budget === range ? 'rgba(200, 155, 102, 0.2)' : '#0D0D0D',
                          color: budget === range ? 'var(--color-accent)' : '#AAAAAA',
                          border: budget === range ? '1px solid var(--color-accent)' : '1px solid #282828',
                          padding: '10px 16px',
                          borderRadius: '8px',
                          fontSize: '13px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#CCCCCC' }}>Project Goals & Details *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                    style={{ background: '#0D0D0D', border: '1px solid #282828', borderRadius: '12px', padding: '14px 16px', color: '#FFFFFF', fontSize: '15px', outline: 'none', resize: 'vertical' }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    background: 'var(--color-btn-cream)',
                    color: '#111111',
                    padding: '18px 36px',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 700,
                    fontSize: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 10px 30px rgba(200, 155, 102, 0.3)',
                    fontFamily: 'var(--font-heading)',
                    marginTop: '8px'
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
                  <span>Submit Project Inquiry</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
