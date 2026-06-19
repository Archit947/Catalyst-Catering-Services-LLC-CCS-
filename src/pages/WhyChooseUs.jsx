import React, { useEffect } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Link } from 'react-router-dom';

function WhyChooseUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section" style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px', width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1, width: '100%', height: '100%' }}>
          <img src="/7.png" alt="Why Choose Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4))' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', width: '100%' }}>
          <ScrollReveal direction="up">
            <h1 style={{ fontSize: '4.5rem', marginBottom: 'var(--spacing-md)', color: 'white', textShadow: '0 4px 12px rgba(0,0,0,0.5)', lineHeight: 1.1 }}>
              Why Choose <span style={{color: 'var(--color-accent)'}}>Catalyst?</span>
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
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-lg)' }}>The Catalyst <span style={{ color: 'var(--color-accent)' }}>Advantage</span></h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
              We don't just provide a service; we form a strategic partnership aimed at enhancing your organization's environment. Our comprehensive approach blends extensive luxury client experience with cutting-edge culinary technology to deliver solutions that are both exceptional and sustainable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PILLARS OF EXCELLENCE */}
      <section className="section">
        <div className="container">
          <ScrollReveal direction="up" className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>Our Pillars of <i style={{ color: 'var(--color-accent)', fontWeight: 400 }}>Excellence</i></h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
          </ScrollReveal>

          <div className="grid-3" style={{ gap: 'var(--spacing-xl)' }}>
            {[
              { title: 'Unmatched Culinary Expertise', icon: '🍽️', desc: 'Our team comprises award-winning chefs and culinary experts who bring a world of flavor and innovation to every meal we serve.' },
              { title: 'Rigorous Quality Control', icon: '✅', desc: 'We maintain the highest standards of hygiene and safety, ensuring every dish meets strict international certifications.' },
              { title: 'Sustainable Operations', icon: '🌱', desc: 'From local sourcing to waste reduction programs, our operations are designed to minimize environmental impact.' },
              { title: 'Tailored Solutions', icon: '🎯', desc: 'We understand that every client is unique. We build bespoke service models designed to fit your specific operational needs.' },
              { title: 'Advanced Technology', icon: '💻', desc: 'We utilize state-of-the-art kitchen equipment and digital management systems for seamless, efficient service delivery.' },
              { title: 'Dedicated Workforce', icon: '🤝', desc: 'Our extensively trained staff are passionate about hospitality, delivering service with a smile and consummate professionalism.' }
            ].map((pillar, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
                <div className="hover-card" style={{ padding: 'var(--spacing-2xl)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', height: '100%' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>{pillar.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-primary-dark)' }}>{pillar.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{pillar.desc}</p>
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
