import {Pressable, Image, View, Dimensions} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../config';
import {Text} from '../index';

const CardProduct = ({product_image, slug, product_title, price}) => {
  const navigation = useNavigation();

  /**
   * @function onCardPress
   *
   * When Someone Touches Card Navigate To Product Screen
   *
   * Navigate To Product Screen With Slug
   */
  const onCardPress = () => {
    navigation.navigate(Routes.productScreen, {
      screen: 'Product',
      params: {slug},
    });
  };

  /**
   * Product Picture
   */
  const PRODUCT_IMAGE = product_image.data.attributes.url;

  /**
   * Image Height
   */
  const WIDTH = Dimensions.get('screen').width / 9.3;

  return (
    <Pressable onPress={() => onCardPress()} style={tw`m-1`}>
      <View>
        <Image
          source={{uri: PRODUCT_IMAGE}}
          resizeMode="cover"
          style={tw`w-[${WIDTH}]px h-52`}
        />
        <Text
          text={product_title}
          isDmSans="Medium"
          classes="text-black text-center my-4 min-h-[1.7rem]"
        />
        <Text
          text={`$${price}`}
          isDmSans="Regular"
          classes="text-gray-400 text-center my-4"
        />
      </View>
    </Pressable>
  );
};

export default CardProduct;
