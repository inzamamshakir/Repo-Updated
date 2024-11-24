import { FooterSectionProps } from '@/src/layout/footer/v2';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  socialLinks: [
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/encodixOfficial',
    },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/company/encodix',
    },
    {
      icon: <FaTwitter />,
      href: 'https://twitter.com/',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/encodixOfficial',
    },
    {
      icon: <FaWhatsapp />,
      href: 'https://wa.me/447933021313',
    },
  ],
  columnOne: {
    title: 'Quick Links',
    links: [
      {
        label: 'Home',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'About us',
        href: '/about',
        openNewTab: false,
      },
      {
        label: 'Services',
        href: '/services',
        openNewTab: false,
      },
      {
        label: 'Portfolio',
        href: '/portfolio',
        openNewTab: false,
      },
      {
        label: 'Contact',
        href: '/contact',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Service Links',
    links: [
      {
        label: 'Blockchain Consulting',
        href: '/services/blockchain-consulting',
        openNewTab: false,
      },
      {
        label: 'Blockchain Development',
        href: '/services/blockchain-development',
        openNewTab: false,
      },
      {
        label: 'Web App Development',
        href: '/services/web-app-development',
        openNewTab: false,
      },
      {
        label: 'Mobile Apps Development',
        href: '/mobile-app-development',
        openNewTab: false,
      },
      {
        label: 'E-Commerce Development',
        href: '/services/ecom-development',
        openNewTab: false,
      },
      {
        label: 'Server Deployment',
        href: '/services/server-deployment',
        openNewTab: false,
      },
    ],
  },

  columnThree: {
    title: 'Recent Blog',
    blogs: [
      {
        image: {
          src: '/assets/images/blog/blog-sm-1.jpg',
          alt: 'We provide a range of IT solutions',
        },
        title: 'We provide a range of IT solutions',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
      {
        image: {
          src: '/assets/images/blog/blog-sm-2.jpg',
          alt: 'IT solutions enhance efficiency',
        },
        title: 'IT solutions enhance efficiency',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
    ],
  },
  columnFour: {
    title: 'Contact Us',
    phoneNumber: '+44 7933-021313',
    mail: 'contact@encodix.org',
    location: '26 Stevenston St, Holytown, Motherwell ML1 4RG, UK',
  },
  footerBottom: {
    copyrightText: '© Encodix  2024 | All Rights Reserved',
    links: [
      {
        label: 'Trams & Condition',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Privacy Policy',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Contact Us',
        href: '/contact',
        openNewTab: false,
      },
    ],
  },
};
