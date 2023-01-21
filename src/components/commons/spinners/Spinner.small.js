import {ActivityIndicator} from 'react-native';
import React from 'react';

const SpinnerSmall = ({color}) => {
  return <ActivityIndicator color={color ? color : '#6366fa'} size={30} />;
};

export default SpinnerSmall;
