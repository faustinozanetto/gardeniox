import React from 'react';
import { Formik, Form } from 'formik';
import { Flex, Box, Text, Stack, Button, useToast } from '@chakra-ui/react';
import { FormField } from '../../components/forms/FormField';
import { useCreatePlotMutation } from '../../generated/graphql';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../../utils/createUrqlClient';
import { AppLayout } from '../../layout/AppLayout';

const create: React.FC<{}> = ({}) => {
  const toast = useToast();
  const [, createPlot] = useCreatePlotMutation();
  return (
    <AppLayout>
      <Formik
        initialValues={{ size: 0, maxPlants: 0 }}
        onSubmit={async (values) => {
          if (values.size === 0 || values.maxPlants === 0) {
            toast({
              title: 'Error',
              description: 'Value can not be lower than one (1)',
              status: 'error',
              duration: 6000,
              isClosable: true,
            });
          }
          const { error } = await createPlot({ input: values });
          if (error) {
            console.error(error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Flex>
            <Box w={500} p={4} my={12} mx='auto'>
              <Form>
                <Text
                  as='h1'
                  bgGradient='linear(to-r, teal.500,green.500)'
                  bgClip='text'
                  fontSize='5xl'
                  fontWeight='extrabold'
                  textAlign='center'
                >
                  Create Plot
                </Text>
                <FormField
                  type='number'
                  name='size'
                  placeholder='Plot Size'
                  label='Size'
                />
                <FormField
                  type='number'
                  name='maxPlants'
                  placeholder='Max Plants per Plot'
                  label='Max Plants'
                />
                <Stack justify='center' mt={3} isInline spacing={10}>
                  <Button
                    mt={4}
                    minWidth='50%'
                    colorScheme='green'
                    isLoading={isSubmitting}
                    type='submit'
                  >
                    Create
                  </Button>
                </Stack>
              </Form>
            </Box>
          </Flex>
        )}
      </Formik>
    </AppLayout>
  );
};

export default withUrqlClient(createUrqlClient)(create);
