import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Product } from '../pages/Product';
import { Cart } from '../pages/Cart';
import { Payment } from '../pages/Payment';
import { Congrats } from '../pages/Congrats';

import { ProductType } from '../types/product';

const App = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Product: { product: ProductType };
  Cart: undefined;
  Payment: undefined;
  Congrats: undefined;
};

const Stack = createSharedElementStackNavigator();

const SharedScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Product"
        component={Product}
        sharedElements={(route, otherRoute, showing) => {
          const { product } = route.params;
          return [product.title];
        }}
      />
    </Stack.Navigator>
  );
};

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Initial" component={SharedScreens} />
    <App.Screen name="Profile" component={Profile} />
    <App.Screen name="Product" component={Product} />
    <App.Screen name="Cart" component={Cart} />
    <App.Screen name="Payment" component={Payment} />
    <App.Screen name="Congrats" component={Congrats} />
  </App.Navigator>
);

export default AppRoutes;
