import React from 'react';
import { Control, useWatch } from 'react-hook-form';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Mastercard, Visa } from '../../assets/icons';
import { FormInputs } from '../../pages/Payment';

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
  control: Control<FormInputs>;
}

const { width } = Dimensions.get('window');

export const Card = ({ x, control }: CardProps) => {
  const cardNumber = useWatch({
    control,
    name: 'cardNumber',
    defaultValue: 'xxxx xxxx xxxx xxxx',
  });

  const name = useWatch({
    control,
    name: 'name',
    defaultValue: 'Luke Skywalker',
  });

  const valid = useWatch({
    control,
    name: 'valid',
    defaultValue: '12/27',
  });

  const ccv = useWatch({
    control,
    name: 'ccv',
    defaultValue: 'xxx',
  });

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
            <Cvv>{ccv}</Cvv>
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
          <CreditCardNumber>{cardNumber}</CreditCardNumber>
          <Footer>
            <Left>
              <Title>Nome</Title>
              <Info>{name}</Info>
            </Left>

            <Right>
              <Title>Validade</Title>
              <Info>{valid}</Info>
            </Right>
          </Footer>
        </Front>
      </Animated.View>
    </Container>
  );
};
