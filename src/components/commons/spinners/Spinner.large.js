import {ActivityIndicator} from 'react-native';
import React from 'react';

const SpinnerLarge = ({color}) => {
  return <ActivityIndicator color={color ? color : '#6366fa'} size={70} />;
};

export default SpinnerLarge;
