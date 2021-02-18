import React from 'react';
import { VStack } from '@chakra-ui/react';
import { RegisterButton, LoginButton } from './buttons';

interface MobileNavbarUserButtons {}

export const MobileNavbarUserButtons: React.FC<MobileNavbarUserButtons> = ({}) => {
  return (
    <VStack
      spacing={4}
      alignContent='center'
      justifyContent='center'
      align='stretch'
    >
      {/* @ts-ignore */}
      <RegisterButton w='100%' />
      {/* @ts-ignore */}
      <LoginButton w='100%' />
    </VStack>
  );
};
