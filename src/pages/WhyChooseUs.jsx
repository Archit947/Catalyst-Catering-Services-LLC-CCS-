import React, { useEffect } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

function WhyChooseUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section" style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1, width: '100%', height: '100%' }}>
          <img src="/home2.png" alt="Why Choose Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4))' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', width: '100%' }}>
          <ScrollReveal direction="up">
            <h1 className="hero-title" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
              Why Choose <span style={{ color: 'var(--color-accent)' }}>Catalyst?</span>
            </h1>
            <p style={{ color: '#E8E2D2', fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', fontWeight: 300, lineHeight: 1.6 }}>
              Elevating standards. Exceeding expectations. Redefining culinary and facility management across the UAE.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section section-bg-alt">
        <div className="container text-center">
          <ScrollReveal direction="up">
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-lg)' }}>The Catalyst <span style={{ color: 'var(--color-accent)' }}>Commitment</span></h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
              Across every service we provide, Catalyst is committed to delivering excellence, reliability, and innovation — building long-term partnerships rooted in trust and measurable results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY CHOOSE US — COMMITMENT LIST */}
      <section className="section">
        <div className="container">
          <ScrollReveal direction="up" className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>What We <i style={{ color: 'var(--color-accent)', fontWeight: 400 }}>Deliver</i></h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto', marginBottom: 'var(--spacing-lg)' }}></div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto' }}>
              Across every service we provide, Catalyst is committed to delivering:
            </p>
          </ScrollReveal>

          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: 'var(--spacing-md)' }}>
            {[
              'Proven International Experience',
              'Expertise in industrial & remote catering',
              'Integrated Catering + Facility Management Solutions',
              'Strong digital and technology-driven operations',
              'Focus on cost optimization and efficiency',
              'Highly trained workforce',
              'Commitment to sustainability and ESG',
              'HACCP-based food safety systems',
              'Large-scale Central Kitchen capabilities',
              'Customized menus for diverse nationalities',
              'Reliable logistics and on-time meal delivery',
              'Cost-effective and scalable solutions',
              'A customer-focused approach with continuous improvement',
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} direction="up">
                <div className="hover-card hover-card-border" style={{
                  padding: 'var(--spacing-lg) var(--spacing-xl)',
                  backgroundColor: 'var(--color-bg)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                }}>
                  <CheckCircle2 style={{ color: 'var(--color-accent)', flexShrink: 0 }} size={20} />
                  <span style={{ color: 'var(--color-primary-dark)', fontWeight: 500, fontSize: '1rem', lineHeight: 1.5 }}>{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-bg-alt">
        <div className="container text-center">
          <ScrollReveal direction="up">
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>Experience the Difference</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: 'var(--spacing-xl)' }}>Partner with us and elevate your corporate environment to new heights of luxury and efficiency.</p>
            <Link to="/contact-us" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Contact Our Team</Link>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}

export default WhyChooseUs;
