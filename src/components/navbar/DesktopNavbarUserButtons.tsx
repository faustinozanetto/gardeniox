import React from 'react';
import { Stack } from '@chakra-ui/react';
import { RegisterButton } from './RegisterButton';
import { SignInButton } from './SignInButton';

interface DesktopNavbarUserButtonsProps {}

export const DesktopNavbarUserButtons: React.FC<DesktopNavbarUserButtonsProps> = ({}) => {
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={'flex-end'}
      direction={'row'}
      spacing={6}
    >
      <RegisterButton />
      <SignInButton />
    </Stack>
  );
};
