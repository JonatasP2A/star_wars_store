import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { ThemeContext } from 'styled-components';

import { Yoda, Robot, Stormtrooper, Logo } from '../../assets/icons';

import { Container, Cart, Circle, Text } from './styles';
import { useCart } from '../../hooks/cart';

interface HeaderProps {
  goToProfile: () => void;
  goToCart: () => void;
}

export const Header = ({ goToProfile, goToCart }: HeaderProps) => {
  const theme = useContext(ThemeContext);
  const { products } = useCart();

  return (
    <Container>
      <TouchableOpacity onPress={goToProfile}>
        {theme.title === 'droid' ? (
          <Robot />
        ) : theme.title === 'darkSide' ? (
          <Stormtrooper />
        ) : (
          <Yoda />
        )}
      </TouchableOpacity>

      <Logo color={theme.colors.primary} />
      <Cart onPress={goToCart}>
        <Feather
          name="shopping-cart"
          size={RFValue(24)}
          color={theme.colors.white}
        />
        <Circle>
          <Text>{products.length}</Text>
        </Circle>
      </Cart>
    </Container>
  );
};
