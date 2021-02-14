import React from 'react';
import {
  Center,
  Box,
  Image,
  useColorModeValue,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

const IMAGE =
  'https://media.architecturaldigest.com/photos/5efb7da66d18ec1650bd30a7/master/w_1000,h_1250,c_limit/Corn-Plant-LArge-2.jpg';

interface PlantCardProps {}

export const PlantCard: React.FC<PlantCardProps> = ({}) => {
  return (
    <Center
      py={12}
      _hover={{
        transition: 'transform .3s ease-in-out',
        transform: 'scale(1.15)',
      }}
    >
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Plant
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Dracaena
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={600} fontSize={'md'}>
              Dracaena Massangeana
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};
