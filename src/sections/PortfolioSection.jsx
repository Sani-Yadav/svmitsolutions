import React from 'react';
import { caseStudies } from '../data/caseStudies';

function CaseStudyCard({ study }) {
  const isExternal = Boolean(study.href && /^https?:\/\//i.test(study.href));
  return (
    <article className="case-study-card">
      <div className="case-study-card__image-wrap">
        {isExternal ? (
          <a
            href={study.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${study.title}`}
            style={{ display: 'block', width: '100%' }}
          >
            <img src={study.image} alt={study.imageAlt} loading="lazy" />
          </a>
        ) : (
          <img src={study.image} alt={study.imageAlt} loading="lazy" />
        )}
        <span className="case-study-card__category">{study.category}</span>
      </div>
      <div className="case-study-card__content">
        <div className="case-study-card__tags" aria-label={`${study.title} technologies`}>
          {study.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <h3>
          {isExternal ? (
            <a
              href={study.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {study.title}
            </a>
          ) : (
            study.title
          )}
        </h3>
        <p>{study.description}</p>
        <a
          href={study.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {isExternal ? 'Visit Live Project' : 'View Case Study'} <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

export default function PortfolioSection() {
  return (
    <section className="portfolio-section" id="projects" aria-labelledby="portfolio-title">
      <span id="portfolio" aria-hidden="true" />
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
