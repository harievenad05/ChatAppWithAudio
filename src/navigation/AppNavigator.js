import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../components/Main';
import Chat from '../components/Chat';

const Stack = createStackNavigator();

const AppNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
