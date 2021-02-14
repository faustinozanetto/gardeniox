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
import { useLoginUserMutation } from '../../generated/graphql';
import { toErrorMap } from '../../utils';
import { FormField } from './FormField';

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const [, loginUser] = useLoginUserMutation();
  const router = useRouter();
  const toast = useToast();
  return (
    <Box>
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
                colorScheme='pink'
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
