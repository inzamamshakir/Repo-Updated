import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { PricingSection } from '@/src/sections/pricing/version-2';
import { Metadata } from 'next';
import bannerImage from 'public/assets/images/hero/hero-3.jpg';

export const metadata: Metadata = {
  title: 'Encodix | Pricing',
  description: 'Encodix - Discover the Best with Encodix',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Pricing"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Pricing',
          },
        ]}
        heroImageUrl={bannerImage.src}
      />
      <PricingSection />
      <CtaSection className="section-padding-primary" />
      <Footer />
    </>
  );
}
