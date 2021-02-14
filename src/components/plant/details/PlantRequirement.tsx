import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Icon,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FiSun } from 'react-icons/fi';
import { GiSprout } from 'react-icons/gi';
import { IoWater } from 'react-icons/io5';
import { capitalize } from '../../../utils/common';
import { PlantRequirementExplication } from './PlantRequirementExplication';

interface PlantRequirementProps {
  amount: number;
  type: 'water' | 'sun' | 'soil';
}

export const PlantRequirement: React.FC<PlantRequirementProps> = ({
  amount,
  type,
}) => {
  const capitalizedType = capitalize(type);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getIconType = () => {
    let icon: IconType;
    switch (type) {
      case 'soil':
        icon = GiSprout;
        break;
      case 'sun':
        icon = FiSun;
        break;
      case 'water':
        icon = IoWater;
        break;
    }
    return icon;
  };

  const getIconColor = () => {
    let color: string;
    switch (type) {
      case 'soil':
        color = 'green';
        break;
      case 'sun':
        color = 'yellow';
        break;
      case 'water':
        color = 'cyan';
        break;
    }
    return color;
  };

  return (
    <Box
      p={5}
      shadow='md'
      borderRadius='xl'
      bgColor={useColorModeValue('gray.100', 'gray.800')}
      onClick={() => {
        onOpen();
      }}
    >
      <VStack>
        <Heading fontSize='md' fontWeight='500'>
          {capitalizedType} Requirement
        </Heading>
        <HStack>
          {[...Array(5)].map((_value: any, index: number) => {
            return (
              <Icon
                as={getIconType()}
                w={6}
                h={6}
                key={index}
                color={
                  index <= amount - 1 ? `${getIconColor()}.400` : 'gray.600'
                }
              />
            );
          })}
        </HStack>
      </VStack>
      <PlantRequirementExplication
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </Box>
  );
};
