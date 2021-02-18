import React from 'react';
import { Box, Text, Heading, Stack } from '@chakra-ui/react';
import { MeQuery } from '../../generated/graphql';
import { LogoutButton } from './buttons';

type NavbarUserDetailsProps = {
  user: MeQuery;
};

export const NavbarUserDetails: React.FC<NavbarUserDetailsProps> = ({
  user,
}) => {
  return (
    <Box justifyContent='center' alignContent='center'>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={2}
        align='stretch'
      >
        <Stack spacing={0}>
          <Heading fontSize='sm' textAlign='center'>
            Signed in as
          </Heading>
          <Text textAlign='center'>{user.me?.username}</Text>
        </Stack>
        {/* @ts-ignore  */}
        <LogoutButton width='100%' />
      </Stack>
    </Box>
  );
};
