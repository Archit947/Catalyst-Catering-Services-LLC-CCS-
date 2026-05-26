import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if navbar should be transparent
  // Only transparent if we are on the top of the page (not scrolled)
  // The user requested it for the landing page, but typically it applies to all pages with a hero image
  // We'll apply it everywhere at the top, or just the home page if specified. We'll do it everywhere since all pages have a hero image.
  const isTransparent = !scrolled;

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
        <div className="container flex justify-between items-center">
          <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.webp" alt="Catalyst" style={{ height: isTransparent ? '45px' : '40px', transition: 'height 0.3s' }} />
          </Link>
          <nav className="flex gap-lg" style={{fontWeight: 600, fontSize: '0.95rem', color: isTransparent ? 'white' : 'var(--color-primary-dark)', transition: 'color 0.3s'}}>
            <Link to="/" style={{textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem'}}>Home</Link>
            <Link to="/services" style={{textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem'}}>Services</Link>
            <Link to="/about-us" style={{textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.85rem'}}>About Us</Link>
          </nav>
          <Link to="/contact-us" className={isTransparent ? "btn" : "btn btn-primary"} style={{padding: '0.6rem 1.5rem', fontSize: '0.9rem', fontWeight: 600, backgroundColor: isTransparent ? 'white' : 'var(--color-primary)', color: isTransparent ? 'var(--color-primary-dark)' : 'white', transition: 'all 0.3s'}}>Contact Us</Link>
        </div>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      {/* FOOTER */}
      <footer style={{ padding: 'var(--spacing-3xl) 0 var(--spacing-xl)', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="flex justify-between items-center" style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--spacing-2xl)', marginBottom: 'var(--spacing-xl)' }}>
            <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo.webp" alt="Catalyst" style={{ height: '50px' }} />
            </div>
            <div className="flex gap-lg" style={{fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-text-muted)'}}>
              <Link to="/">Solutions</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>
          </div>
          <div className="flex justify-between items-center" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
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
