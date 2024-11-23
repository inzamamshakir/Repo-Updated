import { HeaderProps } from '@/src/layout/header/desktop/v2';
import { menuItemsProps } from '../menu';

export const headerData: HeaderProps = {
  contactInfo: {
    phone: '+44-793-3021313',
    mail: 'contact@encodix.org',
    address: '26 Stevenston St, Holytown, Motherwell ML1 4RG, UK',
  },
  ctaBtn: {
    href: '/contact',
    label: 'Get  A Quote',
    openNewTab: false,
  },
  menuItems: menuItemsProps,
};
