import React from 'react';
import { services } from './data/services';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import ConsultationModal from './components/ConsultationModal';
import SiteFooter from './components/SiteFooter';
import Home from './pages/Home';
import ServiceDetailPage from './pages/ServiceDetailPage';

function findServiceFromHash() {
  const match = window.location.hash.match(/^#service\/([a-z0-9-]+)$/i);
  return match ? services.find((service) => service.slug === match[1]) || null : null;
}

export default function App() {
  const [activeService, setActiveService] = React.useState(findServiceFromHash);
  const [consultationOpen, setConsultationOpen] = React.useState(false);

  React.useEffect(() => {
    const syncRoute = () => setActiveService(findServiceFromHash());
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  React.useEffect(() => {
    if (activeService) {
      document.title = `${activeService.title} | SVM IT Solutions`;
      window.scrollTo(0, 0);
      return;
    }
    document.title = 'SVM IT Solutions — Technology That Moves Your Business';
    const targetId = window.location.hash.slice(1);
    if (targetId) window.requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView());
  }, [activeService]);

  return (
    <>
      <LoadingScreen />
      <Header servicePage={Boolean(activeService)} onConsultationClick={() => setConsultationOpen(true)} />
      {activeService ? <ServiceDetailPage service={activeService} /> : <Home />}
      <SiteFooter />
      {consultationOpen && <ConsultationModal onClose={() => setConsultationOpen(false)} />}
    </>
  );
}
