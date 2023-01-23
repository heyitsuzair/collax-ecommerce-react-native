import {View} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';
import {Text} from '../index';
import tw from 'twrnc';
import {Pressable} from 'react-native';

const RadioPlain = ({value, onPress, checkedValue, label}) => {
  /**
   * Radio Button Props
   */
  const props = {
    value: value,
    color: '#6366fa',
    status: checkedValue === value ? 'checked' : 'unchecked',
    onPress: () => onPress(value),
  };

  return (
    <Pressable
      onPress={() => onPress(value)}
      style={tw`flex-row items-center gap-1`}>
      <RadioButton {...props} />
      <Text text={label} />
    </Pressable>
  );
};

export default RadioPlain;
