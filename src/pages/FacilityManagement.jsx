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
          <h1 style={{ fontSize: '4.5rem', marginBottom: 'var(--spacing-md)', color: 'white', textShadow: '0 4px 12px rgba(0,0,0,0.4)', lineHeight: 1.1 }}>
            Facility <span style={{color: 'var(--color-accent)'}}>Management</span>
          </h1>
          <h3 style={{ color: '#E8E2D2', fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', fontWeight: 300, lineHeight: 1.6 }}>
            Optimize your workspace with green facility management services—proactive, tech-enabled, and Net-Zero focused solutions tailored for corporates.
          </h3>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary-dark)' }}>Integrated <span style={{color: 'var(--color-accent)'}}>Solutions</span></h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.8 }}>
            At Catalyst, we understand that a well-managed facility is crucial to the success of your business. Our comprehensive Facility Management solutions are designed to ensure your operations run smoothly, efficiently, and sustainably. From hard services like HVAC maintenance to soft services like housekeeping and landscaping, we deliver excellence at every level.
          </p>
        </div>
      </section>

      {/* SERVICES WE OFFER SECTION */}
      <section className="section" style={{ padding: '5rem 0', backgroundColor: '#FAFAEE' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--color-primary-dark)', fontFamily: 'serif' }}>
            Services We <span style={{ fontStyle: 'italic', color: '#B5963E', fontWeight: 'normal' }}>Offer</span>
          </h2>
          <div style={{ width: '80px', height: '3px', backgroundColor: '#B5963E', margin: '0 auto 4rem auto' }}></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Card 1 */}
            <div style={{ position: 'relative', height: '420px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <img src="/soft_service.png" alt="Soft Service Solutions" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem 2rem', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.75) 50%, transparent 100%)', textAlign: 'left', color: 'white' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem', fontFamily: 'serif', fontWeight: '600', color: '#fff' }}>Soft Service Solutions</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.5', opacity: 0.95 }}>
                  Professional housekeeping, landscaping, and waste management for a pristine environment.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ position: 'relative', height: '420px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <img src="/business_support.png" alt="Business Support Service Solutions" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem 2rem', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.75) 50%, transparent 100%)', textAlign: 'left', color: 'white' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem', fontFamily: 'serif', fontWeight: '600', color: '#fff' }}>Business Support</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.5', opacity: 0.95 }}>
                  Comprehensive administrative and support services tailored to your corporate needs.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ position: 'relative', height: '420px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <img src="/technical_service.png" alt="Technical & Technology Services Solutions" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem 2rem', background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.75) 50%, transparent 100%)', textAlign: 'left', color: 'white' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem', fontFamily: 'serif', fontWeight: '600', color: '#fff' }}>Technical Services</h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.5', opacity: 0.95 }}>
                  Preventive maintenance, HVAC, and energy management for peak infrastructure performance.
                </p>
              </div>
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
