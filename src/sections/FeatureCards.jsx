import React from 'react';
import { featureCards } from '../data/featureCards';

export default function FeatureCards() {
  return (
    <section className="features" aria-label="What makes SVM IT Solutions different">
      <div className="feature-grid">
        {featureCards.map((card) => (
          <article className={`feature-card${card.accent ? ` feature-card--${card.accent}` : ''}`} key={card.number}>
            <div className="feature-card__top">
              <span className="feature-card__number">{card.number}</span>
              <span className="feature-card__icon">{card.icon}</span>
            </div>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <span className="feature-card__rule" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}
