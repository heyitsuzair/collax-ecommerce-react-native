import {View} from 'react-native';
import React from 'react';
import {InputPlain, PaperSelectInput} from '../../../components/commons';
import tw from 'twrnc';
import {Countries} from '../../../config';

const BillingDetails = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  return (
    <View style={tw`gap-4`}>
      <PaperSelectInput
        value={values.country}
        error={errors.country && touched.country}
        errorText={errors.country}
        onSelect={handleChange('country')}
        onBlur={handleBlur('country')}
        list={Countries}
      />
      <InputPlain
        placeholder="Enter Your Street Address"
        value={values.street_address}
        onChange={handleChange('street_address')}
        onBlur={handleBlur('street_address')}
        error={errors.street_address && touched.street_address}
        errorText={errors.street_address}
      />
      <InputPlain
        placeholder="Enter Your Apartment No"
        value={values.apartment_no}
        onChange={handleChange('apartment_no')}
        onBlur={handleBlur('apartment_no')}
        error={errors.apartment_no && touched.apartment_no}
        errorText={errors.apartment_no}
      />
      <InputPlain
        placeholder="Enter Your City"
        value={values.city}
        onChange={handleChange('city')}
        onBlur={handleBlur('city')}
        error={errors.city && touched.city}
        errorText={errors.city}
      />
      <InputPlain
        placeholder="Enter Your State/Province"
        value={values.province}
        onChange={handleChange('province')}
        onBlur={handleBlur('province')}
        error={errors.province && touched.province}
        errorText={errors.province}
      />
      <InputPlain
        placeholder="Enter Your ZIP/Postcode"
        value={values.zip}
        onChange={handleChange('zip')}
        onBlur={handleBlur('zip')}
        error={errors.zip && touched.zip}
        errorText={errors.zip}
        keyboardType="numeric"
      />
    </View>
  );
};

export default BillingDetails;
