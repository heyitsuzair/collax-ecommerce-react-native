import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  AboutScreen,
  CartScreen,
  ContactScreen,
  HomeScreen,
} from '../../screens/app';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={tw`border-t border-gray-300`}
      activeColor="#6366fa">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={23} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={23} />,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="phone" color={color} size={23} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigator;
