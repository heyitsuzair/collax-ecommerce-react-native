import {View} from 'react-native';
import React from 'react';
import {InputPlain, RadioGroup} from '../../../components/commons';
import {PaymentMethodRadios} from '../../../config';
import tw from 'twrnc';

const PaymentMethod = ({values, errors, touched, handleChange, handleBlur}) => {
  /**
   * Radio Group Props
   */
  const RadioGroupProps = {
    radios: PaymentMethodRadios,
    checkedValue: values.method,
    error: errors.method && touched.method,
    errorText: errors.method,
    onPress: handleChange('method'),
  };

  return (
    <View>
      <RadioGroup {...RadioGroupProps} />
      {values.method !== 'COD' && (
        <View style={tw`mt-4 gap-4`}>
          <InputPlain
            placeholder="Card Number"
            value={values.card_no}
            onChange={handleChange('card_no')}
            onBlur={handleBlur('card_no')}
            error={errors.card_no && touched.card_no}
            errorText={errors.card_no}
          />
          <InputPlain
            placeholder="Card CVC"
            value={values.card_cvc}
            onChange={handleChange('card_cvc')}
            onBlur={handleBlur('card_cvc')}
            error={errors.card_cvc && touched.card_cvc}
            errorText={errors.card_cvc}
          />
          <InputPlain
            placeholder="Expiry Month"
            value={values.expiry_month}
            onChange={handleChange('expiry_month')}
            onBlur={handleBlur('expiry_month')}
            error={errors.expiry_month && touched.expiry_month}
            errorText={errors.expiry_month}
          />
          <InputPlain
            placeholder="Expiry Year"
            value={values.expiry_year}
            onChange={handleChange('expiry_year')}
            onBlur={handleBlur('expiry_year')}
            error={errors.expiry_year && touched.expiry_year}
            errorText={errors.expiry_year}
          />
        </View>
      )}
    </View>
  );
};

export default PaymentMethod;
