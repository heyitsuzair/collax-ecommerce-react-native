import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CardProduct, SpinnerLarge, Text} from '../../../components/commons';
import tw from 'twrnc';
import {getProducts} from '../../../functions/products';
import ListFooterComponent from './ListFooterComponent';
import NetInfo from '@react-native-community/netinfo';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  /**
   * State To Check Internet Connection
   */
  const [isConnected, setIsConnected] = useState(false);

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

  /**
   * @function getNetInfo
   *
   * Checks For Network Connectivity
   *
   * @true call "fetchProducts()" function and set "isConnected" state to true
   *
   * @false set "isConnected" state to false  and set "isLoading" state to false
   */
  const getNetInfo = () => {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setIsConnected(true);
        fetchProducts();
      } else {
        setIsConnected(false);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    getNetInfo();
    //eslint-disable-next-line
  }, []);

  if (isConnected) {
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
            ListFooterComponent={
              <ListFooterComponent meta={productsData.meta} />
            }
            //Setting the number of column
            numColumns={2}
            key={'_'}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    );
  } else {
    return (
      <View style={tw`bg-white flex-1 gap-4 items-center justify-center`}>
        {isLoading ? (
          <SpinnerLarge />
        ) : (
          <>
            <Text
              text="Seems Like You Are Currently Offline. Please Check Your Network Connection!"
              classes="text-center"
            />
          </>
        )}
      </View>
    );
  }
};

export default HomeScreen;
