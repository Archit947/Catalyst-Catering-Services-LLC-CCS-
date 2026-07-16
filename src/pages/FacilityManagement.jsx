import React from 'react';
import { Link } from 'react-router-dom';

function FacilityManagement() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section" style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <img src="/facility_hero.png" alt="Facility Management" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <h1 className="hero-title" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
            Facility <span style={{ color: 'var(--color-accent)' }}>Management</span>
          </h1>
          <h3 style={{ color: '#E8E2D2', fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', fontWeight: 300, lineHeight: 1.6 }}>
            Optimize your workspace with green facility management services—proactive, tech-enabled, and Net-Zero focused solutions tailored for corporates.
          </h3>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary-dark)' }}>Integrated <span style={{ color: 'var(--color-accent)' }}>Solutions</span></h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.8 }}>
            At Catalyst, we understand that a well-managed facility is crucial to the success of your business. Our comprehensive Facility Management solutions are designed to ensure your operations run smoothly, efficiently, and sustainably. From hard services like HVAC maintenance to soft services like housekeeping and landscaping, we deliver excellence at every level.
          </p>
        </div>
      </section>

      {/* SERVICES WE OFFER SECTION */}
      <section className="section" style={{ padding: '5rem 0', backgroundColor: '#FAFAEE' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--color-primary-dark)', fontFamily: 'var(--font-serif)' }}>
            Services We <span style={{ fontStyle: 'italic', color: '#B5963E', fontWeight: 'normal' }}>Offer</span>
          </h2>
          <div style={{ width: '80px', height: '3px', backgroundColor: '#B5963E', margin: '0 auto 4rem auto' }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Card 1 */}
            <div style={{ position: 'relative', height: '420px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <img src="/soft_service.png" alt="Soft Service Solutions" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem 2rem', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.75) 50%, transparent 100%)', textAlign: 'left', color: 'white' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)', fontWeight: '400', color: '#fff' }}>Soft Service Solutions</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.5', opacity: 0.95 }}>
                  Professional housekeeping, landscaping, and waste management for a pristine environment.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ position: 'relative', height: '420px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <img src="/business_support.png" alt="Business Support Service Solutions" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem 2rem', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.75) 50%, transparent 100%)', textAlign: 'left', color: 'white' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)', fontWeight: '400', color: '#fff' }}>Business Support</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.5', opacity: 0.95 }}>
                  Comprehensive administrative and support services tailored to your corporate needs.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ position: 'relative', height: '420px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <img src="/technical_service.png" alt="Technical & Technology Services Solutions" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem 2rem', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.75) 50%, transparent 100%)', textAlign: 'left', color: 'white' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)', fontWeight: '400', color: '#fff' }}>Technical Services</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.5', opacity: 0.95 }}>
                  Preventive maintenance, HVAC, and energy management for peak infrastructure performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DIGITAL PRODUCTS — FACILITY E-CHECKLIST */}
      <section className="section section-bg-alt" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,51,81,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Section header */}
          <div className="text-center" style={{ marginBottom: '1rem' }}>
            <span style={{ display: 'inline-block', padding: '0.35rem 1.1rem', borderRadius: '50px', background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.4)', color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Digital Products
            </span>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)', lineHeight: 1.2 }}>
              Powered by <span style={{ color: 'var(--color-accent)' }}>Facility E-Checklist</span>
            </h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto 1.5rem' }} />
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.8 }}>
              Move beyond paper-based facility management. Our E-Checklist platform ensures 100% compliance by requiring geo-tagged and time-stamped proof of maintenance activities, with instant escalation of non-compliance issues.
            </p>
          </div>

          {/* Feature chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', margin: '2.5rem 0 3.5rem' }}>
            {[
              { icon: '📍', label: 'Geo-Fenced Audits' },
              { icon: '📸', label: 'Mandatory Photo Proof' },
              { icon: '🚨', label: 'Instant Auto-Escalation' },
            ].map((chip, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.55rem 1.25rem', borderRadius: '50px', background: 'rgba(21,51,81,0.06)', border: '1px solid rgba(21,51,81,0.15)', color: 'var(--color-primary-dark)', fontSize: '0.9rem', fontWeight: 500 }}>
                <span>{chip.icon}</span> {chip.label}
              </span>
            ))}
          </div>

          {/* Feature cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem', marginBottom: '4rem' }}>

            {/* Card 1 — Geo-Fenced Audits */}
            <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: '20px', padding: '2rem', height: '100%', transition: 'transform 0.3s, box-shadow 0.3s', boxShadow: 'var(--shadow-sm)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(245,166,35,0.25), rgba(245,166,35,0.05))', border: '1px solid rgba(245,166,35,0.35)', fontSize: '1.5rem', marginBottom: '1.25rem' }}>📍</div>
              <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>Geo-Fenced Audits</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Checklists only activate when staff are physically present at the designated location. GPS verification eliminates ghost-reporting and ensures every task is completed exactly where and when it should be.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Location-locked checklist activation',
                  'Real-time GPS coordinates stamped on every entry',
                  'Zone-wise audit trail for full accountability',
                ].map((pt, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✦</span> {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 — Photo Proof */}
            <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: '20px', padding: '2rem', height: '100%', transition: 'transform 0.3s, box-shadow 0.3s', boxShadow: 'var(--shadow-sm)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(245,166,35,0.25), rgba(245,166,35,0.05))', border: '1px solid rgba(245,166,35,0.35)', fontSize: '1.5rem', marginBottom: '1.25rem' }}>📸</div>
              <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>Mandatory Photo Proof</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Critical maintenance steps require mandatory time-stamped photo uploads before the checklist can be marked complete. Visual evidence creates an irrefutable audit log that protects both staff and management.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Time-stamped photo capture for every critical step',
                  'Immutable media library for compliance audits',
                  'Before & after photo comparison for quality assurance',
                ].map((pt, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✦</span> {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 — Auto-Escalation */}
            <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: '20px', padding: '2rem', height: '100%', transition: 'transform 0.3s, box-shadow 0.3s', boxShadow: 'var(--shadow-sm)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(245,166,35,0.25), rgba(245,166,35,0.05))', border: '1px solid rgba(245,166,35,0.35)', fontSize: '1.5rem', marginBottom: '1.25rem' }}>🚨</div>
              <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>Auto-Escalation</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Failed or missed audit points trigger instant alerts to supervisors — no delays, no manual follow-up. The system ensures nothing falls through the cracks, driving 100% compliance across all facility zones.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Instant push notifications for failed checkpoints',
                  'Multi-level escalation hierarchy for critical issues',
                  'Automated daily compliance scorecard for management',
                ].map((pt, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✦</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Workflow — How it works */}
          <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: '20px', padding: '2.5rem 2rem', boxShadow: 'var(--shadow-sm)', marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.5rem' }}>
              How It <span style={{ color: 'var(--color-accent)' }}>Works</span>
            </h3>
            <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', fontSize: '0.9rem', marginBottom: '2.5rem' }}>From assignment to compliance report — fully automated</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
              {[
                { step: '01', title: 'Audit Assignment', desc: 'System auto-generates daily checklists for specific facility zones and assigns them to the responsible staff.' },
                { step: '02', title: 'Digital Execution', desc: 'Staff completes checklists on their mobile devices — geo-locked, with mandatory photo proof at each step.' },
                { step: '03', title: 'Compliance Report', desc: 'Management receives an automated daily scorecard with pass/fail rates, photos, and escalation summaries.' },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgba(245,166,35,0.35)', letterSpacing: '-2px', lineHeight: 1, marginBottom: '0.5rem' }}>{item.step}</div>
                  <h4 style={{ color: 'var(--color-primary-dark)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>Ready to transform your facility?</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-xl)' }}>Partner with us to achieve operational excellence and sustainability.</p>
          <Link to="/contact-us" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Get in Touch</Link>
        </div>
      </section>

    </main>
  );
}

export default FacilityManagement;
