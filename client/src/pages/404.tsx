import React from 'react';
import {
  Container,
  Flex,
  Text,
  Heading,
  Box,
  useColorModeValue,
  VStack,
  Center,
} from '@chakra-ui/react';
import { AppLayout } from '../layout/AppLayout';

export default function NotFound() {
  return (
    <AppLayout>
      <Box w='full' mx='auto' maxW='3xl' px={{ base: '6', md: '8' }}>
        <Center>
          <VStack as={Container}>
            <Heading>Page not found</Heading>
            <Text>
              This page was not found. You may have mistyped the address or the
              page may have moved.
            </Text>
          </VStack>
        </Center>
      </Box>
    </AppLayout>
  );
}
