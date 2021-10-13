import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Apple, Facebook, Google, LogoBigger } from '../../assets/icons';

import {
  Container,
  LogoText,
  PhraseContainer,
  Phrase,
  Author,
  Content,
  Line,
  Text,
  LoginContainer,
  BoxLogo,
} from './styles';

export const Login = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container
      source={require('../../assets/images/backgroundStars.png')}
      resizeMode="cover"
    >
      <LogoBigger color={theme.colors.yellow} style={{ marginTop: 'auto' }} />
      <LogoText>store</LogoText>

      <PhraseContainer>
        <Phrase>Agora a diversão vai começar</Phrase>
        <Author>Anakin Skywalker</Author>
      </PhraseContainer>

      <Content>
        <Line />
        <Text>Entrar com</Text>
        <Line />
      </Content>

      <LoginContainer>
        <BoxLogo>
          <Google />
        </BoxLogo>
        <BoxLogo>
          <Apple />
        </BoxLogo>
        <BoxLogo>
          <Facebook />
        </BoxLogo>
      </LoginContainer>
    </Container>
  );
};
