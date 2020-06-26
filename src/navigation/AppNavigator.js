import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../components/Main';
import Chat from '../components/Chat';

const Stack = createStackNavigator();

const defaultStackNavOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#434A54',
  },
  headerTitleAlign: 'center',
};

const AppNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={({route, navigation}) => ({
          headerShown: false,
          title: 'Home',
        })}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({route, navigation}) => ({
          title: route.params.name,
          headerBackTitle: false,
          // headerTintColor: ''
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
