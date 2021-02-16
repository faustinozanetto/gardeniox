import React from 'react';
import { Box, ChakraProvider, CSSReset } from '@chakra-ui/react';
import Head from 'next/head';
import NProgress from 'nprogress';
import { theme } from '../style';
import { Router } from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.png' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
