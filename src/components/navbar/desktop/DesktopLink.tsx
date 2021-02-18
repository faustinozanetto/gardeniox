import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { NavItem } from '../Navbar';

interface DesktopLinkProps {
  item: NavItem;
}

export const DesktopLink: React.FC<DesktopLinkProps> = ({ item }) => {
  return (
    <Box key={item.label}>
      <Link
        p={2}
        href={item.href}
        fontWeight={500}
        color={useColorModeValue('gray.600', 'gray.200')}
        _hover={{
          color: useColorModeValue('gray.800', 'white'),
          transform: 'scale(1.1)',
        }}
      >
        {item.label}
      </Link>
    </Box>
  );
};
