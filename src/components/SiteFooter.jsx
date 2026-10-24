import React from 'react';
import { services } from '../data/services';
import WhatsAppConnectButton from './WhatsAppConnectButton';

const footerCompanyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Case Studies', href: '#portfolio' },
  { label: 'Client Domains', href: '#industries' },
  { label: 'Careers', href: '#contact' },
];

function FooterLinkColumn({ title, links }) {
  return (
    <nav className="site-footer__link-column" aria-label={`${title} links`}>
      <h2>{title}</h2>
      <ul>{links.map((link) => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}</ul>
    </nav>
  );
}

function FooterContact() {
  return (
    <div className="site-footer__contact">
      <h2>Contact &amp; Global Reach</h2>
      <ul>
        <li>
          <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="4" width="15" height="12" rx="1.5"/><path d="m3.5 5.5 6.5 5 6.5-5"/></svg>
          <a href="mailto:svmitsolutions26@gmail.com">svmitsolutions26@gmail.com</a>
        </li>
        <li>
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 2.5H3.5a1 1 0 0 0-1 1c0 8.1 6.5 14.6 14.6 14.6a1 1 0 0 0 1-1v-2.5l-4-1.6-1.7 1.7a11 11 0 0 1-6.5-6.5l1.7-1.7L6 2.5Z"/></svg>
          <a href="tel:+919598548727">+91 95985 48727</a>
        </li>
        <li>
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 2.5H3.5a1 1 0 0 0-1 1c0 8.1 6.5 14.6 14.6 14.6a1 1 0 0 0 1-1v-2.5l-4-1.6-1.7 1.7a11 11 0 0 1-6.5-6.5l1.7-1.7L6 2.5Z"/></svg>
          <a href="tel:+919315878702">+91 93158 78702</a>
        </li>
        <li className="site-footer__reach">
          <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.5"/><path d="M2.7 10h14.6M10 2.5a12 12 0 0 1 0 15M10 2.5a12 12 0 0 0 0 15"/></svg>
          <span>Global Distributed Engineering Teams across North America, EMEA &amp; APAC</span>
        </li>
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  const footerServiceLinks = services.map((service) => ({
    label: service.title,
    href: `#service/${service.slug}`,
  }));

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__columns">
          <div className="site-footer__brand-column">
            <img className="site-footer__logo" src="/svm-it-solutions-logo.png" alt="SVM IT Solutions" loading="lazy" />
            <p>Next-generation enterprise IT engineering, resilient multi-cloud architecture, and full-spectrum digital transformation consulting.</p>
            <span className="site-footer__badge"><i aria-hidden="true" />Global Reach Verified</span>
          </div>
          <FooterLinkColumn title="Company" links={footerCompanyLinks} />
          <FooterLinkColumn title="Services" links={footerServiceLinks} />
          <FooterContact />
        </div>
        <div className="site-footer__legal">
          <span>© 2026 SVM IT Solutions. All Rights Reserved.</span>
          <div><span>Privacy Policy</span><span>Terms of Service</span></div>
        </div>
      </div>
      <WhatsAppConnectButton />
    </footer>
  );
}
