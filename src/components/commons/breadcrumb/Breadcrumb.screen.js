import {View, Image, Linking} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {ButtonPlain, Text} from '../index';

const image = require('../../../img/ab-1.1.jpg');

const BreadcrumbScreen = ({text}) => {
  return (
    <View>
      <Image source={image} resizeMode="cover" style={tw`w-full h-[12.5rem]`} />
      <View style={tw`absolute w-full top-10 left-6 gap-7`}>
        <Text text={text} classes="text-black text-3xl" isDmSans="Bold" />
        <ButtonPlain
          text="Let's Work Together"
          icon="arrow-right"
          colorBtn="bg-white border-b-4 border-indigo-500"
          colorIcon="black"
          colorText="text-black"
          onPress={() => Linking.openURL('https://wa.link/bgpq3g')}
        />
      </View>
    </View>
  );
};

export default BreadcrumbScreen;
