import {View} from 'react-native';
import React from 'react';
import {Text} from '../../../components/commons';
import tw from 'twrnc';
import {useSelector} from 'react-redux';

const OrderInfo = () => {
  /**
   * Redux Helper Functions
   */
  const cart = useSelector(store => store.cart);

  return (
    <View style={tw`gap-5`}>
      <View
        style={tw`flex-row justify-between border-b-2 border-gray-200 pb-2`}>
        <Text text="Product" />
        <Text text="Total" />
      </View>
      {cart.cartItems.map(item => {
        return (
          <View
            key={item.product_id}
            style={tw`flex-row justify-between border-b-2 border-gray-200 pb-2`}>
            <Text text={item.product_info.product_title} />
            <Text
              text={`$${item.product_info.price * item.req_qty}`}
              isDmSans="Medium"
              classes="text-black"
            />
          </View>
        );
      })}
      <View
        style={tw`flex-row justify-between border-b-2 border-gray-200 pb-2`}>
        <Text text="Delivery Charges" />
        <Text text="$40" isDmSans="Medium" classes="text-black" />
      </View>
      <View style={tw`flex-row justify-between pb-2`}>
        <Text text="Order Total" />
        <Text
          text={`$${cart.total + 40}`}
          isDmSans="Bold"
          classes="text-black text-2xl"
        />
      </View>
    </View>
  );
};

export default OrderInfo;
