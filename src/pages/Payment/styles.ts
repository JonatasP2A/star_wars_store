import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TextInputProps {
  small?: boolean;
}

const { width } = Dimensions.get('window');

export const Header = styled.View`
  position: relative;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;
  margin-bottom: ${RFValue(24)}px;
`;

export const IconButton = styled.TouchableOpacity`
  position: absolute;
  top: auto;
  bottom: auto;
  left: 0;
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.centuryBold};
`;

export const Container = styled.View``;

export const Input = styled.TextInput<TextInputProps>`
  width: 100%;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
  margin-top: ${RFValue(16)}px;
  border-radius: ${RFValue(8)}px;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(8)}px;
`;

export const ErrorText = styled.Text`
  color: #e3656e;
  font-size: ${RFValue(10)}px;
  margin-top: ${RFValue(4)}px;
`;

export const Button = styled.TouchableOpacity`
  width: auto;
  margin: auto auto 0;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(8)}px ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.centuryBold};
`;
