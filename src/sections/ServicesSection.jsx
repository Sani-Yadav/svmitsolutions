import React from 'react';
import { services } from '../data/services';

export default function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="services-inner">
        <header className="services-heading">
          <span className="services-eyebrow">WHAT WE DO</span>
          <h2 id="services-title">Technology Solutions Built Around Your<br className="services-title-break" /> Business.</h2>
          <p>From full-cycle custom engineering to elastic cloud migration, we equip forward-thinking enterprises<br className="services-copy-break" /> with tools engineered for uncompromising resilience.</p>
        </header>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card__top">
                <span className={`service-icon${service.accent ? ` service-icon--${service.accent}` : ''}`}>{service.icon}</span>
                <span className="service-number">{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={`#service/${service.slug}`}>Explore Details <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
