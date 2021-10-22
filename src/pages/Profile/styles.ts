import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Header = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const IconButton = styled.TouchableOpacity``;

export const HeaderText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.centuryBold};
`;

export const Container = styled.View`
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${RFValue(32)}px 0;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.centuryRegular};
`;
