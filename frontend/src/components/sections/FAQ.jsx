import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '../../data/index.js';

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        className="faq-item__trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id={`faq-trigger-${index}`}
        aria-controls={`faq-body-${index}`}
      >
        <span className="faq-item__question">{item.q}</span>
        <div className="faq-item__icon" aria-hidden="true">
          <Plus size={16} strokeWidth={2} />
        </div>
      </button>
      <div
        className="faq-item__body"
        id={`faq-body-${index}`}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
      >
        <p className="faq-item__answer">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="faq section" id="faq" aria-label="Frequently asked questions">
      <div className="container">
        <div className="faq__grid">
          {/* Left sticky */}
          <div className="faq__sticky">
            <div className="section-label reveal">FAQ</div>
            <h2 className="section-heading reveal delay-100" style={{ marginBottom: 'var(--space-4)' }}>
              Frequently<br />Asked<br />Questions
            </h2>
            <p style={{
              color: 'var(--color-text-secondary)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              marginBottom: 'var(--space-8)',
            }}
              className="reveal delay-200"
            >
              Have more questions? We'd love to talk.
              Book a free 30-minute consultation with our team.
            </p>
            <a
              href="#cta"
              className="btn btn-accent"
              id="faq-cta-btn"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Free Consultation
            </a>
          </div>

          {/* Right FAQ list */}
          <div className="faq__list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <FAQItem item={faq} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
