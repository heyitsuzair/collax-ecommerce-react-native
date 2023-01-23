import {View} from 'react-native';
import React from 'react';
import {InputPlain} from '../../../components/commons';
import tw from 'twrnc';

const PersonalDetails = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  return (
    <View style={tw`gap-4`}>
      <InputPlain
        placeholder="Enter Your First Name"
        value={values.first_name}
        onChange={handleChange('first_name')}
        onBlur={handleBlur('first_name')}
        error={errors.first_name && touched.first_name}
        errorText={errors.first_name}
      />
      <InputPlain
        placeholder="Enter Your Last Name"
        value={values.last_name}
        onChange={handleChange('last_name')}
        onBlur={handleBlur('last_name')}
        error={errors.last_name && touched.last_name}
        errorText={errors.last_name}
      />
      <InputPlain
        placeholder="Email Address"
        value={values.email}
        onChange={handleChange('email')}
        onBlur={handleBlur('email')}
        error={errors.email && touched.email}
        errorText={errors.email}
        keyboardType="email-address"
      />
      <InputPlain
        placeholder="Phone Number"
        value={values.phone_no}
        onChange={handleChange('phone_no')}
        onBlur={handleBlur('phone_no')}
        error={errors.phone_no && touched.phone_no}
        errorText={errors.phone_no}
        keyboardType="numeric"
      />
      <InputPlain
        placeholder="Company Name"
        value={values.company}
        onChange={handleChange('company')}
        onBlur={handleBlur('company')}
        error={errors.company && touched.company}
        errorText={errors.company}
      />
    </View>
  );
};

export default PersonalDetails;
