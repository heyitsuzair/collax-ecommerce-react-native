import {View} from 'react-native';
import React from 'react';
import {BadgeGroup, Text} from '../../../components/commons';
import tw from 'twrnc';

const Variants = ({
  colors,
  sizes,
  selectedColor,
  selectedSize,
  setSelectedColor,
  setSelectedSize,
}) => {
  return (
    <View style={tw`gap-5`}>
      <View>
        <Text text="Colors" isDmSans="Medium" classes="text-black mb-3" />
        <BadgeGroup
          badgesArray={colors ? colors : []}
          activeBadge={selectedColor}
          onBadgeClick={setSelectedColor}
        />
      </View>
      <View>
        <Text text="Sizes" isDmSans="Medium" classes="text-black mb-3" />
        <BadgeGroup
          badgesArray={sizes ? sizes : []}
          activeBadge={selectedSize}
          onBadgeClick={setSelectedSize}
        />
      </View>
    </View>
  );
};

export default Variants;
