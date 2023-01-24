import {View} from 'react-native';
import React from 'react';
import PlainText from './Text';

const TextError = ({error}) => {
  return (
    <View>
      <PlainText
        adjustsFontSizeToFit
        text={error}
        classes="text-red-400 text-sm"
        isDmSans="Medium"
      />
    </View>
  );
};

export default TextError;
