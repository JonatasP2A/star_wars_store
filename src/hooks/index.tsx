import React from 'react';

import { AuthProvider } from './auth';
import { ThemesProvider } from './theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemesProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemesProvider>
  );
};

export default AppProvider;
