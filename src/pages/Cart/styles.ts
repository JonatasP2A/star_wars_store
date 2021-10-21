import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Header = styled.View`
  position: relative;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;
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

export const Content = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  justify-content: flex-end;
`;

export const Line = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray};
  margin: ${RFValue(16)}px 0;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.centuryBold};
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.secondary};

  margin: 0 auto;
  border-radius: ${RFValue(8)}px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.centuryBold};
`;
