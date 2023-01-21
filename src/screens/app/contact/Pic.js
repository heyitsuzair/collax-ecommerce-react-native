import {View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Image} from 'react-native';

/**
 * My Picture
 */
const CONTACT_IMG = require('../../../img/contact-1.jpg');

const Pic = () => {
  return (
    <View style={tw`flex-1`}>
      <Image source={CONTACT_IMG} resizeMode="cover" style={tw`w-full`} />
    </View>
  );
};

export default Pic;
