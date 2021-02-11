import React from 'react';
import { Box, Heading, HStack, Image } from '@chakra-ui/react';

interface PlantCardProps {}

export const PlantCard: React.FC<PlantCardProps> = ({}) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image
        src='https://www.gardeningknowhow.com/wp-content/uploads/2008/08/pepper-400x538.jpg'
        alt='Pepper image'
        w='100%'
        height='sm'
        objectFit='cover'
      />
      <Box p='6'>
        <Box d='flex' alignItems='baseline'>
          <Heading as='h1' fontSize='2xl'>
            Pepper
          </Heading>
        </Box>
        <Box d='flex' alignItems='baseline'>
          <Heading as='h1' fontSize='1xl' ml={1}>
            Great Red
          </Heading>
        </Box>
        <Box d='flex' alignItems='baseline'>
          <HStack></HStack>
        </Box>
      </Box>
    </Box>
  );
};
