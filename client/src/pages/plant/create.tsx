import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  Flex,
  Box,
  Text,
  Stack,
  Button,
  useToast,
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import { FormField, InputField, Layout } from '../../components';
import { PlantType, useCreatePlantMutation } from '../../generated/graphql';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../../utils/createUrqlClient';

function validateField(value: any) {
  let error;
  if (!value) {
    error = 'Field is required';
  }
  return error;
}

const create: React.FC<{}> = ({}) => {
  const toast = useToast();
  const [, createPlant] = useCreatePlantMutation();
  return (
    <Layout variant='small'>
      <Formik
        initialValues={{
          name: '',
          variety: '',
          type: '' as PlantType,
          plot: '',
          seedSprouted: '',
          plantedOn: '',
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          const { error } = await createPlant({ input: values });
          if (error) {
            console.error(error);
          }
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
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
                  Create Plant
                </Text>
                <FormField
                  validateFieldFn={validateField}
                  id='name'
                  placeholder='Plant Name'
                  label='Plant Name'
                  type='text'
                />
                <FormField
                  validateFieldFn={validateField}
                  id='variety'
                  placeholder='Plant Variety'
                  label='Variety'
                  type='text'
                />
                <Field name='type' validate={validateField}>
                  {({ field, form }: any) => (
                    <FormControl id='type'>
                      <FormLabel htmlFor='type'>Plant Type</FormLabel>
                      <Select
                        {...field}
                        id='type'
                        placeholder='Select Plant Type'
                      >
                        {Object.values(PlantType).map((plantType, index) => (
                          <option key={index}>{plantType}</option>
                        ))}
                      </Select>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <FormField
                  validateFieldFn={validateField}
                  id='plot'
                  placeholder='Plant Plot ID'
                  label='Plot'
                  type='text'
                />
                <FormField
                  validateFieldFn={validateField}
                  id='seedSprouted'
                  placeholder='Seed Sprouted On'
                  label='Seed Sprouted'
                  type='text'
                />
                <FormField
                  validateFieldFn={validateField}
                  id='plantedOn'
                  placeholder='Planted to Soil On'
                  label='Planted On'
                  type='text'
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
