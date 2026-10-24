import React from 'react';
import { industries } from '../data/industries';

function IndustryCard({ industry }) {
  return (
    <article className="industry-card">
      <span className={`industry-card__icon industry-card__icon--${industry.accent}`}>
        <svg viewBox="0 0 24 24" aria-hidden="true">{industry.icon}</svg>
      </span>
      <h3>{industry.title}</h3>
      <p>{industry.description}</p>
    </article>
  );
}

export default function IndustriesSection() {
  return (
    <section className="industries-section" id="industries" aria-labelledby="industries-title">
      <div className="industries-section__inner">
        <header className="industries-section__heading">
          <span className="industries-section__eyebrow">DOMAIN MASTERY</span>
          <h2 id="industries-title">Technology Across Industries.</h2>
          <p>Deep vertical expertise ensures your architecture meets strict sector compliance, operational<br className="industries-section__break" /> nuances, and customer expectations.</p>
        </header>
        <div className="industries-section__grid">
          {industries.map((industry) => <IndustryCard industry={industry} key={industry.title} />)}
        </div>
      </div>
    </section>
  );
}
