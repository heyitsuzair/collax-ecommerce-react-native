import React from 'react';
import {BadgePlain} from '../index';
import {View, Pressable} from 'react-native';
import tw from 'twrnc';

const BadgeGroup = ({badgeClasses, badgesArray, activeBadge, onBadgeClick}) => {
  /**
   * Badge Background Color
   */
  const bgColor = badgeClasses ? badgeClasses : 'py-1.5 px-4';

  /**
   * @function badgeState Returns the classes of active badge if @param {index} === @state {activeBadge} else it returns the default badge classes
   */
  const badgeState = index => {
    return activeBadge === index
      ? 'bg-yellow-300 text-black'
      : 'bg-gray-100 text-gray-500';
  };

  return (
    <View style={tw`flex-row gap-3 items-center`}>
      {badgesArray.map((badge, index) => {
        return (
          <Pressable
            key={index}
            onPress={onBadgeClick ? () => onBadgeClick(index) : null}>
            <BadgePlain
              text={badge}
              classes={`${badgeState(index)} ${bgColor}`}
            />
          </Pressable>
        );
      })}
    </View>
  );
};

export default BadgeGroup;
