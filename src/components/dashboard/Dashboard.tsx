import React from 'react';
import {
  Box,
  Button,
  Icon,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { RiPlantLine } from 'react-icons/ri';
import { ThemeToggler } from '../navbar/ThemeToggler';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <Box
      d='flex'
      height='100vh'
      overflow='hidden'
      bg={useColorModeValue('gray.100', 'inherit')}
    >
      <Box
        d='flex'
        flexDir='column'
        bg={useColorModeValue('gray.50', 'gray.900')}
        width='16rem'
        borderRightRadius='2rem'
      >
        <Box d='flex' flexDir='column' flex='1 1 0%' p='1rem' overflowY='auto'>
          <Box d='flex' mb='1.5rem' alignItems='center' justifyContent='center'>
            <Text
              as={'a'}
              color={useColorModeValue('gray.800', 'white')}
              fontSize='4xl'
              fontWeight='bold'
              textAlign='center'
              href='/'
              bgClip='text'
              bgGradient='linear(to-l, #7928CA, #FF0080)'
            >
              Gardeniox
            </Text>
          </Box>
          <Stack as='nav' d='flex' flexDir='column'>
            <Stack d='flex' flexDir='column' alignContent='flex-start'>
              <Button
                colorScheme='gray'
                variant='ghost'
                color={useColorModeValue('gray.600', 'gray.200')}
                py='0.5rem'
                px='0.75rem'
                font-size='0.875rem'
                fontWeight='500'
                borderRadius='0.375rem'
                textDecor='none'
                outline='none'
              >
                <Icon
                  as={RiPlantLine}
                  boxSize='6'
                  display='inline-block'
                  flexShrink={0}
                  lineHeight='1em'
                />
                <span style={{ marginTop: '0', marginInlineStart: '1rem' }}>
                  Plants
                </span>
              </Button>
            </Stack>
            <ThemeToggler />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
