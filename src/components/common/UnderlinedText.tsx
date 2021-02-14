import { ReactNode } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

interface UnderlinedTextProps {
  children: ReactNode;
  color?: string;
}

export const UnderlinedText = ({ children, color }: UnderlinedTextProps) => {
  return (
    <Box
      as={'span'}
      color={useColorModeValue(`${color}.400`, `${color}.300`)}
      position={'relative'}
      zIndex={10}
      _after={{
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        w: 'full',
        h: '30%',
        bg: useColorModeValue(`${color}.100`, `${color}.900`),
        zIndex: -1,
      }}
    >
      {children}
    </Box>
  );
};
