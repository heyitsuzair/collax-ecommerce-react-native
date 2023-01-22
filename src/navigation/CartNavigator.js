import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../config';
import {CartScreen} from '../screens/app/cart';
import {CheckoutScreen} from '../screens/app/checkout';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name={Routes.checkoutScreen} component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
