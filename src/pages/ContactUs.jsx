import React, { useState } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { MapPin } from 'lucide-react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', subject: '-- Please choose an option --', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.subject === '-- Please choose an option --') {
      setError("Please select a valid subject.");
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    setSubmitMessage('');

    try {
      const apiBase = import.meta.env.DEV ? 'http://localhost:8000/api' : '/api';
      const res = await fetch(`${apiBase}/contact.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send message.');

      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', phone: '', company: '', subject: '-- Please choose an option --', message: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section" style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <img src="/contact_hero.png" alt="Contact Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <h1 className="hero-title" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
            Contact <span style={{ color: 'var(--color-accent)' }}>Us</span>
          </h1>
          <h3 style={{ color: '#E8E2D2', fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', fontWeight: 300, lineHeight: 1.6 }}>
            How can we help you?
          </h3>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section">
        <ScrollReveal direction="up" className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>Partner with the <span style={{ color: 'var(--color-accent)' }}>Best</span>, Today!</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
              We look forward to hearing from you to better understand how we can partner with you to drive your business growth and success.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel contact-form" style={{ padding: 'var(--spacing-3xl)', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            {submitMessage && (
              <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', color: '#166534', borderRadius: '8px', textAlign: 'center', fontWeight: 600 }}>
                {submitMessage}
              </div>
            )}
            
            {error && (
              <div style={{ padding: '1rem', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '8px', textAlign: 'center' }}>
                {error}
              </div>
            )}

            <div className="flex gap-lg">
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Name*</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }} />
              </div>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Email*</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Business Email" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }} />
              </div>
            </div>

            <div className="flex gap-lg">
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Phone*</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }} />
              </div>
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Company</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Business Name" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Subject*</label>
              <select name="subject" value={formData.subject} onChange={handleChange} required style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}>
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
              <label style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Message*</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="Enter your message" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)', resize: 'vertical' }}></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ alignSelf: 'center', marginTop: 'var(--spacing-md)', padding: '1rem 3rem', opacity: isSubmitting ? 0.7 : 1 }}>
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </ScrollReveal>
      </section>

      {/* OFFICES SECTION */}
      <section className="section section-bg-alt">
        <div className="container">
          <ScrollReveal direction="up" className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)', color: 'var(--color-primary-dark)' }}>Our <i style={{ color: 'var(--color-accent)', fontWeight: 400 }}>Offices</i></h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
          </ScrollReveal>

          <div className="grid-3" style={{ gap: 'var(--spacing-xl)' }}>

            <ScrollReveal delay={0.3} direction="up" className="hover-card" style={{ padding: 'var(--spacing-2xl)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin style={{ color: 'var(--color-primary)' }} size={20} /> Middle East
              </h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: 'var(--spacing-lg)', lineHeight: 1.6 }}>
                Catalyst Catering Services LLC (CCS)<br /><br />
                Darwish Compound, Warehouse No.4,<br />
                Building No: 3, DIP–2,<br />
                Dubai<br />
              </p>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-md)' }}>

                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email: info@catalystgroupme.com</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} direction="up" className="hover-card" style={{ padding: 'var(--spacing-2xl)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin style={{ color: 'var(--color-primary)' }} size={20} /> India Office
              </h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: 'var(--spacing-lg)', lineHeight: 1.6 }}>
                Catalyst Service Solutions Partners Private Limited<br /><br />
                401/402, Yash Tower, Opp. D.A.V Public School, Aundh, Pune – 411007
              </p>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-md)' }}>

                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email: sales@catalystsolutions.eco</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up" className="hover-card" style={{ padding: 'var(--spacing-2xl)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin style={{ color: 'var(--color-primary)' }} size={20} /> Singapore Office
              </h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: 'var(--spacing-lg)', lineHeight: 1.6 }}>
                Comprehensive Support Services Pte. Ltd<br /><br />
                12 Woodlands Square, #02-75, Woods Square Tower 1, Singapore – 737715
              </p>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-md)' }}>

                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email: sales@catalystsolutions.eco</div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </main>
  );
}

export default ContactUs;
