import {
  HStack,
  useColorModeValue,
  Flex,
  Icon,
  Spacer,
  Switch,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { FiMoon, FiSun } from 'react-icons/fi';

interface MobileUserDetailsItemProps {
  text: string;
  isSwitch: boolean;
  icon?: IconType | undefined;
  onClick: () => void;
}

export const MobileUserDetailsItem: React.FC<MobileUserDetailsItemProps> = ({
  text,
  isSwitch,
  icon,
  onClick,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const selectIcon = () => {
    if (isSwitch) {
      return colorMode ? FiMoon : FiSun;
    }
    return icon;
  };
  return (
    <HStack
      px={2}
      d='flex'
      flexDirection='row'
      height='40px'
      borderLeft='2px'
      width='100%'
      _hover={{
        cursor: 'pointer',
        color: useColorModeValue('pink.500', 'purple.500'),
        fontWeight: '500',
      }}
      onClick={async () => {
        if (!isSwitch) {
          onClick();
        }
      }}
    >
      <Flex justify='center' alignItems='center' ml={2}>
        <Icon as={selectIcon()} fontSize='1.4rem' mr='3' />
        <Text userSelect='none'>{text}</Text>
      </Flex>
      <Spacer />
      <Flex>
        {isSwitch === true ? (
          <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        ) : null}
      </Flex>
    </HStack>
  );
};
