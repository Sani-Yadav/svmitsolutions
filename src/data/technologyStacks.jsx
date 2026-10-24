import React from 'react';

export const technologyStacks = [
  {
    title: 'Frontend',
    description: 'Reactive, pixel-perfect user interfaces with ultra-fast initial renders.',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    status: 'SSR / Static Optimized',
    accent: 'cyan',
    icon: <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="3.5" width="15" height="10" rx="1.5"/><path d="M7 16.5h6M10 13.5v3M5.5 6.5h9"/></svg>,
  },
  {
    title: 'Backend & APIs',
    description: 'Fault-tolerant distributed microservices and low-latency API pipelines.',
    tags: ['Node.js', 'Python', 'Django', 'Go / Golang', 'PHP Laravel'],
    status: 'REST & GraphQL Ready',
    accent: 'orange',
    icon: <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="3" y="3.5" width="14" height="5.5" rx="1"/><rect x="3" y="11" width="14" height="5.5" rx="1"/><path d="M6 6.2h.1M9 6.2h5M6 13.8h.1M9 13.8h5"/></svg>,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Infrastructure as Code (IaC) with automated multi-environment pipelines.',
    tags: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    status: 'Zero-Downtime CI/CD',
    accent: 'cyan',
    icon: <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5.4 15.5h9.1a3.4 3.4 0 0 0 .5-6.8 5.3 5.3 0 0 0-10.1.1 3.4 3.4 0 0 0 .5 6.7Z"/><path d="m7.5 10.5 2.5-2.3 2.5 2.3M10 8.4v5"/></svg>,
  },
  {
    title: 'Mobile & Data',
    description: 'High-throughput persistence, analytical caches, and fluid mobile runtimes.',
    tags: ['Flutter', 'React Native', 'PostgreSQL', 'MongoDB', 'Redis'],
    status: 'ACID Compliant & Cached',
    accent: 'orange',
    icon: <svg viewBox="0 0 20 20" aria-hidden="true"><ellipse cx="10" cy="4.5" rx="6.5" ry="2.5"/><path d="M3.5 4.5v10c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-10M3.5 9.5C3.5 10.9 6.4 12 10 12s6.5-1.1 6.5-2.5"/></svg>,
  },
];
