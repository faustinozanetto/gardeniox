import React from 'react';
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { TextDivider } from '../../components/common/TextDivider';
import { AppLayout } from '../../layout/AppLayout';
import { RegisterForm } from '../../components/forms/RegisterForm';
import { withApollo } from '../../utils/apollo/withApollo';

interface LoginProps {}

const RegisterPage: React.FC<LoginProps> = ({}) => {
  return (
    <AppLayout>
      <Box
        bg={useColorModeValue('gray.50', 'inherit')}
        px={{ sm: '6', lg: '8' }}
        pt={{ base: '14' }}
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
          </VStack>
        </Box>
        <Box mt={4} maxW={{ base: '18em', xxs: '20em', xs: '25em' }} mx='auto'>
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            shadow='base'
            p={4}
            rounded='lg'
          >
            <RegisterForm />
            <TextDivider mt='6'>or register with</TextDivider>
            <SimpleGrid mt='6' columns={3} spacing='3'>
              <Button color='currentColor' variant='outline'>
                <VisuallyHidden>Register with Facebook</VisuallyHidden>
                <FaFacebook />
              </Button>
              <Button color='currentColor' variant='outline'>
                <VisuallyHidden>Register with Google</VisuallyHidden>
                <FaGoogle />
              </Button>
              <Button color='currentColor' variant='outline'>
                <VisuallyHidden>Register with Github</VisuallyHidden>
                <FaGithub />
              </Button>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(RegisterPage);
