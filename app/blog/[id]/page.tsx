import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { BlogDetilsSection } from '@/src/sections/blog-details/v1';
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
        title="Blog Details"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Blog Details',
          },
        ]}
        heroImageUrl={bannerImage.src}
      />
      <BlogDetilsSection />
      <Footer />
    </>
  );
}
