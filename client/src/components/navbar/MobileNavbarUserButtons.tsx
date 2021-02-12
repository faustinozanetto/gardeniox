import React from 'react';
import { Box } from '@chakra-ui/react';
import { RegisterButton } from './RegisterButton';
import { SignInButton } from './SignInButton';

interface MobileNavbarUserButtons {}

export const MobileNavbarUserButtons: React.FC<MobileNavbarUserButtons> = ({}) => {
  return (
    <Box d='flex' justifyContent='center' alignContent='center'>
      {/* @ts-ignore  */}
      <RegisterButton mr={4} />
      {/* @ts-ignore  */}
      <SignInButton ml={4} />
    </Box>
  );
};
