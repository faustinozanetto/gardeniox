import React from 'react';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils';
import { AppLayout } from '../layout/AppLayout';

const Home = () => {
  return (
    <AppLayout>
      <h1>hi</h1>
    </AppLayout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Home);
