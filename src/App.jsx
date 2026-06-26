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
import ScrollToTop from './ScrollToTop';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Determine if navbar should be transparent
  // Only transparent at the top of the home page
  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

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
                filter: isTransparent ? 'brightness(0) invert(1)' : 'none',
              }}
            />
          </Link>
          <style>{`
            .nav-dropdown:hover .nav-dropdown-content { display: block !important; }
            .nav-dropdown-content a:hover { background-color: #f9f9f9; color: var(--color-accent) !important; }
          `}</style>
          <nav className="flex gap-lg nav-menu" style={{ fontWeight: 600, fontSize: '0.95rem', color: isTransparent ? 'rgba(255,255,255,0.9)' : 'var(--color-primary-dark)', transition: 'color 0.3s', alignItems: 'center' }}>
            <Link to="/" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: isTransparent ? 'rgba(255,255,255,0.9)' : undefined }}>Home</Link>

            <div className="nav-dropdown" style={{ position: 'relative', display: 'inline-block', paddingBottom: '1.5rem', marginBottom: '-1.5rem' }}>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', color: isTransparent ? 'rgba(255,255,255,0.9)' : undefined }}>
                Services <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <div className="nav-dropdown-content" style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', minWidth: '220px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', borderTop: '3px solid var(--color-accent)', display: 'none', zIndex: 1000 }}>
                <Link to="/services" style={{ display: 'block', padding: '12px 20px', color: 'var(--color-primary-dark)', fontSize: '0.95rem', fontWeight: 500, textTransform: 'none', borderBottom: '1px solid #f0f0f0', transition: 'background-color 0.2s' }}>Food Services</Link>
                <Link to="/facility-management" style={{ display: 'block', padding: '12px 20px', color: 'var(--color-primary-dark)', fontSize: '0.95rem', fontWeight: 500, textTransform: 'none', transition: 'background-color 0.2s' }}>Facility Management</Link>
              </div>
            </div>

            <Link to="/about-us" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: isTransparent ? 'rgba(255,255,255,0.9)' : undefined }}>About Us</Link>
            <Link to="/why-choose-us" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: isTransparent ? 'rgba(255,255,255,0.9)' : undefined }}>Why Choose Us</Link>
            <Link to="/gallery" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: isTransparent ? 'rgba(255,255,255,0.9)' : undefined }}>Gallery</Link>
            <Link to="/career" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: isTransparent ? 'rgba(255,255,255,0.9)' : undefined }}>Career</Link>
            <Link to="/contact-us" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', color: isTransparent ? 'rgba(255,255,255,0.9)' : undefined }}>Contact Us</Link>
          </nav>
          <a
            href="/voucher.pdf"
            download
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
              ...(isTransparent ? {
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: '1.5px solid rgba(255,255,255,0.8)',
                color: '#ffffff',
              } : {})
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
           Download Brochure
          </a>
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
            <a href="/voucher.pdf" download className="btn btn-primary">Download Voucher</a>
          </nav>
        </div>
      </header>

      <ScrollToTop />

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
                { icon: FaTwitter, label: 'Twitter' },
                { icon: FaInstagram, label: 'Instagram' },
                { icon: FaLinkedin, label: 'LinkedIn' },
                { icon: FaYoutube, label: 'YouTube' }
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
              <Link to="#" style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>Privacy Policy</Link>
              <Link to="#" style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
