import React from 'react';
import { useRouter } from 'next/router';
import { Container, Heading } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import { AppLayout } from '../../layout/AppLayout';
import { createUrqlClient, useGetIntId } from '../../utils';
import { useDiseaseQuery } from '../../generated/graphql';
import { DiseaseDetails } from '../../components/disease/DiseaseDetails';

const DiseasePage = ({}) => {
  const id = useGetIntId();
  const [{ data: diseaseData, error, fetching }] = useDiseaseQuery({
    pause: id === -1,
    variables: {
      id,
    },
  });

  if (!diseaseData?.disease) {
    if (error) {
      return (
        <AppLayout>
          <Heading>Could not find disease!</Heading>
        </AppLayout>
      );
    }
  }

  return (
    <AppLayout>
      <Container maxW={'3xl'}>
        <DiseaseDetails diseaseData={diseaseData} fetching={fetching} />
      </Container>
    </AppLayout>
  );
};

export default withUrqlClient(createUrqlClient)(DiseasePage);
