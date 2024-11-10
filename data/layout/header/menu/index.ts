import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    subMenuItems: [
      {
        label: 'Service List',
        href: '/services',
      },
      {
        label: 'Service single',
        href: '/services/single',
      },
    ],
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
  },
  {
    label: 'Testimonials',
    href: '/testimonial',
  },
  {
    title: 'Products',
    subMenuItems: [
      {
        label: 'Product List',
        href: '/project',
      },
      {
        label: 'Project single',
        href: '/project/single',
      },
    ],
  },
  {
    title: 'Blog',
    subMenuItems: [
      {
        label: 'Blog List',
        href: '/blog',
      },
      {
        label: 'Blog single',
        href: '/blog/single',
      },
    ],
  },
  {
    title: 'More',
    subMenuItems: [
      {
        label: 'Team',
        href: '/team',
      },
      {
        label: 'Pricing',
        href: '/pricing',
      },
      {
        label: 'FAQs',
        href: '/faq',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
