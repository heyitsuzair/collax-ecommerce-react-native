import {View} from 'react-native';
import React from 'react';
import {TextError, RadioPlain} from '../index';
import tw from 'twrnc';

const RadioGroup = ({radios, checkedValue, onPress, error, errorText}) => {
  return (
    <View>
      {radios.map(radio => {
        return (
          <RadioPlain
            key={radio.id}
            label={radio.label}
            onPress={onPress}
            checkedValue={checkedValue}
            value={radio.value}
          />
        );
      })}
      {error && (
        <View style={tw`mt-1`}>
          <TextError error={errorText} />
        </View>
      )}
    </View>
  );
};

export default RadioGroup;
