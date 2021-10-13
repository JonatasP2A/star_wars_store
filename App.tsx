import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import LoadAssets from './src/container/LoadAssets';
import { AuthProvider } from './src/hooks/auth';
import { Home } from './src/pages/Home';
import { Login } from './src/pages/Login';
import { droid, darkSide, lightSide } from './src/styles/themes';

type Theme = 'droid' | 'darkSide' | 'lightSide';

const fonts = {
  'CenturyGothic-Regular': require('./assets/fonts/CenturyGothicRegular.ttf'),
  'CenturyGothic-Bold': require('./assets/fonts/CenturyGothicBold.ttf'),
  'StarJedi-Regular': require('./assets/fonts/StarJediRegular.ttf'),
};

export default function App() {
  const [theme, setTheme] = useState<DefaultTheme>();

  const handleTheme = (theme: Theme) => {
    switch (theme) {
      case 'droid':
        setTheme(droid);
        break;
      case 'darkSide':
        setTheme(darkSide);
        break;
      case 'lightSide':
        setTheme(lightSide);
        break;
    }
  };

  return (
    <ThemeProvider theme={lightSide}>
      <LoadAssets fonts={fonts}>
        <AuthProvider>
          <Home />
        </AuthProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
