import {ScrollView, View} from 'react-native';
import React from 'react';
import {BreadcrumbScreen} from '../../../components/commons';
import tw from 'twrnc';
import Me from './Me';
import Intro from './Intro';

const AboutScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={tw`flex-1 bg-white`}>
      <BreadcrumbScreen text="Muhammad Uzair" />
      <View style={tw`mt-12`}>
        <Me />
        <View style={tw`w-5/6 my-6 mx-auto`}>
          <Intro />
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;
