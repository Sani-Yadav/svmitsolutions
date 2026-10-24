import React from 'react';
import { whatsappUrl } from '../utils/constants';

export default function WhatsAppConnectButton() {
  const [contactVisible, setContactVisible] = React.useState(false);

  React.useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (!contactSection || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setContactVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );
    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      className={`whatsapp-float${contactVisible ? ' whatsapp-float--hidden' : ''}`}
      href={whatsappUrl}
      aria-label="Connect with SVM IT Solutions on WhatsApp"
    >
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M3 3.5h14v10H9l-4.5 3v-3H3v-10Z"/>
        <path d="M7 7.5h6M7 10h4"/>
      </svg>
      <span>WhatsApp Connect</span>
      <i aria-hidden="true" />
    </a>
  );
}
