import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import tw from 'twrnc';
import {AppNavigator} from './src/navigation';
import FlashMessage from 'react-native-flash-message';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <StatusBar backgroundColor={'#6366fa'} />
      <NavigationContainer>
        <AppNavigator />
        <FlashMessage position="top" />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
