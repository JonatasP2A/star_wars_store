import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  padding-top: ${Constants.statusBarHeight + RFValue(16)}px;

  align-items: center;
  justify-content: space-around;
`;

export const Cart = styled.View`
  position: relative;
`;

export const Circle = styled.View`
  position: absolute;
  top: -${RFValue(15)}px;
  right: -${RFValue(15)}px;

  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;

  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(10)}px;
  font-weight: bold;
`;
