import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../config';
import {ProductScreen} from '../screens/app/product';
import {CheckoutScreen} from '../screens/app/checkout';

const Stack = createNativeStackNavigator();

const ProductNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Product"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name={Routes.checkoutScreen} component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

export default ProductNavigator;
