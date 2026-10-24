import React from 'react';

export const processStages = [
  {
    number: '01', title: 'DISCOVER',
    description: 'In-depth technical audits, stakeholder mapping, and scope alignment.',
    label: 'Audit Stage', accent: 'blue',
    icon: <><circle cx="10.8" cy="10.8" r="5.8"/><path d="m15.2 15.2 4.3 4.3"/></>,
  },
  {
    number: '02', title: 'STRATEGIZE',
    description: 'Cloud architecture blueprints, database modeling, and milestone schedules.',
    label: 'Roadmap', accent: 'blue',
    icon: <><path d="M4 5.5 10 3l6 2.5L10 8 4 5.5Z"/><path d="m4 9.5 6 2.5 6-2.5M4 13.5l6 2.5 6-2.5"/></>,
  },
  {
    number: '03', title: 'DESIGN',
    description: 'High-conversion UX design, design tokens, and clickable interactive prototypes.',
    label: 'UX Systems', accent: 'blue',
    icon: <><path d="M12 3.5 14 6l3-.2-.2 3 2.2 2-2.2 2 .2 3-3-.2-2 2.4-2-2.4-3 .2.2-3-2.2-2 2.2-2-.2-3 3 .2 2-2.5Z"/><circle cx="12" cy="10.8" r="2.6"/></>,
  },
  {
    number: '04', title: 'DEVELOP',
    description: 'Rigorous agile sprints, automated test coverage, and code reviews.',
    label: 'Sprint Execution', accent: 'orange',
    icon: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></>,
  },
  {
    number: '05', title: 'LAUNCH',
    description: 'CI/CD deployment, zero-downtime cutover, and live telemetry validation.',
    label: 'Production Deploy', accent: 'blue',
    icon: <><path d="M14.5 4.5c2.4-1.1 4.2-1 4.2-1s.1 1.8-1 4.2c-1.3 2.8-4 5.4-7.1 6.8L8 12l-2.5-2.5c1.4-3.1 4-5.8 7-7.1Z"/><path d="m8 12-3 .2-2 2 4 .8M12 16l-.2 3-2 2-.8-4M14.8 7.2h.01"/><circle cx="14.8" cy="7.2" r="1.6"/></>,
  },
  {
    number: '06', title: 'SUPPORT',
    description: 'Contractual SLAs, 24/7 incident monitoring, and continuous scaling.',
    label: 'SLA Guarantees', accent: 'blue',
    icon: <><path d="M12 3 19 6v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3Z"/><path d="m8.7 11.8 2.2 2.2 4.5-4.7"/></>,
  },
];
