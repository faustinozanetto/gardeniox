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
import { motion } from 'framer-motion';

interface indexProps {}

const DashboardPage: React.FC<indexProps> = ({}) => {
  const { data, loading, fetchMore, variables } = usePlantsQuery({
    variables: {
      limit: 15,
      cursor: null,
    },
    notifyOnNetworkStatusChange: true,
  });
  const grid = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
          <motion.div variants={grid} initial='hidden' animate='visible'>
            <SimpleGrid minChildWidth='300px' gap={6}>
              {data?.plants.plants.map((plant, index) =>
                !plant ? null : (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{
                      scale: 1.1,
                      borderRadius: '100%',
                    }}
                  >
                    <PlantCard plantData={plant} />
                  </motion.div>
                )
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
          </motion.div>
        </Stack>
      </Container>
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(DashboardPage);
