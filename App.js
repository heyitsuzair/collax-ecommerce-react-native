import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import tw from 'twrnc';
import {AppNavigator} from './src/navigation';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={tw`flex-1`}>
          <StatusBar backgroundColor={'#6366fa'} />
          <NavigationContainer>
            <AppNavigator />
            <FlashMessage position="top" />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;
