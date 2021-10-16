import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/app.routes';

import { Background, BoxTheme } from '../../components';

import { Header, IconButton, HeaderText, Container } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Themes'>;

export const Themes = ({ navigation }: Props) => {
  return (
    <Background>
      <Header>
        <IconButton onPress={() => navigation.navigate('Home')}>
          <Feather name="chevron-left" size={RFValue(24)} color="#FFF" />
        </IconButton>
        <HeaderText>Profile</HeaderText>
      </Header>

      <Container>
        <BoxTheme type="droid" />
        <BoxTheme type="lightSide" />
        <BoxTheme type="darkSide" />
      </Container>
    </Background>
  );
};