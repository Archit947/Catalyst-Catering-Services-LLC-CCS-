import React, { useState } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

/* ── Apply Modal ─────────────────────────────────────────── */
function ApplyModal({ jobTitle, onClose }) {
  // We use formsubmit.co to handle the form submission and send it to an email
  // The email address will be replaced when you provide it.
  const formSubmitUrl = "https://formsubmit.co/architkore72@gmail.com";

  const handleBackdrop = (ev) => { if (ev.target === ev.currentTarget) onClose(); };

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
        
        <form action={formSubmitUrl} method="POST" encType="multipart/form-data">
          <input type="hidden" name="_subject" value={`New Job Application: ${jobTitle || 'General'}`} />
          <input type="hidden" name="_captcha" value="false" />
          
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
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem', fontSize: '1.05rem', cursor: 'pointer', textAlign: 'center' }}>
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

const openings = [
  {
    id: 1,
    title: 'Head Chef',
    department: 'Culinary',
    location: 'Dubai, UAE',
    type: 'Full-Time',
    description: 'Lead our culinary team in delivering exceptional dining experiences across corporate and institutional clients in Dubai.',
  },
  {
    id: 2,
    title: 'Facility Manager',
    department: 'Operations',
    location: 'Abu Dhabi, UAE',
    type: 'Full-Time',
    description: 'Oversee day-to-day facility operations including cleaning, maintenance, and support services at client sites.',
  },
  {
    id: 3,
    title: 'Catering Supervisor',
    department: 'Culinary',
    location: 'Sharjah, UAE',
    type: 'Full-Time',
    description: 'Supervise catering operations for events, corporate dining, and institutional food service contracts.',
  },
  {
    id: 4,
    title: 'Nutritionist & Dietitian',
    department: 'Healthcare',
    location: 'Dubai, UAE',
    type: 'Full-Time',
    description: 'Design and oversee nutritional meal plans for hospital patient dining and clinical nutrition programs.',
  },
  {
    id: 5,
    title: 'Operations Coordinator',
    department: 'Operations',
    location: 'Dubai, UAE',
    type: 'Full-Time',
    description: 'Coordinate logistics, vendor relations, and daily operational tasks across multiple client sites.',
  },
  {
    id: 6,
    title: 'Events & Catering Manager',
    department: 'Events',
    location: 'Dubai, UAE',
    type: 'Full-Time',
    description: 'Plan and execute premium catering experiences for corporate events, conferences, and high-profile gatherings.',
  },
];

const perks = [
  { icon: '🌍', title: 'Global Exposure', desc: 'Work with an internationally recognized group with presence across the Middle East, Asia, and Africa.' },
  { icon: '📈', title: 'Career Growth', desc: 'Structured career development paths with regular performance reviews and promotion opportunities.' },
  { icon: '🍽️', title: 'World-Class Team', desc: 'Collaborate with seasoned professionals in culinary arts, facility management, and hospitality.' },
  { icon: '🏥', title: 'Health Benefits', desc: 'Comprehensive medical, dental, and wellness benefits for you and your family.' },
  { icon: '🎓', title: 'Training & Learning', desc: 'Access to professional development programs, culinary workshops, and certifications.' },
  { icon: '✈️', title: 'Accommodation & Transport', desc: 'Provided for qualifying roles, ensuring comfort and ease of commute.' },
];

function Career() {
  const [applied, setApplied] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

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
            {perks.map((perk, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.08}>
                <div className="hover-card hover-card-border" style={{ padding: 'var(--spacing-2xl)', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-bg)', height: '100%' }}>
                  <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>{perk.icon}</div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '8px' }}>{perk.title}</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{perk.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
            {openings.map((job, i) => (
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
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '10px' }}>📍 {job.location}</p>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{job.description}</p>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    {applied === job.id ? (
                      <span style={{ padding: '0.6rem 1.4rem', borderRadius: '50px', backgroundColor: 'rgba(8,51,31,0.1)', color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 600 }}>
                        ✓ Applied
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
            ))}
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
            <a
              href="mailto:careers@catalystgroupme.com"
              className="btn btn-primary"
              style={{ padding: '0.9rem 2.5rem', fontSize: '1rem' }}
            >
              Send Your CV
            </a>
          </ScrollReveal>
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
