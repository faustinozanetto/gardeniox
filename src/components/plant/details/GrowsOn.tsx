import React from 'react';
import {
  Badge,
  Box,
  Heading,
  HStack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

interface GrowsOnProps {}

export const GrowsOn: React.FC<GrowsOnProps> = ({}) => {
  return (
    <Box
      p={5}
      shadow='md'
      borderRadius='xl'
      bgColor={useColorModeValue('gray.100', 'gray.800')}
    >
      <VStack>
        <Heading fontSize='lg' fontWeight='500'>
          Grows On
        </Heading>
        <HStack>
          <Badge colorScheme='green'>Spring</Badge>
          <Badge colorScheme='green'>Summer</Badge>
        </HStack>
      </VStack>
    </Box>
  );
};
