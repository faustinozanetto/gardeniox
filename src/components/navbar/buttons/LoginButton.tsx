import React from 'react';
import { Box, Button, ButtonProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const LoginButton: React.FC<{}> = (props: ButtonProps) => {
  const router = useRouter();
  return (
    <Box>
      <Button
        {...props}
        variant='outline'
        fontWeight='500'
        colorScheme='purple'
        onClick={() => {
          router.push('/user/login');
        }}
      >
        Login
      </Button>
    </Box>
  );
};
