import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/app/home';
import {Routes} from '../config';
import ProductNavigator from './ProductNavigator';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name={Routes.productScreen} component={ProductNavigator} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
