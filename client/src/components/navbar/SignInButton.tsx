import React from 'react';
import { Box, Button, ButtonProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface SignInButtonProps {}

export const SignInButton: React.FC<SignInButtonProps> = (
  props: ButtonProps
) => {
  const router = useRouter();
  return (
    <Box>
      <Button
        {...props}
        display={{ md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'purple.400'}
        _hover={{
          bg: 'purple.300',
        }}
        onClick={() => {
          router.push('/user/login');
        }}
      >
        Sign In
      </Button>
    </Box>
  );
};
