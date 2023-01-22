import {View} from 'react-native';
import React from 'react';
import {ButtonPlain} from '../../../components/commons';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../config';

const Proceed = () => {
  /**
   * Navigation
   */
  const navigation = useNavigation();

  return (
    <View style={tw`bg-white p-5 border-t border-gray-300`}>
      <ButtonPlain
        text="Proceed To Checkout"
        isWidthFull
        onPress={() => navigation.navigate(Routes.checkoutScreen)}
      />
    </View>
  );
};

export default Proceed;
