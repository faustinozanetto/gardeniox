import React from 'react';
import {
  Box,
  Heading,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Disease } from '../../generated/graphql';
import { PlantDiseaseModal } from './PlantDiseaseModal';
import { useRouter } from 'next/router';

type PlantDiseaseProps = {
  diseaseData?: Disease;
};

export const PlantDisease: React.FC<PlantDiseaseProps> = ({ diseaseData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <Tooltip label='Click for more information!' aria-label='A tooltip'>
        <Box
          p={5}
          shadow='md'
          borderRadius='xl'
          bgColor={useColorModeValue('gray.100', 'gray.800')}
          onClick={() => {
            router.push(`/disease/${diseaseData?.id}`);
          }}
        >
          <Heading
            fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
            textAlign='left'
          >
            {diseaseData?.name}
          </Heading>
          <Text
            mt={4}
            noOfLines={2}
            textAlign='justify'
            fontSize={{ base: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
          >
            {diseaseData?.information}
          </Text>
        </Box>
      </Tooltip>
    </>
  );
};
