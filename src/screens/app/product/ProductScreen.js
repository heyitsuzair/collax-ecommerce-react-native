import {ScrollView, Image, Dimensions, View} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {Text} from '../../../components/commons';
import BottomBar from './BottomBar';
import Details from './Details';
import Variants from './Variants';

const ProductScreen = ({route}) => {
  /**
   * Incoming Params
   */
  const {slug} = route.params;

  /**
   * Product Picture
   */
  const PRODUCT_IMAGE = require('../../../img/contact-1.jpg');

  /**
   * Image Height
   */
  const HEIGHT = Dimensions.get('screen').height / 2.3;

  /**
   * State For Selected Color
   */
  const [selectedColor, setSelectedColor] = useState(0);
  /**
   * State For Selected Model
   */
  const [selectedSize, setSelectedSize] = useState(0);

  const colors = ['RED', 'GREEN', 'BLUE'];
  const sizes = ['S', 'L', 'XL'];

  /**
   * Variant Props
   */
  const variantProps = {
    colors,
    sizes,
    selectedColor,
    selectedSize,
    setSelectedColor,
    setSelectedSize,
  };

  return (
    <>
      <ScrollView style={tw`bg-white`}>
        <Image
          source={PRODUCT_IMAGE}
          resizeMode="cover"
          style={tw`w-full h-${HEIGHT}px`}
        />
        <View style={tw`m-4 gap-6`}>
          <Details />
          <Variants {...variantProps} />
        </View>
      </ScrollView>
      <BottomBar />
    </>
  );
};

export default ProductScreen;
