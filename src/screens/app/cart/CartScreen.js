import {ScrollView, View} from 'react-native';
import React from 'react';
import {BreadcrumbScreen, ButtonPlain} from '../../../components/commons';
import tw from 'twrnc';
import Proceed from './Proceed';

const CartScreen = () => {
  return (
    <>
      <ScrollView>
        <BreadcrumbScreen text="Cart" />
      </ScrollView>
      <Proceed />
    </>
  );
};

export default CartScreen;
