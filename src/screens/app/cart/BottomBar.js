import {View} from 'react-native';
import React from 'react';
import {ButtonPlain} from '../../../components/commons';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../config';

const BottomBar = () => {
  /**
   * Navigation
   */
  const navigation = useNavigation();

  return (
    <View
      style={tw`bg-white flex-row gap-3 py-5 px-2 mx-auto border-t border-gray-300`}>
      <ButtonPlain
        text="Clear Cart"
        colorBtn="bg-yellow-300"
        colorText="text-black"
        onPress={() => alert('Clear Cart')}
      />
      <ButtonPlain
        text="Proceed To Checkout"
        onPress={() => navigation.navigate(Routes.checkoutScreen)}
      />
    </View>
  );
};

export default BottomBar;
