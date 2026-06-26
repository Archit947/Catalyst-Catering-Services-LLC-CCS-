import React, { useState } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const galleryItems = [
  { id: 1, src: '/food_court.png', alt: 'Cafeteria & Food Court', category: 'Food Services' },
  { id: 2, src: '/events_catering.png', alt: 'Events Catering', category: 'Events' },
  { id: 3, src: '/salad_plating.png', alt: 'Healthy Salad Plating', category: 'Food Services' },
  { id: 4, src: '/clinical_nutrition.png', alt: 'Clinical Nutrition', category: 'Healthcare' },
  { id: 5, src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800', alt: 'Chefs Preparing Food', category: 'Food Services' },
  { id: 6, src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', alt: 'Modern Facility Interior', category: 'Facility Management' },
  { id: 7, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800', alt: 'Fine Dining Setup', category: 'Events' },
  { id: 8, src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=800', alt: 'Catering Service', category: 'Food Services' },
  { id: 9, src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800', alt: 'Kitchen Operations', category: 'Food Services' },
  { id: 10, src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800', alt: 'Fresh Ingredients', category: 'Food Services' },
  { id: 11, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800', alt: 'Gourmet Plating', category: 'Events' },
  { id: 12, src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800', alt: 'Buffet Spread', category: 'Facility Management' },
];

const categories = ['All', 'Food Services', 'Events', 'Healthcare', 'Facility Management'];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', paddingTop: '100px', paddingBottom: '60px' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <img src="/events_catering.png" alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <ScrollReveal direction="up">
            <h1 className="hero-title">
              Our <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>Gallery</span>
            </h1>
            <p style={{ color: '#E8E2D2', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', fontWeight: 300, lineHeight: 1.7 }}>
              A visual showcase of our culinary excellence, immaculate facilities, and world-class events.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: 'var(--spacing-3xl)' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.55rem 1.4rem',
                    borderRadius: '50px',
                    border: activeCategory === cat ? 'none' : '1.5px solid var(--color-primary)',
                    backgroundColor: activeCategory === cat ? 'var(--color-primary)' : 'transparent',
                    color: activeCategory === cat ? '#fff' : 'var(--color-primary-dark)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    letterSpacing: '0.5px',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* GRID */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: 'var(--spacing-4xl)',
          }}>
            {filtered.map((item, i) => (
              <ScrollReveal key={item.id} direction="up" delay={i * 0.05}>
                <div
                  className="hover-card"
                  onClick={() => setLightbox(item)}
                  style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: '260px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(8,51,31,0.85) 0%, transparent 55%)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px',
                  }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                      {item.category}
                    </span>
                    <p style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, margin: 0 }}>{item.alt}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            backgroundColor: 'rgba(0,0,0,0.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', maxWidth: '900px', width: '100%' }}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '16px' }}
            />
            <p style={{ color: '#fff', textAlign: 'center', marginTop: '12px', fontSize: '1rem' }}>{lightbox.alt}</p>
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: '-16px', right: '-16px',
                width: '36px', height: '36px', borderRadius: '50%',
                backgroundColor: 'var(--color-accent)', border: 'none',
                color: '#fff', fontSize: '1.2rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >×</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;
