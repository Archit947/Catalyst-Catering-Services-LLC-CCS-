import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const serviceData = {
  'cafeteria-food-court': {
    title: 'Cafeteria & Food Court Management',
    subtitle: 'Creating Exceptional Dining Experiences in the Workplace',
    image: '/food_court.png',
    description: 'Catalyst manages modern cafeterias and food courts that combine quality food, efficient service, and an enjoyable dining experience. Whether serving corporate offices, commercial complexes, educational institutions, or public facilities, we create vibrant food service environments that meet diverse customer expectations.\n\nOur professionally managed cafeterias offer fresh meals, live cooking stations, grab-and-go concepts, healthy menu options, and digital ordering solutions to enhance customer convenience.',
    features: [
      'Corporate cafeteria management',
      'Food court operations',
      'Multi-brand food concepts',
      'Live cooking stations',
      'Grab-and-go meal solutions',
      'Cashless payment integration',
      'Digital menu displays',
      'Customer satisfaction programs',
      'Food cost management',
      'Hygiene and quality assurance',
    ]
  },
  'industrial-canteen': {
    title: 'Industrial Catering Services',
    subtitle: 'Reliable Catering Solutions for Industrial & Workforce Communities',
    image: '/industrial_canteen.png',
    description: 'At Catalyst Catering Services, we specialize in delivering high-quality industrial catering solutions designed to support workforce productivity, health, and operational efficiency. We understand that food plays a critical role in employee wellbeing, especially in demanding work environments such as manufacturing facilities, construction camps, oil & gas sites, logistics hubs, power plants, and remote locations.\n\nOur experienced culinary and operations teams provide nutritious, hygienically prepared meals tailored to diverse nationalities, dietary requirements, and client specifications.',
    features: [
      'Large-scale meal production from our Central Kitchen',
      'Multi-cuisine menu planning',
      'Workforce and labor camp catering',
      'Onsite & Remote site catering solutions',
      'Healthy and balanced nutrition programs',
      'HACCP & food safety compliance',
      'Menu engineering and cost optimization',
      'Special dietary and religious meal requirements',
      'End-to-end logistics and meal distribution',
    ]
  },
  'school-cafeteria': {
    title: 'School Cafeteria Services',
    subtitle: 'Healthy Nutrition for Growing Minds',
    image: '/education_food.png',
    description: 'Catalyst is committed to promoting healthy eating habits among students by providing safe, nutritious, and balanced meals in educational institutions. Our school cafeteria programs are designed in accordance with nutritional guidelines while ensuring meals remain appealing to children and young adults.\n\nWe work closely with schools and parents to develop menus that support healthy growth, learning, and overall well-being.',
    features: [
      'Age-appropriate meal planning',
      'Nutritious and balanced meal options',
      'Allergy and special dietary management',
      'Child-friendly menu development',
      'Digital platform for parents to view menus, pre-order meals, and discuss dietary preferences in advance',
      'Cashless payment solutions, enabling fast, secure, and hassle-free transactions while eliminating the need for students to carry cash or wait in queues',
      'Nutrition education and healthy eating awareness programs',
      'Hygienic food preparation and quality assurance',
      'Professional cafeteria operations and service management',
      'Student engagement programs to promote healthy eating habits and encourage feedback',
      'Menu customization to meet school nutritional guidelines',
      'Real-time reporting and operational transparency for school management',
    ]
  },
  'inhouse-patient-dining': {
    title: 'In-House Patient Dining Services',
    subtitle: 'Compassionate Nutrition for Better Patient Care',
    image: '/clinical_nutrition.png',
    description: 'Nutrition is an essential part of patient recovery. Catalyst provides specialized patient dining services that combine clinical nutrition standards with high-quality food preparation and compassionate service.\n\nWorking closely with hospital dietitians and healthcare professionals, we prepare and deliver meals that meet individual dietary prescriptions while ensuring consistency, safety, and patient satisfaction.',
    features: [
      'Therapeutic diet preparation',
      'Customized patient meal plans',
      'Clinical nutrition support',
      'Texture-modified diets',
      'Digital platform for patients to choose their menus based on dietitian guidelines',
      'Special medical diets',
      'Dietitian collaboration',
      'HACCP-compliant food production',
      'Temperature-controlled meal delivery',
      'Patient satisfaction monitoring',
      "Managing doctors' and visitors' cafeterias",
    ]
  },
  'events-conferences': {
    title: 'Events & Conference Catering',
    subtitle: 'Memorable Culinary Experiences for Every Occasion',
    image: '/events_catering.png',
    description: 'From executive meetings to large-scale conferences, corporate events, exhibitions, and private celebrations, Catalyst delivers exceptional catering experiences tailored to every occasion.\n\nOur dedicated event team manages every detail—from menu design and food preparation to presentation and professional service—ensuring a seamless and memorable event.',
    features: [
      'Corporate events',
      'Conferences and seminars',
      'Business meetings',
      'Product launches',
      'VIP hospitality',
      'Executive dining',
      'Gala dinners',
      'Coffee breaks',
      'Buffet and plated service',
      'Outdoor catering',
      'Customized event menus',
      'Live Cooking',
    ]
  },
  'guest-house-management': {
    title: 'Guest House Management',
    subtitle: 'Complete Hospitality and Catering Management Solutions',
    image: '/guest_house.png',
    description: 'Catalyst provides comprehensive guest house management services that ensure guests enjoy a comfortable, clean, and professionally managed environment. We integrate catering, housekeeping, hospitality, and facility support into one seamless service.\n\nOur experienced team manages every aspect of guest accommodation, allowing clients to focus on their core business while we deliver exceptional hospitality.',
    features: [
      'Guest house operations',
      'Resident meal services',
      'Housekeeping management',
      'Laundry coordination',
      'Room preparation and maintenance',
      'Hospitality services',
      'Inventory and asset management',
      'Hygiene and sanitation',
      'Staff accommodation management',
      '24/7 operational support',
    ]
  }
};

function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Service not found</h2>
        <Link to="/services" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Services</Link>
      </div>
    );
  }

  const otherServices = Object.entries(serviceData).filter(([key]) => key !== slug).slice(0, 3);

  return (
    <main>
      {/* HERO SECTION — cinematic, bottom-anchored editorial layout */}
      <section style={{ position: 'relative', minHeight: '64vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src={service.image} alt={service.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,51,31,0.30) 0%, rgba(8,51,31,0.45) 45%, rgba(5,30,18,0.93) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', paddingTop: '140px', paddingBottom: 'var(--spacing-3xl)' }}>
          <ScrollReveal direction="up">
            <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.75)', marginBottom: 'var(--spacing-lg)' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.75)' }}>Home</Link>
              <span style={{ color: 'var(--color-accent)' }}>✦</span>
              <Link to="/services" style={{ color: 'rgba(255,255,255,0.75)' }}>Services</Link>
              <span style={{ color: 'var(--color-accent)' }}>✦</span>
              <span style={{ color: 'var(--color-accent-light)' }}>{service.title}</span>
            </nav>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', maxWidth: '850px', marginBottom: 'var(--spacing-md)', color: 'white' }}>
              {service.title}
            </h1>
            <div style={{ width: '72px', height: '2px', background: 'linear-gradient(90deg, var(--color-accent), transparent)', marginBottom: 'var(--spacing-md)' }}></div>
            <p style={{ color: 'rgba(243,229,171,0.95)', fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)', maxWidth: '640px', fontFamily: 'var(--font-serif)' }}>
              {service.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* OVERVIEW + CONSULTATION SIDEBAR */}
      <section className="section">
        <div className="container flex gap-2xl section-responsive" style={{ alignItems: 'flex-start', gap: 'var(--spacing-3xl)' }}>
          <ScrollReveal direction="right" style={{ flex: '1.6', minWidth: 0 }}>
            <span className="tag">Overview</span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', marginBottom: 'var(--spacing-lg)' }}>
              Excellence in every detail
            </h2>
            {service.description.split('\n\n').map((para, i) => (
              <p key={i} style={{
                fontSize: i === 0 ? '1.2rem' : '1.05rem',
                lineHeight: 1.85,
                color: i === 0 ? 'var(--color-text)' : 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-lg)',
              }}>
                {para}
              </p>
            ))}

            {/* Signature pillars strip */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-xl)' }}>
              {['HACCP Certified', 'UAE-Wide Operations', 'Tailored Menus', '24/7 Support'].map((pillar) => (
                <span key={pillar} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1.1rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-alt)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary-dark)', boxShadow: 'var(--shadow-sm)' }}>
                  <span style={{ color: 'var(--color-accent)' }}>✦</span> {pillar}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" style={{ flex: '1', minWidth: 0, position: 'sticky', top: '110px' }}>
            <div style={{ background: 'linear-gradient(160deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)', padding: 'var(--spacing-2xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', border: '1px solid rgba(212,175,55,0.25)' }}></div>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '100px', height: '100px', borderRadius: '50%', border: '1px solid rgba(212,175,55,0.35)' }}></div>
              <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-accent)', marginBottom: 'var(--spacing-md)' }}>
                Start the Conversation
              </span>
              <h3 style={{ fontSize: '1.6rem', color: 'white', marginBottom: 'var(--spacing-md)' }}>
                Ready to transform your service?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.95rem', marginBottom: 'var(--spacing-xl)' }}>
                Speak with our specialists about a solution tailored to your organisation.
              </p>
              <Link to="/contact-us" className="btn btn-accent" style={{ display: 'flex', textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                Request a Consultation
              </Link>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 'var(--spacing-lg)', display: 'grid', gap: '0.6rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>
                <span>✆ +971-50 703 9622</span>
                <span>✉ info@catalystgroupme.com</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="section section-bg-alt">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="text-center" style={{ maxWidth: '640px', margin: '0 auto var(--spacing-2xl)' }}>
              <span className="tag">Our Expertise</span>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)' }}>
                What we <span style={{ color: 'var(--color-accent)' }}>deliver</span>
              </h2>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 'var(--spacing-lg)' }}>
            {service.features.map((feature, idx) => (
              <ScrollReveal key={idx} direction="up" delay={Math.min(idx * 0.05, 0.3)}>
                <div className="hover-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', height: '100%', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '34px', height: '34px', flexShrink: 0, borderRadius: '50%', backgroundColor: 'rgba(212,175,55,0.14)', border: '1px solid rgba(212,175,55,0.45)' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <span style={{ fontSize: '0.98rem', lineHeight: 1.6, color: 'var(--color-primary-dark)', fontWeight: 500 }}>{feature}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 60%, var(--color-primary-light) 100%)', padding: 'var(--spacing-4xl) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35, background: 'radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.35), transparent 55%)' }}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal direction="up">
            <p style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--color-accent)', marginBottom: 'var(--spacing-md)' }}>
              Catalyst — UAE
            </p>
            <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 3.6vw, 3rem)', maxWidth: '760px', margin: '0 auto var(--spacing-xl)' }}>
              Let's craft the right solution for your organisation
            </h2>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact-us" className="btn btn-accent">Contact Our Team</Link>
              <Link to="/services" className="btn" style={{ border: '1px solid rgba(255,255,255,0.45)', color: 'white' }}>View All Services</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* EXPLORE OTHER SERVICES */}
      <section className="section">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="flex justify-between items-center" style={{ flexWrap: 'wrap', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-2xl)' }}>
              <div>
                <span className="tag">Discover More</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)' }}>Explore other services</h2>
              </div>
              <Link to="/services" style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                All Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 'var(--spacing-lg)' }}>
            {otherServices.map(([key, other], idx) => (
              <ScrollReveal key={key} direction="up" delay={idx * 0.08}>
                <Link to={`/services/${key}`} className="hover-card" style={{ display: 'block', position: 'relative', height: '340px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                  <img src={other.image} alt={other.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,30,18,0.92) 0%, rgba(5,30,18,0.45) 55%, transparent 100%)' }}></div>
                  <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'var(--spacing-lg)' }}>
                    <h3 style={{ color: 'white', fontSize: '1.35rem', marginBottom: '0.4rem' }}>{other.title}</h3>
                    <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em' }}>
                      Learn More →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetail;
