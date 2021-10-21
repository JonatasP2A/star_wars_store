import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface BoxLogoProps {
  margin?: boolean;
}

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

export const LogoText = styled.Text`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.starJedi};
`;

export const PhraseContainer = styled.View`
  margin-top: ${RFValue(64)}px;
`;

export const Phrase = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.centuryBold};
`;

export const Author = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.centuryRegular};
  margin-left: auto;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;

  margin: ${RFValue(188)}px ${RFValue(16)}px 0;
`;

export const Line = styled.View`
  flex: 1;
  height: 2px;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.centuryRegular};
  margin: 0 ${RFValue(16)}px;
`;

export const LoginContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: ${RFValue(24)}px 0 ${RFValue(60)}px;
`;

export const BoxLogo = styled.TouchableOpacity<BoxLogoProps>`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(24)}px;

  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ margin }) =>
    margin &&
    css`
      margin-right: ${RFValue(36)}px;
    `}
`;
