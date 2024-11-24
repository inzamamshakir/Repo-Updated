import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { TermsConditionsSection } from '@/src/sections/terms-conditions/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { Metadata } from 'next';
import bannerImage from 'public/assets/images/hero/hero-3.jpg';

export const metadata: Metadata = {
  title: 'Encodix | Blog details',
  description: 'Encodix - Discover the Best with Encodix',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Terms & Conditions"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Terms & Conditions',
          },
        ]}
        heroImageUrl={bannerImage.src}
      />
      <TermsConditionsSection />
      <Footer />
    </>
  );
}
