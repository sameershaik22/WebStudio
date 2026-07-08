import { Globe, ShoppingBag, Code2, Zap, RefreshCw, Wrench, ArrowRight } from 'lucide-react';
import { services } from '../../data/index.js';

const iconMap = {
  Globe, ShoppingBag, Code2, Zap, RefreshCw, Wrench
};

export default function Services() {
  return (
    <section className="services section" id="services" aria-label="Our services" style={{ padding: 'var(--space-16) 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <header className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--space-6)', marginBottom: 'var(--space-12)' }}>
          <div>
            <div className="section-label reveal" style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.15em', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
              OUR SERVICES
            </div>
            <h2 className="section-heading reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>
              What We Can Do For You
            </h2>
          </div>

          <a
            href="#cta"
            className="reveal delay-200"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontWeight: 600, color: 'var(--color-text-primary)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}
          >
            View All Services
            <ArrowRight size={16} strokeWidth={2} />
          </a>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--space-6)',
        }}>
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.title}
                className="service-card reveal-scale"
                style={{
                  background: 'var(--color-bg-secondary)',
                  padding: 'var(--space-8)',
                  borderRadius: 'var(--radius-2xl)',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                  transition: 'all 0.3s ease',
                  transitionDelay: `${(i % 3) * 80}ms`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)'
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(196, 138, 90, 0.12)',
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {Icon && <Icon size={26} strokeWidth={1.8} />}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  letterSpacing: '-0.02em'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {service.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
