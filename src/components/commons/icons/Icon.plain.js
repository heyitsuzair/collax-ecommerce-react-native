import {View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const IconPlain = ({icon, color, size}) => {
  return (
    <View>
      <Icon
        name={icon}
        color={color ? color : 'black'}
        size={size ? size : 15}
      />
    </View>
  );
};

export default IconPlain;
