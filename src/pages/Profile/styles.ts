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
  font-family: CenturyGothic-Bold;
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(32)}px;
`;
