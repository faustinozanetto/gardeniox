import React from 'react';
import {
  Box,
  Button,
  Text,
  Stack,
  useToast,
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { PlantType, useCreatePlantMutation } from '../../../generated/graphql';
import { FormField } from '../FormField';
import * as Yup from 'yup';

interface PlantCreateFormProps {}

const CreateSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required!'),
  scientificName: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required!'),
  variety: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required!'),
  type: Yup.string().required('Required!'),
  image: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required!'),
  plot: Yup.number().required('Required!'),
  seedSprouted: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required!'),
  plantedOn: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required!'),
});

export const PlantCreateForm: React.FC<PlantCreateFormProps> = ({}) => {
  const [createPlant] = useCreatePlantMutation();
  const router = useRouter();
  const toast = useToast();
  return (
    <Box>
      <Formik
        initialValues={{
          name: '',
          scientificName: '',
          variety: '',
          type: '' as PlantType,
          image: '',
          plot: '',
          seedSprouted: '',
          plantedOn: '',
        }}
        validationSchema={CreateSchema}
        onSubmit={async (values) => {
          const { data, errors } = await createPlant({
            variables: { input: values },
          });
          if (errors) {
            console.error(errors);
            toast({
              title: 'An error ocurred!',
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          }
          console.log(data);
          if (!errors) {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Text
              as='h1'
              bgGradient='linear(to-r, teal.500,green.500)'
              bgClip='text'
              fontSize={{ base: '4xl' }}
              fontWeight='extrabold'
              textAlign='center'
              p={4}
            >
              Create Plant
            </Text>
            <FormField
              // validateFieldFn={validateField}
              id='name'
              name='name'
              placeholder='Plant Name'
              label='Plant Name'
              type='text'
            />
            <FormField
              // validateFieldFn={validateField}
              id='scientificName'
              name='scientificName'
              placeholder='Scientific Name'
              label='Scientific Name'
              type='text'
            />
            <FormField
              // validateFieldFn={validateField}
              id='variety'
              name='variety'
              placeholder='Plant Variety'
              label='Variety'
              type='text'
            />
            <Field name='type'>
              {({ field, form }: any) => (
                <FormControl id='type'>
                  <FormLabel htmlFor='type'>Plant Type</FormLabel>
                  <Select {...field} id='type' placeholder='Select Plant Type'>
                    {Object.values(PlantType).map((plantType, index) => (
                      <option key={index}>{plantType}</option>
                    ))}
                  </Select>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <FormField
              // validateFieldFn={validateField}
              id='image'
              name='image'
              placeholder='Plant Image'
              label='Image'
              type='text'
            />
            <FormField
              // validateFieldFn={validateField}
              id='plot'
              name='plot'
              placeholder='Plant Plot ID'
              label='Plot'
              type='number'
            />
            <FormField
              // validateFieldFn={validateField}
              id='seedSprouted'
              name='seedSprouted'
              placeholder='Seed Sprouted On'
              label='Seed Sprouted'
              type='text'
            />
            <FormField
              // validateFieldFn={validateField}
              id='plantedOn'
              name='plantedOn'
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
        )}
      </Formik>
    </Box>
  );
};
