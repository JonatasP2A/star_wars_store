import React, { useContext } from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { ThemeContext } from 'styled-components';
import { StatusBar } from 'expo-status-bar';

import { Yoda, Robot, Stormtrooper, Logo } from '../../assets/icons';

import { Container, Cart, Circle, Text } from './styles';

export const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <StatusBar />

      {theme.title === 'droid' ? (
        <Robot />
      ) : theme.title === 'darkSide' ? (
        <Stormtrooper />
      ) : (
        <Yoda />
      )}

      <Logo color={theme.colors.primary} />
      <Cart>
        <Feather
          name="shopping-cart"
          size={RFValue(24)}
          color={theme.colors.white}
        />
        <Circle>
          <Text>0</Text>
        </Circle>
      </Cart>
    </Container>
  );
};
