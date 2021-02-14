import React from 'react';
import {
  Avatar,
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverFooter,
  Stack,
  useDisclosure,
  PopoverTrigger,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { MeQuery, useMeQuery } from '../../generated/graphql';
import { LogoutButton } from './LogoutButton';
import { ChevronDownIcon, QuestionIcon, SettingsIcon } from '@chakra-ui/icons';

type UserDetailsProps = {
  userData?: MeQuery;
};

export const UserDetails: React.FC<UserDetailsProps> = ({ userData }) => {
  return (
    <>
      <Menu>
        <MenuButton as={Avatar} src='"https://bit.ly/code-beast"' />
        <MenuList>
          <MenuItem>Hi {userData?.me?.username}</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
