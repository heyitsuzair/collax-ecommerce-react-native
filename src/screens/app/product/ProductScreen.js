import {ScrollView, Image, Dimensions, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import tw from 'twrnc';
import BottomBar from './BottomBar';
import Details from './Details';
import Variants from './Variants';
import {getProduct} from '../../../functions/products';
import {SpinnerLarge} from '../../../components/commons';

const ProductScreen = ({route}) => {
  const [product, setProduct] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  /**
   * Incoming Params
   */
  const {slug} = route.params;

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

  /**
   * Variant Props
   */
  const variantProps = {
    colors: product.colors,
    sizes: product.sizes,
    selectedColor,
    selectedSize,
    setSelectedColor,
    setSelectedSize,
  };

  /**
   * @function fetchProduct
   *
   * Fetch Product information from API
   */
  const fetchProduct = async () => {
    setIsLoading(true);
    const product = await getProduct(slug);
    setProduct(product.data[0].attributes);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProduct();
    //eslint-disable-next-line
  }, []);

  return (
    <View style={tw`flex-1 bg-white justify-center`}>
      {isLoading ? (
        <SpinnerLarge />
      ) : (
        <>
          <ScrollView style={tw`bg-white`}>
            <Image
              source={{uri: product.product_image.data.attributes.url}}
              resizeMode="cover"
              style={tw`w-full h-${HEIGHT}px`}
            />
            <View style={tw`m-4 gap-6`}>
              <Details {...product} />
              <Variants {...variantProps} />
            </View>
          </ScrollView>
          <BottomBar />
        </>
      )}
    </View>
  );
};

export default ProductScreen;
