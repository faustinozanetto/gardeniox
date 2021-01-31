import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding='1.5rem'
      bg='gray.900'
      color='white'
    >
      <Flex align='center' mr={5}>
        <Text
          as='h1'
          bgGradient='linear(to-l, #7928CA,#FF0080)'
          bgClip='text'
          fontSize='5xl'
          fontWeight='extrabold'
          verticalAlign='center'
        >
          Gardeniox
        </Text>
      </Flex>
    </Flex>
  );
};
