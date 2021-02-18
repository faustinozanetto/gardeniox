import React from 'react';
import { Box, Button, Heading, Stack, useToast } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import {
  MeDocument,
  MeQuery,
  useRegisterMutation,
} from '../../generated/graphql';
import { toErrorMap } from '../../utils';
import { FormField } from './FormField';

interface LoginFormProps {}

export const RegisterForm: React.FC<LoginFormProps> = ({}) => {
  const [register] = useRegisterMutation();
  const router = useRouter();
  const toast = useToast();
  return (
    <Box>
      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({
            variables: { options: values },
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: 'Query',
                  me: data?.register.user,
                },
              });
            },
          });
          const errors = response.data?.register.errors;
          const user = response.data?.register.user;
          if (errors) {
            setErrors(toErrorMap(errors));
            toast({
              title: 'An error occurred',
              status: 'error',
              duration: 9000,
              isClosable: true,
            });
          } else if (user) {
            // worked
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
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
                colorScheme='purple'
                loadingText='Submitting'
                isLoading={isSubmitting}
                type='submit'
              >
                Register
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
