import React, { useContext } from 'react';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/app.routes';

import { WellDone } from '../../assets/icons';
import { Background } from '../../components';

import { Title, Text, Button, ButtonText } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Congrats'>;

export const Congrats = ({ navigation }: Props) => {
  const theme = useContext(ThemeContext);
  return (
    <Background>
      <WellDone />
      <Title>Aeeeee</Title>
      <Text>Sua compra chegará num prazo de 5 a 7 dias úteis.</Text>

      <Button onPress={() => navigation.navigate('Home')}>
        <Feather name="home" size={24} color={theme.colors.white} />
        <ButtonText>Home</ButtonText>
      </Button>
    </Background>
  );
};
