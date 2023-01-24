import {ScrollView, Keyboard} from 'react-native';
import React, {useState, useEffect} from 'react';
import StepperUI from './StepperUI';
import tw from 'twrnc';
import {useFormik} from 'formik';
import {CheckoutFormSchema} from '../../../yupSchemas';
import PlaceOrder from './PlaceOrder';
import NetInfo from '@react-native-community/netinfo';
import {useSelector} from 'react-redux';
import {Routes} from '../../../config';

const CheckoutScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  /**
   * State To Check Internet Connection
   */
  const [isConnected, setIsConnected] = useState(false);

  /**
   * Redux Helper Functions
   */
  const cart = useSelector(store => store.cart);

  /**
   * @var initialValues Form Initial Values
   */

  const initialValues = {
    country: 'Pakistan',
    first_name: '',
    last_name: '',
    company: '',
    street_address: '',
    apartment_no: '',
    city: '',
    province: '',
    zip: '',
    email: '',
    phone_no: '',
    method: 'COD',
    card_no: '',
    card_cvc: '',
    expiry_year: '',
    expiry_month: '',
  };

  /**
   * @function onSubmit When Someone Submits Checkout Form, this function gets triggered
   */

  const onSubmit = async (values, actions) => {
    /**
     * Start Loading
     */
    setIsLoading(true);
    // const data = {
    //   ...values,
    //   total: cart.total + 40,
    //   order_items: cart.cartItems,
    // };

    // const isOrderAdded = await placeOrder(data);

    // if (isOrderAdded.error) {
    //   ErrorMessage(isOrderAdded.msg);
    // } else {
    //   /**
    //    * Clear Cart
    //    */
    //   dispatch(clearCart());
    //   SuccessMessage(isOrderAdded.msg);

    // }
    actions.resetForm();

    setIsLoading(false);
  };

  /**
   * Formik Configuration
   */
  const {values, touched, errors, handleBlur, handleChange, handleSubmit} =
    useFormik({
      validationSchema: CheckoutFormSchema,
      initialValues,
      onSubmit,
    });

  const StepperUIProps = {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  };

  /**
   * @function checkIfKeyboardVisible
   *
   * Checks if the keyboard is open or not
   *
   * @true setIsKeyboardVisible to true
   *
   * @false setIsKeyboardVisible to false
   */

  const checkIfKeyboardVisible = () => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false); // or some other action
      },
    );
  };

  /**
   * @function getNetInfo
   *
   * Checks For Network Connectivity
   *
   * @true set "isConnected" state to true
   *
   * @false set "isConnected" state to false
   */
  const getNetInfo = () => {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    });
  };

  useEffect(() => {
    /**
     * Check If Cart Is Empty Navigate It To Home
     */
    if (cart.cartItems.length < 1) {
      navigation.navigate(Routes.homeScreen, {
        screen: 'Home',
      });
    }
    getNetInfo();
    checkIfKeyboardVisible();

    //eslint-disable-next-line
  }, [cart]);

  /**
   * Props For PlaceOrder Component
   */
  const placeOrderProps = {
    isLoading,
    onPress: handleSubmit,
    isConnected,
  };

  return (
    <>
      <ScrollView
        style={tw`bg-white h-full`}
        showsVerticalScrollIndicator={false}>
        <StepperUI {...StepperUIProps} />
      </ScrollView>
      {!isKeyboardVisible && <PlaceOrder {...placeOrderProps} />}
    </>
  );
};

export default CheckoutScreen;
