import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, Clock, Lock, ArrowRight, MessageCircle } from 'lucide-react';
import { useNavbarScroll } from '../../hooks/index.js';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useNavbarScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Works', path: '/works' },
    { label: 'Process', path: '/process' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const handleNav = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, transition: 'all 0.3s ease' }}>
      
      {/* LAYER 1: Buz Construction Top Utility & Trust Bar */}
      <div style={{
        background: '#080808',
        borderBottom: '1px solid #1E1E1E',
        padding: '8px 0',
        fontSize: '12px',
        color: '#A0A0A0',
        display: scrolled ? 'none' : 'block',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="tel:+919347223876" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#CCCCCC', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#CCCCCC'}>
              <Phone size={13} color="var(--color-accent)" />
              <span>+91 9347223876</span>
            </a>
            <a href="https://wa.me/919347223876" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#2ECC71', textDecoration: 'none', fontWeight: 700, transition: 'all 0.2s ease', background: 'rgba(46, 204, 113, 0.12)', padding: '3px 10px', borderRadius: '14px', border: '1px solid rgba(46, 204, 113, 0.35)', boxShadow: '0 0 10px rgba(46, 204, 113, 0.15)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(46, 204, 113, 0.25)'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(46, 204, 113, 0.12)'; e.currentTarget.style.transform = 'scale(1)'; }}>
              <MessageCircle size={13} color="#2ECC71" />
              <span>WhatsApp Us</span>
            </a>
            <a href="mailto:hello@webstudio.com" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#CCCCCC', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#CCCCCC'}>
              <Mail size={13} color="var(--color-accent)" />
              <span>hello@webstudio.com</span>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888888' }}>
              <Clock size={13} color="var(--color-accent)" />
              <span>Mon - Fri: 9:00 AM - 7:00 PM EST</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ color: '#27C93F', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
              ● 100% Custom Code Guarantee
            </span>
            <button
              onClick={() => handleNav('/contact')}
              style={{ background: 'rgba(200, 155, 102, 0.12)', border: '1px solid rgba(200, 155, 102, 0.3)', color: 'var(--color-accent)', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(200, 155, 102, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(200, 155, 102, 0.12)'}
            >
              <Lock size={11} />
              <span>Client Portal</span>
            </button>
          </div>

        </div>
      </div>

      {/* LAYER 2: Main Architectural Navigation Bar */}
      <nav className="navbar" role="navigation" aria-label="Main navigation" style={{
        background: scrolled ? 'rgba(13, 13, 13, 0.98)' : 'rgba(13, 13, 13, 0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: scrolled ? '14px 0' : '18px 0',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.8)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <Link to="/" className="navbar__logo" aria-label="WebStudio Home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            <div style={{ width: '8px', height: '24px', background: 'var(--color-accent)', borderRadius: '2px' }} />
            <span>WebStudio<span style={{ color: 'var(--color-accent)' }}>.</span></span>
          </Link>

          <div className="navbar__nav" aria-label="Site navigation" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <button
                  key={link.path}
                  className="navbar__link"
                  onClick={() => handleNav(link.path)}
                  aria-label={`Navigate to ${link.label}`}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: active ? 700 : 600,
                    color: active ? 'var(--color-accent)' : '#CCCCCC',
                    transition: 'all 0.2s ease',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.02em',
                    padding: '6px 0',
                    borderBottom: active ? '2px solid var(--color-accent)' : '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = '#CCCCCC';
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="navbar__cta" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              className="btn"
              onClick={() => handleNav('/contact')}
              style={{
                background: 'var(--color-btn-cream)',
                color: '#111111',
                padding: '12px 26px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-heading)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 6px 20px rgba(200, 155, 102, 0.2)'
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
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </button>
            
            <button
              className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Toggle mobile menu"
              style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span style={{ width: '24px', height: '2px', background: '#FFFFFF', borderRadius: '2px' }} />
              <span style={{ width: '24px', height: '2px', background: '#FFFFFF', borderRadius: '2px' }} />
              <span style={{ width: '24px', height: '2px', background: '#FFFFFF', borderRadius: '2px' }} />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen} style={{ display: menuOpen ? 'flex' : 'none', flexDirection: 'column', position: 'fixed', top: scrolled ? '64px' : '100px', left: 0, right: 0, bottom: 0, background: '#080808', padding: '32px 24px', zIndex: 1000, gap: '24px', overflowY: 'auto' }}>
        {navLinks.map((link) => (
          <button
            key={link.path}
            className="mobile-menu__link"
            onClick={() => handleNav(link.path)}
            style={{ background: 'none', border: 'none', textAlign: 'left', fontSize: '22px', fontWeight: 700, color: location.pathname === link.path ? 'var(--color-accent)' : '#FFFFFF', cursor: 'pointer', fontFamily: 'var(--font-heading)', paddingBottom: '12px', borderBottom: '1px solid #1A1A1A' }}
          >
            {link.label}
          </button>
        ))}
        <button
          className="btn"
          onClick={() => handleNav('/contact')}
          style={{ background: 'var(--color-btn-cream)', color: '#111111', padding: '16px 28px', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '16px', border: 'none', cursor: 'pointer', marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
        >
          <span>Start a Project</span>
          <ArrowRight size={18} />
        </button>
      </div>

    </header>
  );
}
