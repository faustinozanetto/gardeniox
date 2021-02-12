import React from 'react';
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { createUrqlClient } from '../../utils';
import { AppLayout } from '../../layout/AppLayout';
import { LoginForm } from '../../components/forms/LoginForm';
import { TextDivider } from '../../components/common/TextDivider';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <AppLayout>
      <Box
        bg={useColorModeValue('gray.50', 'inherit')}
        minH='100vh'
        mt='12'
        py='12'
        px={{ sm: '6', lg: '8' }}
      >
        <Box maxW={{ sm: 'md' }} mx={{ sm: 'auto' }} w={{ sm: 'full' }}>
          <Heading
            mt='6'
            mb={6}
            textAlign='center'
            size='4xl'
            fontWeight='bold'
            bgClip='text'
            bgGradient='linear(to-l, #7928CA, #FF0080)'
          >
            Gardeniox
          </Heading>
          <Heading mt='6' textAlign='center' size='xl' fontWeight='bold'>
            Sign in to your account
          </Heading>
          <Text mt='4' align='center' maxW='md' fontWeight='medium'>
            <span>Don't have an account?</span>
            <Box
              as='a'
              marginStart='1'
              href='/user/register'
              color={useColorModeValue('blue.600', 'blue.200')}
              fontWeight='medium'
              _hover={{ color: 'blue.600' }}
              display={{ base: 'block', sm: 'revert' }}
            >
              Register One!
            </Box>
          </Text>
        </Box>
        <Box maxW={{ sm: 'md' }} mx={{ sm: 'auto' }} mt='4' w={{ sm: 'full' }}>
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            py='8'
            px={{ base: '4', md: '10' }}
            shadow='base'
            rounded={{ sm: 'lg' }}
          >
            <LoginForm />
            <TextDivider mt='6'>or continue with</TextDivider>
            <SimpleGrid mt='6' columns={3} spacing='3'>
              <Button color='currentColor' variant='outline'>
                <VisuallyHidden>Login with Facebook</VisuallyHidden>
                <FaFacebook />
              </Button>
              <Button color='currentColor' variant='outline'>
                <VisuallyHidden>Login with Google</VisuallyHidden>
                <FaGoogle />
              </Button>
              <Button color='currentColor' variant='outline'>
                <VisuallyHidden>Login with Github</VisuallyHidden>
                <FaGithub />
              </Button>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
