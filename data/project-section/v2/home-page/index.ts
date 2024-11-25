import { ProjectSectionProps } from '@/src/sections/project/v2';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'Our Projects',
    title: 'Redefining Boundaries with Smart Solutions.',
  },
  link: {
    label: 'more projects',
    href: '/projects',
    openNewTab: false,
  },
  projectCategories: [
    {
      label: 'ALL PROJECTS',
      value: '*',
    },
    {
      label: 'Blockchain Development',
      value: '.BlockchainDevelopment',
    },
    {
      label: 'Web App Development',
      value: '.WebAppDevelopment',
    },
    {
      label: 'Mobile App Development',
      value: '.MobileAppDevelopment',
    },
    {
      label: 'E-Commerce Development',
      value: '.EComDevelopment',
    },
    {
      label: 'Server Deployment',
      value: '.ServerDevelopment',
    },
  ],
  projects: [
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/11.png',
        alt: 'Project Quantum Leap',
      },
      title: 'Project Quantum Leap',
      description: 'InfinitiTech',
      tags: ['BlockchainDevelopment', 'WebAppDevelopment'],
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/12.png',
        alt: 'Project Cyber Fusion',
      },
      title: 'Project Cyber Fusion',
      description: 'ByteCrafters',
      tags: ['ServerDevelopment'],
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/13.png',
        alt: 'Project Cloud Horizon',
      },
      title: 'Project Cloud Horizon',
      description: 'DataWave Tech',
      tags: ['WebAppDevelopment', 'EComDevelopment'],
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/13.png',
        alt: 'Project Data Harbor',
      },
      title: 'Project Data Harbor',
      description: 'QuantumSolve',
      tags: ['ServerDevelopment'],
    },
  ],
};
