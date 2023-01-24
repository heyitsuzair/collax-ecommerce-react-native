import {ScrollView, View} from 'react-native';
import React from 'react';
import {BreadcrumbScreen} from '../../../components/commons';
import tw from 'twrnc';
import Pic from './Pic';
import Details from './Details';
import Form from './Form';

const ContactScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={tw`bg-white`}>
      <BreadcrumbScreen text="Contact" />
      <View style={tw`my-16 mx-auto w-[86%] flex-1`}>
        <Pic />
        <Details />
        <Form />
      </View>
    </ScrollView>
  );
};

export default ContactScreen;
