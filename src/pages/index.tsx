import React from 'react';
import { AppLayout } from '../layout/AppLayout';
import { WhyUseSection } from '../components/homeSection/home/WhyUseSection';
import { SEO } from '../components/seo/SEO';
import { HeroSection } from '../components/homeSection/home/HeroSection';
import { withApollo } from '../utils/apollo/withApollo';

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

export default withApollo({ ssr: true })(Home);
