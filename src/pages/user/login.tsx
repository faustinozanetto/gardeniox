import React from 'react';
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { createUrqlClient } from '../../utils';
import { AppLayout } from '../../layout/AppLayout';
import { LoginForm } from '../../components/forms/LoginForm';
import { TextDivider } from '../../components/common/TextDivider';
import { withApollo } from '../../utils/apollo/withApollo';

interface LoginProps {}

const LoginPage: React.FC<LoginProps> = ({}) => {
  return (
    <AppLayout>
      <Box
        bg={useColorModeValue('gray.50', 'inherit')}
        px={{ sm: '6', lg: '8' }}
      >
        <Box d='flex' flexDir='column' alignContent='center'>
          <VStack>
            <Heading
              mb={4}
              textAlign='center'
              size='4xl'
              fontWeight='bold'
              bgClip='text'
              bgGradient='linear(to-l, #7928CA, #FF0080)'
            >
              Account
            </Heading>
            <Text
              mt={4}
              textAlign='center'
              alignContent='center'
              justifyContent='center'
              fontWeight='medium'
            >
              <Stack direction={['column', 'row']}>
                <Text>Don't have an account?</Text>
                <Box
                  as='a'
                  marginStart='1'
                  href='/user/register'
                  color={useColorModeValue('blue.600', 'blue.200')}
                  fontWeight='medium'
                  _hover={{ color: 'blue.600' }}
                >
                  Register One!
                </Box>
              </Stack>
            </Text>
          </VStack>
        </Box>
        <Box mt={4} maxW={{ base: '18em', xxs: '20em', xs: '25em' }} mx='auto'>
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            shadow='base'
            p={4}
            rounded='lg'
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

export default withApollo({ ssr: false })(LoginPage);
