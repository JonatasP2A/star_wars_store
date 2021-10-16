import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(LinearGradient)`
  flex: 1;
  padding: ${Constants.statusBarHeight + RFValue(16)}px ${RFValue(16)}px
    ${RFValue(24)}px;
`;
