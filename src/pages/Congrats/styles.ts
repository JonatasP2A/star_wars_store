import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Title = styled.Text`
  margin-top: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.centuryBold};
  text-align: center;
`;

export const Text = styled.Text`
  margin-top: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.centuryRegular};
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  width: 40%;
  padding: ${RFValue(16)}px;
  margin: auto auto ${RFValue(24)}px;
  border-radius: ${RFValue(16)}px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.centuryBold};
  margin-left: ${RFValue(8)}px;
`;
