import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

const App = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const AuthRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AuthRoutes;
