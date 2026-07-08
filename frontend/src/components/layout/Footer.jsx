import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Github, Twitter, Linkedin, Dribbble, MessageCircle } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Works', path: '/works' },
    { label: 'Process', path: '/process' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const serviceLinks = [
    'Custom Web Development',
    'E-Commerce Shopping Platforms',
    'SaaS & Web Applications',
    'UI/UX Design Systems',
    'Mobile Responsive Layouts',
    'Performance Optimization'
  ];

  return (
    <footer className="footer" style={{
      background: '#080808',
      borderTop: '1px solid #1A1A1A',
      paddingTop: '80px',
      paddingBottom: '40px',
      color: '#A0A0A0'
    }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px', paddingBottom: '60px', borderBottom: '1px solid #1A1A1A' }}>
          
          {/* Column 1: Studio Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #DFCDB7 0%, #C89B66 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#111111',
                fontWeight: 800,
                fontSize: '20px',
                fontFamily: 'var(--font-heading)'
              }}>
                W
              </div>
              <span style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
                Web<span style={{ color: 'var(--color-accent)' }}>Studio</span>
              </span>
            </Link>

            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#888888', margin: 0 }}>
              An award-winning digital engineering agency. We architect and build 100% custom websites and web applications with zero templates or page builders.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#141414', border: '1px solid #222222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CCCCCC', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222222'; e.currentTarget.style.color = '#CCCCCC'; }}>
                <Github size={16} />
              </a>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#141414', border: '1px solid #222222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CCCCCC', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222222'; e.currentTarget.style.color = '#CCCCCC'; }}>
                <Twitter size={16} />
              </a>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#141414', border: '1px solid #222222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CCCCCC', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222222'; e.currentTarget.style.color = '#CCCCCC'; }}>
                <Linkedin size={16} />
              </a>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#141414', border: '1px solid #222222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CCCCCC', textDecoration: 'none', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222222'; e.currentTarget.style.color = '#CCCCCC'; }}>
                <Dribbble size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.path}
                  style={{ color: '#CCCCCC', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#CCCCCC'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Capabilities */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Capabilities
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {serviceLinks.map(service => (
                <span key={service} style={{ color: '#888888', fontSize: '14px' }}>
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Contact Studio
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="mailto:hello@webstudio.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#CCCCCC', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#CCCCCC'}>
                <Mail size={16} color="var(--color-accent)" />
                <span>hello@webstudio.com</span>
              </a>
              <a href="tel:+919347223876" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#CCCCCC', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#CCCCCC'}>
                <Phone size={16} color="var(--color-accent)" />
                <span>+91 9347223876</span>
              </a>
              <a href="https://wa.me/919347223876" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ECC71', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#2ECC71'}>
                <MessageCircle size={16} color="#2ECC71" />
                <span>WhatsApp Us Direct</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#888888' }}>
                <MapPin size={16} color="var(--color-accent)" />
                <span>Hyderabad Studio — Telangana, India</span>
              </div>
            </div>

            <div style={{ marginTop: '8px', padding: '16px', background: '#141414', borderRadius: '14px', border: '1px solid #222222', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>Subscribe to Studio Insights</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  style={{ flex: 1, background: '#0D0D0D', border: '1px solid #282828', padding: '8px 12px', borderRadius: '8px', color: '#FFFFFF', fontSize: '13px', outline: 'none' }}
                />
                <button
                  style={{ background: 'var(--color-btn-cream)', color: '#111111', padding: '8px 14px', borderRadius: '8px', fontWeight: 700, fontSize: '13px', border: 'none', cursor: 'pointer' }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', paddingTop: '32px', fontSize: '13px', color: '#666666' }}>
          <div>
            © 2025 WebStudio. All rights reserved. Handcrafted with precision.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/about')}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/about')}>Terms of Service</span>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/about')}>Security</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
