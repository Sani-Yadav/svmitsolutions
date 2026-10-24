import React from 'react';
import { challenges } from '../data/challenges';

function ChallengeCard({ challenge }) {
  return (
    <article className="challenge-card">
      <div className="challenge-card__label">
        <svg viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="2" width="10" height="10" rx="1"/><path d="m5 9 4-4M5 5h.01M9 9h.01"/></svg>
        <span>CHALLENGE</span>
      </div>
      <h3>{challenge.title}</h3>
      <p>{challenge.description}</p>
      <div className="challenge-card__result">
        <span>{challenge.result}</span>
        <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5.5"/><path d="m5.5 8 1.7 1.7 3.4-3.5"/></svg>
      </div>
    </article>
  );
}

function StrategicExpansionCard() {
  return (
    <article className="challenge-card challenge-card--strategic">
      <div className="strategic-card__label">
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M9.2 1.5 3.8 8h3.5l-.5 6.5L12.2 7H8.7l.5-5.5Z"/></svg>
        <span>STRATEGIC EXPANSION</span>
      </div>
      <h3>BUSINESS GROWING RAPIDLY?</h3>
      <p>Build bulletproof, modular infrastructure capable of handling 100x traffic surges without latency, bottlenecks, or unexpected cloud crashes during peak business quarters.</p>
      <div className="strategic-card__footer">
        <span>Result: Zero Bottlenecks At Massive Scale</span>
        <a href="#contact">Engineer Scale Now <span aria-hidden="true">→</span></a>
      </div>
    </article>
  );
}

export default function ChallengesSection() {
  return (
    <section className="challenges-section" aria-labelledby="challenges-title">
      <div className="challenges-inner">
        <header className="challenges-heading">
          <span className="challenges-eyebrow">DIRECT VALUE RESOLUTION</span>
          <h2 id="challenges-title">Technology Challenges. Solved.</h2>
          <p>We don't just provide technology. We solve the structural business friction holding your organization<br className="challenges-copy-break" /> back from compounding scale.</p>
        </header>
        <div className="challenges-grid">
          {challenges.map((challenge) => <ChallengeCard challenge={challenge} key={challenge.title} />)}
          <StrategicExpansionCard />
        </div>
      </div>
    </section>
  );
}
