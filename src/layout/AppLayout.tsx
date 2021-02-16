import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Footer, Navbar } from '../components';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Navbar />
      <Box
        bg={useColorModeValue('gray.50', 'inherit')}
        minHeight='100vh'
        py={{ base: '3em', md: '7em' }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};
