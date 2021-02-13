import React from 'react';
import { Box, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export const PlantDisease = ({}) => {
  return (
    <Box
      p={5}
      shadow='md'
      borderRadius='xl'
      bgColor={useColorModeValue('gray.100', 'gray.800')}
    >
      <Heading fontSize='xl' textAlign='left'>
        Disease
      </Heading>
      <Text mt={4} textAlign='justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eaque!
      </Text>
    </Box>
  );
};

export const PlantDiseases = ({}) => {
  return (
    <Box>
      <Stack spacing={8}>
        <PlantDisease />
      </Stack>
    </Box>
  );
};
