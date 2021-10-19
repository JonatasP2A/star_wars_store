import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Mastercard, Visa } from '../../assets/icons';

import {
  Container,
  Front,
  Top,
  CreditCardBrand,
  CreditCardNumber,
  Footer,
  Left,
  Title,
  Info,
  Right,
  Back,
  Line,
  WhiteLine,
  SmallLine,
  Cvv,
} from './styles';

interface CardProps {
  x: Animated.SharedValue<number>;
}

const { width } = Dimensions.get('window');

export const Card = ({ x }: CardProps) => {
  const backStyles = useAnimatedStyle(() => {
    const rotateY = interpolate(x.value, [0, width], [180, 360]);

    return {
      transform: [{ rotateY: `${rotateY}deg` }],
    };
  });

  const frontStyles = useAnimatedStyle(() => {
    const rotateY = interpolate(x.value, [0, width], [0, 180]);

    return {
      transform: [{ rotateY: `${rotateY}deg` }],
    };
  });

  return (
    <Container>
      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            backfaceVisibility: 'hidden',
            width: '100%',
            height: RFPercentage(25),
          },
          backStyles,
        ]}
      >
        <Back colors={['#B1B1B2', '#6B6B6D']}>
          <Line />
          <WhiteLine>
            <SmallLine />
            <SmallLine />
            <SmallLine />
            <SmallLine />
            <Cvv>123</Cvv>
          </WhiteLine>
        </Back>
      </Animated.View>

      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            backfaceVisibility: 'hidden',
            width: '100%',
            height: RFPercentage(25),
          },
          frontStyles,
        ]}
      >
        <Front colors={['#B1B1B2', '#6B6B6D']}>
          <Top>
            <CreditCardBrand>
              <Mastercard />
            </CreditCardBrand>
          </Top>
          <CreditCardNumber>4974 3543 1676 9265</CreditCardNumber>
          <Footer>
            <Left>
              <Title>Nome</Title>
              <Info>Jonatas P A Alves</Info>
            </Left>

            <Right>
              <Title>Validade</Title>
              <Info>12/22</Info>
            </Right>
          </Footer>
        </Front>
      </Animated.View>
    </Container>
  );
};
