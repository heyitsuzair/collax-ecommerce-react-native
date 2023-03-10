import {View} from 'react-native';
import React from 'react';
import {ButtonPlain} from '../../../components/commons';
import tw from 'twrnc';

const PlaceOrder = ({onPress, isLoading, isConnected}) => {
  return (
    <View
      style={tw`bg-white flex-row gap-3 py-5 px-2 mx-auto border-t border-gray-300`}>
      <ButtonPlain
        text={isConnected ? 'Place Order' : 'Network Unavailable'}
        colorBtn="bg-yellow-300"
        colorText="text-black"
        isWidthFull
        isDisabled={!isConnected}
        isLoading={isLoading}
        colorLoading="black"
        onPress={() => onPress()}
      />
    </View>
  );
};

export default PlaceOrder;
