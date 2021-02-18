import React from 'react';
import { Box, Button, ButtonProps } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import { useApolloClient } from '@apollo/client';
import { useLogoutMutation } from '../../../generated/graphql';

interface LogoutButtonProps {}

export const LogoutButton: React.FC<LogoutButtonProps> = (
  props: ButtonProps
) => {
  const [logout, { loading }] = useLogoutMutation();
  const apolloClient = useApolloClient();
  return (
    <Box>
      <Button
        {...props}
        display={{ md: 'inline-flex' }}
        fontSize={'md'}
        fontWeight={600}
        color={'white'}
        variant='ghost'
        isLoading={loading}
        leftIcon={<FiLogOut />}
        onClick={async () => {
          await logout();
          await apolloClient.resetStore();
        }}
      >
        Logout
      </Button>
    </Box>
  );
};
