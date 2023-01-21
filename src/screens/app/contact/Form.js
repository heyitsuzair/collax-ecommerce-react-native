import {View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {InputPlain, Text} from '../../../components/commons';

const Form = () => {
  return (
    <View style={tw`mt-12`}>
      <Text
        text="Let's Talk..."
        classes="text-4xl text-black"
        isDmSans="Bold"
      />
      <View>
        <InputPlain />
      </View>
    </View>
  );
};

export default Form;
