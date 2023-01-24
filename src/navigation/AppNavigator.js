import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';
import HomeNavigator from './HomeNavigator';
import {Routes} from '../config';
import {AboutScreen} from '../screens/app/about';
import {ContactScreen} from '../screens/app/contact';
import CartNavigator from './CartNavigator';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={tw`border-t border-gray-300 bg-white`}
      activeColor="#6366fa"
      inactiveColor="gray">
      <Tab.Screen
        name={Routes.homeScreen}
        component={HomeNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={23} />,
        }}
      />
      <Tab.Screen
        name={Routes.cartScreen}
        component={CartNavigator}
        options={{
          title: 'Cart',
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.aboutScreen}
        component={AboutScreen}
        options={{
          title: 'About',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={23} />,
        }}
      />
      <Tab.Screen
        name={Routes.contactScreen}
        component={ContactScreen}
        options={{
          title: 'Contact',
          tabBarIcon: ({color}) => (
            <Icon name="phone" color={color} size={23} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigator;
