import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ProjectDetailsSection } from '@/src/sections/project-details/v1';
import { Metadata } from 'next';
import bannerImage from 'public/assets/images/hero/hero-3.jpg';

export const metadata: Metadata = {
  title: 'Encodix | Project details',
  description: 'Encodix - Discover the Best with Encodix',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Project Details"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Project Details',
          },
        ]}
        heroImageUrl={bannerImage.src}
      />
      <ProjectDetailsSection />
      <Footer />
    </>
  );
}
