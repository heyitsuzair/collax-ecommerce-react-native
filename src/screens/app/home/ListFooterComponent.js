import {View} from 'react-native';
import React from 'react';
import {IconPlain, SpinnerSmall, Text} from '../../../components/commons';
import tw from 'twrnc';

const ListFooterComponent = ({meta}) => {
  const hasMore = meta.pagination.page !== meta.pagination.pageCount;
  return hasMore ? (
    <View style={tw`mt-2 mb-12`}>
      <SpinnerSmall />
    </View>
  ) : (
    <>
      <View style={tw`flex flex-row justify-center mt-4 mb-14 items-center`}>
        <View
          style={tw`mx-2 -ml-2 border-4 border-indigo-400 p-2 rounded-full`}>
          <IconPlain icon="check" color="#6366fa" size={20} />
        </View>
        <Text
          text="
        You're All Caught Up"
          isDmSans="Bold"
          classes="text-black -ml-2"
        />
      </View>
    </>
  );
};

export default ListFooterComponent;
