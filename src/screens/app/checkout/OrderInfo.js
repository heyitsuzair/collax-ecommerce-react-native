import {View} from 'react-native';
import React from 'react';
import {Text} from '../../../components/commons';
import tw from 'twrnc';

const OrderInfo = () => {
  return (
    <View style={tw`gap-5`}>
      <View
        style={tw`flex-row justify-between border-b-2 border-gray-200 pb-2`}>
        <Text text="Product" />
        <Text text="Total" />
      </View>
      <View
        style={tw`flex-row justify-between border-b-2 border-gray-200 pb-2`}>
        <Text text="Hoodie" />
        <Text text="$20" isDmSans="Medium" classes="text-black" />
      </View>
      <View
        style={tw`flex-row justify-between border-b-2 border-gray-200 pb-2`}>
        <Text text="Delivery Charges" />
        <Text text="$40" isDmSans="Medium" classes="text-black" />
      </View>
      <View style={tw`flex-row justify-between pb-2`}>
        <Text text="Order Total" />
        <Text text="$40" isDmSans="Bold" classes="text-black text-2xl" />
      </View>
    </View>
  );
};

export default OrderInfo;
