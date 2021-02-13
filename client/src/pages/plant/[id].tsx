import React from 'react';
import { useRouter } from 'next/router';
import { Container } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import { AppLayout } from '../../layout/AppLayout';
import { createUrqlClient } from '../../utils';
import { PlantDetails } from '../../components/plant/PlantDetails';

const PlantPage = ({}) => {
  return (
    <AppLayout>
      <Container maxW={'3xl'}>
        <PlantDetails />
      </Container>
    </AppLayout>
  );
};

export default withUrqlClient(createUrqlClient)(PlantPage);
