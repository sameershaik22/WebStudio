import { useRef, useState } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { industries } from '../../data/index.js';

function LaptopMockup({ ind }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      paddingTop: '62%',
      background: ind.mockupBg,
      borderRadius: '8px 8px 0 0',
      overflow: 'hidden',
      border: '4px solid #222',
      borderBottom: 'none',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
    }}>
      {/* Browser Bar */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '20px',
        background: '#1a1a1a',
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        gap: '4px',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff5f56' }} />
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ffbd2e' }} />
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#27c93f' }} />
      </div>

      {/* Website Content */}
      <div style={{
        position: 'absolute',
        top: '20px', left: 0, right: 0, bottom: 0,
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        color: '#fff'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', fontWeight: 700, color: ind.accent }}>{ind.title} Studio</span>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: '20px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }} />
            <div style={{ width: '20px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }} />
          </div>
        </div>

        <div style={{
          flex: 1,
          borderRadius: '6px',
          background: `url(${ind.image}) center/cover no-repeat`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '12px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.45)',
            borderRadius: '6px'
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '12px', fontWeight: 700, marginBottom: '4px' }}>{ind.heroText}</div>
            <div style={{
              display: 'inline-block',
              padding: '3px 8px',
              background: ind.accent,
              borderRadius: '100px',
              fontSize: '8px',
              fontWeight: 600
            }}>
              Explore Now
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Base */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: '-5%', right: '-5%',
        height: '8px',
        background: '#d8d8d8',
        borderRadius: '0 0 12px 12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
      }} />
    </div>
  );
}

export default function Industries() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    if (trackRef.current) {
      const { scrollLeft, clientWidth } = trackRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.6 : clientWidth * 0.6;
      trackRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="industries section" id="industries" aria-label="Industries we serve">
      <div className="container">
        <header className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--space-6)', marginBottom: 'var(--space-12)' }}>
          <div>
            <div className="section-label reveal" style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.15em', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
              INDUSTRIES WE BUILD FOR
            </div>
            <h2 className="section-heading reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>
              Websites for Every Industry
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }} className="reveal delay-200">
            <a href="#cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontWeight: 600, color: 'var(--color-text-primary)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>
              Explore All Industries
              <ArrowRight size={16} strokeWidth={2} />
            </a>
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              <button onClick={() => scroll('left')} aria-label="Scroll left" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg-secondary)', cursor: 'pointer' }}>
                <ChevronLeft size={18} />
              </button>
              <button onClick={() => scroll('right')} aria-label="Scroll right" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg-secondary)', cursor: 'pointer' }}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* Drag-to-scroll gallery */}
        <div
          className={`industries__track ${isDragging ? 'dragging' : ''}`}
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{
            display: 'flex',
            gap: 'var(--space-6)',
            overflowX: 'auto',
            paddingBottom: 'var(--space-6)',
            cursor: isDragging ? 'grabbing' : 'grab',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {industries.map((ind, i) => (
            <article
              key={ind.id}
              className="industry-card reveal-scale"
              style={{
                minWidth: '320px',
                flex: '0 0 320px',
                background: ind.bg,
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-2xl)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transitionDelay: `${(i % 4) * 80}ms`,
                userSelect: 'none'
              }}
            >
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                  <span style={{ fontSize: '24px' }}>{ind.icon}</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
                    {ind.title}
                  </h3>
                </div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                  {ind.desc}
                </p>
              </div>

              {/* Laptop mockup inside card */}
              <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)' }}>
                <LaptopMockup ind={ind} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
