import React from 'react';
import Brand from './Brand';
import { navigation } from '../data/navigation';

export default function Header({ servicePage = false, onConsultationClick }) {
  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            className={!servicePage && item === 'Home' ? 'active' : ''}
            href={item === 'Home' ? '#home' : `#${item.toLowerCase()}`}
            key={item}
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="talk-button" type="button" onClick={onConsultationClick}>
          Free Consultation <span aria-hidden="true">→</span>
        </button>
      </div>
      <details className="mobile-menu">
        <summary aria-label="Open navigation menu"><span /><span /></summary>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a href={item === 'Home' ? '#home' : `#${item.toLowerCase()}`} key={item}>{item}</a>
          ))}
        </nav>
      </details>
    </header>
  );
}
