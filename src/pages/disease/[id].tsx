import React from 'react';
import { useRouter } from 'next/router';
import { Container, Heading } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import { AppLayout } from '../../layout/AppLayout';
import { createUrqlClient, useGetIntId } from '../../utils';
import { useDiseaseQuery } from '../../generated/graphql';
import { DiseaseDetails } from '../../components/disease/DiseaseDetails';
import { withApollo } from '../../utils/apollo/withApollo';

const DiseasePage = ({}) => {
  const id = useGetIntId();
  const { data: diseaseData, error, loading } = useDiseaseQuery({
    skip: id === -1,
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
        <DiseaseDetails diseaseData={diseaseData} fetching={loading} />
      </Container>
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(DiseasePage);
