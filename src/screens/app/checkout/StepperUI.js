import React from 'react';
import {View} from 'react-native';
import tw from 'twrnc';
import PersonalDetails from './PersonalDetails';
import BillingDetails from './BillingDetails';
import PaymentMethod from './PaymentMethod';
import OrderInfo from './OrderInfo';
import {Text} from '../../../components/commons';
const StepperUI = ({handleBlur, handleChange, errors, touched, values}) => {
  /**
   * Billing Details Components Props
   */
  const BillingDetailsProps = {
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
  };

  /**
   * Your Order Component Props
   */
  const PersonalDetailsProps = {
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
  };

  /**
   * Payment Method Component Props
   */
  const PaymentMethodProps = {
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
  };

  const content = [
    <PersonalDetails {...PersonalDetailsProps} />,
    <BillingDetails {...BillingDetailsProps} />,
    <PaymentMethod {...PaymentMethodProps} />,
    <OrderInfo />,
  ];

  return (
    <View style={tw`mt-5 mx-4 gap-7`}>
      <View>
        <Text
          text="Personal Details"
          classes="text-black text-2xl mb-4 border-b-2 border-gray-200 pb-2 mb-6"
          isDmSans="Bold"
        />
        {content[0]}
      </View>
      <View>
        <Text
          text="Billing Details"
          classes="text-black text-2xl mb-4 border-b-2 border-gray-200 pb-2 mb-6"
          isDmSans="Bold"
        />
        {content[1]}
      </View>
      <View>
        <Text
          text="Payment Methods"
          classes="text-black text-2xl mb-4 border-b-2 border-gray-200 pb-2 mb-6"
          isDmSans="Bold"
        />
        {content[2]}
      </View>
      <View>
        <Text
          text="Your Order"
          classes="text-black text-2xl mb-4 border-b-2 border-gray-200 pb-2 mb-6"
          isDmSans="Bold"
        />
        {content[3]}
      </View>
    </View>
  );
};

export default StepperUI;
