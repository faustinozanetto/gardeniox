import React from 'react';
import { Formik, Form } from 'formik';
import { Flex, Box, Heading, Stack, Button } from '@chakra-ui/react';
import { InputField, Layout } from '../../components';
import { useCreatePlotMutation } from '../../generated/graphql';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../../utils/createUrqlClient';

const create: React.FC<{}> = ({}) => {
  const [, createPlot] = useCreatePlotMutation();
  return (
    <Layout variant='small'>
      <Formik
        initialValues={{ size: 0, maxPlants: 0 }}
        onSubmit={async (values) => {
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
                <Heading as='h2' p={4} textAlign='center'>
                  Create Plot
                </Heading>
                <InputField
                  type='number'
                  name='size'
                  placeholder='Plot Size'
                  label='Size'
                />
                <InputField
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
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(create);
