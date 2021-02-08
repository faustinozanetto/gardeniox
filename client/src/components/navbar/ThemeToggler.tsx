import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

interface ThemeTogglerProps {}

export const ThemeToggler: React.FC<ThemeTogglerProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label='Color Mode'
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      variant='ghost'
    />
  );
};
