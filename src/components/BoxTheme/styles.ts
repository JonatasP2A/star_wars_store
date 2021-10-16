import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { droid, darkSide, lightSide } from '../../styles/themes';

interface ThemeProps {
  type: 'droid' | 'darkSide' | 'lightSide';
}

export const Container = styled.TouchableOpacity<ThemeProps>`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ type }) =>
    type === 'droid'
      ? droid.colors.background
      : type === 'lightSide'
      ? lightSide.colors.background
      : darkSide.colors.background};
  border: 2px solid
    ${({ type }) =>
      type === 'droid'
        ? droid.colors.primary
        : type === 'lightSide'
        ? lightSide.colors.primary
        : darkSide.colors.secondary};

  padding: ${RFValue(8)}px;

  ${({ type }) =>
    type === 'lightSide' &&
    css`
      margin: 0 ${RFValue(16)}px;
    `}
`;

export const Text = styled.Text<ThemeProps>`
  color: ${({ type }) =>
    type === 'droid'
      ? droid.colors.primary
      : type === 'lightSide'
      ? lightSide.colors.primary
      : darkSide.colors.primary};
  text-transform: uppercase;
  font-size: ${RFValue(16)}px;
  font-family: CenturyGothic-Regular;

  margin-bottom: ${RFValue(10)}px;
`;
