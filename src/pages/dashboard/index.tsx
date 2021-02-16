import React from 'react';
import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { PlantCard } from '../../components/cards/PlantCard';
import { AppLayout } from '../../layout/AppLayout';
import { withApollo } from '../../utils/apollo/withApollo';
import { usePlantsQuery } from '../../generated/graphql';

interface indexProps {}

const DashboardPage: React.FC<indexProps> = ({}) => {
  const { data, error, loading, fetchMore, variables } = usePlantsQuery({
    variables: {
      limit: 15,
      cursor: null,
    },
    notifyOnNetworkStatusChange: true,
  });
  return (
    <AppLayout>
      <Container maxW={'3xl'}>
        <Stack>
          <Heading
            mb={4}
            textAlign='center'
            size='4xl'
            fontWeight='bold'
            bgClip='text'
            bgGradient='linear(to-l, #7928CA, #FF0080)'
          >
            Plants
          </Heading>
          <SimpleGrid minChildWidth='300px' gap={6}>
            {data?.plants.plants.map((plant, index) =>
              !plant ? null : <PlantCard key={index} plantData={plant} />
            )}
            {data && data.plants.hasMore ? (
              <Button
                onClick={() => {
                  fetchMore({
                    variables: {
                      limit: variables?.limit,
                      cursor:
                        data.plants.plants[data.plants.plants.length - 1]
                          .createdAt,
                    },
                  });
                }}
                isLoading={loading}
                m='auto'
                my={8}
              >
                load more
              </Button>
            ) : null}
          </SimpleGrid>
        </Stack>
      </Container>
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(DashboardPage);
