import { FooterSectionProps } from '@/src/layout/footer/v1';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description:
      'Lorem Ipsum is simply is dumi omy is text Loremo Ipsum is simply is out no our o dummy text.',
    socialLinks: [
      {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/encodixOfficial',
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
  },
  columnOne: {
    title: 'Encodix Solutions',
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
        label: 'Smart Contract Development',
        href: '/services/smart-contract-development',
        openNewTab: false,
      },
      {
        label: 'Web App Development',
        href: '/services/web-app-development',
        openNewTab: false,
      },
      {
        label: 'Mobile App Development',
        href: '/services/mobile-app-development',
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
  columnTwo: {
    title: 'Address',
    location: '26 Stevenston St, Holytown, Motherwell ML1 4RG, UK',
    mails: ['contact@encodix.org', 'ceo@encodix.org'],
    phoneNumbers: ['+44-7933-021313', '+92-341-4264969'],
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
  footerBottom: {
    copyrightText: '© Encodix 2024 | All Rights Reserved',
    links: [
      {
        label: 'Trams & Condition',
        href: '/terms-conditions',
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
