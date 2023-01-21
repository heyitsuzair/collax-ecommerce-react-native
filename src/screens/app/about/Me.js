import {Image, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';

/**
 * My Picture
 */
const MY_PIC = require('../../../img/me.png');
const Me = () => {
  return (
    <View style={tw`flex-1`}>
      <Image
        resizeMode="cover"
        source={MY_PIC}
        style={tw`w-5/6 h-[30rem] rounded-lg mx-auto`}
      />
    </View>
  );
};

export default Me;
