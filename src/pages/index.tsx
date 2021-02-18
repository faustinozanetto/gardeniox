import React from 'react';
import { AppLayout } from '../layout/AppLayout';
import { WhyUseSection } from '../components/homeSection/home/WhyUseSection';
import { HeroSection } from '../components/homeSection/home/HeroSection';
import { withApollo } from '../utils/apollo/withApollo';
import { TeamSection } from '../components/homeSection/home/TeamSection';

const Home = () => {
  return (
    <AppLayout>
      <HeroSection />
      <WhyUseSection />
      <TeamSection />
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(Home);
