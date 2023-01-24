import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CardProduct, SpinnerLarge} from '../../../components/commons';
import tw from 'twrnc';
import {getProducts} from '../../../functions/products';
import ListFooterComponent from './ListFooterComponent';

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  const [productsData, setProductsData] = useState([]);

  /**
   * @function fetchNextData Fetch Data When Visitor Reaches FlatList End
   */
  const fetchNextData = async () => {
    const pageNo = productsData.meta.pagination.page + 1;
    const products = await getProducts(pageNo);

    const newData = {
      data: [...productsData.data, ...products.data],
      meta: products.meta,
    };
    setProductsData(newData);
  };

  /**
   * @function fetchProducts
   *
   * Fetch Products From API
   */
  const fetchProducts = async () => {
    setIsLoading(true);
    const products = await getProducts(1);
    setProductsData(products);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={tw`bg-white flex-1 justify-center`}>
      {isLoading ? (
        <SpinnerLarge />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          onEndReached={() => {
            const hasMore =
              productsData.meta.pagination.page !==
              productsData.meta.pagination.pageCount;
            if (hasMore) {
              fetchNextData();
            }
          }}
          onEndReachedThreshold={0.3}
          style={tw`p-5`}
          data={productsData.data}
          renderItem={({item}) => <CardProduct {...item.attributes} />}
          ListFooterComponent={<ListFooterComponent meta={productsData.meta} />}
          //Setting the number of column
          numColumns={2}
          key={'_'}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default HomeScreen;
