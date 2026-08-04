import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { CheckCircle2, RefreshCw, Smartphone, Receipt, Calendar, Monitor, Package, Check } from 'lucide-react';
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
            Our <span style={{ color: 'var(--color-accent)' }}>Food</span> Services
          </h1>
          <h3 style={{ color: '#E8E2D2', fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', fontWeight: 300, lineHeight: 1.6 }}>
            <i style={{ color: 'var(--color-accent)' }}>Elevate</i> your palate with <i style={{ color: 'var(--color-accent)' }}>Unforgettable</i> flavors and impeccable service
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
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-xl)' }}>Our <span style={{ color: 'var(--color-accent)' }}>Approach</span></h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: 'var(--spacing-lg)' }}>
              We deliver comprehensive, world-class food service solutions across the UAE, driven by a deep commitment to culinary excellence and sustainability.
              Our focus is on creating tailored, luxurious dining experiences that exceed expectations in quality, taste, and presentation.
            </p>
            <ul className="flex flex-col gap-md" style={{ color: 'var(--color-primary-dark)', fontWeight: 500 }}>
              <li className="flex items-center gap-md">
                <CheckCircle2 style={{ color: 'var(--color-accent)', flexShrink: 0 }} size={20} /> Sustainable &amp; Locally Sourced Ingredients
              </li>
              <li className="flex items-center gap-md">
                <CheckCircle2 style={{ color: 'var(--color-accent)', flexShrink: 0 }} size={20} /> Stringent Health &amp; Hygiene Standards
              </li>
              <li className="flex items-center gap-md">
                <CheckCircle2 style={{ color: 'var(--color-accent)', flexShrink: 0 }} size={20} /> Customized Culinary Solutions
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES WE OFFER */}
      <section className="section">
        <style>{`
          .expertise-card { position: relative; border-radius: var(--radius-lg); overflow: hidden; height: 400px; display: block; }
          .expertise-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
          .expertise-card:hover img { transform: scale(1.06); }
          .expertise-card .card-overlay {
            position: absolute; inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 55%, transparent 100%);
            display: flex; flex-direction: column; justify-content: flex-end;
            padding: var(--spacing-xl);
            transition: background 0.4s ease;
          }
          .expertise-card:hover .card-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%);
          }
          .expertise-card .card-title { color: white; font-size: 1.75rem; margin-bottom: 0; transition: margin-bottom 0.35s ease; }
          .expertise-card:hover .card-title { margin-bottom: 0.6rem; }
          .expertise-card .card-details {
            overflow: hidden;
            max-height: 0;
            opacity: 0;
            transform: translateY(12px);
            transition: max-height 0.4s ease, opacity 0.35s ease, transform 0.35s ease;
          }
          .expertise-card:hover .card-details {
            max-height: 120px;
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>Services We <i style={{ color: 'var(--color-accent)', fontWeight: 400 }}>Offer</i></h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
          </div>

          <div className="grid-3" style={{ gap: 'var(--spacing-lg)' }}>

            <ScrollReveal delay={0.1} direction="up">
              <Link to="/services/cafeteria-food-court" className="expertise-card hover-card-border">
                <img src="/food_court.png" alt="Cafeteria & Food Court" />
                <div className="card-overlay">
                  <h3 className="card-title">Cafeteria &amp; Food Court</h3>
                  <div className="card-details">
                    <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 'var(--spacing-sm)' }}>Vibrant, diverse, and high-quality food experiences for corporate spaces.</p>
                    <div><span className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem', display: 'inline-block' }}>Read more</span></div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up">
              <Link to="/services/industrial-canteen" className="expertise-card hover-card-border">
                <img src="/industry.png" alt="Industrial Canteen" />
                <div className="card-overlay">
                  <h3 className="card-title">Industrial Canteen</h3>
                  <div className="card-details">
                    <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 'var(--spacing-sm)' }}>Nutritious, large-scale catering designed for workforce energy and well-being.</p>
                    <div><span className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem', display: 'inline-block' }}>Read more</span></div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="up">
              <Link to="/services/school-cafeteria" className="expertise-card hover-card-border">
                <img src="/education_food.png " alt="School Cafeteria" />
                <div className="card-overlay">
                  <h3 className="card-title">School Cafeteria</h3>
                  <div className="card-details">
                    <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 'var(--spacing-sm)' }}>Wholesome, balanced, and appealing meals to foster healthy eating habits.</p>
                    <div><span className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem', display: 'inline-block' }}>Read more</span></div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.4} direction="up">
              <Link to="/services/inhouse-patient-dining" className="expertise-card hover-card-border">
                <img src="/clinical_nutrition.png" alt="Inhouse Patient Dining" />
                <div className="card-overlay">
                  <h3 className="card-title">Inhouse Patient Dining</h3>
                  <div className="card-details">
                    <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 'var(--spacing-sm)' }}>Specialized diet care focused meticulously on patient recovery.</p>
                    <div><span className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem', display: 'inline-block' }}>Read more</span></div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.5} direction="up">
              <Link to="/services/events-conferences" className="expertise-card hover-card-border">
                <img src="/events.png" alt="Events and Conferences" />
                <div className="card-overlay">
                  <h3 className="card-title">Events &amp; Conferences</h3>
                  <div className="card-details">
                    <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 'var(--spacing-sm)' }}>Elegant, premium catering solutions that leave a lasting impression.</p>
                    <div><span className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem', display: 'inline-block' }}>Read more</span></div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.6} direction="up">
              <Link to="/services/guest-house-management" className="expertise-card hover-card-border">
                <img src={serviceImage4} alt="Guest House Management" />
                <div className="card-overlay">
                  <h3 className="card-title">Guest House Management</h3>
                  <div className="card-details">
                    <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 'var(--spacing-sm)' }}>Luxurious hospitality and dining services for corporate lodging.</p>
                    <div><span className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem', display: 'inline-block' }}>Read more</span></div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* DIGITAL PRODUCTS — JOI FOOD */}
      <section className="section section-bg-alt" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background decorative blobs */}
        <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,51,81,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Section header */}
          <ScrollReveal direction="up">
            <div className="text-center" style={{ marginBottom: '1rem' }}>
              <span style={{ display: 'inline-block', padding: '0.35rem 1.1rem', borderRadius: '50px', background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.4)', color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                Digital Products
              </span>
              <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)', lineHeight: 1.2 }}>
                Powered by <span style={{ color: 'var(--color-accent)' }}>JOI FOOD</span>
              </h2>
              <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto 1.5rem' }} />
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.8 }}>
                The ultimate operating system for modern food service and corporate cafeterias — unifying pre-meal bookings, omni-channel QSR operations, and precise inventory management into one seamless digital experience.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature chips */}
          <ScrollReveal direction="up" delay={0.1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', margin: '2.5rem 0 3.5rem' }}>
              {[
                { icon: RefreshCw, label: 'Zero-Waste & Pre-Booking' },
                { icon: Smartphone, label: 'Omni-Channel QSR' },
                { icon: Receipt, label: 'Precision KOT & Inventory' },
              ].map((chip, i) => {
                const IconComp = chip.icon;
                return (
                  <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.55rem 1.25rem', borderRadius: '50px', background: 'rgba(21,51,81,0.06)', border: '1px solid rgba(21,51,81,0.15)', color: 'var(--color-primary-dark)', fontSize: '0.9rem', fontWeight: 500 }}>
                    <IconComp size={16} style={{ color: 'var(--color-accent)' }} /> {chip.label}
                  </span>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Module cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem', marginBottom: '4rem' }}>

            {/* Module 1 — Pre-Meal Booking */}
            <ScrollReveal delay={0.1} direction="up">
              <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: '20px', padding: '2rem', height: '100%', transition: 'transform 0.3s, box-shadow 0.3s', boxShadow: 'var(--shadow-sm)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(245,166,35,0.25), rgba(245,166,35,0.05))', border: '1px solid rgba(245,166,35,0.35)', color: 'var(--color-accent)', marginBottom: '1.25rem' }}>
                  <Calendar size={26} />
                </div>
                <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>Pre-Meal Booking</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  Revolutionizes corporate dining by eliminating food waste and long queues. Employees pre-select their meals via a mobile app, giving cafeterias precise production data so every employee gets their meal without the wait.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Predict exact quantities based on pre-bookings',
                    'Quick-scan authentication for lightning-fast meal issuance',
                    'Seamless deduction from employee salary accounts',
                  ].map((pt, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                      <Check size={16} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Module 2 — QSR Platform */}
            <ScrollReveal delay={0.2} direction="up">
              <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: '20px', padding: '2rem', height: '100%', transition: 'transform 0.3s, box-shadow 0.3s', boxShadow: 'var(--shadow-sm)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(245,166,35,0.25), rgba(245,166,35,0.05))', border: '1px solid rgba(245,166,35,0.35)', color: 'var(--color-accent)', marginBottom: '1.25rem' }}>
                  <Monitor size={26} />
                </div>
                <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>QSR Platform</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  A complete operating system for Quick Service Restaurants. Unifies in-store kiosks, table-side QR ordering, and mobile app deliveries into a single powerful kitchen display system, maximizing throughput and customer satisfaction.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Unified order queue from App, Kiosk & POS',
                    'Auto-recommend add-ons based on customer preferences',
                    'Live heatmaps of kitchen performance and sales',
                  ].map((pt, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                      <Check size={16} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Module 3 — KOT & Pantry */}
            <ScrollReveal delay={0.3} direction="up">
              <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: '20px', padding: '2rem', height: '100%', transition: 'transform 0.3s, box-shadow 0.3s', boxShadow: 'var(--shadow-sm)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(245,166,35,0.25), rgba(245,166,35,0.05))', border: '1px solid rgba(245,166,35,0.35)', color: 'var(--color-accent)', marginBottom: '1.25rem' }}>
                  <Package size={26} />
                </div>
                <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>KOT &amp; Pantry</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  Designed for corporate pantries and large institution kitchens, this platform manages token issuance, inventory consumption, and staff billing with surgical precision — ensuring nothing slips through the cracks.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Bluetooth thermal printing for immediate order slips',
                    'Track raw material cost per token in real-time',
                    'Consolidated monthly billing for corporate clients',
                  ].map((pt, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                      <Check size={16} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Architecture of Performance workflow */}
          <ScrollReveal direction="up" delay={0.15}>
            <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: '20px', padding: '2.5rem 2rem', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.5rem' }}>
                The Architecture of <span style={{ color: 'var(--color-accent)' }}>Performance</span>
              </h3>
              <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', fontSize: '0.9rem', marginBottom: '2.5rem' }}>How every order flows — from first tap to final plate</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
                {[
                  { step: '01', title: 'Unified Ordering', desc: 'Customers order via pre-booking app, kiosk, or QR code — any channel, one system.' },
                  { step: '02', title: 'Smart Kitchen KDS', desc: 'Orders are routed instantly to a centralized kitchen display system for precise prep.' },
                  { step: '03', title: 'Express Fulfillment', desc: 'Lightning-fast pickup with QR/RFID authentication or seamless table service.' },
                ].map((item, i) => (
                  <div key={i} style={{ textAlign: 'center', padding: '1.5rem 1rem', position: 'relative' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'rgba(245,166,35,0.35)', letterSpacing: '-2px', lineHeight: 1, marginBottom: '0.5rem' }}>{item.step}</div>
                    <h4 style={{ color: 'var(--color-primary-dark)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                    {i < 2 && (
                      <div style={{ display: 'none', position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-accent)', fontSize: '1.5rem' }}>→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}


        </div>
      </section>

    </main>
  );
}

export default Services;
