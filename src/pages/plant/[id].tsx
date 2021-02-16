import React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import { AppLayout } from '../../layout/AppLayout';
import { useGetIntId } from '../../utils';
import { PlantDetails } from '../../components/plant/PlantDetails';
import { usePlantQuery } from '../../generated/graphql';
import { withApollo } from '../../utils/apollo/withApollo';

const PlantPage = ({}) => {
  const id = useGetIntId();
  const { data: plantData, error, loading } = usePlantQuery({
    skip: id === -1,
    variables: {
      id,
    },
  });

  if (loading) {
    return (
      <AppLayout>
        <Heading>Loading data ...</Heading>
      </AppLayout>
    );
  }

  if (!plantData?.plant) {
    if (error) {
      return (
        <AppLayout>
          <Heading>Could not find plant!</Heading>
        </AppLayout>
      );
    }
  }

  return (
    <AppLayout>
      <Container maxW={{ base: '1xl', md: '3xl', lg: '4xl' }}>
        <PlantDetails plantData={plantData} />
      </Container>
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(PlantPage);
