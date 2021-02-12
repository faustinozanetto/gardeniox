import React from 'react';
import {
  Container,
  Flex,
  Text,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Flex align={'center'} justify={'center'} h={'100vh'} w={'full'}>
      <Stack as={Container} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Stack spacing={2}>
          <Heading>Page not found</Heading>
          <Text>
            This page was not found. You may have mistyped the address or the
            page may have moved.
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
}
