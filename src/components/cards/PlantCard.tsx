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
import { PlantSnippetFragment } from '../../generated/graphql';
import { useRouter } from 'next/router';

const IMAGE =
  'https://media.architecturaldigest.com/photos/5efb7da66d18ec1650bd30a7/master/w_1000,h_1250,c_limit/Corn-Plant-LArge-2.jpg';

interface PlantCardProps {
  plantData?: PlantSnippetFragment;
}

export const PlantCard: React.FC<PlantCardProps> = ({ plantData }) => {
  const router = useRouter();
  return (
    <Center py={12}>
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
        onClick={() => {
          router.push(`/plant/${plantData?.id}`);
        }}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
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
            src={plantData?.image}
            alt={plantData?.name}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Plant
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {plantData?.name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={600} fontSize={'md'}>
              {plantData?.scientificName}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};
