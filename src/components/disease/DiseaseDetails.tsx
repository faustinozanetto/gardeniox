import React from 'react';
import {
  Flex,
  useColorModeValue,
  Stack,
  Box,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { DiseaseQuery } from '../../generated/graphql';

interface DiseaseDetailsProps {
  diseaseData?: DiseaseQuery;
  fetching: boolean;
}

export const DiseaseDetails: React.FC<DiseaseDetailsProps> = ({
  diseaseData,
  fetching,
}) => {
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
        <Image
          borderRadius='full'
          boxSize={{ base: '175px', md: '250px', xl: '350px' }}
          src={diseaseData?.disease.image}
        />
        <Stack>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text as={'span'} position={'relative'}>
              {fetching ? 'Loading...' : diseaseData?.disease.name}
            </Text>
          </Heading>
          <Heading
            lineHeight={1.1}
            fontWeight={300}
            fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}
          >
            <Text as={'span'} position={'relative'}>
              {fetching ? 'Loading...' : diseaseData?.disease.id}
            </Text>
          </Heading>
        </Stack>
        <HStack p={4}>
          <VStack>
            <Box
              p={5}
              shadow='md'
              borderRadius='xl'
              bgColor={useColorModeValue('gray.100', 'gray.800')}
            >
              <Text textAlign='justify'>
                {diseaseData?.disease.information}
              </Text>
            </Box>
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};
