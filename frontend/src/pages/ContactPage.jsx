import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, MessageSquare, Send, Sparkles, HelpCircle, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState('Custom Website');
  const [budget, setBudget] = useState('$1,500 - $3,000');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formattedMessage = `Project Type: ${projectType}
Estimated Budget: ${budget}

Details:
${message}`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          business,
          message: formattedMessage,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit your inquiry. Please try again.');
      }

      setSubmitted(true);
      // Reset form fields
      setName('');
      setEmail('');
      setBusiness('');
      setMessage('');
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const projectTypes = ['Custom Website', 'E-Commerce Store', 'Web Application', 'UI/UX Design'];
  const budgetRanges = ['$600 - $1,500', '$1,500 - $3,000', '$3,000 - $5,000'];

  const faqs = [
    {
      q: 'Why do you build from scratch instead of using WordPress or Shopify templates?',
      a: 'Templates are bloated with thousands of lines of unused code and plugins, making them sluggish, unsecure, and difficult to scale. Building from scratch in React and Next.js ensures your site renders instantly in 0.8 seconds, achieves 99/100 Google Lighthouse scores, and gives you complete ownership over your architecture.'
    },
    {
      q: 'How long does a typical custom project take to complete?',
      a: 'We work lightning fast! A standard business or corporate website takes just 7-10 days guaranteed. We work in intensive daily sprints and provide real-time staging preview links so you can watch your website come to life in 10 days.'
    },
    {
      q: 'What is your project payment and milestone structure?',
      a: 'We typically structure projects into 3 transparent milestones: 40% upon project kickoff and architectural discovery, 30% upon UI/UX Figma design approval, and 30% upon final QA sign-off and cloud production launch.'
    },
    {
      q: 'Do you provide ongoing technical support after launch?',
      a: 'Yes! We offer monthly SLA support packages that include 24/7 real-time security monitoring, daily automated backups, server uptime guarantees, and priority 2-hour technical support from senior engineers.'
    }
  ];

  return (
    <main style={{ background: '#0A0A0A', paddingTop: '120px', minHeight: '100vh', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ textAlign: 'left', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(200, 155, 102, 0.1)', border: '1px solid rgba(200, 155, 102, 0.3)', borderRadius: '20px', fontSize: '12px', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '20px', letterSpacing: '0.1em' }}>
            <span>START A CONVERSATION</span>
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)', lineHeight: 1.15, marginBottom: '20px' }}>
            Let's Build Something <span style={{ color: 'var(--color-accent)' }}>Extraordinary</span> Together
          </h1>

          <p style={{ fontSize: '18px', color: '#AAAAAA', lineHeight: 1.6, maxWidth: '680px' }}>
            Schedule a 1-on-1 discovery call with our senior engineers or submit your project inquiry below. Direct responses guaranteed within 2 hours.
          </p>
        </div>

        {/* Contact Details + Form Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '64px', alignItems: 'flex-start', marginBottom: '100px' }}>
          
          {/* Left Column: Direct Studio Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)', margin: 0 }}>
              Direct Studio Access
            </h2>
            <p style={{ fontSize: '16px', color: '#AAAAAA', lineHeight: 1.6, margin: 0 }}>
              We believe in direct communication without account managers or middlemen. Connect directly with our engineering leadership.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '10px' }}>
              <a href="mailto:hello@webstudio.com" style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '24px', background: '#141414', borderRadius: '16px', border: '1px solid #222222', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.background = '#1A1A1A'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222222'; e.currentTarget.style.background = '#141414'; }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(200, 155, 102, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#888888', fontWeight: 600 }}>DIRECT EMAIL (2HR RESPONSE SLA)</div>
                  <div style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: 700, fontFamily: 'var(--font-heading)', marginTop: '4px' }}>hello@webstudio.com</div>
                </div>
              </a>

              <a href="tel:+919347223876" style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '24px', background: '#141414', borderRadius: '16px', border: '1px solid #222222', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.background = '#1A1A1A'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222222'; e.currentTarget.style.background = '#141414'; }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(200, 155, 102, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#888888', fontWeight: 600 }}>DIRECT PHONE CALL</div>
                  <div style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: 700, fontFamily: 'var(--font-heading)', marginTop: '4px' }}>+91 9347223876</div>
                </div>
              </a>

              <a href="https://wa.me/919347223876" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '24px', background: 'rgba(46, 204, 113, 0.08)', borderRadius: '16px', border: '1px solid rgba(46, 204, 113, 0.3)', textDecoration: 'none', transition: 'all 0.2s ease', boxShadow: '0 4px 20px rgba(46, 204, 113, 0.15)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2ECC71'; e.currentTarget.style.background = 'rgba(46, 204, 113, 0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(46, 204, 113, 0.3)'; e.currentTarget.style.background = 'rgba(46, 204, 113, 0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(46, 204, 113, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2ECC71' }}>
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#2ECC71', fontWeight: 700, letterSpacing: '0.05em' }}>INSTANT WHATSAPP CHAT ⚡</div>
                  <div style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: 700, fontFamily: 'var(--font-heading)', marginTop: '4px' }}>+91 9347223876</div>
                </div>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '24px', background: '#141414', borderRadius: '16px', border: '1px solid #222222' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(200, 155, 102, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#888888', fontWeight: 600 }}>STUDIO HEADQUARTERS</div>
                  <div style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: 700, fontFamily: 'var(--font-heading)', marginTop: '4px' }}>Hyderabad, Telangana — India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div style={{ background: '#141414', border: '1px solid #282828', borderRadius: '24px', padding: 'clamp(28px, 4vw, 44px)', boxShadow: '0 30px 80px rgba(0,0,0,0.8)' }}>
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

                {error && (
                  <div style={{ color: '#ff4a4a', fontSize: '14px', background: 'rgba(255, 74, 74, 0.1)', border: '1px solid rgba(255, 74, 74, 0.2)', padding: '12px 16px', borderRadius: '8px', fontWeight: 600 }}>
                    ⚠️ {error}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#CCCCCC' }}>Your Name *</label>
                    <input required type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} style={{ background: '#0D0D0D', border: '1px solid #282828', borderRadius: '12px', padding: '14px 16px', color: '#FFFFFF', fontSize: '15px', outline: 'none' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#CCCCCC' }}>Email Address *</label>
                    <input required type="email" placeholder="john@company.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ background: '#0D0D0D', border: '1px solid #282828', borderRadius: '12px', padding: '14px 16px', color: '#FFFFFF', fontSize: '15px', outline: 'none' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#CCCCCC' }}>Company / Brand Name</label>
                  <input type="text" placeholder="Acme Corporation" value={business} onChange={(e) => setBusiness(e.target.value)} style={{ background: '#0D0D0D', border: '1px solid #282828', borderRadius: '12px', padding: '14px 16px', color: '#FFFFFF', fontSize: '15px', outline: 'none' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#CCCCCC' }}>Project Type</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {projectTypes.map((type) => (
                      <button type="button" key={type} onClick={() => setProjectType(type)} style={{ background: projectType === type ? 'var(--color-accent)' : '#0D0D0D', color: projectType === type ? '#111111' : '#AAAAAA', border: projectType === type ? '1px solid var(--color-accent)' : '1px solid #282828', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s ease' }}>
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#CCCCCC' }}>Estimated Budget</label>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', background: 'rgba(39, 174, 96, 0.12)', border: '1px solid rgba(39, 174, 96, 0.35)', borderRadius: '6px', fontSize: '11px', fontWeight: 700, color: '#2ECC71' }}>
                      <span>🛡️ Budget Guarantee: Handcrafted within your scope (Starting $600)</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {budgetRanges.map((range) => (
                      <button type="button" key={range} onClick={() => setBudget(range)} style={{ background: budget === range ? 'rgba(200, 155, 102, 0.2)' : '#0D0D0D', color: budget === range ? 'var(--color-accent)' : '#AAAAAA', border: budget === range ? '1px solid var(--color-accent)' : '1px solid #282828', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s ease' }}>
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#CCCCCC' }}>Project Goals & Details *</label>
                  <textarea required rows={4} placeholder="Tell us about your project requirements, timeline, and goals..." value={message} onChange={(e) => setMessage(e.target.value)} style={{ background: '#0D0D0D', border: '1px solid #282828', borderRadius: '12px', padding: '14px 16px', color: '#FFFFFF', fontSize: '15px', outline: 'none', resize: 'vertical' }} />
                </div>

                <button type="submit" disabled={loading} style={{ background: 'var(--color-btn-cream)', color: '#111111', padding: '18px 36px', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '16px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: 'all 0.2s ease', boxShadow: '0 10px 30px rgba(200, 155, 102, 0.3)', fontFamily: 'var(--font-heading)', marginTop: '8px', opacity: loading ? 0.7 : 1 }}>
                  <span>{loading ? 'Submitting Inquiry...' : 'Submit Project Inquiry'}</span>
                  {!loading && <Send size={18} />}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Frequently Asked Questions Section */}
        <div style={{ paddingTop: '64px', borderTop: '1px solid #1E1E1E' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)', marginTop: '8px' }}>
              Everything you need to know about working with us.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ background: '#141414', padding: '36px', borderRadius: '20px', border: '1px solid #222222', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-heading)', margin: 0, display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <HelpCircle size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{faq.q}</span>
                </h3>
                <p style={{ fontSize: '15px', color: '#AAAAAA', lineHeight: 1.7, margin: 0, paddingLeft: '30px' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
