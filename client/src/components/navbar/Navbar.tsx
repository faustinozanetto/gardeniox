import React from 'react';
import { Flex, Box, Button, Heading, Spacer, HStack } from '@chakra-ui/react';
import { ThemeToggler } from './ThemeToggler';
import { useRouter } from 'next/router';
import { useMeQuery } from '../../generated/graphql';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  let content = null;
  const router = useRouter();
  const [{ data, fetching }] = useMeQuery();

  // Data is loading
  if (fetching) {
    content = null;
  } else if (!data?.me) {
    content = (
      <Flex>
        <Box d='flex'>
          <HStack justifyContent='center' alignItems='center'>
            <ThemeToggler />
            <Button
              colorScheme='teal'
              onClick={() => {
                router.push('/user/login');
              }}
            >
              Login
            </Button>
            <Spacer />
            <Button
              colorScheme='linkedin'
              onClick={() => {
                router.push('/user/register');
              }}
            >
              Register
            </Button>
          </HStack>
        </Box>
      </Flex>
    );
  } else {
    content = (
      <Flex>
        <Box d='flex'>
          <HStack justifyContent='center' alignItems='center'>
            <Heading as='h3' fontSize='lg' color='white' mr={2}>
              {data.me.username}
            </Heading>
            <Button colorScheme='blue' onClick={async () => {}}>
              Logout
            </Button>
          </HStack>
        </Box>
      </Flex>
    );
  }
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
