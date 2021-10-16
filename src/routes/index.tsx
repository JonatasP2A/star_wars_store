import React from 'react';

import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';
import { Login } from '../pages/Login';

const Routes: React.FC = () => {
  const { user } = useAuth();

  return user.id ? <AppRoutes /> : <Login />;
};

export default Routes;
