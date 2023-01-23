import {View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import tw from 'twrnc';
import TextError from '../text/Text.error';

const PaperSelectInput = ({
  value,
  onSelect,
  onBlur,
  list,
  error,
  errorText,
}) => {
  return (
    <>
      <View style={tw`border-2 border-gray-200 text-lg rounded-xl`}>
        <Picker
          selectedValue={value}
          onBlur={onBlur}
          onValueChange={itemValue => onSelect(itemValue)}>
          {list.map(item => {
            return (
              <Picker.Item
                key={item.value}
                label={item.value}
                value={item.value}
              />
            );
          })}
        </Picker>
      </View>
      {error && (
        <View style={tw`-mt-3`}>
          <TextError error={errorText} />
        </View>
      )}
    </>
  );
};

export default PaperSelectInput;
