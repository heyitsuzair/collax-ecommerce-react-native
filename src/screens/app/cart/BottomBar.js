import {View} from 'react-native';
import React from 'react';
import {ButtonPlain, SuccessMessage} from '../../../components/commons';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../config';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart} from '../../../redux/slices/cart';

const BottomBar = () => {
  /**
   * Navigation
   */
  const navigation = useNavigation();

  /**
   * Redux Helper Functions
   */
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart);

  /**
   * @function onClearCart
   *
   * Triggers When Someone Touches Clear Cart Button
   *
   * Clear The Cart And Show Success Message
   */
  const onClearCart = () => {
    dispatch(clearCart());
    SuccessMessage('Cart Cleared!');
  };

  return (
    <View
      style={tw`bg-white flex-row gap-3 py-5 px-2 mx-auto border-t border-gray-300`}>
      <ButtonPlain
        text="Clear Cart"
        colorBtn="bg-yellow-300"
        isDisabled={cart.cartItems.length < 1}
        colorText="text-black"
        onPress={() => onClearCart()}
      />
      <ButtonPlain
        text="Proceed To Checkout"
        isDisabled={cart.cartItems.length < 1}
        onPress={() => navigation.navigate(Routes.checkoutScreen)}
      />
    </View>
  );
};

export default BottomBar;
