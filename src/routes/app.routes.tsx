import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Product } from '../pages/Product';

import { ProductType } from '../types/product';

const App = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Product: { product: ProductType };
};

const AuthRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Profile" component={Profile} />
    <App.Screen name="Product" component={Product} />
  </App.Navigator>
);

export default AuthRoutes;
