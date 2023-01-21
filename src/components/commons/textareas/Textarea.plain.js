import {View, TextInput} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import TextError from '../text/Text.error';

const TextareaPlain = ({
  onChange,
  onBlur,
  keyboardType,
  isSecureText,
  value,
  error,
  errorText,
  placeholder,
}) => {
  return (
    <View>
      <TextInput
        secureTextEntry={isSecureText && isSecureText}
        style={tw`border-2 border-gray-200 text-lg p-3 rounded-xl w-full`}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChange}
        value={value}
        onBlur={onBlur}
        textAlignVertical="top"
        multiline
        numberOfLines={10}
      />
      {error && (
        <View style={tw`mt-1`}>
          <TextError error={errorText} />
        </View>
      )}
    </View>
  );
};

export default TextareaPlain;
