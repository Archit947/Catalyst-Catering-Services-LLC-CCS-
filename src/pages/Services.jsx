import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import serviceImage2 from '../assets/2.png';
import serviceImage3 from '../assets/3.png';
import serviceImage4 from '../assets/4.png';

function Services() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section" style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1, width: '100%', height: '100%' }}>
          <img src="/services_hero.png" alt="Our Food Services" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.45)' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', width: '100%' }}>
            <h1 className="hero-title" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
              Our <span style={{color: 'var(--color-accent)'}}>Food</span> Services
            </h1>
          <h3 style={{ color: '#E8E2D2', fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', fontWeight: 300, lineHeight: 1.6 }}>
            <i style={{color: 'var(--color-accent)'}}>Elevate</i> your palate with <i style={{color: 'var(--color-accent)'}}>Unforgettable</i> flavors and impeccable service
          </h3>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section section-bg-alt">
        <div className="container flex gap-2xl section-responsive" style={{ columnGap: 'var(--spacing-3xl)' }}>
          <ScrollReveal direction="right" style={{ flex: '1', position: 'relative' }}>
             <img src="/salad_plating.png" alt="Our Approach" style={{ borderRadius: 'var(--radius-xl)', width: '100%', border: '1px solid var(--color-accent)' }} />
          </ScrollReveal>
          <ScrollReveal direction="left" style={{ flex: '1' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-xl)' }}>Our <span style={{color: 'var(--color-accent)'}}>Approach</span></h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: 'var(--spacing-lg)' }}>
              We deliver comprehensive, world-class food service solutions across the UAE, driven by a deep commitment to culinary excellence and sustainability. 
              Our focus is on creating tailored, luxurious dining experiences that exceed expectations in quality, taste, and presentation.
            </p>
            <ul className="flex flex-col gap-md" style={{ color: 'var(--color-primary-dark)', fontWeight: 500 }}>
              <li className="flex items-center gap-md">
                <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}>✧</span> Sustainable & Locally Sourced Ingredients
              </li>
              <li className="flex items-center gap-md">
                <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}>✧</span> Stringent Health & Hygiene Standards
              </li>
              <li className="flex items-center gap-md">
                <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}>✧</span> Customized Culinary Solutions
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES WE OFFER */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>Services We <i style={{color: 'var(--color-accent)', fontWeight: 400}}>Offer</i></h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
          </div>
          
          <div className="grid-3" style={{ gap: 'var(--spacing-lg)' }}>
            
            <ScrollReveal delay={0.1} direction="up">
              <Link to="/services/cafeteria-food-court" className="hover-card hover-card-border" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px', display: 'block' }}>
                <img src="/food_court.png" alt="Cafeteria & Food Court" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--spacing-xl)' }}>
                  <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Cafeteria & Food Court</h3>
                  <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 'var(--spacing-sm)' }}>Vibrant, diverse, and high-quality food experiences for corporate spaces.</p>
                  <div><span className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem', display: 'inline-block' }}>Read more</span></div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up">
              <Link to="/services/industrial-canteen" className="hover-card hover-card-border" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px', display: 'block' }}>
                <img src={serviceImage3} alt="Industrial Canteen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--spacing-xl)' }}>
                  <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Industrial Canteen</h3>
                  <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 'var(--spacing-sm)' }}>Nutritious, large-scale catering designed for workforce energy and well-being.</p>
                  <div><span className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem', display: 'inline-block' }}>Read more</span></div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="up">
              <Link to="/services/school-cafeteria" className="hover-card hover-card-border" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px', display: 'block' }}>
                <img src={serviceImage2} alt="School Cafeteria" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--spacing-xl)' }}>
                  <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>School Cafeteria</h3>
                  <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 'var(--spacing-sm)' }}>Wholesome, balanced, and appealing meals to foster healthy eating habits.</p>
                  <div><span className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem', display: 'inline-block' }}>Read more</span></div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.4} direction="up">
              <Link to="/services/inhouse-patient-dining" className="hover-card hover-card-border" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px', display: 'block' }}>
                <img src="/clinical_nutrition.png" alt="Inhouse Patient Dining" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--spacing-xl)' }}>
                  <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Inhouse Patient Dining</h3>
                  <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 'var(--spacing-sm)' }}>Specialized diet care focused meticulously on patient recovery.</p>
                  <div><span className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem', display: 'inline-block' }}>Read more</span></div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.5} direction="up">
              <Link to="/services/events-conferences" className="hover-card hover-card-border" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px', display: 'block' }}>
                <img src="/events_catering.png" alt="Events and Conferences" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--spacing-xl)' }}>
                  <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Events & Conferences</h3>
                  <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 'var(--spacing-sm)' }}>Elegant, premium catering solutions that leave a lasting impression.</p>
                  <div><span className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem', display: 'inline-block' }}>Read more</span></div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.6} direction="up">
              <Link to="/services/guest-house-management" className="hover-card hover-card-border" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px', display: 'block' }}>
                <img src={serviceImage4} alt="Guest house Management" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--spacing-xl)' }}>
                  <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Guest House Management</h3>
                  <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 'var(--spacing-sm)' }}>Luxurious hospitality and dining services for corporate lodging.</p>
                  <div><span className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem', display: 'inline-block' }}>Read more</span></div>
                </div>
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Services;
