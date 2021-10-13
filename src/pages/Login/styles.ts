import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

export const LogoText = styled.Text`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: ${RFValue(24)}px;
  font-family: StarJedi-Regular;
`;

export const PhraseContainer = styled.View`
  margin-top: ${RFValue(64)}px;
`;

export const Phrase = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
  font-family: CenturyGothic-Bold;
`;

export const Author = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(10)}px;
  font-family: CenturyGothic-Regular;
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
  font-family: CenturyGothic-Regular;
  margin: 0 ${RFValue(16)}px;
`;

export const LoginContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(24)}px ${RFValue(60)}px ${RFValue(60)}px;
`;

export const BoxLogo = styled.TouchableOpacity`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(24)}px;

  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
