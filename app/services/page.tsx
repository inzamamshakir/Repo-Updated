import { serviceSectionData } from '@/data/service-section/v1/service-list-page';
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceSection } from '@/src/sections/service/v1';
import { Metadata } from 'next';
import bannerImage from 'public/assets/images/hero/hero-3.jpg';

export const metadata: Metadata = {
  title: 'Encodix | Services',
  description: 'Encodix - Discover the Best with Encodix',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Services"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Service',
          },
        ]}
        heroImageUrl={bannerImage.src}
      />
      <ServiceSection {...serviceSectionData} />
      <Footer />
    </>
  );
}
