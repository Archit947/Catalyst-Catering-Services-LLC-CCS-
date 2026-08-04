import React, { useState, useEffect } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Globe, TrendingUp, Utensils, HeartPulse, GraduationCap, Plane, MapPin, CheckCircle } from 'lucide-react';

/* ── Apply Modal ─────────────────────────────────────────── */
function ApplyModal({ jobTitle, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [error, setError] = useState('');

  const handleBackdrop = (ev) => { if (ev.target === ev.currentTarget) onClose(); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSubmitMessage('');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const apiBase = import.meta.env.DEV ? 'http://localhost:8000/api' : '/api';
      const res = await fetch(`${apiBase}/applications.php`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit application.');

      setSubmitMessage('Your application has been submitted successfully!');
      form.reset();
      setTimeout(onClose, 2500);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      onClick={handleBackdrop}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(4px)',
        padding: '1rem'
      }}
    >
      <div style={{
        background: '#fff', borderRadius: '16px', padding: '2rem',
        maxWidth: '500px', width: '100%', position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
        maxHeight: '90vh', overflowY: 'auto'
      }}>
        <button
          onClick={onClose}
          type="button"
          style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '0.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#999', transition: 'color 0.2s ease'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>

        <h2 style={{ color: '#153351', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 1.5rem' }}>
          Apply for {jobTitle || 'Opportunity'}
        </h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          
          {submitMessage && (
            <div style={{ padding: '0.8rem', backgroundColor: '#f0fdf4', color: '#166534', borderRadius: '8px', marginBottom: '1rem', textAlign: 'center', fontWeight: 600 }}>
              {submitMessage}
            </div>
          )}
          
          {error && (
            <div style={{ padding: '0.8rem', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '8px', marginBottom: '1rem', textAlign: 'center' }}>
              {error}
            </div>
          )}

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#153351', marginBottom: '0.4rem' }}>
              Full Name <span style={{ color: 'red' }}>*</span>
            </label>
            <input type="text" name="name" required style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#fafafa' }} placeholder="John Doe" />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#153351', marginBottom: '0.4rem' }}>
              Email Address <span style={{ color: 'red' }}>*</span>
            </label>
            <input type="email" name="email" required style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#fafafa' }} placeholder="john@example.com" />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#153351', marginBottom: '0.4rem' }}>
              Phone Number <span style={{ color: 'red' }}>*</span>
            </label>
            <input type="tel" name="phone" required style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#fafafa' }} placeholder="+971 50 123 4567" />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#153351', marginBottom: '0.4rem' }}>
              Designation Applying For <span style={{ color: 'red' }}>*</span>
            </label>
            <input type="text" name="designation" defaultValue={jobTitle || ''} required style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#fafafa' }} />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#153351', marginBottom: '0.4rem' }}>
              Upload CV (PDF, DOCX) <span style={{ color: 'red' }}>*</span>
            </label>
            <input type="file" name="attachment" accept=".pdf,.doc,.docx" required style={{ width: '100%', padding: '0.5rem', border: '1px dashed #ccc', borderRadius: '8px', backgroundColor: '#fafafa' }} />
          </div>

          <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', padding: '0.9rem', fontSize: '1.05rem', cursor: 'pointer', textAlign: 'center', opacity: isSubmitting ? 0.7 : 1 }}>
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
}

// Openings are now fetched from the database via PHP backend

const perks = [
  { icon: Globe, title: 'Global Exposure', desc: 'Work with an internationally recognized group with presence across the Middle East, Asia, and Africa.' },
  { icon: TrendingUp, title: 'Career Growth', desc: 'Structured career development paths with regular performance reviews and promotion opportunities.' },
  { icon: Utensils, title: 'World-Class Team', desc: 'Collaborate with seasoned professionals in culinary arts, facility management, and hospitality.' },
  { icon: HeartPulse, title: 'Health Benefits', desc: 'Comprehensive medical, dental, and wellness benefits for you and your family.' },
  { icon: GraduationCap, title: 'Training & Learning', desc: 'Access to professional development programs, culinary workshops, and certifications.' },
  { icon: Plane, title: 'Accommodation & Transport', desc: 'Provided for qualifying roles, ensuring comfort and ease of commute.' },
];

function Career() {
  const [applied, setApplied] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiBase = import.meta.env.DEV ? 'http://localhost:8000/api' : '/api';
        const res = await fetch(`${apiBase}/jobs.php`);
        if (!res.ok) throw new Error('Failed to fetch jobs');
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchJobs();
  }, []);

  const handleApplyClick = (jobTitle, jobId) => {
    setSelectedJob(jobTitle);
    setShowApplyModal(true);
    // Optional: mark as applied immediately or only on success, but for now we just open modal
    // setApplied(jobId);
  };

  return (
    <main>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '55vh', display: 'flex', alignItems: 'center', paddingTop: '100px', paddingBottom: '60px' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
            alt="Careers at Catalyst"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(8,51,31,0.85) 0%, rgba(8,51,31,0.5) 60%, transparent 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <ScrollReveal direction="up">
            <div style={{ maxWidth: '700px' }}>
              <div style={{
                display: 'inline-block', padding: '0.4rem 1.2rem',
                border: '1px solid rgba(255,255,255,0.5)', borderRadius: '50px',
                color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem', letterSpacing: '2px',
                textTransform: 'uppercase', marginBottom: '1.5rem',
                backdropFilter: 'blur(4px)', backgroundColor: 'rgba(255,255,255,0.1)',
              }}>
                Join Our Team
              </div>
              <h1 className="hero-title">
                Build Your Career with{' '}
                <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>Catalyst</span>
              </h1>
              <p style={{ color: '#E8E2D2', fontSize: '1.2rem', fontWeight: 300, lineHeight: 1.7, maxWidth: '550px' }}>
                Be part of a world-class team delivering excellence in food and facility management across the UAE and beyond.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* JOB OPENINGS */}
      <section className="section">
        <div className="container">
          <ScrollReveal direction="up" className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: 'var(--spacing-sm)' }}>
              Current <span style={{ color: 'var(--color-accent)' }}>Openings</span>
            </h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }} />
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
            {loading ? (
              <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>Loading opportunities...</p>
            ) : error ? (
              <p style={{ textAlign: 'center', color: '#e53e3e', fontSize: '1.1rem' }}>Error loading jobs: {error}</p>
            ) : jobs.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>There are currently no open positions. Please check back later.</p>
            ) : (
              jobs.map((job, i) => (
                <ScrollReveal key={job.id} direction="up" delay={i * 0.07}>
                  <div className="hover-card hover-card-border" style={{
                    padding: 'var(--spacing-2xl)',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-bg)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                    gap: '24px', flexWrap: 'wrap',
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                        <span style={{ padding: '3px 12px', borderRadius: '50px', backgroundColor: 'rgba(8,51,31,0.08)', color: 'var(--color-primary)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          {job.department}
                        </span>
                        <span style={{ padding: '3px 12px', borderRadius: '50px', backgroundColor: 'rgba(212,169,87,0.12)', color: 'var(--color-accent)', fontSize: '0.78rem', fontWeight: 700 }}>
                          {job.type}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '6px' }}>{job.title}</h3>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={16} style={{ color: 'var(--color-accent)' }} /> {job.location}
                      </p>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{job.description}</p>
                    </div>
                    <div style={{ flexShrink: 0 }}>
                      {applied === job.id ? (
                        <span style={{ padding: '0.6rem 1.4rem', borderRadius: '50px', backgroundColor: 'rgba(8,51,31,0.1)', color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <CheckCircle size={16} /> Applied
                        </span>
                      ) : (
                        <button
                          onClick={() => handleApplyClick(job.title, job.id)}
                          className="btn btn-primary"
                          style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}
                        >
                          Apply Now
                        </button>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))
            )}
          </div>
        </div>
      </section>

      {/* OPEN APPLICATION */}
      <section className="section section-bg-alt">
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <ScrollReveal direction="up">
            <h2 style={{ fontSize: '2.4rem', marginBottom: 'var(--spacing-lg)' }}>
              Don't see a role that fits?
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 'var(--spacing-xl)' }}>
              We're always on the lookout for talented, passionate individuals. Send us your CV and we'll reach out when a suitable opportunity arises.
            </p>
            <button
              onClick={() => handleApplyClick('', '')}
              className="btn btn-primary"
              style={{ padding: '0.9rem 2.5rem', fontSize: '1rem', border: 'none', cursor: 'pointer' }}
            >
              Send Your CV
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* PERKS */}
      <section className="section section-bg-alt">
        <div className="container">
          <ScrollReveal direction="up" className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: 'var(--spacing-sm)' }}>
              Why Work <span style={{ color: 'var(--color-accent)' }}>With Us</span>
            </h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }} />
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {perks.map((perk, i) => {
              const IconComp = perk.icon;
              return (
                <ScrollReveal key={i} direction="up" delay={i * 0.08}>
                  <div className="hover-card hover-card-border" style={{ padding: 'var(--spacing-2xl)', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-bg)', height: '100%' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(212,169,87,0.15)', color: 'var(--color-accent)', marginBottom: '16px' }}>
                      <IconComp size={28} />
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '8px' }}>{perk.title}</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{perk.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {showApplyModal && (
        <ApplyModal
          jobTitle={selectedJob}
          onClose={() => setShowApplyModal(false)}
        />
      )}
    </main>
  );
}

export default Career;
