import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Themes } from '../pages/Themes';

const App = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Themes: undefined;
};

const AuthRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Themes" component={Themes} />
  </App.Navigator>
);

export default AuthRoutes;
