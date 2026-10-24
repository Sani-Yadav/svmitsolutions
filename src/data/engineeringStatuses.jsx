import React from 'react';

export const engineeringStatuses = [
  {
    label: 'Cloud Microservices', status: '100% HEALTHY', accent: 'cyan',
    icon: <><rect x="4" y="4" width="16" height="6" rx="1"/><rect x="4" y="14" width="16" height="6" rx="1"/><path d="M7 7h.01M7 17h.01M10 7h7M10 17h7"/></>,
  },
  {
    label: 'Zero-Trust Security', status: 'ENCRYPTED', accent: 'orange',
    icon: <><path d="M12 3 19 6v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></>,
  },
  {
    label: 'Global CDN Delivery', status: '<14ms LATENCY', accent: 'pale',
    icon: <><path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 7v5l4 2M15 3h6v6"/></>,
  },
];
