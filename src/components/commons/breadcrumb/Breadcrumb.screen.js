import {View, Image, StyleSheet, Linking} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {ButtonPlain, Text} from '../index';

const image = require('../../../img/ab-1.1.jpg');

const BreadcrumbScreen = ({text}) => {
  return (
    <View>
      <Image source={image} resizeMode="cover" style={styles.bgImage} />
      <View style={tw`absolute top-10 left-6 gap-7`}>
        <Text text={text} classes="text-black text-3xl" isDmSans="Bold" />
        <ButtonPlain
          text="Let's Work Together"
          icon="arrow-right"
          colorBtn="bg-white border-b-4 border-indigo-500"
          colorIcon="black"
          colorText="text-black"
          onPress={() => Linking.openURL('https://wa.link/bgpq3g')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '70%',
  },
});

export default BreadcrumbScreen;
