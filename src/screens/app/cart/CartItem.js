import {View, Image, Pressable} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {IconPlain, Text} from '../../../components/commons';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../config';

const CartItem = () => {
  /**
   * Navigation
   */
  const navigation = useNavigation();

  /**
   * Product Image
   */
  const PRODUCT_IMAGE = require('../../../img/service-2.png');

  return (
    <View
      style={tw`border flex-row items-center gap-6 border-gray-300 rounded-lg p-4`}>
      <Image source={PRODUCT_IMAGE} resizeMode="cover" style={tw`w-32 h-32`} />
      <View style={tw`gap-6 justify-between`}>
        <View>
          <Pressable onPress={() => navigation.navigate(Routes.productScreen)}>
            <Text
              text="Green Shirt"
              isDmSans="Regular"
              classes="text-black text-xl underline"
            />
          </Pressable>
          <Text text="$80" isDmSans="Bold" classes="text-black mt-2" />
        </View>
        <View style={tw`flex-row gap-4 items-center`}>
          <Pressable
            onPress={() => alert('minus')}
            style={tw`bg-yellow-300 px-4 py-2 rounded-md`}>
            <IconPlain icon="minus" />
          </Pressable>
          <Text text="1" />
          <Pressable
            onPress={() => alert('plus')}
            style={tw`bg-yellow-300 px-4 py-2 rounded-md`}>
            <IconPlain icon="plus" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
