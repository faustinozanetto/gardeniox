import React from 'react';
import { Box, VStack, Heading, useColorModeValue } from '@chakra-ui/react';
import { AppLayout } from '../../layout/AppLayout';
import { withApollo } from '../../utils/apollo/withApollo';
import { PlantCreateForm } from '../../components/forms/plant/PlantCreateForm';

const CreatePlantPage: React.FC<{}> = ({}) => {
  return (
    <AppLayout>
      <Box bg={useColorModeValue('gray.50', 'inherit')} py={4}>
        <Box d='flex' flexDir='column' alignContent='center'>
          <VStack>
            <Heading
              mb={4}
              textAlign='center'
              size='4xl'
              fontWeight='bold'
              bgClip='text'
              bgGradient='linear(to-l, #7928CA, #FF0080)'
            >
              Plant
            </Heading>
          </VStack>
        </Box>
        <Box mt={4} maxW={{ base: '18em', xxs: '20em', xs: '25em' }} mx='auto'>
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            shadow='base'
            p={4}
            rounded='lg'
          >
            <PlantCreateForm />
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(CreatePlantPage);
