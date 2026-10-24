import React from 'react';
import { services } from '../data/services';

export default function ConsultationModal({ onClose }) {
  const closeButtonRef = React.useRef(null);
  const [notice, setNotice] = React.useState('');

  React.useEffect(() => {
    const previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const focusable = Array.from(
          document.querySelectorAll('.consultation-modal button, .consultation-modal input, .consultation-modal select, .consultation-modal textarea')
        ).filter((element) => !element.disabled);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus?.();
    };
  }, [onClose]);

  function handleSubmit(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const body = [
      `Name: ${values.get('name')}`,
      `Business email: ${values.get('email')}`,
      `Phone: ${values.get('phone') || 'Not provided'}`,
      `Company: ${values.get('company') || 'Not provided'}`,
      `Service: ${values.get('service')}`,
      `Project details: ${values.get('brief') || 'Not provided'}`,
    ].join('\n');
    window.location.href = `mailto:svmitsolutions26@gmail.com?subject=${encodeURIComponent('Free consultation request')}&body=${encodeURIComponent(body)}`;
    setNotice('Your email app will open with the consultation details ready to send.');
  }

  return (
    <div className="consultation-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="consultation-modal-title">
        <button className="consultation-modal__close" type="button" onClick={onClose} ref={closeButtonRef} aria-label="Close consultation form">×</button>
        <header className="consultation-modal__header">
          <span>LET'S TALK ABOUT YOUR PROJECT</span>
          <h2 id="consultation-modal-title">Request Free Consultation</h2>
          <p>Tell us a little about what you're planning. Our team will get back to you.</p>
        </header>
        <form className="consultation-form" onSubmit={handleSubmit} onChange={() => notice && setNotice('')}>
          <label>Name *<input name="name" type="text" placeholder="Your name" autoComplete="name" required /></label>
          <label>Business email *<input name="email" type="email" placeholder="you@company.com" autoComplete="email" required /></label>
          <label>Phone<input name="phone" type="tel" placeholder="+91 95985 48727" autoComplete="tel" /></label>
          <label>Company<input name="company" type="text" placeholder="Company name" autoComplete="organization" /></label>
          <label className="consultation-form__full">Service you're interested in *
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              {services.map((service) => <option value={service.title} key={service.slug}>{service.title}</option>)}
            </select>
          </label>
          <label className="consultation-form__full">Project details<textarea name="brief" rows="4" placeholder="What would you like to build or improve?" /></label>
          <div className="consultation-form__footer consultation-form__full">
            <button className="consultation-form__submit" type="submit">Continue by Email <span aria-hidden="true">→</span></button>
            <span>No OTP required. You can contact us directly at svmitsolutions26@gmail.com.</span>
          </div>
          {notice && <p className="consultation-form__notice consultation-form__full" role="status">{notice}</p>}
        </form>
      </section>
    </div>
  );
}
