import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import FacilityManagement from './pages/FacilityManagement';
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
        padding: isTransparent ? 'var(--spacing-lg) 0' : 'var(--spacing-md) 0',
        backgroundColor: isTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: isTransparent ? 'none' : 'blur(10px)',
        borderBottom: isTransparent ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease-in-out',
        boxShadow: isTransparent ? 'none' : 'var(--shadow-sm)'
      }}>
        <div className="container flex justify-between items-center app-header-inner">
          <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.webp" alt="Catalyst" style={{ height: isTransparent ? '45px' : '40px', transition: 'all 0.3s' }} />
          </Link>
          <style>{`
            .nav-dropdown:hover .nav-dropdown-content { display: block !important; }
            .nav-dropdown-content a:hover { background-color: #f9f9f9; color: var(--color-accent) !important; }
          `}</style>
          <nav className="flex gap-lg nav-menu" style={{fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-primary-dark)', transition: 'color 0.3s', alignItems: 'center'}}>
            <Link to="/" style={{textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem'}}>Home</Link>
            
            <div className="nav-dropdown" style={{position: 'relative', display: 'inline-block', paddingBottom: '1.5rem', marginBottom: '-1.5rem'}}>
              <span style={{textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'}}>
                Services <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <div className="nav-dropdown-content" style={{position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', minWidth: '220px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', borderTop: '3px solid var(--color-accent)', display: 'none', zIndex: 1000}}>
                <Link to="/services" style={{display: 'block', padding: '12px 20px', color: 'var(--color-primary-dark)', fontSize: '0.95rem', fontWeight: 500, textTransform: 'none', borderBottom: '1px solid #f0f0f0', transition: 'background-color 0.2s'}}>Food Services</Link>
                <Link to="/facility-management" style={{display: 'block', padding: '12px 20px', color: 'var(--color-primary-dark)', fontSize: '0.95rem', fontWeight: 500, textTransform: 'none', transition: 'background-color 0.2s'}}>Facility Management</Link>
              </div>
            </div>

            <Link to="/about-us" style={{textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem'}}>About Us</Link>
          </nav>
          <Link to="/contact-us" className="btn btn-primary" style={{padding: '0.6rem 1.5rem', fontSize: '0.9rem', fontWeight: 600, transition: 'all 0.3s'}}>Contact Us</Link>
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
          <nav className="mobile-menu-links">
            <Link to="/">Home</Link>
            <Link to="/services">Food Services</Link>
            <Link to="/facility-management">Facility Management</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us" className="btn btn-primary">Contact Us</Link>
          </nav>
        </div>
      </header>
      
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/facility-management" element={<FacilityManagement />} />
      </Routes>

      {/* FOOTER */}
      <footer style={{ padding: 'var(--spacing-3xl) 0 var(--spacing-xl)', backgroundColor: 'var(--color-bg)' }}>
        <div className="container footer-inner">
          <div className="flex justify-between items-center footer-top" style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--spacing-2xl)', marginBottom: 'var(--spacing-xl)' }}>
            <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo.webp" alt="Catalyst" style={{ height: '50px' }} />
            </div>
            <div className="flex gap-lg" style={{fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-text-muted)'}}>
              <Link to="/">Solutions</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>
          </div>
          <div className="flex justify-between items-center footer-bottom" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            <div>© 2026 Catalyst Catering Services LLC (CCS). All rights reserved.</div>
            <div className="flex gap-md">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
