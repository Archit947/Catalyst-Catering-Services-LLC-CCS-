import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { VerticalImageStack } from '../components/ui/vertical-image-stack';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { useInView } from 'framer-motion';

function AnimatedCounter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const duration = 2000;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // easeOutQuart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

import serviceImage2 from '../assets/2.png';
import serviceImage3 from '../assets/3.png';
import serviceImage4 from '../assets/4.png';

function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section" style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '90px',
      }}>
        {/* Background image */}
        <img
          src="/7.png"
          alt="Catalyst catering hero"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            zIndex: 0,
          }}
        />
        {/* Dark overlay for readability */}
        <div className="hero-overlay" />

        {/* Hero content — left-aligned */}
        <div className="hero-text-container">
          <ScrollReveal direction="up" duration={0.8}>
            <div style={{ maxWidth: '800px' }}>
              <div style={{
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                border: '1px solid rgba(255,255,255,0.6)',
                borderRadius: 'var(--radius-full)',
                color: 'rgba(255,255,255,0.9)',
                letterSpacing: '2px',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                marginBottom: 'var(--spacing-lg)',
                backdropFilter: 'blur(4px)',
                backgroundColor: 'rgba(255,255,255,0.1)',
              }}>
                Integrated Solutions
              </div>
              <h1 className="hero-title">
                Elevate your business with{' '}
                <span style={{ color: 'var(--color-accent)', fontStyle: 'italic', display: 'inline-block' }}>world-class</span>{' '}services.
              </h1>
              <p className="hero-subtitle">
                We deliver comprehensive food and facility management solutions across the UAE, driven by a deep commitment to excellence and sustainability.
              </p>
              <div className="flex gap-md">
                <Link to="/services" className="btn btn-primary hero-cta" style={{ padding: '1rem 3rem', fontSize: '1.1rem', marginBottom: '10px' }}>Explore Services</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* EXCELLENCE SECTION */}
      <section className="section section-bg-alt">
        <div className="container flex gap-xl section-responsive" style={{ alignItems: 'center' }}>
          <ScrollReveal direction="right" style={{ flex: '1', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-20px', border: '1px solid var(--color-accent)', borderRadius: 'var(--radius-xl)', zIndex: 0, transform: 'translate(20px, 20px)' }}></div>
            <img src="/salad_plating.png" alt="Healthy Salad" className="hover-card" style={{ width: '100%', height: 'auto', maxHeight: '550px', objectFit: 'cover', borderRadius: 'var(--radius-xl)', position: 'relative', zIndex: 1 }} />
            <div className="glass-panel" style={{ position: 'absolute', bottom: '40px', right: '-40px', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', zIndex: 2 }}>
              <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)' }}>100%</div>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)', fontWeight: 600 }}>Sustainable<br />Practices</div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" style={{ flex: '1', paddingLeft: 'var(--spacing-2xl)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-xl)' }}>
              Delivering <span style={{ color: 'var(--color-accent)' }}>Excellence</span> in Food Service
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-lg)', fontSize: '1.1rem' }}>
              Welcome to Catalyst. We represent the evolution of premium culinary support, blending our steadfast commitment to corporate responsibility with a renewed focus on driving positive change in the industry.
            </p>
            <ul className="flex flex-col gap-md" style={{ color: 'var(--color-primary-dark)', fontWeight: 500, marginTop: 'var(--spacing-xl)' }}>
              <li className="flex items-center gap-md">
                <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}>✧</span> Decades of extensive luxury client experience
              </li>
              <li className="flex items-center gap-md">
                <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}>✧</span> Embracing cutting-edge culinary technology
              </li>
              <li className="flex items-center gap-md">
                <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}>✧</span> Empowering a dedicated, world-class workforce
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section id="expertise" className="section">
        <div className="container">
          <ScrollReveal direction="up" className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>Our Expertise</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>Tailored culinary solutions across key sectors, maintaining the highest standards of luxury, quality, and hygiene.</p>
          </ScrollReveal>

          <div className="expertise-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-lg)' }}>

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

      <ScrollReveal direction="up" duration={0.8}>
        <section style={{ background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))', color: 'white', padding: 'var(--spacing-4xl) 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)' }}></div>

          <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ color: 'white', marginBottom: 'var(--spacing-sm)', fontSize: '2.5rem' }}>World-Class Domain Expertise</h2>
            <p style={{ color: '#E8E2D2', marginBottom: 'var(--spacing-3xl)', fontSize: '1.1rem' }}>Constantly adapting to elite market needs and innovating luxury solutions.</p>

            <div className="flex justify-between stats-row" style={{ maxWidth: '1200px', margin: '0 auto' }}>
              {[
                { num: 4150, suffix: 'M', label: 'REVENUE' },
                { num: 2, suffix: 'Lakh +', label: 'MEALS SERVED PER DAY' },
                { num: 100, suffix: '+', label: 'GLOBAL SITES' },
                { num: 5, suffix: 'K+', label: 'EMPLOYEES' },
                { num: 75, suffix: 'M+ sq.ft', label: 'Operational' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', lineHeight: 1.2 }}>
                    <AnimatedCounter end={stat.num} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', color: '#E8E2D2' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* VALUES SECTION */}
      <section className="section section-bg-alt">
        <div className="container flex gap-2xl section-responsive" style={{ columnGap: 'var(--spacing-3xl)' }}>
          <ScrollReveal direction="right" style={{ flex: '1' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-lg)' }}>Core <i style={{ color: 'var(--color-accent)', fontWeight: 400 }}>Values</i></h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-2xl)', fontSize: '1.1rem' }}>
              At Catalyst, we prioritize sustainability and luxury by implementing environmentally friendly solutions while creating immense value for all stakeholders.
            </p>

            <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>
              {[
                { icon: '🌿', title: 'Environment', desc: 'Positive action through environmental protection.' },
                { icon: '⚖️', title: 'Integrity', desc: 'Absolute transparency in all business practices.' },
                { icon: '🤝', title: 'Loyalty', desc: 'Unwavering dedication to our clients.' },
                { icon: '🛡️', title: 'Safety', desc: 'Rigorous safety and hygiene protocols.' }
              ].map((val, idx) => (
                <div key={idx} className="hover-card" style={{ padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>{val.icon}</div>
                  <h4 style={{ marginBottom: 'var(--spacing-xs)', fontSize: '1.25rem' }}>{val.title}</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{val.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" className="min-h-600" style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <VerticalImageStack />
          </ScrollReveal>
        </div>
      </section>

      {/* STATS BANNER */}


    </main>
  );
}

export default Home;
