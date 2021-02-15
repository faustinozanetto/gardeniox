import React from 'react';
import { Container, SimpleGrid } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import { PlantCard } from '../../components/cards/PlantCard';
import { AppLayout } from '../../layout/AppLayout';
import { createUrqlClient } from '../../utils';

interface indexProps {}

const DashboardPage: React.FC<indexProps> = ({}) => {
  return (
    <AppLayout>
      <Container maxW={'3xl'}>
        <SimpleGrid minChildWidth='300px' gap={6}>
          <PlantCard />
          <PlantCard />
          <PlantCard />
        </SimpleGrid>
      </Container>
    </AppLayout>
  );
};

export default DashboardPage;
