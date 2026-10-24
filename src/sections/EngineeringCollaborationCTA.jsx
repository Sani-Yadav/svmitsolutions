import React from 'react';
import { whatsappUrl } from '../utils/constants';

export default function EngineeringCollaborationCTA() {
  return (
    <section className="collaboration-cta" aria-labelledby="collaboration-cta-title">
      <div className="collaboration-cta__panel">
        <div className="collaboration-cta__orbits" aria-hidden="true">
          <span className="collaboration-cta__orbit collaboration-cta__orbit--solid" />
          <span className="collaboration-cta__orbit collaboration-cta__orbit--outer" />
          <span className="collaboration-cta__orbit collaboration-cta__orbit--inner" />
        </div>
        <div className="collaboration-cta__content">
          <span className="collaboration-cta__eyebrow">ENGINEERING COLLABORATION</span>
          <h2 id="collaboration-cta-title">Have an Idea? Let's Build It Together.</h2>
          <p>Tell us what you're trying to build, improve or automate. Our senior engineering team will evaluate your needs and prepare a customized implementation plan with exact milestones.</p>
          <div className="collaboration-cta__actions">
            <a className="collaboration-cta__primary" href="#contact">Start Your Project <span aria-hidden="true">→</span></a>
            <a className="collaboration-cta__whatsapp" href={whatsappUrl}>
              <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 3.5h14v10H9l-4.5 3v-3H3v-10Z"/><path d="M7 7.5h6M7 10h4"/></svg>
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
