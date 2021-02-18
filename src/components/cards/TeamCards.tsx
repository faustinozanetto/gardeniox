import React from 'react';
import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface TeamCardsProps {}

export const TeamCards: React.FC<TeamCardsProps> = ({}) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <Flex flexDir='column' alignItems='center' textAlign='center' p={4}>
        <Image
          src='https://images.unsplash.com/photo-1524660988542-c440de9c0fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYwfHxibGFjayUyMGd1eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
          alt='Team Photo'
          width='10rem'
          height='10rem'
          objectFit='cover'
          borderRadius='full'
        />
        <Box mt='1rem'>
          <Text fontWeight='700' fontSize='xl'>
            John Doe
          </Text>
          <Text
            fontWeight='500'
            fontSize='lg'
            color={useColorModeValue(
              'rgb(0,0,0,0.64)',
              'rgb(255,255,255,0.64)'
            )}
          >
            CEO
          </Text>
        </Box>
        <Text
          mt='0.5rem'
          color={useColorModeValue('rgb(0,0,0,0.75)', 'rgb(255,255,255,0.75)')}
        >
          Consectetur libero id faucibus nisl tincidunt eget nullam fringilla
          urna porttitor.
        </Text>
      </Flex>
    </motion.div>
  );
};
