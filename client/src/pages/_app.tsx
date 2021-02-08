import React from 'react';
import { Box, ChakraProvider, CSSReset } from '@chakra-ui/react';

const App = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider>
      <Box w='100%' h='100%' bgGradient='linear(whitesmoke 0%, white 25%)'>
        <CSSReset />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
