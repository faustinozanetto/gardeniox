import React from 'react';
import { Box, Button, ButtonProps, useColorModeValue } from '@chakra-ui/react';
import { useUserLogoutMutation } from '../../generated/graphql';
import { FiLogOut } from 'react-icons/fi';
import { useRouter } from 'next/router';

interface LogoutButtonProps {}

export const LogoutButton: React.FC<LogoutButtonProps> = (
  props: ButtonProps
) => {
  const [, logout] = useUserLogoutMutation();
  const router = useRouter();
  return (
    <Box>
      <Button
        {...props}
        display={{ md: 'inline-flex' }}
        fontSize={'md'}
        fontWeight={600}
        color={'white'}
        variant='ghost'
        leftIcon={<FiLogOut />}
        onClick={async () => {
          await logout();
          router.reload();
        }}
      >
        Logout
      </Button>
    </Box>
  );
};
