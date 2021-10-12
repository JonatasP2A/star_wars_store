import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Home } from './src/pages/Home';
import { droid, darkSide, lightSide } from './src/styles/themes';

type Theme = 'droid' | 'darkSide' | 'lightSide';

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
      <StatusBar />
      <Home />
    </ThemeProvider>
  );
}
