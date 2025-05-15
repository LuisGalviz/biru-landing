import { getTranslation } from '@/i18n/getTranslation';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ServicesSection from '@/sections/ServicesSection';
import FeaturesSection from '@/sections/FeaturesSection';
import PortfolioSection from '@/sections/PortfolioSection';
import PricingSection from '@/sections/PricingSection';
import TeamSection from '@/sections/TeamSection';
import BlogSection from '@/sections/BlogSection';
import ContactSection from '@/sections/ContactSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function HomePage({ params }: { params: { lng: string } }) {
  const { t } = await getTranslation(params.lng, 'common');

  return (
    <>
      <Header />
      <main>
        <HeroSection title={t('hero_title')} />
        <AboutSection />
        <ServicesSection />
        <FeaturesSection />
        <PortfolioSection />
        <PricingSection />
        <TeamSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
