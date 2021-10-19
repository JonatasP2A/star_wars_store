import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: ${RFValue(24)}px;
`;

export const Image = styled.Image`
  height: ${RFValue(100)}px;
  width: ${RFValue(100)}px;
  border-radius: ${RFValue(16)}px;
  margin-right: ${RFValue(22)}px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${RFValue(8)}px 0;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  width: 80%;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
  font-family: CenturyGothic-Bold;
  margin-right: auto;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(12)}px;
  font-family: CenturyGothic-Bold;
`;
