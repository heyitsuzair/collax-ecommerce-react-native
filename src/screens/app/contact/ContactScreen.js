import {ScrollView, View} from 'react-native';
import React from 'react';
import {BreadcrumbScreen} from '../../../components/commons';
import tw from 'twrnc';
import Pic from './Pic';
import Details from './Details';
import Form from './Form';

const ContactScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tw`flex-1 bg-white`}>
      <BreadcrumbScreen text="Contact" />
      <View style={tw`w-[86%] my-16 mx-auto`}>
        <Pic />
        <Details />
        <Form />
      </View>
    </ScrollView>
  );
};

export default ContactScreen;
