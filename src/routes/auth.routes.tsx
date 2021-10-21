import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../pages/Login';

const App = createNativeStackNavigator();

export type RootStackParamList = {
  Login: undefined;
};

const AuthRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Login" component={Login} />
  </App.Navigator>
);

export default AuthRoutes;
