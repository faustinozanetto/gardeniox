import React from 'react';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils';
import { AppLayout } from '../layout/AppLayout';
import { WhyUseSection } from '../components/homeSection/home/WhyUseSection';
import { SEO } from '../components/seo/SEO';
import { HeroSection } from '../components/homeSection/home/HeroSection';

const Home = () => {
  return (
    <AppLayout>
      <SEO
        title='Gardeniox'
        description='Plants & Garden Manager'
        keywords='plants, plots, garden'
      />
      <HeroSection />
      <WhyUseSection />
    </AppLayout>
  );
};

export default Home;
