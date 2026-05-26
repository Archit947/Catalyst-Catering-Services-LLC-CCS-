import React from 'react';

function AboutUs() {
  return (
    <main>
      {/* HERO SECTION */}
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '80px', backgroundColor: 'var(--color-primary-dark)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <img src="/about_hero.png" alt="About Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <h1 style={{ fontSize: '4.5rem', marginBottom: 'var(--spacing-md)', color: 'white', textShadow: '0 4px 12px rgba(0,0,0,0.4)', lineHeight: 1.1 }}>
            About <span style={{color: 'var(--color-accent)'}}>Us</span>
          </h1>
          <h3 style={{ color: '#E8E2D2', fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', fontWeight: 300, lineHeight: 1.6 }}>
            Advancing towards a <i style={{color: 'var(--color-accent)'}}>Promising</i> future by evaluating our actions and <i style={{color: 'var(--color-accent)'}}>Careful</i> planning
          </h3>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: 'var(--spacing-lg)' }}>
            <strong>Catalyst Catering Services LLC (CCS)</strong> is a leading provider of integrated catering and facility management solutions in the UAE, backed by a strong global legacy and proven expertise across diverse industries. Catalyst is part of Comprehensive Support Services Pvt. Ltd. (CSS Group), a well-established international organization with a strong presence across the Middle East, Asia, and Africa.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: 1.8 }}>
            As part of this global network, Catalyst delivers end-to-end food service and support solutions, combining operational excellence, advanced technology, and deep industry knowledge. With extensive experience in managing large-scale industrial catering, corporate dining, and remote site operations, we are committed to enhancing the quality of life for our clients through safe, nutritious, and high-quality services.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section section-bg-alt">
        <div className="container flex gap-2xl">
          <div className="hover-card hover-card-border" style={{ flex: '1', padding: 'var(--spacing-3xl)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-xl)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary-dark)' }}>Our <span style={{color: 'var(--color-accent)'}}>Vision</span></h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
              To be the most trusted and preferred partner in the UAE for catering and integrated facility management services, delivering innovative, sustainable, and high-quality solutions that enhance client experience and quality of life.
            </p>
          </div>
          <div className="hover-card hover-card-border" style={{ flex: '1', padding: 'var(--spacing-3xl)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-xl)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary-dark)' }}>Our <span style={{color: 'var(--color-accent)'}}>Mission</span></h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
              To deliver high-quality catering and integrated facility management services through operational excellence, digital innovation, and sustainable practices, while building long-term, trusted partnerships with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>Leadership <i style={{color: 'var(--color-accent)', fontWeight: 400}}>Team</i></h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
          </div>
          
          <div className="flex justify-center gap-xl">
            {/* Ramkrishna */}
            <div className="hover-card" style={{ flex: '1', maxWidth: '350px', textAlign: 'center' }}>
              <div style={{ width: '250px', height: '250px', margin: '0 auto var(--spacing-lg)', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--color-accent)', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', fontSize: '4rem' }}>R</div>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>Ramkrishna Mankari</h3>
              <p style={{ color: 'var(--color-text-muted)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Chairman & Managing Director</p>
            </div>

            {/* Sekhar */}
            <div className="hover-card" style={{ flex: '1', maxWidth: '350px', textAlign: 'center' }}>
              <div style={{ width: '250px', height: '250px', margin: '0 auto var(--spacing-lg)', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--color-accent)', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', fontSize: '4rem' }}>S</div>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>Sekhar Seshan</h3>
              <p style={{ color: 'var(--color-text-muted)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Strategy Advisor & Mentor</p>
            </div>

            {/* Dinesh */}
            <div className="hover-card" style={{ flex: '1', maxWidth: '350px', textAlign: 'center' }}>
              <div style={{ width: '250px', height: '250px', margin: '0 auto var(--spacing-lg)', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--color-accent)', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', fontSize: '4rem' }}>D</div>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>Dinesh Lamsal</h3>
              <p style={{ color: 'var(--color-text-muted)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICES SECTION */}
      <section className="section section-bg-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary-dark)' }}>Our <i style={{color: 'var(--color-accent)', fontWeight: 400}}>Offices</i></h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-xl)' }}>
            <div className="hover-card" style={{ padding: 'var(--spacing-2xl)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--color-primary)' }}>📍</span> Corporate Office
              </h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: 'var(--spacing-lg)', lineHeight: 1.6 }}>
                Catalyst Service Solutions Partners Private Limited<br/><br/>
                401/402, Yash Tower, Opp. D.A.V Public School, Aundh, Pune – 411007
              </p>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-md)' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>Phone: +91 20 4850 4000</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email: sales@catalystsolutions.eco</div>
              </div>
            </div>

            <div className="hover-card" style={{ padding: 'var(--spacing-2xl)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--color-primary)' }}>📍</span> Singapore Office
              </h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: 'var(--spacing-lg)', lineHeight: 1.6 }}>
                Comprehensive Support Services Pte. Ltd<br/><br/>
                12 Woodlands Square, #02-75, Woods Square Tower 1, Singapore – 737715
              </p>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-md)' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>Phone: +91 84118 85600</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email: sales@catalystsolutions.eco</div>
              </div>
            </div>

            <div className="hover-card" style={{ padding: 'var(--spacing-2xl)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--color-primary)' }}>📍</span> Middle East
              </h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: 'var(--spacing-lg)', lineHeight: 1.6 }}>
                DIP -2,<br/>
                Dubai, UAE
              </p>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-md)' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>Phone: +91 84118 85600</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email: info@catalystgroupme.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default AboutUs;
