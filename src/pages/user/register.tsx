import React from 'react';
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
  VisuallyHidden,
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
        minH='100vh'
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
        </Box>
        <Box maxW={{ sm: 'md' }} mx={{ sm: 'auto' }} mt='4' w={{ sm: 'full' }}>
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            py='8'
            px={{ base: '4', md: '10' }}
            shadow='base'
            rounded={{ sm: 'lg' }}
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
