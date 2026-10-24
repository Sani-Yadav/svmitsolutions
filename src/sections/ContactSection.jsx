import React from 'react';
import { contactDetails } from '../data/contactDetails';
import { inquiryServices } from '../data/inquiryServices';

function ContactInfoRow({ item }) {
  return (
    <div className="contact-info-row">
      <span className="contact-info-row__icon"><svg viewBox="0 0 24 24" aria-hidden="true">{item.icon}</svg></span>
      <div className="contact-info-row__copy">
        <span className="contact-info-row__label">{item.label}</span>
        {item.href ? <a href={item.href}>{item.value}</a> : <span className="contact-info-row__value">{item.value}</span>}
      </div>
    </div>
  );
}

function FormField({ id, label, children, fullWidth = false }) {
  return (
    <div className={`contact-form__field${fullWidth ? ' contact-form__field--full' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}

function ContactInfoCard() {
  return (
    <aside className="contact-info-card" aria-labelledby="contact-info-title">
      <span className="contact-section__eyebrow">DIRECT ACCESS</span>
      <h2 id="contact-info-title">Let's Connect Directly.</h2>
      <p className="contact-info-card__intro">Speak immediately with our senior enterprise technical team. No sales representatives, no endless triage.</p>
      <div className="contact-info-card__rows">
        {contactDetails.map((item) => <ContactInfoRow item={item} key={item.label} />)}
      </div>
      <div className="contact-info-card__notice">
        <i aria-hidden="true" />
        <span>Guaranteed executive technical response within <strong>24 hours.</strong></span>
      </div>
    </aside>
  );
}

function ProjectInquiryForm() {
  const [notice, setNotice] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setNotice('Submission integration is not connected yet. Please email svmitsolutions26@gmail.com to send your enquiry.');
  }

  return (
    <div className="contact-form-card">
      <form className="contact-form" onSubmit={handleSubmit} onChange={() => notice && setNotice('')}>
        <div className="contact-form__grid">
          <FormField id="contact-name" label="Full Name *">
            <input id="contact-name" name="name" type="text" placeholder="Alex Mercer" autoComplete="name" required />
          </FormField>
          <FormField id="contact-email" label="Business Email *">
            <input id="contact-email" name="email" type="email" placeholder="alex@company.com" autoComplete="email" required />
          </FormField>
          <FormField id="contact-phone" label="Phone / WhatsApp">
            <input id="contact-phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" autoComplete="tel" />
          </FormField>
          <FormField id="contact-company" label="Company / Organization">
            <input id="contact-company" name="company" type="text" placeholder="Acme Global Inc." autoComplete="organization" />
          </FormField>
          <FormField id="contact-service" label="Service Required *" fullWidth>
            <select id="contact-service" name="service" defaultValue="" required>
              <option value="" disabled>Select Primary Area of Engagement</option>
              {inquiryServices.map((service) => <option value={service} key={service}>{service}</option>)}
            </select>
          </FormField>
          <FormField id="contact-brief" label="Project Brief & Objectives *" fullWidth>
            <textarea id="contact-brief" name="brief" placeholder="Describe your technical roadmap, user volume, timeline expectations, or current bottlenecks..." required />
          </FormField>
        </div>
        <button className="contact-form__submit" type="submit">Send Project Enquiry <span aria-hidden="true">▷</span></button>
        {notice && <p className="contact-form__notice" role="status" aria-live="polite">{notice}</p>}
      </form>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-label="Contact SVM IT Solutions">
      <div className="contact-section__inner">
        <ContactInfoCard />
        <ProjectInquiryForm />
      </div>
    </section>
  );
}
