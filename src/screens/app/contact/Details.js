import {View, Pressable, Linking} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Text} from '../../../components/commons';

const Details = () => {
  return (
    <View style={tw`mt-10 gap-6`}>
      <View style={tw`gap-2`}>
        <Text
          text="Email Address"
          classes="text-xl text-black"
          isDmSans="Bold"
        />
        <Pressable
          onPress={() =>
            Linking.openURL('mailto:uzairdeveloper354123@gmail.com')
          }>
          <Text
            text="(uzairdeveloper354123@gmail.com)"
            classes="text-base text-gray-400"
            isDmSans="Regular"
          />
        </Pressable>
      </View>
      <View style={tw`gap-2`}>
        <Text text="Phone No" classes="text-xl text-black" isDmSans="Bold" />
        <Pressable onPress={() => Linking.openURL('tel:+923104864150')}>
          <Text
            text="(0310 4864150)"
            classes="text-base text-gray-400"
            isDmSans="Regular"
          />
        </Pressable>
      </View>
      <View style={tw`gap-2`}>
        <Text
          text="Address Line"
          classes="text-xl text-black"
          isDmSans="Bold"
        />
        <Pressable
          onPress={() =>
            Linking.openURL('https://goo.gl/maps/kwKKyFuGaBpUtNFR8')
          }>
          <Text
            text="(Lahore, Pakistan)"
            classes="text-base text-gray-400"
            isDmSans="Regular"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Details;
