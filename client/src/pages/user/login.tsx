import React from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { Layout, Wrapper } from '../../components';
import { FormField } from '../../components/forms/FormField';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient, toErrorMap } from '../../utils';
import { useLoginUserMutation } from '../../generated/graphql';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const router = useRouter();
  const toast = useToast();
  const [, loginUser] = useLoginUserMutation();

  return (
    <Layout>
      <Wrapper variant='small'>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={async (values, { setErrors }) => {
            const response = await loginUser(values);
            const errors = response.data?.login.errors;
            const user = response.data?.login.user;
            if (errors) {
              setErrors(toErrorMap(errors));
              toast({
                title: 'An error occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
              });
            } else if (user) {
              if (typeof router.query.next === 'string') {
                router.push(router.query.next);
              } else {
                router.push('/');
              }
            }
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

export default withUrqlClient(createUrqlClient)(Login);
