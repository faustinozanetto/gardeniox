import React from 'react';
import { Box, Button, ButtonProps, useColorModeValue } from '@chakra-ui/react';
import { useUserLogoutMutation } from '../../generated/graphql';
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
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={useColorModeValue('red.300', 'red.400')}
        _hover={{
          bg: 'red.300',
        }}
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
