import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');

const IMAGE_SIZE = (width - RFValue(64)) / 2;

export const Container = styled.View`
  flex: 1;
  margin-bottom: ${RFValue(12)}px;
`;

export const Image = styled.Image`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE - RFValue(5)}px;
  border-radius: ${RFValue(16)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const ProductName = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(12)}px;
  font-family: CenturyGothic-Regular;
`;

export const ProductPrice = styled(ProductName)`
  font-weight: bold;
`;
