import React from 'react';
import {
  Container,
  Heading,
  Text,
  Box,
  Stack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { UnderlinedText } from '../../common/UnderlinedText';

interface WhyUseSectionProps {}

const REASONS = [
  {
    title: 'Ease to use',
    text:
      'Gardeniox is extremely easy to use, with just a few clicks you can easily add plants and plots to your profile and store them in the database.',
  },
  {
    title: 'Intuitive Design',
    text:
      'The team at Gardeniox aims to make a fresh design so that it is easy to understand and pretty.',
  },
  {
    title: 'Free, for ever',
    text:
      'Gardeniox wil be free, for ever. We want to give you the best experience for free because we love plants and we want to share knowledge across the world without paying a single fee.',
  },
];

export const WhyUseSection: React.FC<WhyUseSectionProps> = ({}) => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW={'7xl'} py={{ base: 14, sm: 20, md: 32 }}>
        <Heading as={'h3'} textAlign={'center'} mb={{ base: 14, sm: 16 }}>
          Why should you use{' '}
          <UnderlinedText color='purple'>Gardeniox</UnderlinedText>
        </Heading>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={'space-between'}
          align={{ base: 'center', md: 'flex-start' }}
        >
          {REASONS.map((reason, index) => (
            <Stack
              textAlign={{ base: 'left', md: 'center' }}
              align={{ base: 'flex-start', md: 'center' }}
              spacing={4}
              key={reason.title}
              maxW={{ base: 'full', md: 'xs' }}
              mt={{ base: 10, md: 0 }}
              _first={{
                mt: 0,
              }}
              px={4}
            >
              <Flex
                w={10}
                h={10}
                bg={useColorModeValue('pink.100', 'pink.900')}
                color={useColorModeValue('pink.700', 'pink.300')}
                fontWeight='extrabold'
                align={'center'}
                justify={'center'}
                fontSize={'sm'}
                rounded={'md'}
              >
                0{index + 1}
              </Flex>
              <Text
                fontFamily={'heading'}
                fontSize={'xl'}
                fontWeight='extrabold'
                color={useColorModeValue('gray.700', 'white')}
              >
                {reason.title}
              </Text>
              <Text color={'gray.500'}>{reason.text}</Text>
            </Stack>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};
