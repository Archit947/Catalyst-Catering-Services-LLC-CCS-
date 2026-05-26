import React from 'react';

function ContactUs() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section" style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <img src="/contact_hero.png" alt="Contact Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <h1 style={{ fontSize: '4.5rem', marginBottom: 'var(--spacing-md)', color: 'white', textShadow: '0 4px 12px rgba(0,0,0,0.4)', lineHeight: 1.1 }}>
            Contact <span style={{color: 'var(--color-accent)'}}>Us</span>
          </h1>
          <h3 style={{ color: '#E8E2D2', fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', fontWeight: 300, lineHeight: 1.6 }}>
            How can we help you?
          </h3>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>Partner with the <span style={{color: 'var(--color-accent)'}}>Best</span>, Today!</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
              We look forward to hearing from you to better understand how we can partner with you to drive your business growth and success.
            </p>
          </div>
            
          <form className="glass-panel contact-form" style={{ padding: 'var(--spacing-3xl)', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            <div className="flex gap-lg">
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Name*</label>
                <input type="text" placeholder="Your Name" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }} />
              </div>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Email*</label>
                <input type="email" placeholder="Business Email" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }} />
              </div>
            </div>
            
            <div className="flex gap-lg">
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Phone*</label>
                <input type="tel" placeholder="Phone Number" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }} />
              </div>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Company</label>
                <input type="text" placeholder="Business Name" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Subject*</label>
              <select style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}>
                <option>-- Please choose an option --</option>
                <option>Food Services</option>
                <option>Facilities Management</option>
                <option>Sustainability Solutions</option>
                <option>Partnerships</option>
                <option>Careers</option>
                <option>Others</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Message</label>
              <textarea rows="4" placeholder="Enter your message" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)', resize: 'vertical' }}></textarea>
            </div>

            <button type="button" className="btn btn-primary" style={{ alignSelf: 'center', marginTop: 'var(--spacing-md)', padding: '1rem 3rem' }}>Submit Request</button>
          </form>
        </div>
      </section>

      {/* OFFICES SECTION */}
      <section className="section section-bg-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary-dark)' }}>Our <i style={{color: 'var(--color-accent)', fontWeight: 400}}>Offices</i></h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
          </div>
          
          <div className="grid-3" style={{ gap: 'var(--spacing-xl)' }}>
            <div className="hover-card" style={{ padding: 'var(--spacing-2xl)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--color-primary)' }}>📍</span> India Office
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
                Catalyst Catering Services LLC (CCS)<br/><br/>
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

export default ContactUs;
