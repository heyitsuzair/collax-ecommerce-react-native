import {View} from 'react-native';
import React from 'react';
import IconPlain from './Icon.plain';
import tw from 'twrnc';

const IconRounded = ({color, size, icon, classes}) => {
  return (
    <View
      style={tw`rounded-full bg-indigo-500 w-12 h-12 justify-center items-center ${classes}`}>
      <IconPlain color={color} size={size} icon={icon} />
    </View>
  );
};

export default IconRounded;
