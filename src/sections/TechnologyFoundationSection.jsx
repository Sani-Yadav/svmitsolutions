import React from 'react';
import { technologyStacks } from '../data/technologyStacks';

function TechnologyCard({ stack }) {
  return (
    <article className={`technology-card technology-card--${stack.accent}`}>
      <span className="technology-card__icon">{stack.icon}</span>
      <h3>{stack.title}</h3>
      <p>{stack.description}</p>
      <div className="technology-card__tags" aria-label={`${stack.title} technologies`}>
        {stack.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <div className="technology-card__status"><i aria-hidden="true" />{stack.status}</div>
    </article>
  );
}

export default function TechnologyFoundationSection() {
  return (
    <section className="technology-foundation" aria-labelledby="technology-foundation-title">
      <div className="technology-foundation__inner">
        <header className="technology-foundation__heading">
          <span className="technology-foundation__eyebrow">OUR TECH FOUNDATION</span>
          <h2 id="technology-foundation-title">Technology That Powers Possibility.</h2>
          <p>We build on enterprise-grade, battle-tested modern technology stacks engineered for performance,<br className="technology-foundation__break" /> long-term maintainability, and impenetrable security.</p>
        </header>
        <div className="technology-foundation__grid">
          {technologyStacks.map((stack) => <TechnologyCard stack={stack} key={stack.title} />)}
        </div>
      </div>
    </section>
  );
}
