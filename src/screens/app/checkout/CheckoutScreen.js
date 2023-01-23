import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import StepperUI from './StepperUI';
import tw from 'twrnc';
import {useFormik} from 'formik';
import {CheckoutFormSchema} from '../../../yupSchemas';
import PlaceOrder from './PlaceOrder';

const CheckoutScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  /**
   * @var initialValues Form Initial Values
   */

  const initialValues = {
    country: '',
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
    alert('hello');
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

    /**
     * Stop Loading
     */
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

  return (
    <>
      <ScrollView style={tw`bg-white h-full`}>
        <StepperUI {...StepperUIProps} />
      </ScrollView>
      <PlaceOrder isLoading={isLoading} onPress={handleSubmit} />
    </>
  );
};

export default CheckoutScreen;
