import React from 'react';

export default function ServiceDetailPage({ service }) {
  return (
    <main className="service-detail-page">
      <section className="service-detail-hero" aria-labelledby="service-detail-title">
        <div className="service-detail__inner service-detail-hero__grid">
          <div className="service-detail-hero__copy">
            <a className="service-detail__back" href="#services"><span aria-hidden="true">←</span> All services</a>
            <span className="service-detail__eyebrow">WHAT WE DO · SERVICE {service.number}</span>
            <h1 id="service-detail-title">{service.title}</h1>
            <p>{service.detailIntro}</p>
            <div className="service-detail__actions">
              <a className="service-detail__primary" href="#contact">Discuss Your Project <span aria-hidden="true">→</span></a>
              <a className="service-detail__secondary" href="#services">Explore All Services</a>
            </div>
          </div>
          <aside className="service-detail__overview" aria-label={`${service.title} overview`}>
            <span className={`service-icon${service.accent ? ` service-icon--${service.accent}` : ''}`}>{service.icon}</span>
            <span className="service-detail__overview-label">BUILT AROUND YOUR BUSINESS</span>
            <h2>From a clear plan to dependable delivery.</h2>
            <p>{service.description}</p>
            <div className="service-detail__overview-foot"><i aria-hidden="true" /> Senior engineering team <span>·</span> Ongoing support</div>
          </aside>
        </div>
      </section>

      <section className="service-detail-scope" aria-labelledby="service-detail-scope-title">
        <div className="service-detail__inner">
          <header className="service-detail-section-heading">
            <span className="service-detail__eyebrow">A SPECIALIZED APPROACH</span>
            <h2 id="service-detail-scope-title">What we do in {service.title}</h2>
            <p>Every engagement is shaped around your users, systems, and business goals. Our team can support a focused initiative or take ownership from planning through launch.</p>
          </header>
          <div className="service-detail__deliverables">
            {service.deliverables.map((item, index) => (
              <article className="service-detail-deliverable" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item}</h3>
                <p>Practical engineering, clear milestones, and close collaboration with your team from discovery through delivery.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail-approach" aria-labelledby="service-detail-approach-title">
        <div className="service-detail__inner service-detail-approach__inner">
          <div>
            <span className="service-detail__eyebrow">HOW WE WORK</span>
            <h2 id="service-detail-approach-title">A delivery partner from first conversation to what's next.</h2>
          </div>
          <ol>
            <li><span>01</span><div><h3>Understand</h3><p>Align on objectives, constraints, and the people who will use the solution.</p></div></li>
            <li><span>02</span><div><h3>Plan and build</h3><p>Shape the right technical approach and deliver in visible, manageable steps.</p></div></li>
            <li><span>03</span><div><h3>Launch and improve</h3><p>Measure results, support adoption, and keep improving as needs evolve.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="service-detail-cta" aria-label="Start a service project">
        <div className="service-detail__inner service-detail-cta__inner">
          <div>
            <span className="service-detail__eyebrow">READY TO GET STARTED?</span>
            <h2>Let's put {service.title.toLowerCase()} to work for you.</h2>
          </div>
          <a className="service-detail__primary" href="#contact">Talk to Our Team <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </main>
  );
}
