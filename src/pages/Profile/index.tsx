import React, { useEffect } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { navigate } from '../../routes/app.routes';

import { useAuth } from '../../hooks/auth';
import { getHistoric } from '../../services/api';
import { Background, BoxTheme } from '../../components';

import {
  Header,
  IconButton,
  HeaderText,
  Container,
  Row,
  Title,
} from './styles';

export const Profile = () => {
  const { logOut, user } = useAuth();

  const getData = async () => {
    try {
      const idSize = user.id.length;
      const id_user = Number(user.id.slice(idSize - 4, idSize));

      const response = await getHistoric({ id_user });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Background>
      <Header>
        <IconButton onPress={() => navigate('Home', undefined)}>
          <Feather name="chevron-left" size={RFValue(24)} color="#FFF" />
        </IconButton>
        <HeaderText>Profile</HeaderText>
        <IconButton onPress={() => logOut()}>
          <Feather name="log-out" size={RFValue(24)} color="#FFF" />
        </IconButton>
      </Header>

      <Container>
        <Row>
          <BoxTheme type="droid" />
          <BoxTheme type="lightSide" />
          <BoxTheme type="darkSide" />
        </Row>

        <Title>Histórico de compras</Title>
      </Container>
    </Background>
  );
};
