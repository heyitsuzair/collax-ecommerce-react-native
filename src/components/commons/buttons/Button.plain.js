import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import tw from 'twrnc';
import SpinnerSmall from '../spinners/Spinner.small';

const ButtonPlain = ({
  text,
  colorBtn,
  colorText,
  colorIcon,
  colorLoading,
  sizeBtn,
  icon,
  iconSize,
  onPress,
  isLoading,
}) => {
  let size = 20;
  let textColor = 'text-white';
  let iconColor = 'white';
  let btnColor = 'bg-indigo-500';
  let btnSize = 'w-48 h-12';

  /**
   * Check Whether Icon Size Is Provided Or Not
   */
  if (iconSize) {
    size = iconSize;
  }
  /**
   * Check Whether Text Color Is Provided Or Not
   */
  if (colorText) {
    textColor = colorText;
  }
  /**
   * Check Whether Icon Color Is Provided Or Not
   */
  if (colorIcon) {
    iconColor = colorIcon;
  }
  /**
   * Check Whether Button Color Is Provided Or Not
   */
  if (colorBtn) {
    btnColor = colorBtn;
  }
  /**
   * Check Whether Button Size Is Provided Or Not
   */
  if (sizeBtn === 'small') {
    btnSize = 'w-32 h-8';
  } else if (sizeBtn === 'large') {
    btnSize = 'w-60 h-16';
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPressIn={onPress ? () => onPress() : null}
      style={tw`flex-row justify-center items-center gap-2 rounded-lg px-4 ${btnSize} ${btnColor}`}>
      {isLoading ? (
        <SpinnerSmall color={colorLoading} />
      ) : (
        <Text style={[tw`${textColor} text-center`, styles.text]}>{text}</Text>
      )}
      {icon && <Icon name={icon} size={size} color={iconColor} />}
    </TouchableOpacity>
  );
};

export default ButtonPlain;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'DMSans-Medium',
  },
});
