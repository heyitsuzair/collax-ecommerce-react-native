import {ScrollView, View} from 'react-native';
import React from 'react';
import {BreadcrumbScreen} from '../../../components/commons';
import tw from 'twrnc';
import Proceed from './Proceed';
import CartItem from './CartItem';

const CartScreen = () => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BreadcrumbScreen text="Cart" />
        <View style={tw`p-3 bg-white gap-4`}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </View>
      </ScrollView>
      <Proceed />
    </>
  );
};

export default CartScreen;
