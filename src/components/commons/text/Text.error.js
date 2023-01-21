import {View} from 'react-native';
import React from 'react';
import Text from './Text';

const TextError = ({error}) => {
  return (
    <View>
      <Text text={error} classes="text-red-400" isDmSans="Medium" />
    </View>
  );
};

export default TextError;
