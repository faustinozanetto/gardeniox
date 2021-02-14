import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Heading,
  Stack,
  Image,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { Disease } from '../../generated/graphql';

type PlantDiseaseModalProps = {
  diseaseData?: Disease;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const PlantDiseaseModal: React.FC<PlantDiseaseModalProps> = ({
  diseaseData,
  isOpen,
  onClose,
}) => {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} size='md' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading fontSize='xl' textAlign='left'>
              {diseaseData?.name}
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Box>
                <Text mt={4} textAlign='justify'>
                  {diseaseData?.information}
                </Text>
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
