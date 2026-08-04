import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import FacilityManagement from './pages/FacilityManagement';
import WhyChooseUs from './pages/WhyChooseUs';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import Career from './pages/Career';
import AdminPanel from './pages/AdminPanel';
import SalesPanel from './pages/SalesPanel';
import ScrollToTop from './ScrollToTop';
import ccsProfilePdf from './assets/Catalyst Catering Services UAE Company Profile.pdf';

/* ── Brochure Gate Modal ─────────────────────────────────── */
function BrochureModal({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Please enter your name.';
    if (!email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email.';
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setLoading(true);
    
    try {
      // Log the download to the database
      const apiBase = import.meta.env.DEV ? 'http://localhost:8000/api' : '/api';
      await fetch(`${apiBase}/downloads.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });
    } catch (err) {
      console.error("Failed to log download", err);
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Trigger download
      const link = document.createElement('a');
      link.href = ccsProfilePdf;
      link.download = 'CCS Profile May 2026.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(onClose, 2500);
    }, 800);
  };

  // Close on backdrop click
  const handleBackdrop = (ev) => { if (ev.target === ev.currentTarget) onClose(); };

  return (
    <div
      onClick={handleBackdrop}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        animation: 'brochureBackdropIn 0.25s ease',
      }}
    >
      <style>{`
        @keyframes brochureBackdropIn { from { opacity:0 } to { opacity:1 } }
        @keyframes brochureModalIn { from { opacity:0; transform:translateY(30px) scale(0.96) } to { opacity:1; transform:translateY(0) scale(1) } }
        .brochure-input { width:100%; padding:0.75rem 1rem; border-radius:10px; border:1.5px solid rgba(21,51,81,0.2); font-size:0.95rem; font-family:inherit; outline:none; transition:border-color 0.2s, box-shadow 0.2s; background:#f8fafc; color:#153351; }
        .brochure-input:focus { border-color:var(--color-accent,#F5A623); box-shadow:0 0 0 3px rgba(245,166,35,0.18); background:#fff; }
        .brochure-input.error { border-color:#e53e3e; }
        .brochure-err { color:#e53e3e; font-size:0.8rem; margin-top:4px; }
        .brochure-submit { width:100%; padding:0.85rem; border:none; border-radius:12px; background:linear-gradient(135deg,#153351,#1e4d7a); color:#fff; font-size:1rem; font-weight:700; font-family:inherit; cursor:pointer; transition:transform 0.2s, box-shadow 0.2s; }
        .brochure-submit:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 6px 20px rgba(21,51,81,0.35); }
        .brochure-submit:disabled { opacity:0.7; cursor:not-allowed; }
      `}</style>
      <div
        style={{
          background: '#fff',
          borderRadius: '20px',
          padding: '2.5rem 2rem',
          width: '100%',
          maxWidth: '440px',
          margin: '1rem',
          boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
          animation: 'brochureModalIn 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            background: 'rgba(21,51,81,0.08)', border: 'none', borderRadius: '50%',
            width: '32px', height: '32px', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', color: '#153351',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(21,51,81,0.18)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(21,51,81,0.08)'}
        >×</button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🎉</div>
            <h3 style={{ color: '#153351', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>Download Started!</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Thank you, <strong>{name}</strong>! Your profile download has begun.</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '14px', background: 'linear-gradient(135deg,#153351,#1e4d7a)', marginBottom: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              </div>
              <h2 style={{ color: '#153351', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.35rem' }}>Profile Download</h2>
              <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>Please share a few details to get your copy.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#153351', marginBottom: '6px' }}>Full Name <span style={{ color: '#e53e3e' }}>*</span></label>
                <input
                  id="brochure-name"
                  type="text"
                  placeholder="e.g. John Smith"
                  value={name}
                  onChange={e => { setName(e.target.value); setErrors(er => ({ ...er, name: '' })); }}
                  className={`brochure-input${errors.name ? ' error' : ''}`}
                />
                {errors.name && <p className="brochure-err">{errors.name}</p>}
              </div>

              {/* Email */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#153351', marginBottom: '6px' }}>Email Address <span style={{ color: '#e53e3e' }}>*</span></label>
                <input
                  id="brochure-email"
                  type="email"
                  placeholder="e.g. john@company.com"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setErrors(er => ({ ...er, email: '' })); }}
                  className={`brochure-input${errors.email ? ' error' : ''}`}
                />
                {errors.email && <p className="brochure-err">{errors.email}</p>}
              </div>

              <button type="submit" className="brochure-submit" disabled={loading}>
                {loading ? 'Processing…' : '📥 Download Now'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Main App ────────────────────────────────────────────── */
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showBrochureModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showBrochureModal]);

  // Determine if navbar should be transparent
  // Only transparent at the top of the home page
  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  const [isAdminPanel, setIsAdminPanel] = useState(false);
  const [isSalesPanel, setIsSalesPanel] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdminPanel(window.location.hash === '#hr-portal');
      setIsSalesPanel(window.location.hash === '#sales-portal');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location.hash]); // re-run if location.hash changes via react-router as well

  if (isAdminPanel) {
    return <AdminPanel />;
  }

  if (isSalesPanel) {
    return <SalesPanel />;
  }

  return (
    <div className="app">
      {/* HEADER */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '12px 20px',
        background: 'transparent',
        transition: 'padding 0.3s ease-in-out',
      }}>
        <div className="app-header-inner" style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 28px',
          borderRadius: '50px',
          backgroundColor: isTransparent ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px) saturate(160%)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
          border: isTransparent ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.08)',
          boxShadow: isTransparent ? '0 8px 32px rgba(0,0,0,0.2)' : '0 4px 24px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease-in-out',
        }}>
          <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/logo.webp"
              alt="Catalyst"
              style={{
                height: isTransparent ? '45px' : '40px',
                transition: 'all 0.3s',
              }}
            />
          </Link>
          <style>{`
            .nav-dropdown:hover .nav-dropdown-content { display: block !important; }
            .nav-dropdown-content a:hover { background-color: #f9f9f9; color: var(--color-accent) !important; }
          `}</style>
          <nav className="flex gap-lg nav-menu" style={{ fontWeight: 600, fontSize: '0.95rem', color: isTransparent ? 'rgba(0, 0, 0, 0.9)' : 'var(--color-primary-dark)', transition: 'color 0.3s', alignItems: 'center' }}>
            <Link to="/" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: isTransparent ? 'rgba(0, 0, 0, 0.9)' : undefined }}>Home</Link>

            <div className="nav-dropdown" style={{ position: 'relative', display: 'inline-block', paddingBottom: '1.5rem', marginBottom: '-1.5rem' }}>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: isTransparent ? 'rgba(0, 0, 0, 0.9)' : undefined }}>
                Services <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <div className="nav-dropdown-content" style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', minWidth: '220px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', borderTop: '3px solid var(--color-accent)', display: 'none', zIndex: 1000 }}>
                <Link to="/services" style={{ display: 'block', padding: '12px 20px', color: 'var(--color-primary-dark)', fontSize: '0.95rem', fontWeight: 500, textTransform: 'none', borderBottom: '1px solid #f0f0f0', transition: 'background-color 0.2s' }}>Food Services</Link>
                <Link to="/facility-management" style={{ display: 'block', padding: '12px 20px', color: 'var(--color-primary-dark)', fontSize: '0.95rem', fontWeight: 500, textTransform: 'none', transition: 'background-color 0.2s' }}>Facility Management</Link>
              </div>
            </div>

            <Link to="/about-us" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: isTransparent ? 'rgba(0, 0, 0, 0.9)' : undefined }}>About Us</Link>
            <Link to="/why-choose-us" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: isTransparent ? 'rgba(0, 0, 0, 0.9)' : undefined }}>Why Choose Us</Link>
            <Link to="/gallery" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: isTransparent ? 'rgba(0, 0, 0, 0.9)' : undefined }}>Gallery</Link>
            <Link to="/career" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: isTransparent ? 'rgba(0, 0, 0, 0.9)' : undefined }}>Career</Link>
            <Link to="/contact-us" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: isTransparent ? 'rgba(0, 0, 0, 0.9)' : undefined }}>Contact Us</Link>
            <a href="https://www.catalystsolutions.eco/" target="_blank" rel="noopener noreferrer" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: isTransparent ? 'rgba(0, 0, 0, 0.9)' : undefined }}>Catalyst India</a>
          </nav>
          <button
            type="button"
            id="nav-download-brochure"
            onClick={() => setShowBrochureModal(true)}
            className="btn btn-primary"
            style={{
              padding: '0.6rem 1.5rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              border: isTransparent ? '1.5px solid rgba(0, 0, 0, 0.8)' : undefined,
              backgroundColor: isTransparent ? 'rgba(255,255,255,0.15)' : undefined,
              color: isTransparent ? '#000000ff' : undefined,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Profile Download
          </button>
          <button
            type="button"
            className="mobile-menu-button"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span className="mobile-menu-icon" aria-hidden="true"></span>
          </button>
        </div>
        <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'is-open' : ''}`}>
          <div className="mobile-menu-header">
            <span>Menu</span>
            <button
              type="button"
              className="mobile-menu-close"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav className="mobile-menu-links">
            <Link to="/">Home</Link>
            <Link to="/services">Food Services</Link>
            <Link to="/facility-management">Facility Management</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/why-choose-us">Why Choose Us</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/career">Career</Link>
            <Link to="/contact-us">Contact Us</Link>
            <a href="https://www.catalystsolutions.eco/" target="_blank" rel="noopener noreferrer">Catalyst India</a>
            <button type="button" id="mobile-download-brochure" onClick={() => { setShowBrochureModal(true); setIsMobileMenuOpen(false); }} className="btn btn-primary" style={{ cursor: 'pointer', width: '100%', textAlign: 'center' }}>Profile Download</button>
          </nav>
        </div>
      </header>

      <ScrollToTop />

      {/* Brochure Gate Modal */}
      {showBrochureModal && <BrochureModal onClose={() => setShowBrochureModal(false)} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/facility-management" element={<FacilityManagement />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
      </Routes>

      {/* FOOTER */}
      <footer className="site-footer" style={{ backgroundColor: 'fdfbf7', color: '#000000ff', paddingTop: 'var(--spacing-4xl)', paddingBottom: 'var(--spacing-xl)', fontFamily: 'var(--font-sans)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-2xl)', marginBottom: 'var(--spacing-4xl)' }}>
          {/* Column 1: Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: 'var(--spacing-lg)' }}>
              <img src="/logo.webp" alt="Catalyst" style={{ height: '50px' }} />
            </Link>
            <p style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 'var(--spacing-lg)' }}>
              Fueling productivity with fresh, nutritious meals delivered on time, every day. Your trusted partner for corporate and institutional meal services.
            </p>
            <div className="flex gap-sm">
              {[
                { icon: FaFacebook, label: 'Facebook' },
                { icon: FaInstagram, label: 'Instagram' },
                { icon: FaLinkedin, label: 'LinkedIn' },
              ].map((item, i) => (
                <a key={i} href="#" aria-label={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', backgroundColor: 'var(--color-accent)', color: '#153351', borderRadius: '50%', transition: 'transform 0.3s, background-color 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.backgroundColor = 'var(--color-accent-light)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.backgroundColor = 'var(--color-accent)'; }}>
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: 'black', fontSize: '1.25rem', marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/" style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.8)'}>Home</Link>
              <Link to="/about-us" style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.8)'}>About Us</Link>
              <Link to="/services" style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.8)'}>Services</Link>
              <Link to="/why-choose-us" style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.8)'}>Why Choose Us</Link>
              <Link to="/contact-us" style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.8)'}>Contact</Link>
            </div>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 style={{ color: 'black', fontSize: '1.25rem', marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>Our Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/services/cafeteria-food-court" style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.8)'}>Cafeteria & Food Court</Link>
              <Link to="/services/industrial-canteen" style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.8)'}>Industrial Canteen</Link>
              <Link to="/services/school-cafeteria" style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.8)'}>School Cafeteria</Link>
              <Link to="/services/inhouse-patient-dining" style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.8)'}>Inhouse Patient Dining</Link>
              <Link to="/services/events-conferences" style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.8)'}>Events & Conferences</Link>
              <Link to="/services/guest-house-management" style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.8)'}>Guest House Management</Link>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 style={{ color: 'black', fontSize: '1.25rem', marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--color-accent)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  Darwish Compound, Warehouse No.4,<br />
                  Building No: 3, DIP–2,<br />
                  Dubai<br />
                </span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={18} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem' }}>info@catalystgroupme.com</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={18} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(0, 0, 0, 0.8)', fontSize: '0.95rem' }}>+971-50 703 9622</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', paddingTop: 'var(--spacing-xl)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--spacing-md)' }}>
            <p style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '0.85rem', margin: 0 }}>
              © 2026 Catalyst Catering Services LLC (CCS). All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
              <Link to="#" style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 1)'}>Privacy Policy</Link>
              <Link to="#" style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 1)'}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
