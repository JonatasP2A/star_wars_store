import 'styled-components';
import { droid } from '.';

declare module 'styled-components' {
  type ThemeType = typeof droid;

  export interface DefaultTheme extends ThemeType {}
}
