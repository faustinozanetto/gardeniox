import React, { useEffect, useState } from 'react';
import {
  Flex,
  useColorModeValue,
  Stack,
  Box,
  Heading,
  Text,
  VStack,
  StackDivider,
  SimpleGrid,
  Skeleton,
  Image,
} from '@chakra-ui/react';
import { PlantDisease } from './PlantDisease';
import { PlantQuery, usePlantDiseasesQuery } from '../../generated/graphql';
import { PlantRequirement } from './details/PlantRequirement';
import { GrowsOn } from './details/GrowsOn';

interface PlantDetailsProps {
  plantData?: PlantQuery;
}

export const PlantDetails: React.FC<PlantDetailsProps> = ({ plantData }) => {
  const { data: diseasesData } = usePlantDiseasesQuery({
    variables: {
      id: plantData?.plant.id!,
    },
  });

  return (
    <Flex
      justifyContent='center'
      alignContent='center'
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius='3xl'
      boxShadow='2xl'
    >
      <VStack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 4, md: 8 }}
        py={{ base: 10, md: 16 }}
      >
        <Box>
          <Image
            objectFit='cover'
            borderRadius='full'
            boxSize={{ base: '200px', md: '250px', xl: '350px' }}
            src={plantData?.plant?.image}
            alt={plantData?.plant.name}
          />
        </Box>
        <Box>
          <Stack>
            <Box>
              <Skeleton isLoaded={plantData !== undefined}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                >
                  <Text as={'span'} position={'relative'}>
                    {plantData?.plant.name}
                  </Text>
                </Heading>
              </Skeleton>
            </Box>
            <Box>
              <Skeleton isLoaded={plantData !== undefined}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={300}
                  fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}
                >
                  <Text as={'span'} position={'relative'}>
                    {plantData?.plant.scientificName}
                  </Text>
                </Heading>
              </Skeleton>
            </Box>
          </Stack>
        </Box>
        <Flex display={{ base: 'none', md: 'none', lg: 'flex', xl: 'flex' }}>
          <Stack p={4} divider={<StackDivider borderColor='gray.200' />}>
            <SimpleGrid columns={2}>
              <VStack p={2}>
                <Heading>Diseases</Heading>
                {diseasesData?.plantDiseases.length !== 0 ? (
                  <Box as={Stack}>
                    {diseasesData?.plantDiseases.map((disease, index) => (
                      <Skeleton isLoaded={plantData !== undefined}>
                        <PlantDisease key={index} diseaseData={disease} />
                      </Skeleton>
                    ))}
                  </Box>
                ) : (
                  <Heading fontSize='2xl' fontWeight='500'>
                    No diseases were found.
                  </Heading>
                )}
              </VStack>
              <VStack p={2}>
                <Heading>Information</Heading>
                <SimpleGrid columns={{ smd: 2, md: 2 }} spacing={4}>
                  <PlantRequirement type='water' amount={3} />
                  <PlantRequirement type='soil' amount={3} />
                  <PlantRequirement type='sun' amount={3} />
                  <GrowsOn />
                </SimpleGrid>
              </VStack>
            </SimpleGrid>
          </Stack>
        </Flex>
        <Flex display={{ base: 'flex', md: 'flex', lg: 'none', xl: 'none' }}>
          <VStack p={4} align='stretch'>
            <Box>
              <VStack p={2}>
                <Heading>Diseases</Heading>
                {diseasesData?.plantDiseases.length !== 0 ? (
                  <Box as={Stack}>
                    {diseasesData?.plantDiseases.map((disease, index) => (
                      <Skeleton isLoaded={plantData !== undefined}>
                        <PlantDisease key={index} diseaseData={disease} />
                      </Skeleton>
                    ))}
                  </Box>
                ) : (
                  <Heading fontSize='2xl' fontWeight='500'>
                    No diseases were found.
                  </Heading>
                )}
              </VStack>
              <VStack p={2}>
                <Heading>Information</Heading>
                <SimpleGrid
                  columns={{ base: 1, xs: 2, smd: 2, md: 2 }}
                  spacing={4}
                >
                  <PlantRequirement type='water' amount={3} />
                  <PlantRequirement type='soil' amount={3} />
                  <PlantRequirement type='sun' amount={3} />
                  <GrowsOn />
                </SimpleGrid>
              </VStack>
            </Box>
          </VStack>
        </Flex>
      </VStack>
    </Flex>
  );
};
