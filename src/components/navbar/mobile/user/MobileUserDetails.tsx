import React from 'react';
import {
  Text,
  Avatar,
  HStack,
  useDisclosure,
  Collapse,
  Flex,
  Icon,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { MeQuery, useLogoutMutation } from '../../../../generated/graphql';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { MobileUserDetailsItem } from './MobileUserDetailsItem';
import { CgProfile } from 'react-icons/cg';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';

type MobileUserDetailsProps = {
  user: MeQuery;
};

export const MobileUserDetails: React.FC<MobileUserDetailsProps> = ({
  user,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();
  const router = useRouter();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        alignItems='center'
        alignContent='center'
        justifyContent='space-between'
        _hover={{
          textDecoration: 'none',
        }}
      >
        <HStack flex={1}>
          <Avatar src='"https://bit.ly/code-beast"' />
          <Text fontWeight='550' fontSize='lg'>
            Hi, {user.me?.username}
          </Text>
        </HStack>
        <Icon
          as={ChevronDownIcon}
          transition={'all .25s ease-in-out'}
          transform={isOpen ? 'rotate(180deg)' : ''}
          w={6}
          h={6}
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          px={4}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          <MobileUserDetailsItem
            text='Profile'
            isSwitch={false}
            icon={CgProfile}
            onClick={async () => {}}
          />
          <MobileUserDetailsItem
            text='Settings'
            isSwitch={false}
            icon={FiSettings}
            onClick={async () => {}}
          />
          <MobileUserDetailsItem
            text='Dark Theme'
            isSwitch={true}
            icon={FiLogOut}
            onClick={() => {}}
          />
          <MobileUserDetailsItem
            text='Logout'
            isSwitch={false}
            icon={FiLogOut}
            onClick={async () => {
              await logout();
              await apolloClient.clearStore();
              router.reload();
            }}
          />
        </Stack>
      </Collapse>
    </Stack>
  );
};
