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
          initialValues={{ username: '', password: '' }}
          onSubmit={async (values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
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
                    Login
                  </Heading>
                  <FormField
                    name='username'
                    label='Username'
                    placeholder='Username'
                    type='text'
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
                      ml={2}
                      w='100%'
                      colorScheme='red'
                      onClick={() => {
                        router.push('/user/forgot-password');
                      }}
                    >
                      Forgot Password?
                    </Button>
                    <Spacer />
                    <Button
                      mr={2}
                      w='100%'
                      colorScheme='blue'
                      loadingText='Submitting'
                      isLoading={isSubmitting}
                      type='submit'
                    >
                      Login
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
