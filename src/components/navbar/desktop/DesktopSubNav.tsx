import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Link,
  useColorModeValue,
  Stack,
  Box,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { NavItem } from '../Navbar';

interface DesktopSubNavProps {
  item: NavItem;
}

export const DesktopSubNav: React.FC<DesktopSubNavProps> = ({ item }) => {
  return (
    <>
      <Link
        href={item.href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
      >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}
            >
              {item.label}
            </Text>
            <Text fontSize={'sm'}>{item.subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
          >
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </>
  );
};
