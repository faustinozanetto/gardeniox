import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Wrapper, WrapperVariant } from './index';

interface LayoutProps {
  variant?: WrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <Heading as='h1' p={4} color='red.500'>
        Gardeniox
      </Heading>
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};
