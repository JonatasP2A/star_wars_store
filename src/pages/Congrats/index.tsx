import React, { useContext } from 'react';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import { navigate } from '../../routes/NavigationService';

import { WellDone } from '../../assets/icons';
import { Background } from '../../components';

import { Title, Text, Button, ButtonText } from './styles';

export const Congrats = () => {
  const theme = useContext(ThemeContext);
  return (
    <Background>
      <WellDone />
      <Title>Aeeeee</Title>
      <Text>Sua compra chegará num prazo de 5 a 7 dias úteis.</Text>

      <Button onPress={() => navigate('Home', undefined)}>
        <Feather name="home" size={24} color={theme.colors.white} />
        <ButtonText>Home</ButtonText>
      </Button>
    </Background>
  );
};
