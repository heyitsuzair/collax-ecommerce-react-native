import {Linking, Pressable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconRounded, Text} from '../../../components/commons';
import tw from 'twrnc';

const Intro = () => {
  return (
    <View style={tw`gap-5`}>
      <View style={tw`gap-2`}>
        <Text
          text="Muhammad Uzair"
          classes="text-black text-2xl"
          isDmSans="Bold"
        />
        <Text
          text="Software Engineer"
          classes="text-sm text-indigo-500"
          isDmSans="Medium"
        />
      </View>
      <Text
        text="I Am A Software Engineer Having Experience Of Over 2 Years In Web And Mobile App Development Industry Including WordPress Development, Designing And Many More...."
        classes="text-sm text-gray-400"
        isDmSans="Regular"
      />
      <View style={tw`gap-4`}>
        <View style={tw`flex-row gap-3`}>
          <Text
            text="Expertise:"
            classes="text-base text-black"
            isDmSans="Bold"
          />
          <Text
            text="Web/Mobile/WordPress"
            classes="text-base text-gray-400"
            isDmSans="Regular"
          />
        </View>
        <View style={tw`flex-row gap-3`}>
          <Text
            text="Experience:"
            classes="text-base text-black"
            isDmSans="Bold"
          />
          <Text
            text="2 Years"
            classes="text-base text-gray-400"
            isDmSans="Regular"
          />
        </View>
        <View style={tw`flex-row gap-3`}>
          <Text text="Email:" classes="text-base text-black" isDmSans="Bold" />
          <Pressable
            onPress={() =>
              Linking.openURL('mailto:uzairdeveloper354123@gmail.com')
            }>
            <Text
              text="uzairdeveloper354123@gmail.com"
              classes="text-base text-gray-400"
              isDmSans="Regular"
            />
          </Pressable>
        </View>
        <View style={tw`flex-row gap-3`}>
          <Text text="Github:" classes="text-base text-black" isDmSans="Bold" />
          <Pressable
            onPress={() => Linking.openURL('https://github.com/heyitsuzair')}>
            <Text
              text="heyitsuzair"
              classes="text-base text-gray-400"
              isDmSans="Regular"
            />
          </Pressable>
        </View>
        <View style={tw`flex-row mt-4 gap-3`}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              Linking.openURL('https://www.facebook.com/uzair.354123')
            }>
            <IconRounded icon="facebook" color="white" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => Linking.openURL('https://www.github.com/github')}>
            <IconRounded icon="github" color="white" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/uzair-dev')
            }>
            <IconRounded icon="linkedin" color="white" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              Linking.openURL('https://www.instagram.com/codewith_uzair')
            }>
            <IconRounded icon="instagram" color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Intro;
