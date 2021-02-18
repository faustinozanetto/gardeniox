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
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { ThemeToggler } from './ThemeToggler';
import { MeQuery, useMeQuery } from '../../generated/graphql';
import { MobileUserDetails } from './mobile/user/MobileUserDetails';
import { MobileNavbarUserButtons } from './mobile/MobileNavbarUserButtons';
import { UserDetailsMenu } from './UserDetailsMenu';
import { isServer } from '../../utils';
import { DesktopLink } from './desktop/DesktopLink';
import { RegisterButton, LoginButton } from './buttons';

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { data: userData } = useMeQuery({
    skip: isServer(),
  });

  return (
    <Box>
      <Flex
        as='header'
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        height='80px'
        w='full'
        top='0'
        px={{ base: 4 }}
        boxShadow={'sm'}
        position={isOpen ? 'inherit' : 'fixed'}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        zIndex='999'
        align={'center'}
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: useColorModeValue(
            'rgba(255, 255, 255, 0.75)',
            'rgba(26, 32, 44, 0.75)'
          ),
        }}
      >
        <Container as={Flex} maxW={'7xl'} align={'center'}>
          {/* Mobile navigation button toggle */}
          <Flex
            flex={{ base: 0, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>

          {/* Left content */}
          <Flex
            flex={{ base: 1 }}
            alignContent='center'
            justifyContent='center'
            justify={{ base: 'center', md: 'start' }}
          >
            <Text
              as={'a'}
              mb={{ base: '2' }}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              color={useColorModeValue('gray.800', 'white')}
              fontSize='4xl'
              fontWeight='bold'
              href='/'
              bgClip='text'
              bgGradient='linear(to-l, #7928CA, #FF0080)'
            >
              Gardeniox
            </Text>

            {/* Desktop navigation */}
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <HStack
                direction='row'
                spacing={4}
                alignContent='center'
                justifyContent='center'
              >
                {NAV_ITEMS.map((navItem) => (
                  <DesktopLink item={navItem} />
                ))}
              </HStack>
            </Flex>
          </Flex>

          {/* Right side user register & login plus theme toggler, only when user is not signed in */}
          <Stack
            direction={'row'}
            justify={'flex-end'}
            flex={{ md: 1 }}
            display={{ base: 'none', md: 'flex' }}
          >
            <Box>
              {userData?.me ? (
                <UserDetailsMenu userData={userData} />
              ) : (
                <Stack
                  justifyContent='center'
                  alignContent='center'
                  direction={'row'}
                  spacing={4}
                >
                  <RegisterButton />
                  <LoginButton />
                  <ThemeToggler />
                </Stack>
              )}
            </Box>
          </Stack>
        </Container>
      </Flex>

      {/* Hamburger menu only in mobile */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav user={userData} />
      </Collapse>
    </Box>
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
      <Divider orientation='horizontal' />
      {user?.me ? (
        <MobileUserDetails user={user} />
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

export interface NavItem {
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
        href: '/',
      },
    ],
  },
  {
    label: 'Plants',
    children: [
      {
        label: 'Create',
        subLabel: 'Create a new plant.',
        href: '/plant/create',
      },
    ],
  },
  {
    label: 'Plots',
    children: [
      {
        label: 'Create',
        subLabel: 'Create a new plot.',
        href: '/plot/create',
      },
    ],
  },
];
