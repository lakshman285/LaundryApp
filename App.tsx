import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import store from './src/store';
import StackNavigator from './src/navigations/StackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator/>
    </Provider>
  );
};

export default App;
