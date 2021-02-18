import React from 'react';
import {
  Box,
  Button,
  Heading,
  Spacer,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { MeDocument, MeQuery, useLoginMutation } from '../../generated/graphql';
import { toErrorMap } from '../../utils';
import { FormField } from './FormField';

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const [login] = useLoginMutation();
  const router = useRouter();
  const toast = useToast();
  return (
    <Box>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({
            variables: values,
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: 'Query',
                  me: data?.login.user,
                },
              });
              cache.evict({ fieldName: 'plants:{}' });
            },
          });
          const errors = response.data?.login.errors;
          if (errors) {
            setErrors(toErrorMap(errors));
            toast({
              title: 'An error occurred',
              status: 'error',
              duration: 9000,
              isClosable: true,
            });
          } else if (response.data?.login.user) {
            if (typeof router.query.next === 'string') {
              router.push(router.query.next);
            } else {
              // worked
              router.push('/');
            }
          }
        }}
      >
        {({ isSubmitting }) => (
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
            <Stack
              direction={{ base: 'column', sm: 'row', md: 'row' }}
              justify='center'
              mt={6}
            >
              <Button
                w='100%'
                colorScheme='pink'
                onClick={() => {
                  router.push('/user/forgot-password');
                }}
              >
                Forgot Password?
              </Button>
              <Spacer />
              <Button
                w='100%'
                colorScheme='purple'
                loadingText='Submitting'
                isLoading={isSubmitting}
                type='submit'
              >
                Login
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
