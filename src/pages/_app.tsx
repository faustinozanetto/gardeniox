import React from 'react';
import { Box, ChakraProvider, CSSReset } from '@chakra-ui/react';
import Head from 'next/head';
import { theme } from '../style';

const App = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&family=Inter:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Box as='main'>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
