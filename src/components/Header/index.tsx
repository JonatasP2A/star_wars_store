import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { ThemeContext } from 'styled-components';

import { Yoda, Robot, Stormtrooper, Logo } from '../../assets/icons';

import { Container, Cart, Circle, Text } from './styles';

interface HeaderProps {
  navigation: any;
}

export const Header = ({ navigation }: HeaderProps) => {
  const theme = useContext(ThemeContext);

  const handleNavigateToThemes = () => {
    navigation.navigate('Profile');
  };

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigateToThemes}>
        {theme.title === 'droid' ? (
          <Robot />
        ) : theme.title === 'darkSide' ? (
          <Stormtrooper />
        ) : (
          <Yoda />
        )}
      </TouchableOpacity>

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
