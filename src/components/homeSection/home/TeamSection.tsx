import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Grid,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import { TeamCards } from '../../cards/TeamCards';
import { UnderlinedText } from '../../common/UnderlinedText';

interface TeamSectionProps {}

export const TeamSection: React.FC<TeamSectionProps> = ({}) => {
  return (
    <Box>
      <Container maxW={'6xl'} py={{ base: 14, sm: 20, md: 28 }}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            as='h1'
            fontWeight={700}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Meet our{' '}
            <UnderlinedText color='purple'>Talented Team</UnderlinedText>
          </Heading>
          <Text color={'gray.500'} fontSize='lg'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            adipisci quo distinctio! Voluptates fugit neque ipsam reprehenderit
            iste? Ea magni recusandae illo fugit aut totam?
          </Text>
          <SimpleGrid minChildWidth='300px' spacing='40px'>
            <TeamCards />
            <TeamCards />
            <TeamCards />
            <TeamCards />
            <TeamCards />
            <TeamCards />
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};
