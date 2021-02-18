import React from 'react';
import { Box, Button, ButtonProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const RegisterButton: React.FC<{}> = (props: ButtonProps) => {
  const router = useRouter();
  return (
    <Box>
      <Button
        {...props}
        variant='outline'
        fontWeight='500'
        colorScheme='pink'
        onClick={() => {
          router.push('/user/register');
        }}
      >
        Register
      </Button>
    </Box>
  );
};
