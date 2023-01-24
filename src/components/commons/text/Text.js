import {StyleSheet, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const PlainText = ({isDmSans, text, classes}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: `DMSans-${isDmSans}`,
    },
  });
  return (
    <Text
      adjustsFontSizeToFit
      style={[tw`text-lg ${classes}`, isDmSans && styles.text]}>
      {text}
    </Text>
  );
};

export default PlainText;
