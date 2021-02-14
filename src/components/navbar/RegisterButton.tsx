import React from 'react';
import { Box, Button, ButtonProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface RegisterButtonProps {}

export const RegisterButton: React.FC<RegisterButtonProps> = (
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
        bg={'pink.400'}
        _hover={{
          bg: 'pink.300',
        }}
        onClick={() => {
          router.push('/user/register');
        }}
      >
        Register
      </Button>
    </Box>
  );
};
