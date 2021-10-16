import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';

const { height, width } = Dimensions.get('window');

interface CardTextProps {
  remove?: boolean;
}

export const Image = styled.Image`
  height: ${height * 0.45}px;
  width: ${width}px;
  position: absolute;
  top: ${Constants.statusBarHeight}px;
  left: 0;
  z-index: 10;
`;

export const IconButton = styled.TouchableOpacity`
  position: absolute;
  top: ${Constants.statusBarHeight + RFValue(24)}px;
  left: ${RFValue(24)}px;
  z-index: 20;

  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
  border-radius: ${RFValue(17.5)}px;
  background-color: ${({ theme }) => theme.colors.background};

  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + height * 0.45}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(20)}px;
  font-family: CenturyGothic-Bold;
  margin-bottom: ${RFValue(24)}px;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(8)}px;
`;

export const Description = styled.Text`
  width: 50%;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(12)}px;
  font-family: CenturyGothic-Regular;
`;

export const ProductInfo = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(12)}px;
  font-family: CenturyGothic-Regular;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: auto 0 ${RFValue(24)}px;
`;

export const PriceText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(14)}px;
  font-family: CenturyGothic-Bold;
`;

export const CardButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(12)}px;
  border-radius: ${RFValue(30)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CardText = styled.Text<CardTextProps>`
  color: ${({ theme, remove }) => (remove ? '#E3656E' : theme.colors.black)};
  font-size: ${RFValue(12)}px;
  font-family: CenturyGothic-Bold;
  margin-left: ${RFValue(8)}px;
  text-align: center;
`;
