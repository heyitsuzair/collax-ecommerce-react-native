import {View} from 'react-native';
import React from 'react';
import {ButtonPlain} from '../../../components/commons';
import tw from 'twrnc';

const BottomBar = () => {
  return (
    <View
      style={tw`bg-white flex-row gap-3 py-5 px-2 mx-auto border-t border-gray-300`}>
      <ButtonPlain
        text="Add To Cart"
        colorBtn="bg-yellow-300"
        colorText="text-black"
        onPress={() => alert('Add To Cart')}
      />
      <ButtonPlain
        text="Buy Now"
        colorBtn="bg-indigo-400"
        colorText="text-black"
        onPress={() => alert('Buy Now')}
      />
    </View>
  );
};

export default BottomBar;
