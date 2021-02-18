import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import NProgress from 'nprogress';
import { theme } from '../style';
import { Router } from 'next/router';
import { SEO } from '../components/seo/SEO';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <SEO
        title='Gardeniox | Garden Manager'
        description='Gardeniox is the perfect solution for your outdoor & indoor garden.'
        keywords='plants, plots, garden'
      />
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
