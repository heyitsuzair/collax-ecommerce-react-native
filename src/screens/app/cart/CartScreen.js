import {ScrollView, View} from 'react-native';
import React from 'react';
import {BreadcrumbScreen, Text} from '../../../components/commons';
import tw from 'twrnc';
import BottomBar from './BottomBar';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';

const CartScreen = () => {
  /**
   * Redux Helper Functions
   */
  const cart = useSelector(store => store.cart);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={tw`bg-white flex-1`}>
        <BreadcrumbScreen text="Cart" />
        {cart.cartItems.length > 0 ? (
          <View style={tw`p-3 gap-4`}>
            {cart.cartItems.map(item => {
              return <CartItem key={item.product_id} {...item} />;
            })}
          </View>
        ) : (
          <View style={tw`items-center justify-center h-72`}>
            <Text text="Your Cart Is Empty" />
          </View>
        )}
      </ScrollView>
      <BottomBar />
    </>
  );
};

export default CartScreen;
