import React from 'react';
import { testimonials } from '../data/testimonials';

function StarIcon() {
  return (
    <svg className="testimonial-star" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function VerifiedCheckIcon() {
  return (
    <svg className="testimonial-verified__icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207z" clipRule="evenodd" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__top">
        <div className="testimonial-card__stars" aria-label={`Rated ${item.rating} out of 5 stars`}>
          {Array.from({ length: item.rating }).map((_, idx) => (
            <StarIcon key={idx} />
          ))}
          <span className="testimonial-card__score">5.0</span>
        </div>
        <QuoteIcon />
      </div>

      <div className="testimonial-card__metric">
        <span className="testimonial-card__metric-badge">
          <span className="testimonial-card__metric-dot" />
          {item.metric}
        </span>
      </div>

      <blockquote className="testimonial-card__quote">
        “{item.content}”
      </blockquote>

      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar" style={{ background: item.avatarGradient }} aria-hidden="true">
          {item.avatarInitials}
        </div>
        <div className="testimonial-card__author-info">
          <div className="testimonial-card__author-name-row">
            <h3 className="testimonial-card__name">{item.clientName}</h3>
            {item.verified && (
              <span className="testimonial-card__verified" title="Verified Client Deployment">
                <VerifiedCheckIcon />
                <span>Verified</span>
              </span>
            )}
          </div>
          <p className="testimonial-card__role">{item.role}</p>
          <p className="testimonial-card__company">{item.company}</p>
          <span className="testimonial-card__project-tag">
            <strong>Delivered:</strong> {item.project}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-title">
      <span id="reviews" aria-hidden="true" />
      <div className="testimonials-section__inner">
        <header className="testimonials-section__heading">
          <div className="testimonials-section__intro">
            <span className="testimonials-section__eyebrow">CLIENT REVIEWS & TRUST</span>
            <h2 id="testimonials-title">Real Feedback from Verified Partners.</h2>
            <p>
              Direct words from founders, direct stakeholders, and operational leads who rely on systems
              built and maintained by SVM IT Solutions.
            </p>
          </div>
          <div className="testimonials-section__trust-badge">
            <div className="trust-badge__item">
              <span className="trust-badge__num">4.9 / 5</span>
              <span className="trust-badge__lbl">Client Rating</span>
            </div>
            <div className="trust-badge__divider" />
            <div className="trust-badge__item">
              <span className="trust-badge__num">100%</span>
              <span className="trust-badge__lbl">On-Time Delivery</span>
            </div>
            <div className="trust-badge__divider" />
            <div className="trust-badge__item">
              <span className="trust-badge__num">Zero</span>
              <span className="trust-badge__lbl">Vendor Lock-in</span>
            </div>
          </div>
        </header>

        <div className="testimonials-section__grid">
          {testimonials.map((item) => (
            <TestimonialCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
