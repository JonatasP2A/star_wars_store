import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { droid, darkSide, lightSide } from '../styles/themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

type Theme = 'droid' | 'darkSide' | 'lightSide';

interface IThemeContextData {
  handleTheme: (themeType: Theme) => void;
}

export const ThemeContext = createContext({} as IThemeContextData);

const ThemesProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(darkSide);

  const handleTheme = (themeType: Theme) => {
    switch (themeType) {
      case 'droid':
        setTheme(droid);
        break;
      case 'lightSide':
        setTheme(lightSide);
        break;
      case 'darkSide':
        setTheme(darkSide);
        break;
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        handleTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};

export { ThemesProvider, useTheme };
