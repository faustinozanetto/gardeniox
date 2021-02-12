import React from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { UnderlinedText } from '../../common/UnderlinedText';

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Managing your garden{' '}
            <UnderlinedText color='purple'>
              has never been this easy
            </UnderlinedText>
          </Heading>
          <Text color={'gray.500'} fontSize='lg'>
            Gardeniox lets you manage your indoor or outdoor garden with just a
            simply clicks. You can also keep track of your plant needs with just
            logging into the page daily, learn more about your plants and
            improve their performance.
          </Text>
        </Stack>
      </Container>
    </>
  );
};
