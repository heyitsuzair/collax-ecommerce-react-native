import React from 'react';
import {Text} from '../index';
import tw from 'twrnc';

const BadgePlain = ({classes, text}) => {
  return (
    <Text
      text={text}
      classes={`${classes} font-medium rounded-lg transition-all`}
    />
  );
};

export default BadgePlain;
