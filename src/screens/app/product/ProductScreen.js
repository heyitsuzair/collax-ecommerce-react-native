import {ScrollView, Image, Dimensions, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import tw from 'twrnc';
import BottomBar from './BottomBar';
import Details from './Details';
import Variants from './Variants';
import {getProduct} from '../../../functions/products';
import {SpinnerLarge, Text} from '../../../components/commons';
import {useDispatch, useSelector} from 'react-redux';
import {Routes} from '../../../config';
import {addToCart, buyNow, clearCart} from '../../../redux/slices/cart';
import NetInfo from '@react-native-community/netinfo';

const ProductScreen = ({route, navigation}) => {
  const [product, setProduct] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

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
  const [selectedColor, setSelectedColor] = useState(null);
  /**
   * State For Selected Model
   */
  const [selectedSize, setSelectedSize] = useState(null);

  /**
   * Variant Props
   */
  const variantProps = {
    colors: product.attributes ? product.attributes.colors : [],
    sizes: product.attributes ? product.attributes.sizes : [],
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
    setProduct(product.data[0]);
    isAlreadyInCart(product.data[0]);
    setIsLoading(false);
  };

  /**
   * State For Is In Cart
   */
  const [isInCart, setIsInCart] = useState(false);

  /**
   * Redux Helper Functions
   */
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart);

  /**
   * @function onAddToCart Triggers When Someone Click On "Add To Cart"
   */
  const onAddToCart = () => {
    const data = {
      product_id: product.id,
      product_info: {
        product_image: product.attributes.product_image.data.attributes.url,
        product_title: product.attributes.product_title,
        slug: product.attributes.slug,
        price: product.attributes.price,
        product_description: product.attributes.product_description,
        available_qty: product.attributes.available_qty,
      },
      req_qty: 1,
      size: product.attributes.sizes[selectedSize],
      color: product.attributes.colors[selectedColor],
    };
    /**
     * Trigger "addToCart" function of cart slice
     */
    dispatch(addToCart(data));
    setIsInCart(true);
  };

  /**
   * @function onBuyNow Triggers When Someone Click On "Buy Now"
   */
  const onBuyNow = () => {
    const data = {
      product_id: product.id,
      product_info: {
        product_image: product.attributes.product_image.data.attributes.url,
        product_title: product.attributes.product_title,
        slug: product.attributes.slug,
        price: product.attributes.price,
        product_description: product.attributes.product_description,
        available_qty: product.attributes.available_qty,
      },
      req_qty: 1,
      size: product.attributes.sizes[selectedSize],
      color: product.attributes.colors[selectedColor],
    };
    /**
     * Trigger "clearCart" function of cart slice
     */
    dispatch(clearCart());
    /**
     * Trigger "buyNow" function of cart slice
     */
    dispatch(buyNow(data));

    navigation.navigate(Routes.checkoutScreen);
  };

  /**
   * @function isAlreadyInCart Check if the product is already in cart
   */
  const isAlreadyInCart = product => {
    /**
     * Find By ID
     */
    const isInCart = cart.cartItems.find(
      item => item.product_id === product.id,
    );
    if (isInCart) {
      setIsInCart(true);
      /**
       * Find The Selected Color And Make Its Badge Active
       */
      const selectedColor = product.attributes.colors.findIndex(
        color => color === isInCart.color,
      );
      setSelectedColor(selectedColor);
      /**
       * Find The Selected Size And Make Its Badge Active
       */
      const selectedSize = product.attributes.sizes.findIndex(
        size => size === isInCart.size,
      );
      setSelectedSize(selectedSize);
    } else {
      setSelectedColor(0);
      setSelectedSize(0);
      setIsInCart(false);
    }
  };

  /**
   * Bottom Bar Props
   */
  const BottomBarProps = {
    onAddToCart,
    isInCart,
    onBuyNow,
  };

  /**
   * @function getNetInfo
   *
   * Checks For Network Connectivity
   *
   * @true call "fetchProduct()" function and set "isConnected" state to true
   *
   * @false set "isConnected" state to false and set "isLoading" state to false
   */
  const getNetInfo = () => {
    setIsLoading(true);
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setIsConnected(true);
        fetchProduct();
      } else {
        setIsConnected(false);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    getNetInfo();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    /**
     * Check if product is already in cart if user is connected to internet
     */
    isConnected && isAlreadyInCart(product);
    //eslint-disable-next-line
  }, [cart]);

  if (isConnected) {
    return (
      <View style={tw`flex-1 bg-white justify-center`}>
        {isLoading ? (
          <SpinnerLarge />
        ) : (
          <>
            <ScrollView style={tw`bg-white`}>
              <Image
                source={{
                  uri: product.attributes.product_image.data.attributes.url,
                }}
                resizeMode="cover"
                style={tw`w-full h-${HEIGHT}px`}
              />
              <View style={tw`m-4 gap-6`}>
                <Details {...product.attributes} />
                <Variants {...variantProps} />
              </View>
            </ScrollView>
            <BottomBar {...product.attributes} {...BottomBarProps} />
          </>
        )}
      </View>
    );
  } else {
    return (
      <View style={tw`bg-white flex-1 gap-4 items-center justify-center`}>
        {isLoading ? (
          <SpinnerLarge />
        ) : (
          <>
            <Text
              text="Seems Like You Are Currently Offline. Please Check Your Network Connection!"
              classes="text-center px-5"
            />
          </>
        )}
      </View>
    );
  }
};

export default ProductScreen;
