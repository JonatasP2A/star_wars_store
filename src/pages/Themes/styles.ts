import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';

export const Header = styled.View`
  position: relative;
  flex-direction: row;
  margin-top: ${Constants.statusBarHeight + RFValue(16)}px;

  align-items: center;
  justify-content: space-around;
`;

export const IconButton = styled.TouchableOpacity`
  position: absolute;
  top: auto;
  bottom: auto;
  left: ${RFValue(24)}px;
`;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  font-family: CenturyGothic-Regular;
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${RFValue(32)}px ${RFValue(24)}px;
`;
