import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <img src="/hero_kitchen_bg.png" alt="Premium Kitchen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 50%, transparent 100%)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex' }}>
          <div style={{ maxWidth: '700px', padding: 'var(--spacing-2xl) 0' }}>
            <span className="tag" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)', color: 'var(--color-accent)', border: '1px solid rgba(212, 175, 55, 0.3)' }}>Premium Food Services</span>
            <h1 style={{ fontSize: '4.5rem', marginBottom: 'var(--spacing-lg)', color: 'white', textShadow: '0 4px 12px rgba(0,0,0,0.4)', lineHeight: 1.1 }}>
              Elevate your palate with <i style={{color: 'var(--color-accent)'}}>unforgettable</i> flavors.
            </h1>
            <p style={{ color: '#E8E2D2', fontSize: '1.2rem', marginBottom: 'var(--spacing-xl)', lineHeight: 1.8, textShadow: '0 2px 4px rgba(0,0,0,0.5)', maxWidth: '600px' }}>
              We deliver comprehensive, world-class food service solutions across the UAE, driven by a deep commitment to culinary excellence and sustainability.
            </p>
            <div className="flex gap-md">
              <a href="#expertise" className="btn btn-accent" style={{ border: '1px solid rgba(255,255,255,0.3)' }}>Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* EXCELLENCE SECTION */}
      <section className="section section-bg-alt">
        <div className="container flex gap-xl" style={{ alignItems: 'center' }}>
          <div style={{ flex: '1', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-20px', border: '1px solid var(--color-accent)', borderRadius: 'var(--radius-xl)', zIndex: 0, transform: 'translate(20px, 20px)' }}></div>
            <img src="/salad_plating.png" alt="Healthy Salad" className="hover-card" style={{ borderRadius: 'var(--radius-xl)', position: 'relative', zIndex: 1 }} />
            <div className="glass-panel" style={{ position: 'absolute', bottom: '40px', right: '-40px', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', zIndex: 2 }}>
              <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)' }}>100%</div>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)', fontWeight: 600 }}>Sustainable<br/>Practices</div>
            </div>
          </div>
          <div style={{ flex: '1', paddingLeft: 'var(--spacing-2xl)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-xl)' }}>
              Delivering <span style={{color: 'var(--color-accent)'}}>Excellence</span> in Food Service
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-lg)', fontSize: '1.1rem' }}>
              Welcome to Catalyst. We represent the evolution of premium culinary support, blending our steadfast commitment to corporate responsibility with a renewed focus on driving positive change in the industry.
            </p>
            <ul className="flex flex-col gap-md" style={{ color: 'var(--color-primary-dark)', fontWeight: 500, marginTop: 'var(--spacing-xl)' }}>
              <li className="flex items-center gap-md">
                <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}>✧</span> Decades of extensive luxury client experience
              </li>
              <li className="flex items-center gap-md">
                <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}>✧</span> Embracing cutting-edge culinary technology
              </li>
              <li className="flex items-center gap-md">
                <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}>✧</span> Empowering a dedicated, world-class workforce
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section id="expertise" className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>Our Expertise</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>Tailored culinary solutions across key sectors, maintaining the highest standards of luxury, quality, and hygiene.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-lg)' }}>
            
            <div className="hover-card hover-card-border" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
              <img src="/food_court.png" alt="Cafeteria & Food Court" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,81,50,0.95), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--spacing-xl)' }}>
                <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Cafeteria & Food Court</h3>
                <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5 }}>Vibrant, diverse, and high-quality food experiences for corporate spaces.</p>
              </div>
            </div>

            <div className="hover-card hover-card-border" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
              <img src="/industrial_canteen.png" alt="Industrial Canteen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,81,50,0.95), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--spacing-xl)' }}>
                <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Industrial Canteen</h3>
                <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5 }}>Nutritious, large-scale catering designed for workforce energy and well-being.</p>
              </div>
            </div>

            <div className="hover-card hover-card-border" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
              <img src="/education_food.png" alt="School Cafeteria" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,81,50,0.95), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--spacing-xl)' }}>
                <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>School Cafeteria</h3>
                <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5 }}>Wholesome, balanced, and appealing meals to foster healthy eating habits.</p>
              </div>
            </div>

            <div className="hover-card hover-card-border" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
              <img src="/clinical_nutrition.png" alt="Inhouse Patient Dining" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,81,50,0.95), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--spacing-xl)' }}>
                <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Inhouse Patient Dining</h3>
                <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5 }}>Specialized diet care focused meticulously on patient recovery.</p>
              </div>
            </div>

            <div className="hover-card hover-card-border" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
              <img src="/events_catering.png" alt="Events and Conferences" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,81,50,0.95), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--spacing-xl)' }}>
                <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Events & Conferences</h3>
                <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5 }}>Elegant, premium catering solutions that leave a lasting impression.</p>
              </div>
            </div>

            <div className="hover-card hover-card-border" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
              <img src="/guest_house.png" alt="Guest house Management" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,81,50,0.95), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--spacing-xl)' }}>
                <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: 'var(--spacing-xs)' }}>Guest House Management</h3>
                <p style={{ color: '#E8E2D2', fontSize: '0.9rem', lineHeight: 1.5 }}>Luxurious hospitality and dining services for corporate lodging.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="section section-bg-alt">
        <div className="container flex gap-2xl">
          <div style={{ flex: '1' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-lg)' }}>Core <i style={{color: 'var(--color-accent)', fontWeight: 400}}>Values</i></h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-2xl)', fontSize: '1.1rem' }}>
              At Catalyst, we prioritize sustainability and luxury by implementing environmentally friendly solutions while creating immense value for all stakeholders.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>
              {[
                { icon: '🌿', title: 'Environment', desc: 'Positive action through environmental protection.' },
                { icon: '⚖️', title: 'Integrity', desc: 'Absolute transparency in all business practices.' },
                { icon: '🤝', title: 'Loyalty', desc: 'Unwavering dedication to our clients.' },
                { icon: '🛡️', title: 'Safety', desc: 'Rigorous safety and hygiene protocols.' }
              ].map((val, idx) => (
                <div key={idx} className="hover-card" style={{ padding: 'var(--spacing-xl)', backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>{val.icon}</div>
                  <h4 style={{ marginBottom: 'var(--spacing-xs)', fontSize: '1.25rem' }}>{val.title}</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="hover-card" style={{ width: '100%', height: '100%', minHeight: '600px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--color-accent)' }}>
               <img src="/values_vegetables.png" alt="Fresh Vegetables" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))', color: 'white', padding: 'var(--spacing-4xl) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)' }}></div>
        
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', marginBottom: 'var(--spacing-sm)', fontSize: '2.5rem' }}>World-Class Domain Expertise</h2>
          <p style={{ color: '#E8E2D2', marginBottom: 'var(--spacing-3xl)', fontSize: '1.1rem' }}>Constantly adapting to elite market needs and innovating luxury solutions.</p>
          
          <div className="flex justify-between" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {[
              { num: '300M', label: 'REVENUE' },
              { num: '50K+', label: 'MEALS SERVED' },
              { num: '120+', label: 'GLOBAL SITES' },
              { num: '5K+', label: 'EMPLOYEES' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)', lineHeight: 1.2 }}>{stat.num}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', color: '#E8E2D2' }}>{stat.label}</div>
              </div>
            ))}
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

export default Home;
