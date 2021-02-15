import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  BoxProps,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { ThemeToggler } from './ThemeToggler';
import { MeQuery, useMeQuery } from '../../generated/graphql';
import { NavbarUserDetails } from './NavbarUserDetails';
import { DesktopNavbarUserButtons } from './DesktopNavbarUserButtons';
import { MobileNavbarUserButtons } from './MobileNavbarUserButtons';
import { UserDetails } from './UserDetails';
import { isServer } from '../../utils';

export const Navbar = (props: BoxProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const { data: userData } = useMeQuery({
    skip: isServer(),
  });

  return (
    <Box pb={{ base: 4, sm: 8 }} {...props}>
      <Flex
        as='header'
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'80px'}
        w={'full'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        boxShadow={'sm'}
        pos={{ base: 'inherit', md: 'fixed', lg: 'fixed' }}
        top='0'
        borderBottom={1}
        borderStyle={'solid'}
        justifyContent='center'
        alignContent='center'
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        zIndex='999'
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: useColorModeValue(
            'rgba(255, 255, 255, 0.8)',
            'rgba(26, 32, 44, 0.8)'
          ),
        }}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            as={'a'}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            fontSize='3xl'
            fontWeight='bold'
            size='4xl'
            href='/'
            bgClip='text'
            bgGradient='linear(to-l, #7928CA, #FF0080)'
          >
            Gardeniox
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} direction={'row'} spacing={6}>
          <Box display={{ base: 'none', md: 'inherit' }}>
            {userData?.me ? (
              <UserDetails userData={userData} />
            ) : (
              <DesktopNavbarUserButtons />
            )}
          </Box>
          <Box>
            <ThemeToggler />
          </Box>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav user={userData} />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  return (
    <Stack
      direction={'row'}
      spacing={4}
      alignItems='center'
      justifyContent='center'
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={500}
                color={useColorModeValue('gray.600', 'gray.200')}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('gray.800', 'white'),
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={useColorModeValue('white', 'gray.800')}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
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
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
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
  );
};

type MobileNavProps = {
  user: MeQuery | undefined;
};

const MobileNav = ({ user }: MobileNavProps) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      {user?.me ? (
        <NavbarUserDetails user={user} />
      ) : (
        <MobileNavbarUserButtons />
      )}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Dashboard',
    children: [
      {
        label: 'Explore the Gardeniox Dashboard',
        subLabel: 'Trending Design to inspire you',
        href: '/dashboard',
      },
    ],
  },
  {
    label: 'Plants',
    children: [
      {
        label: 'Create',
        subLabel: 'Create a new plant.',
        href: '#',
      },
    ],
  },
  {
    label: 'Plots',
    children: [
      {
        label: 'Create',
        subLabel: 'Create a new plant.',
        href: '#',
      },
    ],
  },
];
