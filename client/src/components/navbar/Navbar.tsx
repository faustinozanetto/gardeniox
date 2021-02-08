import React from 'react';
import {
  Flex,
  Box,
  Button,
  Heading,
  Spacer,
  HStack,
  Link,
} from '@chakra-ui/react';
import { ThemeToggler } from './ThemeToggler';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  let content = null;

  content = (
    <Flex>
      <Box d='flex'>
        <HStack justifyContent='center' alignItems='center'>
          <ThemeToggler />
          <Button colorScheme='teal' onClick={() => {}}>
            Login
          </Button>
          <Spacer />
          <Button colorScheme='linkedin' onClick={() => {}}>
            Register
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
  return (
    <Flex
      zIndex={1}
      position='sticky'
      top={0}
      p={4}
      align='center'
      bgGradient='linear(to-l, #7928CA, #FF0080)'
    >
      <Flex flex={1} m='auto' align='center' maxWidth={800}>
        <Box>
          <Button variant='link' onClick={() => {}}>
            <Heading size='2xl' color='white'>
              Gardeniox
            </Heading>
          </Button>
        </Box>
        <Spacer />
        <Box ml='auto'>{content}</Box>
      </Flex>
    </Flex>
  );
};
