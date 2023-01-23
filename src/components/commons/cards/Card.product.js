import {Pressable, Image, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../config';
import {Text} from '../index';

const CardProduct = () => {
  const navigation = useNavigation();

  /**
   * @function onCardPress
   *
   * When Someone Touches Card Navigate To Product Screen
   */
  const onCardPress = () => {
    navigation.navigate(Routes.productScreen, {
      slug: 'slug',
    });
  };

  /**
   * Product Picture
   */
  const PRODUCT_IMAGE = require('../../../img/contact-1.jpg');
  return (
    <Pressable onPress={() => onCardPress()} style={tw`m-1`}>
      <View>
        <Image
          source={PRODUCT_IMAGE}
          resizeMode="cover"
          style={tw`w-44.5 h-52`}
        />
        <Text
          text="iPhone-12,lorememffnfnfnfn"
          isDmSans="Medium"
          classes="text-black text-center my-4 min-h-[1.7rem] w-44.5"
        />
        <Text
          text="$40"
          isDmSans="Regular"
          classes="text-gray-400 text-center my-4"
        />
      </View>
    </Pressable>
  );
};

export default CardProduct;
