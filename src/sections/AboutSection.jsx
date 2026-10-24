import React from 'react';
import { engineeringStatuses } from '../data/engineeringStatuses';
import { aboutPrinciples } from '../data/aboutPrinciples';

function EngineeringStatusRow({ item }) {
  return (
    <div className={`engineering-status engineering-status--${item.accent}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true">{item.icon}</svg>
      <span className="engineering-status__label">{item.label}</span>
      <span className="engineering-status__value">{item.status}</span>
    </div>
  );
}

function EngineeringMatrix() {
  return (
    <div className="engineering-matrix" aria-label="SVM Engineering Matrix: cloud services healthy, zero-trust security encrypted, and global CDN latency below 14 milliseconds">
      <div className="engineering-matrix__header">
        <span className="engineering-matrix__name"><i aria-hidden="true" />SVM Engineering Matrix</span>
        <span className="engineering-matrix__sla">ACTIVE SLA</span>
      </div>
      <div className="engineering-matrix__rows">
        {engineeringStatuses.map((item) => <EngineeringStatusRow item={item} key={item.label} />)}
      </div>
      <div className="engineering-matrix__footer">
        <span>Verified Global Architecture</span><span>ISO 27001 Methodology</span>
      </div>
    </div>
  );
}

function PrincipleCard({ principle }) {
  return (
    <article className={`about-principle about-principle--${principle.accent}`}>
      <span>{principle.number}</span>
      <h3>{principle.title}</h3>
      <p>{principle.description}</p>
    </article>
  );
}

export default function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-section__inner">
        <EngineeringMatrix />
        <div className="about-section__content">
          <span className="about-section__eyebrow">ABOUT SVM IT SOLUTIONS</span>
          <h2 id="about-title">We Build Technology That Creates<br className="about-section__title-break" /> Possibilities.</h2>
          <p className="about-section__description">Founded with a singular engineering charter: to bridge the vast gap between high-level executive business strategy and bulletproof software execution. We partner with established enterprises and agile ventures to design software architectures that reduce operational complexity and unlock sustainable growth.</p>
          <div className="about-section__principles">
            {aboutPrinciples.map((principle) => <PrincipleCard principle={principle} key={principle.number} />)}
          </div>
          <a className="about-section__cta" href="#contact">Learn More About SVM <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
