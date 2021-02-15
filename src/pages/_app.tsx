import React from 'react';
import { Box, ChakraProvider, CSSReset } from '@chakra-ui/react';
import Head from 'next/head';
import { theme } from '../style';

const App = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box as='main'>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
