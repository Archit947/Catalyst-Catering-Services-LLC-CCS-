import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';

import serviceImage2 from '../assets/2.png';
import serviceImage3 from '../assets/3.png';
import serviceImage4 from '../assets/4.png';

const serviceData = {
  'cafeteria-food-court': {
    title: 'Cafeteria & Food Court',
    subtitle: 'Vibrant, diverse, and high-quality food experiences for corporate spaces.',
    image: '/food_court.png',
    description: 'Our cafeteria and food court solutions are designed to transform your corporate dining spaces into vibrant hubs of activity and nourishment. We offer a diverse array of cuisines tailored to the modern workforce.',
    features: [
      'Customized Menus: Tailored to diverse tastes and dietary requirements.',
      'Live Cooking Stations: Engaging dining experiences with freshly prepared meals.',
      'Healthy Options: Dedicated sections for nutritious, balanced eating.',
      'Technology Integration: Seamless ordering and payment systems.'
    ]
  },
  'industrial-canteen': {
    title: 'Industrial Canteen',
    subtitle: 'Nutritious, large-scale catering designed for workforce energy and well-being.',
    image: serviceImage3,
    description: 'We understand the unique demands of industrial environments. Our canteen services focus on delivering high-energy, nutritious meals efficiently to large workforces.',
    features: [
      'High-Volume Efficiency: Capable of serving thousands of meals seamlessly.',
      'Calorie-Optimized Menus: Designed for physical stamina and sustained energy.',
      'Strict Hygiene Standards: Uncompromising food safety in high-traffic environments.',
      '24/7 Operations: Support for round-the-clock shift work.'
    ]
  },
  'school-cafeteria': {
    title: 'School Cafeteria',
    subtitle: 'Wholesome, balanced, and appealing meals to foster healthy eating habits.',
    image: serviceImage2,
    description: 'Fueling the minds of tomorrow requires the right nutrition today. Our school catering programs focus on wholesome, delicious meals that children actually want to eat.',
    features: [
      'Kid-Friendly Nutrition: Balanced meals disguised as childhood favorites.',
      'Allergen Management: Strict protocols to ensure student safety.',
      'Educational Initiatives: Programs to teach kids about healthy eating.',
      'Sustainable Sourcing: Using local, fresh ingredients wherever possible.'
    ]
  },
  'inhouse-patient-dining': {
    title: 'Inhouse Patient Dining',
    subtitle: 'Specialized diet care focused meticulously on patient recovery.',
    image: '/clinical_nutrition.png',
    description: 'Nutrition is a critical component of healing. We provide precise, specialized dietary solutions for healthcare facilities, ensuring patients receive the exact nutrition their recovery demands.',
    features: [
      'Clinical Dietetics: Menus formulated by registered dietitians.',
      'Therapeutic Diets: Catering to specific medical conditions and restrictions.',
      'Premium Room Service: Elevating the patient experience with hotel-style dining.',
      'Stringent Cross-Contamination Controls: Absolute safety in food preparation.'
    ]
  },
  'events-conferences': {
    title: 'Events & Conferences',
    subtitle: 'Elegant, premium catering solutions that leave a lasting impression.',
    image: '/events_catering.png',
    description: 'From corporate board meetings to large-scale international conferences, our event catering team delivers flawless execution and exquisite culinary artistry.',
    features: [
      'Bespoke Menus: Custom-designed culinary experiences for your event theme.',
      'Premium Service Staff: Highly trained, professional waitstaff and bartenders.',
      'Innovative Presentation: Food styling that doubles as event decor.',
      'End-to-End Management: Comprehensive planning from menu to logistics.'
    ]
  },
  'guest-house-management': {
    title: 'Guest House Management',
    subtitle: 'Luxurious hospitality and dining services for corporate lodging.',
    image: serviceImage4,
    description: 'We transform corporate guest houses into luxurious retreats. Our comprehensive management services cover everything from fine dining to impeccable housekeeping.',
    features: [
      'Fine Dining Experiences: Restaurant-quality meals in a private setting.',
      'Personalized Hospitality: Attentive service tailored to executive guests.',
      'Complete Facility Care: Integrating food service with premium housekeeping.',
      'Event Hosting: Capability to host private dinners and small receptions.'
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

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section" style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1, width: '100%', height: '100%' }}>
          {typeof service.image === 'string' ? (
             <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
             <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3))' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', width: '100%' }}>
          <ScrollReveal direction="up">
            <h1 style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)', color: 'white', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
              {service.title}
            </h1>
            <p style={{ color: '#E8E2D2', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', fontWeight: 400 }}>
              {service.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="section">
        <div className="container flex gap-2xl section-responsive" style={{ alignItems: 'flex-start' }}>
          <ScrollReveal direction="right" style={{ flex: '1.5' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-lg)', color: 'var(--color-primary-dark)' }}>
              Exceptional <span style={{ color: 'var(--color-accent)' }}>{service.title}</span> Solutions
            </h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-xl)' }}>
              {service.description}
            </p>
            
            <h3 style={{ fontSize: '1.8rem', marginBottom: 'var(--spacing-md)' }}>Key Features</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {service.features.map((feature, idx) => {
                const [boldPart, restPart] = feature.split(': ');
                return (
                  <li key={idx} style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.1rem', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: 'var(--color-accent)', fontSize: '1.5rem', lineHeight: '1' }}>✧</span>
                    <div>
                      <strong>{boldPart}:</strong> {restPart}
                    </div>
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="left" style={{ flex: '1' }}>
            <div style={{ backgroundColor: 'var(--color-bg)', padding: 'var(--spacing-2xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>Ready to transform your service?</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-lg)' }}>
                Contact our team of experts to discuss a tailored solution for your specific needs.
              </p>
              <Link to="/contact-us" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', padding: '1rem' }}>
                Request a Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetail;
