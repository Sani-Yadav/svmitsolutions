import React from 'react';

function ArchitectureIllustration() {
  return (
    <div className="architecture" role="img" aria-label="SVM Core architecture connected to cloud, web, software, automation, and data">
      <svg className="orbit-svg" viewBox="0 0 320 320" aria-hidden="true">
        <circle className="orbit orbit-outer" cx="160" cy="160" r="145" />
        <circle className="orbit orbit-middle" cx="160" cy="160" r="124" />
        <circle className="orbit orbit-inner" cx="160" cy="160" r="99" />
      </svg>
      <div className="orbit-motion orbit-motion--clockwise" aria-hidden="true"><i className="orbit-dot orbit-dot--orange" /></div>
      <div className="orbit-motion orbit-motion--counterclockwise" aria-hidden="true"><i className="orbit-dot orbit-dot--blue" /></div>
      <div className="orbit-motion orbit-motion--inner-orange" aria-hidden="true"><i className="orbit-dot orbit-dot--orange orbit-dot--inner" /></div>
      <div className="orbit-motion orbit-motion--inner-blue" aria-hidden="true"><i className="orbit-dot orbit-dot--blue orbit-dot--inner" /></div>
      <div className="core-node">
        <svg viewBox="0 0 32 32" className="network-icon" aria-hidden="true">
          <path d="M16 5v22M6.5 10.5l19 11M25.5 10.5l-19 11M9 16h14" />
          <circle cx="16" cy="5" r="2"/><circle cx="6.5" cy="10.5" r="2"/><circle cx="25.5" cy="10.5" r="2"/>
          <circle cx="9" cy="16" r="2"/><circle cx="23" cy="16" r="2"/><circle cx="6.5" cy="21.5" r="2"/>
          <circle cx="25.5" cy="21.5" r="2"/><circle cx="16" cy="27" r="2"/>
        </svg>
        <strong>SVM CORE</strong>
        <small>ARCHITECTURE</small>
      </div>
      <span className="orbit-label cloud"><i />CLOUD</span>
      <span className="orbit-label web"><i />WEB</span>
      <span className="orbit-label software"><i />SOFTWARE</span>
      <span className="orbit-label automation"><i />AUTOMATION</span>
      <span className="orbit-label data"><i />DATA</span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <main className="hero" id="home">
      <div className="hero-inner">
        <section className="hero-copy" aria-labelledby="hero-title">
          <div className="eyebrow"><i />SMART TECHNOLOGY. REAL BUSINESS IMPACT.</div>
          <h1 id="hero-title">Technology That Moves<br className="desktop-break" /> Your <span className="business">Business</span> <span className="forward">Forward.</span></h1>
          <p className="intro">We design, develop and deliver scalable digital solutions that help businesses operate smarter, grow faster and stay ready for what's next.</p>
          <div className="hero-buttons">
            <a className="primary-button" href="#contact">Start a Project <span aria-hidden="true">→</span></a>
            <a className="secondary-button" href="#services">Explore Services <span aria-hidden="true">↓</span></a>
          </div>
          <p className="highlights"><span>Technology</span><i /> <span>Innovation</span><i /> <span>Long-Term Partnership</span></p>
          <div className="metrics" aria-label="SVM IT Solutions metrics">
            <article className="metric"><strong>99.9%</strong><span>SYSTEM UPTIME</span></article>
            <article className="metric"><strong className="cyan">50K+</strong><span>TELEMETRY OPS/MO</span></article>
            <article className="metric"><strong className="orange">100%</strong><span>SCALABLE CLOUD</span></article>
          </div>
        </section>
        <ArchitectureIllustration />
      </div>
    </main>
  );
}
