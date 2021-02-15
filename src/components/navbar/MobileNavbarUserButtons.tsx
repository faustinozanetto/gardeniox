import React from 'react';
import { VStack, Flex } from '@chakra-ui/react';
import { RegisterButton } from './RegisterButton';
import { SignInButton } from './SignInButton';

interface MobileNavbarUserButtons {}

export const MobileNavbarUserButtons: React.FC<MobileNavbarUserButtons> = ({}) => {
  return (
    <VStack
      spacing={4}
      alignContent='center'
      justifyContent='center'
      align='stretch'
    >
      <RegisterButton w='100%' />
      <SignInButton w='100%' />
    </VStack>
  );
};
