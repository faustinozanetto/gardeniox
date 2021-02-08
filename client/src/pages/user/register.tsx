import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Flex, Heading, Spacer, Stack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { Layout, Wrapper } from '../../components';
import { FormField } from '../../components/forms/FormField';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const router = useRouter();
  return (
    <Layout>
      <Wrapper variant='small'>
        <Formik
          initialValues={{ email: '', username: '', password: '' }}
          onSubmit={async (values, actions) => {}}
        >
          {({ isSubmitting }) => (
            <Flex>
              <Box
                w={600}
                p={4}
                mt={12}
                mx='auto'
                borderRadius={10}
                boxShadow='2xl'
              >
                <Form>
                  <Heading as='h2' p={4} textAlign='center'>
                    Register Account
                  </Heading>
                  <FormField
                    name='username'
                    label='Username'
                    placeholder='Username'
                    type='text'
                    isRequired
                  />
                  <FormField
                    name='email'
                    label='Email Account'
                    placeholder='username@email.com'
                    type='email'
                    helperText='We will never share your email.'
                    isRequired
                  />
                  <FormField
                    name='password'
                    label='Password'
                    placeholder='Password'
                    type='password'
                    isRequired
                  />
                  <Stack justify='center' mt={6} isInline>
                    <Button
                      mr={2}
                      w='55%'
                      colorScheme='green'
                      loadingText='Submitting'
                      isLoading={isSubmitting}
                      type='submit'
                    >
                      Register
                    </Button>
                  </Stack>
                </Form>
              </Box>
            </Flex>
          )}
        </Formik>
      </Wrapper>
    </Layout>
  );
};

export default Login;
