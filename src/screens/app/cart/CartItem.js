import {View, Image, Pressable} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {IconPlain, Text} from '../../../components/commons';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../config';
import {useDispatch} from 'react-redux';
import {decreaseQuantity, increaseQuantity} from '../../../redux/slices/cart';

const CartItem = ({product_info, req_qty, product_id}) => {
  /**
   * Navigation
   */
  const navigation = useNavigation();

  /**
   * Redux Helper Functions
   */
  const dispatch = useDispatch();

  /**
   * Product Image
   */
  const PRODUCT_IMAGE = product_info.product_image;

  /**
   * @function onTitlePress
   *
   * When Someone Touches Title Navigate To Product Screen
   */
  const onTitlePress = () => {
    navigation.navigate(Routes.productScreen, {
      screen: 'Product',
      params: {slug: product_info.slug},
    });
  };

  return (
    <View
      style={tw`border flex-row items-center gap-6 border-gray-300 rounded-md p-4`}>
      <Image
        source={{uri: PRODUCT_IMAGE}}
        resizeMode="cover"
        style={tw`w-32 h-32`}
      />
      <View style={tw`gap-6 justify-between`}>
        <View>
          <Pressable onPress={() => onTitlePress()}>
            <Text
              text={product_info.product_title}
              isDmSans="Regular"
              classes="text-black text-xl underline"
            />
          </Pressable>
          <Text
            text={`$${product_info.price * req_qty}`}
            isDmSans="Bold"
            classes="text-black mt-2"
          />
        </View>
        <View style={tw`flex-row gap-4 items-center`}>
          <Pressable
            onPress={() => dispatch(decreaseQuantity(product_id))}
            style={tw`bg-yellow-300 px-4 py-2 rounded-md`}>
            <IconPlain icon="minus" />
          </Pressable>
          <Text text={req_qty} classes="w-8 text-center text-black" />
          <Pressable
            onPress={() => dispatch(increaseQuantity(product_id))}
            style={tw`bg-yellow-300 px-4 py-2 rounded-md`}>
            <IconPlain icon="plus" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
