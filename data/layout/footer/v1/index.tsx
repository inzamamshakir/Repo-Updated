import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

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
    title: 'Get Free Link',
    links: [
      {
        label: 'Software Development',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Data Analytics',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'IT Consulting',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'UI/UX Design',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Network Solutions',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Others',
        href: '/',
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
