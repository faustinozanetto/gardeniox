import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  VStack,
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
      limit: 9,
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
      <Container maxW={'8xl'}>
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
            <Stack>
              <SimpleGrid minChildWidth='350px' gap={6}>
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
              </SimpleGrid>
              {data && data.plants.hasMore ? (
                <Box d='flex' justifyContent='center'>
                  <Button
                    onClick={async () => {
                      await fetchMore({
                        variables: {
                          limit: variables?.limit,
                          cursor:
                            data.plants.plants[data.plants.plants.length - 1]
                              .createdAt,
                        },
                      });
                    }}
                    isLoading={loading}
                    size='lg'
                    colorScheme='teal'
                    my={8}
                  >
                    Load more Plants
                  </Button>
                </Box>
              ) : null}
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(DashboardPage);
