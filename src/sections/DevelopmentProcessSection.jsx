import React from 'react';
import { processStages } from '../data/processStages';

function ProcessStageCard({ stage }) {
  return (
    <article className={`process-stage${stage.accent === 'orange' ? ' process-stage--orange' : ''}`}>
      <span className="process-stage__number">{stage.number}</span>
      <h3>{stage.title}</h3>
      <p>{stage.description}</p>
      <div className="process-stage__label">
        <svg viewBox="0 0 24 24" aria-hidden="true">{stage.icon}</svg>
        <span>{stage.label}</span>
      </div>
    </article>
  );
}

export default function DevelopmentProcessSection() {
  return (
    <section className="development-process" aria-labelledby="development-process-title">
      <div className="development-process__inner">
        <header className="development-process__heading">
          <span className="development-process__eyebrow">HOW WE DELIVER</span>
          <h2 id="development-process-title">From Idea to Impact.</h2>
          <p>Our proven six-stage development framework ensures zero surprises, complete transparent velocity,<br className="development-process__break" /> and enterprise deliverables.</p>
        </header>
        <div className="development-process__grid">
          {processStages.map((stage) => <ProcessStageCard stage={stage} key={stage.number} />)}
        </div>
      </div>
    </section>
  );
}
