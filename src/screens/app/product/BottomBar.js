import {View} from 'react-native';
import React from 'react';
import {ButtonPlain} from '../../../components/commons';
import tw from 'twrnc';

const BottomBar = ({available_qty, onAddToCart, onBuyNow, isInCart}) => {
  return (
    <View
      style={tw`bg-white flex-row gap-3 py-5 px-2 mx-auto border-t border-gray-300 justify-center`}>
      <ButtonPlain
        text={isInCart ? 'Save' : 'Add To Cart'}
        colorBtn="bg-yellow-300"
        isDisabled={available_qty < 1}
        colorText="text-black"
        onPress={() => onAddToCart()}
      />
      <ButtonPlain
        text="Buy Now"
        colorBtn="bg-indigo-400"
        isDisabled={available_qty < 1}
        colorText="text-black"
        onPress={() => onBuyNow()}
      />
    </View>
  );
};

export default BottomBar;
