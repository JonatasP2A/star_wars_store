import React, { useContext } from 'react';
import { Alert, Platform } from 'react-native';
import { ThemeContext } from 'styled-components';
import { Apple, Facebook, Google, LogoBigger } from '../../assets/icons';
import { useAuth } from '../../hooks/auth';

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
  const { signInWithGoogle, signInWithApple } = useAuth();

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível se conectar com o Google');
    }
  };

  const handleSignInWithApple = async () => {
    try {
      await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível se conectar com a Apple');
    }
  };

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
        <BoxLogo onPress={handleSignInWithGoogle} margin>
          <Google />
        </BoxLogo>
        {Platform.OS === 'ios' && (
          <BoxLogo onPress={handleSignInWithApple} margin>
            <Apple />
          </BoxLogo>
        )}
        <BoxLogo>
          <Facebook />
        </BoxLogo>
      </LoginContainer>
    </Container>
  );
};
