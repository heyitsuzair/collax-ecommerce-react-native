import {View, FlatList} from 'react-native';
import React from 'react';
import {CardProduct} from '../../../components/commons';
import tw from 'twrnc';

const HomeScreen = ({navigation}) => {
  return (
    <View style={tw`bg-white`}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={tw`p-5`}
        data={[{name: 'uzair'}, {name: 'ahmed'}, {name: 'ali'}]}
        renderItem={({item}) => <CardProduct />}
        //Setting the number of column
        numColumns={2}
        key={'_'}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default HomeScreen;
