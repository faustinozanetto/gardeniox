import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  ModalBody,
  Stack,
  Box,
  ModalFooter,
  Button,
  Text,
  HStack,
  Icon,
  Spacer,
  Badge,
} from '@chakra-ui/react';
import React from 'react';
import { IoWater } from 'react-icons/io5';

type PlantRequirementExplicationProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const PlantRequirementExplication: React.FC<PlantRequirementExplicationProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} size='lg' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading fontSize='xl' textAlign='left'>
              Plant Requirement Explication
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Box>
                <Text fontSize='md'>
                  How to read the plant requirement icons and what do they mean?
                </Text>
                <Spacer />
                <HStack alignContent='center'>
                  <Text fontWeight='600' fontSize='2xl'>
                    High
                  </Text>
                  <HStack>
                    {[...Array(5)].map((_value: any, index: number) => {
                      return (
                        <Icon
                          as={IoWater}
                          w={6}
                          h={6}
                          key={index}
                          color={index <= 5 - 1 ? 'cyan.400' : 'gray.600'}
                        />
                      );
                    })}
                  </HStack>
                </HStack>
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
