import React from 'react';
import { caseStudies } from '../data/caseStudies';

function CaseStudyCard({ study }) {
  return (
    <article className="case-study-card">
      <div className="case-study-card__image-wrap">
        <img src={study.image} alt={study.imageAlt} loading="lazy" />
        <span className="case-study-card__category">{study.category}</span>
      </div>
      <div className="case-study-card__content">
        <div className="case-study-card__tags" aria-label={`${study.title} technologies`}>
          {study.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <h3>{study.title}</h3>
        <p>{study.description}</p>
        <a href={study.href}>View Case Study <span aria-hidden="true">→</span></a>
      </div>
    </article>
  );
}

export default function PortfolioSection() {
  return (
    <section className="portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
      <div className="portfolio-section__inner">
        <header className="portfolio-section__heading">
          <div className="portfolio-section__intro">
            <span className="portfolio-section__eyebrow">PORTFOLIO EXCELLENCE</span>
            <h2 id="portfolio-title">Solutions We've Built.</h2>
            <p>Real enterprise transformations engineered to withstand mission-critical<br className="portfolio-section__break" /> scale, regulatory mandates, and high-volume transactions.</p>
          </div>
          <a className="portfolio-section__cta" href="#contact">Schedule Case Study Walkthrough <span aria-hidden="true">→</span></a>
        </header>
        <div className="portfolio-section__grid">
          {caseStudies.map((study) => <CaseStudyCard study={study} key={study.category} />)}
        </div>
      </div>
    </section>
  );
}
