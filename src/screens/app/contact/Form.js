import {View} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {
  ButtonPlain,
  ErrorMessage,
  InputPlain,
  SpinnerSmall,
  SuccessMessage,
  Text,
  TextareaPlain,
} from '../../../components/commons';
import {ContactFormSchema} from '../../../yupSchemas';
import {useFormik} from 'formik';
import {sendMessage} from '../../../functions/contact';

const Form = () => {
  /**
   * State For Loading On Form Submission
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * @var initialValues Form Initial Values
   */

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  /**
   * @function onSubmit When Someone Submits Contact Form, this function gets triggered
   */

  const onSubmit = async (values, actions) => {
    /**
     * Start Loading
     */
    setIsLoading(true);

    const data = {data: values};

    const isMessageSent = await sendMessage(data);
    if (isMessageSent.error) {
      ErrorMessage(isMessageSent.error.message);
      setIsLoading(false);
      return;
    }
    SuccessMessage('We Will Contact You Soon!');
    setIsLoading(false);
    actions.resetForm();
  };

  /**
   * Formik Configuration
   */
  const {handleSubmit, values, errors, touched, handleBlur, handleChange} =
    useFormik({
      validationSchema: ContactFormSchema,
      initialValues,
      onSubmit,
    });
  return (
    <View style={tw`mt-12`}>
      <Text
        text="Let's Talk..."
        classes="text-4xl text-black"
        isDmSans="Bold"
      />
      <View style={tw`mt-5 gap-4`}>
        <InputPlain
          placeholder="Enter Your Name"
          value={values.name}
          onChange={handleChange('name')}
          onBlur={handleBlur('name')}
          error={errors.name && touched.name}
          errorText={errors.name}
        />
        <InputPlain
          placeholder="Enter Your Email Address"
          value={values.email}
          onChange={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email && touched.email}
          errorText={errors.email}
          keyboardType="email-address"
        />
        <TextareaPlain
          placeholder="Enter Your Message"
          value={values.message}
          onChange={handleChange('message')}
          onBlur={handleBlur('message')}
          error={errors.message && touched.message}
          errorText={errors.message}
        />
        <ButtonPlain
          text="Send Message"
          onPress={!isLoading && handleSubmit}
          colorBtn="bg-yellow-300"
          colorText="text-black"
          isLoading={isLoading}
          colorLoading="black"
        />
      </View>
    </View>
  );
};

export default Form;
