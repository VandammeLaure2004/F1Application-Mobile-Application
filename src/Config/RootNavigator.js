import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import Detail from '../Screens/DetailScreen';

const RootStack = createStackNavigator();

export const RootNavigator = () => {
    return (
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Detail" component={Detail} />
      </RootStack.Navigator>
    );
  };