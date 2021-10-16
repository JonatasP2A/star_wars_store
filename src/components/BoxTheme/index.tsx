import React from 'react';
import { useTheme } from '../../hooks/theme';

import { Robot, Stormtrooper, Yoda } from '../../assets/icons';
import { Container, Text } from './styles';

interface BoxThemeProps {
  type: 'droid' | 'darkSide' | 'lightSide';
}

export const BoxTheme = ({ type }: BoxThemeProps) => {
  const { handleTheme } = useTheme();

  const boxTitle =
    type === 'droid' ? 'DROID' : type === 'lightSide' ? 'LIGHT' : 'DARK';

  const getIcon =
    type === 'droid' ? (
      <Robot />
    ) : type === 'lightSide' ? (
      <Yoda />
    ) : (
      <Stormtrooper />
    );

  return (
    <Container type={type} onPress={() => handleTheme(type)}>
      <Text type={type}>{boxTitle}</Text>
      {getIcon}
    </Container>
  );
};
