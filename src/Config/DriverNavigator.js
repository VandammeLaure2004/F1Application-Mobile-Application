// DriverNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from '../Screens/DetailScreen';
import DriverScreen from '../Screens/DriverScreen';

const FeedStack = createStackNavigator();

export const DriverNavigator = () => (
  <FeedStack.Navigator>
    <FeedStack.Screen name="Driver" component={DriverScreen} />
    <FeedStack.Screen name="Detail" component={DetailScreen} />
  </FeedStack.Navigator>
);
