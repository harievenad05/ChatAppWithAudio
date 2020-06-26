import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
