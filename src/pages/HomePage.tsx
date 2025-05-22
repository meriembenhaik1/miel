import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutSection from '../components/home/AboutSection';
import AlgerianMap from '../components/home/AlgerianMap';
import BenefitsSection from '../components/home/BenefitsSection';
import Testimonials from '../components/home/Testimonials';
import FeaturedBlogs from '../components/home/FeaturedBlogs';
import Newsletter from '../components/home/Newsletter';
import { useEffect } from 'react';

const HomePage = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Youcef Miel | Premium Algerian Honey';
  }, []);
  
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BenefitsSection />
      <AboutSection />
      <AlgerianMap />
      <Testimonials />
      <FeaturedBlogs />
      
    </>
  );
};

export default HomePage;