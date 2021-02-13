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
import { PlantDiseases } from './PlantDiseases';

interface PlantDetailsProps {}

export const PlantDetails: React.FC<PlantDetailsProps> = ({}) => {
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
          src='https://media.architecturaldigest.com/photos/5efb7da66d18ec1650bd30a7/master/w_1000,h_1250,c_limit/Corn-Plant-LArge-2.jpg'
        />
        <Stack>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text as={'span'} position={'relative'}>
              Dracaena
            </Text>
          </Heading>
          <Heading
            lineHeight={1.1}
            fontWeight={300}
            fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}
          >
            <Text as={'span'} position={'relative'}>
              Dracaena Massangeana
            </Text>
          </Heading>
        </Stack>
        <HStack p={4}>
          <VStack>
            <PlantDiseases />
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};
