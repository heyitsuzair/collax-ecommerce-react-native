import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#6366fa'} />
    </SafeAreaView>
  );
}

export default App;
