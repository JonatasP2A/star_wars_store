import React from 'react';

import { AuthProvider } from './auth';
import { ThemesProvider } from './theme';
import { CartProvider } from './cart';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemesProvider>
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </ThemesProvider>
  );
};

export default AppProvider;
